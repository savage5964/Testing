$(document).ready(function() {
    
    $('#fechaInicio').w2field('date');
    $('#fechaFin').w2field('date');
    
    $('#borrar-form-buscar-exclusividad').on('click', function(e){
        e.preventDefault();
        $(this).parent().form('clear');
    }); 
       
    
     //Tabla exclusividad
    $('#grid-exclusividad').w2grid({
        name: 'grid-exclusividad',
        show: {
            toolbar: true,
            footer: true,
            toolbarReload: false,
            toolbarColumns: false,
            toolbarAdd: true,
            toolbarDelete: true,
            toolbarSave: false,
            toolbarEdit: true,
            lineNumbers: true
        }, toolbar: {
            items: [
                {type: 'button', id: 'item-editar', caption: 'Editar', icon: 'w2ui-icon-pencil', disabled: false}
            ],
            onClick: function(target, data) {
                if (target === 'item-editar') {
                    editarExclusividad();
                }
            }
        },
        columns: [
            {field: 'recid', caption: 'Id Exclusividad', size: '23%', sortable: true, resizable: true},
            {field: 'cliente', caption: 'Cliente', size: '23%', sortable: true, resizable: true},
            {field: 'periodo', caption: 'Periodo', size: '23%', sortable: true, resizable: true},
            {field: 'estado', caption: 'Estado', size: '23%', sortable: true, resizable: true}
        ],
        sortData: [{field: 'recid', direction: 'ASC'}],
        records: [
          
        ]
    });


});


function obtenerExclusividadesGridDto(){
    $.ajax({
        type: 'POST',
        url: "exclusividad/ajax/obtenerExclusividades",
        data: {
            cliente: $('#cliente').val(),
            fechaInicio: $('#fechaInicio').val(),
            fechaFin: $('#fechaFin').val(),
            pieza: $('#pieza').val(),
            estado: $('#estado').val()
        },
        async: false,
        cache: false,
        success: function(listExclusividadesGridDto) {  
            w2ui['grid-exclusividad'].clear();
            w2ui['grid-exclusividad'].add(listExclusividadesGridDto);
        },
        complete: function() {
            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Ocurrió un problema al buscar Exclusividades. " + errorThrown + ", " + jqXHR + ", " + textStatus);
        }
    });  
}

function editarExclusividad() {
    $.ajax({
        type: 'POST',
        url: "exclusividad/ajax/editarExclusividades",
        data: {
            idExclusividad: 2
        },
        async: false,
        cache: false,
        success: function(exclusividadDto) {  
            limpiarCampos();
            $('#idEstado').text(exclusividadDto.idEstado);
            $('#idExclusividad').text(exclusividadDto.idExclusividad);
            $('#fechaRegistro').text(exclusividadDto.fechaRegistro);
            $('#fechaAutorizacion').text(exclusividadDto.fechaAutorizacion);
            w2ui['grid-piezas-exclusividad'].add(exclusividadDto.exclusividadPiezasGridDto);
            for (var x = 0; x <= exclusividadDto.exclusividadClienteDto.length-1; x++) {
                agregarClienteExclusividad(exclusividadDto.exclusividadClienteDto[x]);
            }
            pintarPasos();
        },
        complete: function() {
            $('#buscarExclusividad').modal('hide');
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Ocurrió un problema al Generar el Reporte. " + errorThrown + ", " + jqXHR + ", " + textStatus);
        }
    });
    
}
