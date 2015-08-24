var x = 0;
$(document).ready(function() {

    pintarPasos();//Pinta los pasos de Guardad, Enviar auotirzar, autorizado
    
    $('.menu .item').tab({
        onVisible: function() {
            w2ui['grid-piezas-exclusividad'].resize();
        }
    });

    $('#tab-cliente').tab({
        onVisible: function() {
            $('.form-exclusividad-cliente').each(function() {
                var $this = $(this);
                var bla = $this.find('.grid-exclusividad-cliente');
                var grid = w2ui[bla.attr('id')];

                grid.resize();
            });
        }
    });

    $('#mas').popup({
        popup: $('#popup'),
        on: 'click'
    });

    $('main').on('click', 'a.label.borrar', function() {
        $(this).parent().remove();
    });

    $('main').on('focus', '.fechaInicio', function() {
        $(this).w2field('date');
    });

    $('main').on('focus', '.fechaFin', function() {
        $(this).w2field('date');
    });

    $('.ui.dropdown').dropdown();

    agregarArticuloExclusividad();//funcion que al seleccionar articulos los agrega al grid de piezas
    agregarKitExclusividad();//funcion que al seleccionar kit los agrega al grid de piezas
    nuevoRegistro();//funcion para limpiar la pantalla
    enviarAutorizarExclusividad();//funcion que envía el registro a autorizar


    // tabla 
    $('#grid-piezas-exclusividad').w2grid({
        name: 'grid-piezas-exclusividad',
        show: {
            toolbar: true,
            footer: true,
            toolbarReload: false,
            toolbarColumns: false,
            toolbarDelete: true,
            toolbarSave: false,
            lineNumbers: true
        }, toolbar: {
            items: [
                {type: 'spacer'},
                {type: 'button', id: 'item-agregar-articulo', caption: 'Agregar Artículo', icon: 'w2ui-icon-plus', disabled: false},
                {type: 'break'},
                {type: 'button', id: 'item-agregar-kit', caption: 'Agregar Kit', icon: 'w2ui-icon-plus', disabled: false},
                {type: 'break'},
                {type: 'button', id: 'item-ver-detalle', caption: 'Ver Detalle', icon: 'w2ui-icon-pencil', disabled: false}
            ],
            onClick: function(target, data) {
                if (target === 'item-agregar-articulo') {
                    obtenerModalArticulo();
                } else if (target === 'item-agregar-kit') {
                    obtenerModalKit();
                }
            }
        },
        columns: [
            {field: 'recid', caption: 'ID Artículo', size: '23%', sortable: true, resizable: true},
            {field: 'descripcionCorta', caption: 'Descripcion', size: '23%', sortable: true, resizable: true},
            {field: 'cantidad', caption: 'Cantidad', size: '23%', sortable: true, resizable: true, editable: {type: 'text'}},
            {field: 'tipoPieza', caption: 'Tipo pieza', size: '23%', sortable: true, resizable: true},
            {field: 'check', caption: 'Ilimitado', size: '10%', sortable: false, resizable: true,
                editable: {type: 'checkbox'}
            }
        ],
        sortData: [{field: 'recid', direction: 'ASC'}],
        records: [
        ], onDelete: function(event) {
            var grid = w2ui["grid-piezas-exclusividad"];
            var recID = grid.getSelection();
            grid.remove(recID);
            actualizarGridsExclusividadCliente();
        }
    });

    //Tabla artÃ­culo
    $('#grid-articulo').w2grid({
        name: 'grid-articulo',
        show: {
            toolbar: true,
            footer: true,
            toolbarReload: false,
            toolbarColumns: false,
            toolbarAdd: true,
            toolbarDelete: true,
            toolbarSave: false,
            toolbarEdit: true,
            lineNumbers: true,
            selectColumn: true
        },
        columns: [
            {field: 'recid', caption: 'Id Articulo', size: '23%', sortable: true, resizable: true},
            {field: 'descripcionCorta', caption: 'Descripción', size: '23%', sortable: true, resizable: true},
            {field: 'onzas', caption: 'Onzas', size: '23%', sortable: true, resizable: true},
            {field: 'cuÃ±o', caption: 'CuÃ±o', size: '23%', sortable: true, resizable: true},
            {field: 'metal', caption: 'Metal', size: '10%', sortable: false, resizable: true, }
        ],
        sortData: [{field: 'recid', direction: 'ASC'}],
        records: [
            {recid: 24, descripcionCorta: 'Centenario', onzas: 50, cuño: '2015', metal: 'Oro'},
            {recid: 78, descripcionCorta: 'Bicentenario', onzas: 20, cuño: '2014', metal: 'Plata'},
            {recid: 5, descripcionCorta: 'Medalla Oro/Plata', onzas: 40, cuño: '2014', metal: 'Oro/Plata'},
            {recid: 100, descripcionCorta: 'Medalla Plata', onzas: 100, cuño: '2013', metal: 'Plata'}
        ]
    });



    // tabla buscar cliente
    $('#grid-buscar-cliente').w2grid({
        name: 'grid-buscar-cliente',
        show: {
            toolbar: true,
            footer: true,
            toolbarReload: false,
            toolbarColumns: false
        },
        multiSelect: false,
        columns: [
            {field: 'recid', caption: 'ID cliente', size: '10%', sortable: true, attr: 'align=center'},
            {field: 'tipoCliente', caption: 'Tipo de cliente', size: '14%', sortable: true, resizable: true},
            {field: 'fechaRegistro', caption: 'Fecha de registro', size: '14%', sortable: true, resizable: true},
            {field: 'nombreRazonSocial', caption: 'Nombre/Razón Social', size: '17%', sortable: true, resizable: true},
            {field: 'tipoMercado', caption: 'Tipo de mercado', size: '14%', sortable: true, resizable: true},
            {field: 'rfc', caption: 'R.F.C.', size: '17%', sortable: true, resizable: true},
            {field: 'estado', caption: 'Estado', size: '14%', sortable: true, resizable: true}
        ],
        sortData: [{field: 'recid', direction: 'ASC'}],
        records: [
            {recid: 1, tipoCliente: 'Distribuidor', fechaRegistro: '23/07/2015', nombreRazonSocial: 'Banklet', tipoMercado: 'Extranjero', rfc: '---', estado: 'ACTIVO'},
            {recid: 2, tipoCliente: 'Empleado', fechaRegistro: '10/07/2015', nombreRazonSocial: 'Juan Perez Robledo', tipoMercado: 'Nacional', rfc: 'PERJ650801HGRTRN05', estado: 'ACTIVO'}
        ],
        onSelect: function(event) {

            if (verificarCantidadPiezasgrid() === true) {
                //obtenerCliente(event.recid);

                var selectorCliente = w2ui["grid-buscar-cliente"].get(event.recid);
                var exclusividadClienteDto = {
                    nombre: selectorCliente.nombreRazonSocial,
                    descripcion: selectorCliente.tipoMercado,
                    id: selectorCliente.recid,
                    exclusividadPiezasGridDto: null
                };
                agregarClienteExclusividad(exclusividadClienteDto);
                $('#buscarCliente').modal('hide');

            } else {
                alert("No se han seleccionado piezas");
            }

        }
    });



});

