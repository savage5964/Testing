$(function () {    
    initRegistroCliente();                
});

/**
 * Establece el registro inicial para un cliente  
 */
function initRegistroCliente(){
    var $modalBuscarCliente = $('#modal-buscar-cliente');
    
    // iniciar tablas
    crearTablaArticulosContrato(1);
    crearTablaKitsContrato(1);
    crearTablaExclusividadCliente();
    crearTablaBuscarCliente();
        
    ocultarDatosParaNuevoCliente();    
    ocultarContrato();
    
    initCamposFechaContrato('.fecha-inicio-contrato', '.fecha-fin-contrato', '.fecha-firma-contrato');
    
    // iniciar boton de carga de archivo
    initBotonUploadArchivo('input[name="archivoContrato"]');
        
    // iniciar dropdowns
    $('.ui.dropdown').dropdown();
        
    // eliminar datos de registro no requeridos para clientes que no son distribuidores
    $('.ui.dropdown.tipo-cliente').dropdown('setting', 'onChange', function(value){                  
        if (value !== TIPO_CLIENTE_DISTRIBUIDOR){
            ocultarContrato();
        } else{
            mostrarContrato();
        }     
    });        
    
    // iniciar modal para búsqueda de clientes
    $modalBuscarCliente.modal('attach events', '#btn-buscar-cliente', 'show');
    
    // eventos para resize de tablas
    $modalBuscarCliente.modal('setting', 'onVisible', function(){
        w2ui['grid-buscar-cliente'].resize();
    });
    
    $('.menu .item').tab({
        onVisible: function () {            
            resizeTablasContrato();            
            w2ui['grid-exclusividad-cliente'].resize();
        }
    });
    
    $('#btn-nuevo-cliente').click(function(){
        resetAllCamposCliente();
        ocultarDatosParaNuevoCliente();
    });        
    
    $('#btn-agregar-direccion').click(function(){
        // respaldar selección previa de país
        var $lastPais = $('.direccion-envio:last').find('.ui.dropdown');
        var lastPaisVal = $lastPais.dropdown('get value');
        $lastPais.dropdown('clear');
        // copiar campos dirección vacíos
        $(this).before('<div class="ui form rised segment direccion-envio">' + $('.direccion-envio:last').html() + '</div>');
        $('.direccion-envio:last').find('.ui.dropdown').dropdown();
        //restaurar selección de país previa
        $lastPais.dropdown('set selected', lastPaisVal);
        // numerar direcciones
        $('.direccion-envio').each(function(i){
            $(this).children('span.label').text('Dirección de envío (' + (++i) + ')');
        });
    });        
    
    // clonar datos dirección fiscal
    $('#tab-cliente-definicion').on('click', '.direccion-envio .checkbox', function(){
        if(!$(this).children('input').is(':checked'))
            return;
        
        var $dirEnvio   = $(this).parents('.direccion-envio:first');        
        var $dirFiscal  = $('#direccion-fiscal');                
        
        $dirEnvio.find('.dropdown.pais').dropdown('set selected', $dirFiscal.find('.dropdown.pais').dropdown('get value'));
        $dirEnvio.find('input[name="estado"]').val($dirFiscal.find('input[name="estado"]').val());
        $dirEnvio.find('input[name="ciudad"]').val($dirFiscal.find('input[name="ciudad"]').val());
        $dirEnvio.find('input[name="codigoPostal"]').val($dirFiscal.find('input[name="codigoPostal"]').val());
        $dirEnvio.find('input[name="municipio"]').val($dirFiscal.find('input[name="municipio"]').val());
        $dirEnvio.find('input[name="calle"]').val($dirFiscal.find('input[name="calle"]').val());
        $dirEnvio.find('input[name="colonia"]').val($dirFiscal.find('input[name="colonia"]').val());
        $dirEnvio.find('input[name="numeroExterior"]').val($dirFiscal.find('input[name="numeroExterior"]').val());
        $dirEnvio.find('input[name="numeroInterior"]').val($dirFiscal.find('input[name="numeroInterior"]').val());
    });
    
    $('#btn-agregar-contrato').click(function(){
        // obtener selección previa de tipo de contrato
        var $contratoContainer = $('.datos-contrato:first');        
        var lastTipoContratoVal = $contratoContainer.find('.ui.dropdown').dropdown('get value');
        
        // copiar campos de contrato vacíos        
        $(this).after('<div class="ui fluid container datos-contrato"></div>');
        
        var $nuevoContratoContainer = $('.datos-contrato:last');
        
        $nuevoContratoContainer.html('<div class="ui secondary menu">' + $($contratoContainer.children()[0]).html() + '</div>');
        $nuevoContratoContainer.html('<div class="ui form rised segment">' + $($contratoContainer.children()[1]).html() + '</div>');
        
        // inicializar botón de carga de archivo
        $nuevoContratoContainer.find('.inputfile:last').remove();        
        $nuevoContratoContainer.find('.uploadArchivoContrato:last').append('<input type="file" name="archivoContrato" />');
        initBotonUploadArchivo('input[name="archivoContrato"]:last');
        
        // inicializar campos fecha y dropdowns
        initCamposFechaContrato($nuevoContratoContainer.find('.fecha-inicio-contrato'), $nuevoContratoContainer.find('.fecha-fin-contrato'), $nuevoContratoContainer.find('.fecha-firma-contrato'));
        
        var $bkTipoContrato = $nuevoContratoContainer.find('select[name="tipoContrato"]');
        var $oldTipoContrato = $nuevoContratoContainer.find('.dropdown.tipo-contrato');
        
        // no se pueden repetir tipos de contrato para el mismo cliente (eliminar opción seleccionada previamente)
        $bkTipoContrato.children('option[value="' + lastTipoContratoVal + '"]').remove();
        
        $bkTipoContrato.addClass('ui dropdown tipo-contrato');
        
        $oldTipoContrato.after($bkTipoContrato);
        $oldTipoContrato.remove();

        $bkTipoContrato.dropdown();        
        
        // agregar nuevas tablas de artículos y kits para contrato         
        var htmlTablas = 
                '<div class="ui grid">' + 
                '<div class="eight wide column">' +
                '<div class="ui rised segment">' +
                '<span class="ui blue ribbon label">Artículos bajo contrato</span>' +
                '<div class="ui hidden divider"></div>' +
                '<div id="grid-articulos-contrato-2" style="height: 450px;"></div>' +
                '</div>' +                         
                '</div>' +
                '<div class="eight wide column">' +
                '<div class="ui rised segment">' +
                '<span class="ui blue right ribbon label">Kits bajo contrato</span>' +
                '<div class="ui hidden divider"></div>' +
                '<div id="grid-kits-contrato-2" style="height: 450px;"></div>' +
                '</div>' +
                '</div>' +
                '</div>';
        
        $nuevoContratoContainer.append(htmlTablas);
        
        var numContrato = $('.datos-contrato').size();
        
        crearTablaArticulosContrato(numContrato);
        crearTablaKitsContrato(numContrato);
        
        // evitar que se agreguen más contratos
        $('#btn-agregar-contrato').hide();                
        
        // numerar contratos        
        $('.datos-contrato').each(function(i){
            var $targets = $(this).find('span.label');                        
            ++i;
            $($targets[0]).text('Datos de contrato (' + i + ')');
            $($targets[1]).text('Artículos bajo contrato (' + i + ')');
            $($targets[2]).text('Kits bajo contrato (' + i + ')');
        });        
    });
    
    $('#btn-guardar').click(function(){
        guardarCliente();        
    });
    
    $('#btn-autorizar').click(function(){
        //TODO invocar lógica backend
        notifySicon.show(notifySicon.TITLE_ENVIAR_AUTORIZAR, notifySicon.MSG_ENVIAR_AUTORIZAR);
    });
}