function agregarClienteExclusividad(exclusividadClienteDto) {

    var exclusividadCliente = "<div class='ui blue segment form-exclusividad-cliente'>" +
            "<a class='ui blue right corner label borrar'>" +
            "<i class='remove icon'>" + "</i>" +
            "</a>" +
            "<div class='ui form'>" +
            "<div class='fields'>" +
            "<div class='two wide field'>" +
            "<label>ID Cliente: </label>" +
            "<label class='idCliente'>" + exclusividadClienteDto.id + "</label>" +
            "</div>" +
            "<div class='three wide field'>" +
            "<label>Cliente: </label>" +
            "<label class='nombre'>" + exclusividadClienteDto.nombre + "</label>" +
            "</div>" +
            "<div class='three wide field'>" +
            "<label>Descripcion corta: </label>" +
            "<label class='descripcion'>" + exclusividadClienteDto.descripcion + "</label>" +
            "</div>" +
            "<div class='three wide field'>" +
            "<label>Fecha inicio:</label>" +
            "<div class='ui icon input' id='prueba'>" +
            "<input class='fechaInicio' type='text' placeholder='dd/mm/yyyy'/>" +
            "<i class='calendar icon'>" + "</i>" +
            "</div>" +
            "</div>" +
            "<div class='three wide field'>" +
            "<label>Fecha fin:</label>" +
            "<div class='ui icon input' id='prueba'>" +
            "<input class='fechaFin' type='text' placeholder='dd/mm/yyyy'/>" +
            "<i class='calendar icon'>" + "</i>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";
    if (exclusividadClienteDto.exclusividadPiezasGridDto !== null) {
        exclusividadCliente += "<br>" +
                "<div id='grid-exclusividad-cliente" + x + "' class='grid-exclusividad-cliente' style='height: 250px;'>" + "</div>";
    }
    exclusividadCliente += "</div>";

    $('#segmento-exclusividad-cliente').append(exclusividadCliente);

    $('.fechaInicio').val(exclusividadClienteDto.fechaInicio);
    $('.fechaFin').val(exclusividadClienteDto.fechaFin);

    if (exclusividadClienteDto.exclusividadPiezasGridDto !== null) {
        $('#grid-exclusividad-cliente' + x).w2grid({
            name: 'grid-exclusividad-cliente' + x,
            show: {
                toolbar: true,
                footer: true,
                toolbarReload: false,
                toolbarColumns: false,
                toolbarDelete: false,
                toolbarSave: false,
                lineNumbers: true
            },
            columns: [
                {field: 'recid', caption: 'ID Artículo', size: '23%', sortable: true, resizable: true},
                {field: 'descripcionCorta', caption: 'Descripcion Corta', size: '23%', sortable: true, resizable: true},
                {field: 'cantidad', caption: 'Cantidad Entregada', size: '23%', sortable: true, resizable: true, editable: {type: 'text'}},
                {field: 'tipoPieza', caption: 'Tipo pieza', size: '23%', sortable: true, resizable: true},
                {field: 'check', caption: 'Ilimitado', size: '10%', sortable: false, resizable: true,
                    editable: {type: 'checkbox'}
                }
            ],
            sortData: [{field: 'recid', direction: 'ASC'}],
            records: [
            ]
        });
    }

    if (exclusividadClienteDto.exclusividadPiezasGridDto !== null) {
        w2ui['grid-exclusividad-cliente' + x].add(exclusividadClienteDto.exclusividadPiezasGridDto);
        w2ui['grid-exclusividad-cliente' + x].resize();
    }

    x++;
}

function obtenerModalArticulo() {
    $('#buscarArticulo').modal('setting', 'transition', 'fade up').modal('show');
    w2ui['grid-articulo'].resize();

}
function obtenerModalKit() {
    $('#buscarKit').modal('setting', 'transition', 'fade up').modal('show');
    w2ui['mostrar-kit-grid'].resize();
}

function mostrarMensaje() {
    $('#mensaje').modal('setting', 'closable', false).modal('setting', 'transition', 'fade up').modal('show');
}


function obtenerModalExclusividad() {
    $('#buscarExclusividad').modal('setting', 'transition', 'fade up').modal('show');
    w2ui['grid-exclusividad'].resize();
}

function obtenerModalCliente() {
    $('#buscarCliente').modal('setting', 'transition', 'fade up').modal('show');
    w2ui['grid-buscar-cliente'].resize();
}

function agregarArticuloExclusividad() {
    $("#agregar_articulo").on("click", function() {
        var selectorGridArticulo = w2ui["grid-articulo"];
        var sel = selectorGridArticulo.getSelection();
        for (var i = 0; i < sel.length; i++) {
            w2ui["grid-piezas-exclusividad"].add({
                recid: (selectorGridArticulo.get(sel[i])).recid,
                descripcionCorta: (selectorGridArticulo.get(sel[i])).descripcionCorta,
                cantidad: 0,
                tipoPieza: 'Artículo',
                check: false});
        }
        //actualizarGridsExclusividadCliente();
        $('#buscarArticulo').modal('hide');
    });
}