function initCamposFechaContrato(input1, input2, input3){
    $(input1).w2field('date');
    $(input2).w2field('date');
    $(input3).w2field('date');
}

function initBotonUploadArchivo(selector){
    $(selector).inputfile({
        uploadText: '<i class="arrow circle outline up icon"></i> Seleccione un archivo',
        removeText: '<i class="trash outline icon"></i>',
        restoreText: '<button class="ui icon button"><i class="remove icon"></i></button>',
        uploadButtonClass: 'ui icon button',
        removeButtonClass: 'ui icon button'
    });
}

function crearTablaArticulosContrato(id){
    $('#grid-articulos-contrato-' + id).w2grid({
        name: 'grid-articulos-contrato-' + id,
        show: {
            toolbar: true,
            footer: true,
            toolbarReload: false,
            toolbarColumns: false
        },
        toolbar: {
            items: [
                { type: 'spacer' },
                { type: 'button', id: 'item-agregar', caption: 'Agregar', icon: 'w2ui-icon-plus', disabled: false },
                { type: 'break' },
                { type: 'button', id: 'item-eliminar', caption: 'Eliminar', icon: 'w2ui-icon-cross', disabled: true }
            ],
            onClick: function (target, data) {
                if (target === 'item-agregar'){
                    agregarArticuloContrato();
                } else{
                    var $grid = w2ui['grid-articulos-contrato-' + id];
                    var recID = $grid.getSelection();    
                    $grid.remove(recID);
                    w2popup.close();
                }
            }
        },
        multiSelect: false,
        columns: [
            {field: 'recid', caption: 'ID Artículo', size: '8%', sortable: true, attr: 'align=center'},
            {field: 'descripcionCorta', caption: 'Descripción Corta', size: '23%', sortable: true, resizable: true},
            {field: 'estado', caption: 'Estado', size: '23%', sortable: true, resizable: true},
            {field: 'familia', caption: 'Familia', size: '23%', sortable: true, resizable: true},
            {field: 'cunio', caption: 'Cuño', size: '23%', sortable: true, resizable: true}
        ],
        sortData: [{field: 'recid', direction: 'ASC'}],        
        onSelect: function(event) {
            event.onComplete = function() {              
                this.toolbar.enable('item-agregar');
                this.toolbar.enable('item-eliminar');
            };
        }
    });
}

function crearTablaKitsContrato(id){
    $('#grid-kits-contrato-' + id).w2grid({
        name: 'grid-kits-contrato-' + id,
        show: {
            toolbar: true,
            footer: true,
            toolbarReload: false,
            toolbarColumns: false
        },
        toolbar: {
            items: [
                { type: 'spacer' },
                { type: 'button', id: 'item-agregar', caption: 'Agregar', icon: 'w2ui-icon-plus', disabled: false },
                { type: 'break' },
                { type: 'button', id: 'item-eliminar', caption: 'Eliminar', icon: 'w2ui-icon-cross', disabled: true }
            ],
            onClick: function (target, data) {
                if (target === 'item-agregar'){
                    agregarKitContrato();
                } else{
                    var $grid = w2ui['grid-kits-contrato-' + id];
                    var recID = $grid.getSelection();    
                    $grid.remove(recID);
                    w2popup.close();
                }
            }
        },
        multiSelect: false,
        columns: [
            {field: 'recid', caption: 'ID Kit', size: '8%', sortable: true, attr: 'align=center'},
            {field: 'descripcionCorta', caption: 'Descripción Corta', size: '23%', sortable: true, resizable: true},
            {field: 'descripcionLarga', caption: 'Familia', size: '23%', sortable: true, resizable: true},
            {field: 'estado', caption: 'Estado', size: '23%', sortable: true, resizable: true}
        ],
        sortData: [{field: 'recid', direction: 'ASC'}],
        onSelect: function(event) {
            event.onComplete = function() {              
                this.toolbar.enable('item-agregar');
                this.toolbar.enable('item-eliminar');
            };
        }
    });
}