function agregarKitExclusividad() {
    $("#agregar_kit").on("click", function() {
        var selectorGridArticulo = w2ui["mostrar-kit-grid"];
        var sel = selectorGridArticulo.getSelection();
        for (var i = 0; i < sel.length; i++) {
            w2ui["grid-piezas-exclusividad"].add({
                recid: (selectorGridArticulo.get(sel[i])).recid,
                descripcionCorta: (selectorGridArticulo.get(sel[i])).descripcionCorta,
                cantidad: 0,
                tipoPieza: 'Kit',
                check: false});
        }
        //actualizarGridsExclusividadCliente();
        $('#buscarKit').modal('hide');
    });
}

function nuevoRegistro() {
    $("#nuevo-registro").on("click", function() {
        limpiarCampos();
        $('#idEstado').text(0);
        pintarPasos();
    });
}

function limpiarCampos() {
    $('#idExclusividad').text("");
    $('#fechaRegistro').text("");
    $('#fechaAutorizacion').text("");
    $('#estado').val("");
    $('#comentarios').val("");
    w2ui["grid-piezas-exclusividad"].clear();
    $('.form-exclusividad-cliente').each(function() {
        var $this = $(this);
        $this.remove();
    });
}

function enviarAutorizarExclusividad() {
    $("#enviar-autorizar").on("click", function() {
        var valido = true;
        valido = validarCampos();
        if (valido === true) {
            insertarDatosEnExclusividadDTO();
        } else {
            alert(valido);
        }
    });
}

function validarCampos() {
    var valido = true;
    valido = verificarCantidadPiezasgrid();
    valido = verificarCantidadClientes();
    return valido;
}

function verificarCantidadPiezasgrid() {
    var valido = true;
    var cantidadPiezasGrid = w2ui["grid-piezas-exclusividad"].records.length;
    if (cantidadPiezasGrid < 1) {
        $("#segmento-grid-piezas").addClass("error_piezas");
        valido = false;
    } else {
        $("#segmento-grid-piezas").removeClass("error_piezas");
    }
    return valido;
}

function verificarCantidadClientes() {
    var valido = true;
    var x = 0;
    $('.form-exclusividad-cliente').each(function() {
        x++;
    });
    if (x < 1) {
        valido = false;
    } else {

    }

    return valido;
}

function actualizarGridsExclusividadCliente() {

    $('.form-exclusividad-cliente').each(function() {
        var $this = $(this);
        var div = $this.find('.grid-exclusividad-cliente');
        var grid = w2ui[div.attr('id')];
        grid.clear();
        var selectorGridArticulo = w2ui["grid-piezas-exclusividad"];
        selectorGridArticulo.selectAll();
        var sel = selectorGridArticulo.getSelection();
        for (var i = 0; i < sel.length; i++) {
            grid.add({
                recid: (selectorGridArticulo.get(sel[i])).recid,
                descripcionCorta: (selectorGridArticulo.get(sel[i])).descripcionCorta,
                cantidad: (selectorGridArticulo.get(sel[i])).cantidad,
                tipoPieza: (selectorGridArticulo.get(sel[i])).tipoPieza,
                check: (selectorGridArticulo.get(sel[i])).check
            });
        }
        selectorGridArticulo.selectNone();
        //grid.resize();
    });
}

function insertarDatosEnExclusividadDTO() {
    var exclusividad = new exclusividadObj();
    exclusividad.idExclusividad = parseInt($('#idExclusividad').text());
    exclusividad.fechaRegistro = $('#fechaRegistro').text();
    exclusividad.fechaAutorizacion = $('#fechaAutorizacion').text();
    exclusividad.estado = $('#activo').val();
    exclusividad.comentarios = $('#comentarios').val();

    var selectorGridArticulo = w2ui["grid-piezas-exclusividad"];
    selectorGridArticulo.selectAll();
    var sel = selectorGridArticulo.getSelection();
    for (var i = 0; i < sel.length; i++) {
        var pieza = new piezaObj();
        pieza.recid = (selectorGridArticulo.get(sel[i])).recid;
        pieza.tipoPieza = (selectorGridArticulo.get(sel[i])).tipoPieza;
        pieza.cantidad = (selectorGridArticulo.get(sel[i])).cantidad;
        exclusividad.exclusividadPiezasGridDto.push(pieza);
    }
    selectorGridArticulo.selectNone();


    $('.form-exclusividad-cliente').each(function() {
        var cliente = new clienteObj();
        var $this = $(this);
        cliente.id = parseInt($this.find('.idCliente').text());
        cliente.fechaInicio = $this.find('.fechaInicio').val();
        cliente.fechaFin = $this.find('.fechaFin').val();
//        var div = $this.find('.grid-exclusividad-cliente');
//        var grid = w2ui[div.attr('id')];
//        grid.selectAll();
//        var sel = grid.getSelection();
//        for (var i = 0; i < sel.length; i++) {
//            var pieza = new piezaObj();
//            pieza.recid = (grid.get(sel[i])).recid;
//            pieza.tipoPieza = (grid.get(sel[i])).tipoPieza;
//            pieza.cantidad = (grid.get(sel[i])).cantidad;
//            cliente.exclusividadPiezasGridDto.push(pieza);
//        }
//        grid.selectNone();
        exclusividad.exclusividadClienteDto.push(cliente);
    });

    guardarExclusividad(exclusividad);
}

function guardarExclusividad(exclusividadDto) {
    $.ajax({
        type: 'POST',
        url: "exclusividad/ajax/guardarExclusividad",
        contentType: 'application/json',
        data: JSON.stringify(exclusividadDto),
        dataType: 'json',
        async: false,
        success: function() {
            //alert(data);
        },
        complete: function() {
            mostrarMensaje();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Ocurrió un problema al guardar Exclusividades. " + errorThrown + ", " + jqXHR + ", " + textStatus);
        }
    });
}


function exclusividadObj() {
    this.idExclusividad = null;
    this.comentarios = null;
    this.fechaRegistro = null;
    this.fechaAutorizacion = null;
    this.estado = null;

    this.exclusividadPiezasGridDto = [];
    this.exclusividadClienteDto = [];

}

function clienteObj() {
    this.id = null;
    this.fechaInicio = null;
    this.fechaFin = null;
    this.exclusividadPiezasGridDto = [];

}

function piezaObj() {
    this.recid = null;
    this.cantidad = null;
    this.tipoPieza = null;
}

function pintarPasos() {
    idEstado = parseInt($('#idEstado').text());
    console.log(idEstado);
    $("#step-guardado").removeClass();
    $("#step-enviar-autorizar").removeClass();
    $("#step-autorizado").removeClass();
    if (idEstado === 0) {
        $("#step-guardado").addClass("disabled step");
        $("#step-enviar-autorizar").addClass("disabled step");
        $("#step-autorizado").addClass("disabled step");
    } else if (idEstado === 1) {
        $("#step-guardado").addClass("completed step");
        $("#step-enviar-autorizar").addClass("disabled step");
        $("#step-autorizado").addClass("disabled step");
    } else if (idEstado === 2) {
        $("#step-guardado").addClass("completed step");
        $("#step-enviar-autorizar").addClass("completed step");
        $("#step-autorizado").addClass("disabled step");
    } else if (idEstado === 3) {
        $("#step-guardado").addClass("completed step");
        $("#step-enviar-autorizar").addClass("completed step");
        $("#step-autorizado").addClass("completed step");
    }

}