function crearTablaBuscarCliente(){
    $.ajax({
        url: APP_CONTEXT + '/cliente/listadoClientes',
        contentType: 'application/json',
        async: false,
        type: "GET",
        dataType: 'json'
    }).done(function(records) {
        $('#grid-buscar-cliente').w2grid({
            name: 'grid-buscar-cliente',        
            show: {
                toolbar: true,
                footer: true,
                toolbarReload: false,
                toolbarColumns: false
            },
            toolbar: {
                items: [
                    { type: 'spacer' },
                    { type: 'button', id: 'item-editar', caption: 'Editar', icon: 'w2ui-icon-pencil', disabled: true },
                    { type: 'break' },
                    { type: 'button', id: 'item-eliminar', caption: 'Eliminar', icon: 'w2ui-icon-cross', disabled: true }
                ],
                onClick: function (target, data) {
                    if (target === 'item-eliminar'){
                        // TODO agregar lógica botón aceptar
                        w2popup.open({
                            title     : notifySicon.TITLE_ATENCION,
                            body      : '<div class="w2ui-centered">' + notifySicon.MSG_ELIMINAR + '</div>',
                            buttons   : '<button class="ui primary button btn" onclick="eliminarCliente();">Aceptar</button><button class="ui black button btn" onclick="w2popup.close();">Cancelar</button>',
                            width     : 400,
                            height    : 200,
                            overflow  : 'hidden',
                            color     : '#333',
                            speed     : '0.3',
                            opacity   : '0.8',
                            modal     : true,
                            showClose : false,
                            showMax   : false
                        });
                    } else{
                        var $grid = w2ui['grid-buscar-cliente'];
                        var recID = $grid.getSelection();                        
                        editarCliente(recID);
                        $('.ui.modal').modal('hide');
                    }
                }
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
            records: records,
            sortData: [{field: 'recid', direction: 'ASC'}],
            onSelect: function(event) {
                event.onComplete = function() {              
                    this.toolbar.enable('item-editar');
                    this.toolbar.enable('item-eliminar');
                };
            }
        });  
    });    
}

function crearTablaExclusividadCliente(){
    $('#grid-exclusividad-cliente').w2grid({
        name: 'grid-exclusividad-cliente',
        show: {
            toolbar: true,
            footer: true,
            toolbarReload: false,
            toolbarColumns: false
        },        
        multiSelect: false,
        columns: [
            {field: 'recid', caption: 'ID Exclusividad', size: '10%', sortable: true, attr: 'align=center'},
            {field: 'descripcionCorta', caption: 'Descripción Corta', size: '15%', sortable: true, resizable: true},
            {field: 'estado', caption: 'Estado', size: '10%', sortable: true, resizable: true},
            {field: 'familia', caption: 'Familia', size: '10%', sortable: true, resizable: true},
            {field: 'cunio', caption: 'Cuño', size: '10%', sortable: true, resizable: true},
            {field: 'cantidad', caption: 'Cantidad', size: '10%', sortable: true, resizable: true},
            {field: 'piezasIlimitadas', caption: 'Piezas Ilimitadas', size: '10%', sortable: true, resizable: true},
            {field: 'cantidadEntregada', caption: 'Cantidad Entregada', size: '10%', sortable: true, resizable: true},
            {field: 'cantidadDisponible', caption: 'Cantidad Disponible', size: '10%', sortable: true, resizable: true},
            {field: 'activo', caption: 'Activo', size: '5%', sortable: true, resizable: true}
        ],
        sortData: [{field: 'recid', direction: 'ASC'}],
        records: [
            {recid: 1, descripcionCorta: 'Onza Libertad', estado: 'DISPONIBLE', familia: 'Libertad', cunio: '2012', cantidad: 10, piezasIlimitadas: 'Sí', cantidadEntregada: 5, cantidadDisponible: 5, activo: 'Sí'},
            {recid: 2, descripcionCorta: 'Onza Libertad', estado: 'DISPONIBLE', familia: 'Libertad', cunio: '2014', cantidad: 12, piezasIlimitadas: 'Sí', cantidadEntregada: 4, cantidadDisponible: 8, activo: 'Sí'},
            {recid: 3, descripcionCorta: 'Onza Libertad', estado: 'DISPONIBLE', familia: 'Libertad', cunio: '2015', cantidad: 10, piezasIlimitadas: 'No', cantidadEntregada: 5, cantidadDisponible: 5, activo: 'No'}
        ]
    });
}

function agregarArticuloContrato(){
    //TODO agregar lógica backend
}

function agregarKitContrato(){
    //TODO agregar lógica backend
}

function guardarCliente(){
    // recuperar datos definición cliente   
    var clienteDto = new clienteObj();
    var direcciones = [];    
    var tipoCliente = $('.ui.dropdown.tipo-cliente').dropdown('get value');
    
    clienteDto.tipoCliente = { 
        id: tipoCliente
    };
    clienteDto.estado = {
        id: $('input[name="estadoCliente"]').val()
    };
    clienteDto.tipoMercado = {
        id: $('.ui.dropdown.tipo-mercado').dropdown('get value')
    };
    clienteDto.idioma = {
        id: $('.ui.dropdown.idioma').dropdown('get value')
    };
    clienteDto.almacen = { 
        id: $('.ui.dropdown.almacen').dropdown('get value')
    };
    clienteDto.fechaRegistro = $('input[name="fechaRegistro"]').val();
    clienteDto.nombreRazonSocial = $('input[name="nombre"]').val();
    clienteDto.descripcionCorta = $('input[name="descripcionCorta"]').val();
    clienteDto.rfc = $('input[name="rfc"]').val();
    clienteDto.email = $('input[name="email"]').val();
    clienteDto.email2 = $('input[name="email2"]').val();
    clienteDto.cuentaCobroMxn = $('input[name="cuentaCobroMxn"]').val();
    clienteDto.cuentaCobroUsd = $('input[name="cuentaCobroUsd"]').val();
    
    console.log(clienteDto);
    
    // recuperar datos de direccion fiscal
    
    var $dirFiscal = $('#direccion-fiscal');
    var direccionFiscalDto = new direccionObj();        
    
    direccionFiscalDto.tipoDireccion = {
        id: TIPO_DIRECCION_FISCAL
    }; 
    direccionFiscalDto.pais = {
        id: $dirFiscal.find('.ui.dropdown.pais').dropdown('get value')
    };
    direccionFiscalDto.estado = $dirFiscal.find('input[name="estado"]').val();
    direccionFiscalDto.municipio = $dirFiscal.find('input[name="municipio"]').val();
    direccionFiscalDto.ciudad = $dirFiscal.find('input[name="ciudad"]').val();
    direccionFiscalDto.colonia = $dirFiscal.find('input[name="colonia"]').val();
    direccionFiscalDto.calle = $dirFiscal.find('input[name="calle"]').val();
    direccionFiscalDto.numeroExterior = $dirFiscal.find('input[name="numeroExterior"]').val();
    direccionFiscalDto.numeroInterior = $dirFiscal.find('input[name="numeroInterior"]').val();
    direccionFiscalDto.codigoPostal = $dirFiscal.find('input[name="codigoPostal"]').val();
    
    direcciones.push(direccionFiscalDto);
    
    // recuperar datos de direcciones de envío
    
    $('.direccion-envio').each(function(){
        var direccionEnvioDto = new direccionObj();
        var $dirEnvio = $(this);
        
        direccionEnvioDto.tipoDireccion = {
            id: TIPO_DIRECCION_PARTICULAR
        };
        direccionEnvioDto.pais = {
            id: $dirFiscal.find('.ui.dropdown.pais').dropdown('get value')
        };
        direccionEnvioDto.estado = $dirEnvio.find('input[name="estado"]').val();
        direccionEnvioDto.municipio = $dirEnvio.find('input[name="municipio"]').val();
        direccionEnvioDto.ciudad = $dirEnvio.find('input[name="ciudad"]').val();
        direccionEnvioDto.colonia = $dirEnvio.find('input[name="colonia"]').val();
        direccionEnvioDto.calle = $dirEnvio.find('input[name="calle"]').val();
        direccionEnvioDto.numeroExterior = $dirEnvio.find('input[name="numeroExterior"]').val();
        direccionEnvioDto.numeroInterior = $dirEnvio.find('input[name="numeroInterior"]').val();
        direccionEnvioDto.codigoPostal = $dirEnvio.find('input[name="codigoPostal"]').val();
        
        direcciones.push(direccionEnvioDto);
    });
    
    console.log(direcciones);
    
    clienteDto.direcciones = direcciones;
    
    peticionGuardarCliente(clienteDto);  
}

function peticionGuardarCliente(clienteDto){
    $.ajax({
        url: APP_CONTEXT + '/cliente/guardar',
        contentType: 'application/json',
        async: false,
        type: "POST",
        data: JSON.stringify(clienteDto),
        dataType: 'json'
    }).done(function(idCliente){
        // los datos del contrato deberán cargarse inmediatamente después de guardar el cliente (solo distribuidores)
        console.log("idCliente guardado=" + idCliente); //TODO mostrar errores de validación si los hubiese antes y detener el registro de contrato
        if(clienteDto.tipoCliente.id === TIPO_CLIENTE_DISTRIBUIDOR){            
            peticionGuardarContrato(idCliente);
            return;
        }
        notifySicon.show(notifySicon.TITLE_GUARDAR, notifySicon.MSG_GUARDAR);
    });
}

function peticionGuardarContrato(idCliente){    
    // TODO falta agregar los detalles del contrato para artículo y kits
    $('.datos-contrato').each(function(){
        var contratoDto = new contratoObj();
        contratoDto.idCliente = idCliente;
        contratoDto.folioContrato   = $(this).find('input[name="folioContrato"]').val();
        contratoDto.idTipoContrato  = $(this).find('.ui.dropdown.tipo-contrato').dropdown('get value');
        contratoDto.descripcion     = $(this).find('input[name="descripcionContrato"]').val();
        contratoDto.fechaInicio     = $(this).find('input[name="fechaInicioContrato"]').val();
        contratoDto.fechaFin        = $(this).find('input[name="fechaFinContrato"]').val();
        contratoDto.fechaFirma      = $(this).find('input[name="fechaFirmaContrato"]').val();
        
        console.log(contratoDto);
        
        $(this).find(".uploadArchivoContrato").ajaxForm({
            url: APP_CONTEXT + '/cliente/guardar-contrato',
            data: contratoDto, 
            success:function(data) { 
                  console.log("response=" + data); //TODO mostrar errores de validación o éxito de registro
            },
            dataType:"json"
       }).submit();
    });                
}

function editarCliente(id){    
    $.ajax({
        url: APP_CONTEXT + '/cliente/obtener-cliente/' + id,
        contentType: 'application/json',
        async: false,
        type: "GET",
        dataType: 'json'
    }).done(function(cliente){        
        // llenar forma con los datos obtenidos
        $('#idCliente span').text(cliente.id);
        $('#fechaRegistro span').text(new Date(cliente.fechaRegistro));
        if(cliente.estado.id === ESTADO_AUTORIZADO){
            $('#fechaAutorizacion span').text(cliente.fechaAutorizacion);
            $('#fechaAutorizacion').show();
        }
        $('.dropdown.tipo-cliente').dropdown('set selected', cliente.tipoCliente.id);
        $('.dropdown.tipo-mercado').dropdown('set selected', cliente.tipoMercado.id);
        $('.dropdown.idioma').dropdown('set selected', cliente.idioma.id);
    
        $('input[name="nombre"]').val(cliente.nombreRazonSocial);
        $('input[name="descripcionCorta"]').val(cliente.descripcionCorta);
        $('input[name="rfc"]').val(cliente.rfc);
        $('input[name="email"]').val(cliente.email);
        $('input[name="email2"]').val(cliente.email2);
        $('input[name="cuentaCobroMxn"]').val(cliente.cuentaCobroMxn);
        $('input[name="cuentaCobroUsd"]').val(cliente.cuentaCobroUsd);
        
        // TODO agregar direcciones
        
                
        $('#idCliente').show();
        
    });    
}

function eliminarCliente(){
    //TODO completar lógica backend
    var $grid = w2ui['grid-buscar-cliente'];
    var recID = $grid.getSelection();    
    $grid.remove(recID);
    w2popup.close();
}

function autorizarCliente(){
    //TODO agregar lógica backend
}

function mostrarContrato(){
    var $itemContrato = $('#tab-item-contrato');
    $('#almacen').show();
    $itemContrato.show();
    $itemContrato.attr('data-tab', 'second');
}

function ocultarContrato(){
    var $itemContrato = $('#tab-item-contrato');
    $('#almacen').hide();
    $itemContrato.hide();
    $itemContrato.removeAttr('data-tab');
    resetCamposContrato();
}

function mostrarExclusividad(){
    var $itemExclusividad = $('#tab-item-exclusividad');    
    $itemExclusividad.show();
    $itemExclusividad.attr('data-tab', 'third');
}

function ocultarExclusividad(){
    var $itemExclusividad = $('#tab-item-exclusividad');    
    $itemExclusividad.hide();
    $itemExclusividad.removeAttr('data-tab');
}

function ocultarDatosParaNuevoCliente(){
    $('#idCliente').hide();
    $('#fechaAutorizacion').hide();
    $('#btn-autorizar').hide();
    ocultarExclusividad();
}

function resetAllCamposCliente(){
    $('.form').form('clear');        
    $('.upload-button-remove').trigger('click');
    $('.ui.dropdown').dropdown('clear');
    resetTablasContrato();
    w2ui['grid-exclusividad-cliente'].clear();    
}

function resetCamposContrato(){
    $('.datos-contrato').find('a.limpiar').trigger('click');
    $('.upload-button-remove').trigger('click');
    resetTablasContrato();
}

function resetTablasContrato(){
    $('.datos-contrato').each(function(i){
        ++i;
        w2ui['grid-articulos-contrato-' + i].clear();
        w2ui['grid-kits-contrato-' + i].clear();
    });
}

function resizeTablasContrato(){
    $('.datos-contrato').each(function(i){
        ++i;
        w2ui['grid-articulos-contrato-' + i].resize();
        w2ui['grid-kits-contrato-' + i].resize();               
    });    
}

// auxiliares para envio de datos

function clienteObj(){
    this.id = null;
    this.tipoCliente = null;
    this.estado = null;
    this.tipoMercado = null;
    this.idioma = null;
    this.almacen = null;
    this.fechaRegistro = null;
    this.nombreRazonSocial = null;
    this.descripcionCorta = null;
    this.rfc = null;
    this.factura = false;
    this.email = null;
    this.email2 = null;
    this.cuentaCobroMxn = null;
    this.cuentaCobroUsd = null;
    this.direcciones = null;
}

function direccionObj(){
    this.id = null;
    this.tipoDireccion = null;
    this.pais = null;
    this.estado = null;
    this.municipio = null;
    this.ciudad = null;
    this.colonia = null;
    this.calle = null;
    this.numeroExterior = null;
    this.numeroInterior = null;
    this.codigoPostal = null;
}

function contratoObj(){
    this.folioContrato = null;
    this.idCliente = null;
    this.idTipoContrato = null;
    this.idEstado = null;
    this.descripcion = null;
    this.fechaRegistro = null;
    this.fechaFirma = null;
    this.fechaInicio = null;
    this.fechaFin = null;
}
