/* global notifySicon, w2popup, APP_CONTEXT, w2ui */

/**
 * 
 * Carga de las funciones a usar en la página Catálogo Artículo
 */
$(document).ready(function () {
    cargarElementos(); // carga los elementos de SemanticUI
    cargarImagen(); // carga las imágenes
    borrarImagen();
    cleanAll(); //limpia todos los campos del catálogo
    limpiarModal();
    listadoArticulos();

//    crearTablaBuscarLogArticulo();
    validarDatos(); // Valida los datos del articulo
    // test
    test();
});

function cargarElementos() {

    $('.ui.checkbox').checkbox();

    $('.ui.dropdown').dropdown();

    var $modalBuscarArticulo = $('#modal-buscar-articulo');
//    console.log("haciendo la tabla para artículos");
//    console.log($modalBuscarArticulo);

    // modal para la búsqueda de artículos
    $modalBuscarArticulo.modal('attach events', '#btn-buscar-articulo', 'show');

    $('#btn-buscar-articulo').on('click', function () {
        $('.ui.modal').modal('show');
//        hacer la consulta para llenar el grid de artículo
        consultarLogArticulo();
    });
    
//    // eventos para resize de tablas
    $modalBuscarArticulo.modal('setting', 'onVisible', function () {
        w2ui['grid-buscar-articulo'].resize();
        w2ui['grid-buscar-log-articulo'].resize();
    });

    $('.menu .item').tab(
            {
                onVisible: function () {
                    w2ui['grid-buscar-articulo'].resize();
                    w2ui['grid-buscar-log-articulo'].resize();
                }
            }
    );

    $('#btn-guardar').click(function () {
        guardarArticulo();
    });

    $('#btn-autorizar').click(function () {
        //TODO invocar lógica backend
        autorizarArticulo(); // autorizar artículo
        // va dentro del método autorizarArticulo()
//        notifySicon.show(notifySicon.TITLE_ENVIAR_AUTORIZAR, notifySicon.MSG_ENVIAR_AUTORIZAR);
    });

    crearTablaBuscarArticulo();

    console.log("Elementos cargados correctamente");
}

function cargarImagen() {
    $('#buttonImagenUno').on('click', function () {
        $('#numeroImagen').val('imagenUno');
        console.log($('#numeroImagen').val('imagenUno').val());
        $('#inputImagenUno').click();
    });

    $('#buttonImagenDos').on('click', function () {
        $('#numeroImagen').val('imagenDos');
        console.log($('#numeroImagen').val("imagenDos").val());
        $('#inputImagenDos').click();
    });

    mostrarImagen('inputImagenUno', 'articulo-model', 'Uno');
    mostrarImagen('inputImagenDos', 'articulo-model', 'Dos');
    $('#inputImagenUno,#inputImagenDos').val("");
}

function borrarImagen() {
    $("#borrar-imagen").on("click", function () {
        $("#inputImagenUno").val("");
        $("#inputImagenDos").val("");
        $("#numeroImagen").val("");
        $(".previewUno img,.previewDos img").attr("src", "/sicon/resources/images/bm.png");
        dimension();
        $("#etiqueta_imagen_uno,#etiqueta_imagen_dos").text("Sin imagen");
        // agregar la clase error_manual
        $(".card_uno .content,.card_dos .content").removeClass("error_manual");
    });
}

function cleanAll() {
//    limpia todos los campos para registrar un nuevo artículo
    $('#btn-nuevo-articulo').on('click', function () {
        resetAllFields();
    });

}

function limpiarModal() {
    // handler borrar formularios
    $('.modal').on('click', 'a.label.limpiar', function (e) {
        e.preventDefault();
        $(this).parent().form('clear');
    });
}

/**
 * 
 * Valida los datos de los formularios
 */
function validarDatos() {
    console.log("validando datos");
    // TODO hacer la lógica para la validación de los datos
}

function listadoArticulos() {
    // TODO
}



function autorizarArticulo() {
    // TODO
}

function eliminarArticulo() {
    // TODO
}

function crearTablaBuscarArticulo() {
    $('#grid-buscar-articulo').w2grid({
        name: 'grid-buscar-articulo',
        show: {
            toolbar: true,
            footer: true,
            toolbarReload: false,
            toolbarColumns: false,
            toolbarDelete: true,
            toolbarSave: false,
            toolbarEdit: true,
            lineNumbers: true
        }, columns: [
            // TODO
            // copiar las columnas del otro grid, para que tengan los mismos campos
            {field: 'recid', caption: 'Id Artículo', size: '23%', sortable: true, resizable: true},
            {field: 'comentarios', caption: 'Comentarios', size: '40%', sortable: true, resizable: true},
            {field: 'estado', caption: 'Estado', size: '23%', sortable: true, resizable: true}
        ],
        sortData: [{field: 'recid', direction: 'ASC'}],
        records: [
        ], onEdit: function (event) {

            var grid = w2ui["grid-buscar-articulo"].getSelection();
            var row = w2ui["grid-buscar-articulo"].get(grid);
//            modificarArticulo(row.recid, row.idEstado);
            modificarArticulo(row.recid);

        }, onDelete: function (event) {
            var grid = w2ui["grid-buscar-articulo"].getSelection();
            var row = w2ui["grid-buscar-articulo"].get(grid);
            eliminarArticulo(row.recid);
        }
    });
}

function consultarLogArticulo() {
    // TODO
//    abrir modal para buscar artículos
//    mostrar un listado de los elementos en el grid
    $.ajax({
        // cambiar en el controller para hacer la búsqueda sobre LogArticulo
        url: APP_CONTEXT + '/articulo/listarLogArticulos',
        async: false,
        contentType: 'application/json',
        type: 'GET',
        dataType: 'json',
        success: function (records) {
//            notifySicon.MSG_SIN_REGISTRO;
            console.log(records);


        }, error: function (jqXHR, textStatus, errorThrown) {

        }, complete: function (jqXHR, textStatus) {
            notifySicon.MSG_SIN_REGISTRO;
        }
    });

}

function crearTablaBuscarLogArticulo() {
    $.ajax({
        url: APP_CONTEXT + "/articulo/listadoLogArticulo",
        contentType: 'application/json',
        dataType: 'json',
        async: false,
        type: 'GET',
        success: function (records) {
            $('#grid-buscar-log-articulo').w2grid({
                name: 'grid-buscar-log-articulo',
                header: 'Articulos',
                show: {
                    toolbar: true,
                    footer: true,
                    toolbarReload: false,
                    toolbarColumns: false
                },
//        },
                toolbar: {
                    items: [
                        {type: 'spacer'},
                        {type: 'button', id: 'item-editar', caption: 'Editar', icon: 'w2ui-icon-pencil', disabled: true},
                        {type: 'break'},
                        {type: 'button', id: 'item-eliminar', caption: 'Eliminar', icon: 'w2ui-icon-cross', disabled: true}
                    ],
                    onClick: function (target, data) {
                        if (target === 'item-eliminar') {
                            // TODO agregar lógica botón aceptar
                            w2popup.open({
                                title: notifySicon.TITLE_ATENCION,
                                body: '<div class="w2ui-centered">' + notifySicon.MSG_ELIMINAR + '</div>',
                                buttons: '<button class="ui primary button btn" onclick="eliminarLogArticulo();">Aceptar</button><button class="ui black button btn" onclick="w2popup.close();">Cancelar</button>',
                                width: 400,
                                height: 200,
                                overflow: 'hidden',
                                color: '#333',
                                speed: '0.3',
                                opacity: '0.8',
                                modal: true,
                                showClose: false,
                                showMax: false
                            });
                        } else {
                            var grid = w2ui['grid-buscar-log-articulo'].getSelection();
                            var row = w2ui['grid-buscar-log-articulo'].get(grid);
                            console.log(row.recid);
                            console.log(row.recid);
                            modificarArticulo(row.recid);
                        }
                    }
                },
                columns: [
                    {field: 'recid', caption: 'ID Artículo', size: '10%', sortable: true, attr: 'align=center'},
                    {field: 'tipoArticulo', caption: 'Tipo De Artículo', size: '14%', sortable: true, resizable: true},
                    {field: 'descripcion', caption: 'Descripcion', size: '14%', sortable: true, resizable: true},
                    {field: 'familia', caption: 'Familia', size: '17%', sortable: true, resizable: true},
                    {field: 'metal', caption: 'Metal', size: '14%', sortable: true, resizable: true},
                    {field: 'acabado', caption: 'Acabado', size: '17%', sortable: true, resizable: true},
                    {field: 'cunio', caption: 'Cuño', size: '14%', sortable: true, resizable: true}
                ],
                sortData: [{field: 'recid', direction: 'ASC'}],
                records: records,
                onSelect: function (event) {
                    event.onComplete = function () {
                        this.toolbar.enable('item-editar');
                        this.toolbar.enable('item-eliminar');
                    };
                }
            });
        }
    });
}

function modificarArticulo(idArticulo) {
    // TODO agregar la lógica

    $('.ui.modal').modal('hide');
    resetAllFields();
    console.log("Id artículo en modificar: " + idArticulo);
    console.log("comieza ajax");


    $.ajax({
        url: APP_CONTEXT + '/articulo/modificarLogArticulo/' + idArticulo,
        contentType: 'application/json',
        async: false,
        type: "GET",
        dataType: 'json'
    }).done(function (articulo) {

        // llenar los datos de la forma con la información recuperada
        alert("llega acá");
        $('#id-articulo').show();
        $('#fecha-autorizacion').show();
//    $('#id-articulo').hide();
        $('#id-articulo').text(idArticulo);
        console.log(idArticulo);
        //ver como traer la fecha de registro del artículo, desde logArticulo
//            $('#fecha-hora').text(w2utils.formatDateTime((new Date(cliente.fechaHora)), 'dd/mm/yyyy hh:mm')).show();
        // colocar la fecha que regrese del sistema en caso de que cuente con autorización
        $('#fecha-autorizacion').text("test");
        // Definición
        if (articulo.activo) {
            $('#articulo-activo-checkbox').checkbox('check');
        } else {
            $('#articulo-activo-checkbox').checkbox('uncheck');
        }
        // ver como hacer para el estado
        $('#descripcion-larga').val(articulo.desripcionLarga);
        $('#descripcion-ingles').val(articulo.descripcionIngles);
        $('#descripcion-corta').val(articulo.descripcionCorta);
        $('#clave-cmm').val(articulo.claveCmm);
        $('#clave-capsula').val(articulo.claveCapsula);
        $('#articulo-relacionado-select').dropdown('set selected', articulo.articuloRelacionaldo.id);

        // Imagenes

        // Características
        // familia. cuño. valor nominal.
        $('#familia-select').dropdown('set selected', articulo.familia.id);
        $('#tipo-articulo-select').dropdown('set selected', articulo.tipoArticulo.id);
        $('#decreto-select').dropdown('set selected', articulo.decreto.id);
        $('#clave-informe').val(articulo.claveInforme);
        $('#cunio').val(articulo.cunio);
        $('#ley').val(articulo.ley);
        $('#valor-nominal').val(articulo.valorNominal);
        // dimensiones
        $('#espesor').val(articulo.espesor);
        $('#diametro').val(articulo.deametro);
        // tolerancias
        $('#tol-ley-oro').val(articulo.tolLeyOro);
        $('#tol-ley-plata').val(articulo.tolLeyPlata);
        $('#tol-peso-oro').val(articulo.tolPesoOro);
        $('#tol-peso-plata').val(articulo.tolPesoPlata);
        $('#tol-conjunto-peso-oro').val(articulo.tolConjuntoPesoOro);
        $('#tol-conjunto-peso-plata').val(articulo.tolConjuntoPesoPlata);
        $('#premio-dolar').val(articulo.premioDolar);
        $('#premio-porcentaje').val(articulo.premioPorcentaje);

        // COSTEO
        // costos
        $('#contrato-cmm-select').dropdown('set selected', articulo.contratoCmm.id);
        $('#costo-produccion-usd').val(articulo.costoProduccionUsd);
        $('#costo-variable').val(articulo.costoVariable);
        $('#costo-fijo-herramental').val(articulo.costoFijoHerramental);

        // metal y acabado
        $('#metal-select').dropdown('set selected', articulo.metal.id);
        $('#acabado-select').dropdown('set selected', articulo.acabado.id);

        // contenido de metal
        $('#contenido-onzas-oro').val(articulo.contenidoOnzasOro);
        $('#contenido-onzas-plata').val(articulo.contenidoOnzasPlata);
        $('#merma-oro').val(articulo.mermaOro);
        $('#merma-plata').val(articulo.mermaPlata);
        $('#contenido-onzas-cobre').val(articulo.contenidoOnzasCobre);
        $('#contenido-porcentaje-cobre').val(articulo.contenidoPorcentajeCobre);

        // COMERCIALIZACION
        if (articulo.iva) {
            $('#iva-checkbox').checkbox('check');
        } else {
            $('#iva-checkbox').checkbox('uncheck');
        }

        // ver como hacer la relación con el tipo de comercialización
//            $('#tipo-comercializacion-select').dropdown('set selected', articulo.tipoCom)            

    });
}

function guardarArticulo() {
    var logArticuloDto = new LogArticuloObj();

//    dropdowns
    var $familia = $('#familia-select').val();
    var $tipoArticulo = $('#tipo-articulo-select').val();
    var $decreto = $('#decreto-select').val();
    var $metal = $('#metal-select').val();
    var $acabado = $('#acabado-select').val();
    var $tipoComercializacion = $('#tipo-comercializacion-select').val();
    var $contratoCmm = $('#contrato-cmm-select').val();
//    checks
    var $activo = $('#articulo-activo-checkbox').checkbox('is checked');
    var $iva = $('#iva-checkbox').checkbox('is checked');

    // ID
    logArticuloDto.fechaHora = $('label[name=fechaHora]').text();
    console.log("FechaHora: " + logArticuloDto.fechaHora);
    logArticuloDto.idArticulo = parseInt($('label[name=idArticulo]').text());
    console.log("ID: " + logArticuloDto.idArticulo);

    logArticuloDto.idArticuloErp = "000000001";
    console.log("Erp: " + logArticuloDto.idArticuloErp);
    logArticuloDto.decreto = $decreto;
    console.log("Decreto: " + logArticuloDto.decreto);
    logArticuloDto.acabado = $acabado;
    console.log("Acabado: " + logArticuloDto.acabado);
    logArticuloDto.familia = $familia;
    console.log("Familia: " + logArticuloDto.familia);
    logArticuloDto.metal = $metal;
    console.log("Metal: " + logArticuloDto.metal);
    logArticuloDto.tipoArticulo = $tipoArticulo;
    console.log("TipoArticulo: " + logArticuloDto.tipoArticulo);
    logArticuloDto.estado = 1; // artículo guardado
    console.log("Estado: " + logArticuloDto.estado);
    logArticuloDto.contratoCmm = $contratoCmm;
    console.log("ContatoCmm: " + logArticuloDto.contratoCmm);
    logArticuloDto.idCapsula = $('input[name=claveCapsula]').val();
    console.log("Cápsula: " + logArticuloDto.idCapsula);
    logArticuloDto.claveCmm = $('input[name=claveCmm]').val();
    console.log("ClaveCmm: " + logArticuloDto.claveCmm);
    logArticuloDto.descripcionLarga = $('input[name=descripcionLarga]').val();
    console.log("Descripción Larga: " + logArticuloDto.descripcionLarga);
    logArticuloDto.descripcionCorta = $('input[name=descripcionCorta]').val();
    console.log("Descripción Corta: " + logArticuloDto.descripcionCorta);
    logArticuloDto.descripcionIngles = $('input[name=descripcionIngles]').val();
    console.log("Descripción Inglés: " + logArticuloDto.descripcionIngles);
    logArticuloDto.cunio = $('input[name=cunio]').val();
    console.log("Cuño: " + logArticuloDto.cunio);
    logArticuloDto.ley = $('input[name=ley]').val();
    console.log("Ley: " + logArticuloDto.ley);
    logArticuloDto.espesor = $('input[name=espesor]').val();
    console.log("Espesor: " + logArticuloDto.espesor);
    logArticuloDto.diametro = $('input[name=diametro]').val();
    console.log("Diametro: " + logArticuloDto.diametro);
    logArticuloDto.valorNominal = $('input[name=valorNominal]').val();
    console.log("Valor Nominal: " + logArticuloDto.valorNominal);
    logArticuloDto.tolLeyOro = $('input[name=tolLeyOro]').val();
    console.log("Tol Oro: " + logArticuloDto.tolLeyOro);
    logArticuloDto.tolLeyPlata = $('input[name=tolLeyPlata]').val();
    console.log("Tol Plata: " + logArticuloDto.tolLeyPlata);
    logArticuloDto.tolPesoOro = $('input[name=tolPesoOro]').val();
    console.log("Peso Oro: " + logArticuloDto.tolPesoOro);
    logArticuloDto.tolPesoPlata = $('input[name=tolPesoPlata]').val();
    console.log("Peso Plata: " + logArticuloDto.tolPesoPlata);
    logArticuloDto.tolConjuntoPesoOro = $('input[name=tolConjuntoPesoOro]').val();
    console.log("Conjunto Oro: " + logArticuloDto.tolConjuntoPesoOro);
    logArticuloDto.tolConjuntoPesoPlata = $('input[name=tolConjuntoPesoPlata]').val();
    console.log("Conjunto Plata: " + logArticuloDto.tolConjuntoPesoPlata);
    logArticuloDto.premioDolar = $('input[name=premioDolar]').val();
    console.log("Premio Dolar: " + logArticuloDto.premioDolar);
    logArticuloDto.premioPorcentaje = $('input[name=premioPorcentaje]').val();
    console.log("Premio Porcentaje: " + logArticuloDto.premioPorcentaje);
    logArticuloDto.claveInforme = $('input[name=claveInforme]').val();
    console.log("Clave Informe: " + logArticuloDto.claveInforme);
    logArticuloDto.activo = $activo ? 1 : 0;
    console.log("Activo: " + logArticuloDto.activo);
    logArticuloDto.iva = $iva ? 1 : 0;
    console.log("Iva: " + logArticuloDto.iva);
    logArticuloDto.costoProduccionUsd = $('input[name=costoProduccionUsd]').val();
    console.log("Costo USD: " + logArticuloDto.costoProduccionUsd);
    logArticuloDto.costoVariable = $('input[name=costoVariable]').val();
    console.log("Costo Variable: " + logArticuloDto.costoVariable);
    logArticuloDto.costoFijoHerramental = $('input[name=costoFijoHerramental]').val();
    console.log("Costo Herramental: " + logArticuloDto.costoFijoHerramental);
    logArticuloDto.contenidoOnzasOro = $('input[name=contenidoOnzasOro]').val();
    console.log("Contenido Oro: " + logArticuloDto.contenidoOnzasOro);
    logArticuloDto.contenidoOnzasPlata = $('input[name=contenidoOnzasPlata]').val();
    console.log("Contenido Plata: " + logArticuloDto.contenidoOnzasPlata);
    logArticuloDto.contenidoPorcentajeCobre = $('input[name=contenidoPorcentajeCobre]').val();
    console.log("Contenido Porcentaje: " + logArticuloDto.contenidoPorcentajeCobre);
    logArticuloDto.contenidoOnzasCobre = $('input[name=contenidoOnzasCobre]').val();
    console.log("Contenido Onzas Cobre: " + logArticuloDto.contenidoOnzasCobre);
    logArticuloDto.mermaOro = $('input[name=mermaOro]').val();
    console.log("Merma Oro: " + logArticuloDto.mermaOro);
    logArticuloDto.mermaPlata = $('input[name=mermaPlata]').val();
    console.log("Merma Plata: " + logArticuloDto.mermaPlata);
    // Pasar una lista con la informacion reelevante del artículo
    logArticuloDto.infoExtra = "";
    console.log("Info Extra: " + logArticuloDto.infoExtra);
    // la información se llena en el back al recuperar a los usuarios que registran y autorizan
    logArticuloDto.claveUsuAutoriza = "";
    console.log("Clave Autoriza: " + logArticuloDto.claveUsuAutoriza);
    logArticuloDto.claveUsuRegistra = "";
    console.log("Clave Registra: " + logArticuloDto.claveUsuRegistra);

    console.log(logArticuloDto);

    peticionGuardarArticulo(logArticuloDto);
}

function peticionGuardarArticulo(logArticuloDto) {
    console.log("PETICION GUARDAR");
    $.ajax({
        url: APP_CONTEXT + '/articulo/ajax/save',
        contentType: 'application/json',
        async: false,
        type: 'POST',
        data: JSON.stringify(logArticuloDto),
        dataType: 'json',
//        success: function (data, textStatus, jqXHR) {
        success: function (idArticulo) {

//            a continuación ver si hay imagenes a guardar, si se necesitan guardar
//            se hace la siguiente petición para guardar las imágenes
//            if (imagenes !== null) {
//                guardarImagen();
//            }
            console.log('se completo el guardado');
            notifySicon.show(notifySicon.TITLE_GUARDAR, notifySicon.MSG_GUARDAR);
        },
        complete: function (jqXHR, textStatus) {
            console.log("-------completed----------");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            notifySicon.show(notifySicon.TITLE_ERROR, notifySicon.MSG_ERROR_GUARDAR);
            console.log("-------error----------");
            console.log(jqXHR);
            console.log(errorThrown);
            console.log("-------error----------");
        }
    });
//    $ajaxReq.
}

function guardarImagen() {
    // TODO
}

var resetAllFields = function () {
    $('.form').form('clear');
    // imagen
    $('.upload-button-remove').trigger('click');
    // drompdown
    $('.ui.dropdown').dropdown('clear');
    // tabs
    $('div.tab.active').removeClass('active');
    $('div.menu a.item').removeClass('active');
    $('div.tab:first').addClass('active');
    $('div.menu a:first').addClass('active');
    // modal
    $('.pestanias.menu a.item').removeClass('active');
    $('.contenido.tab.active').removeClass('active');
    $('.pestanias.menu a:first').addClass('active');
    $('.contenido .tab.uno').addClass('active');
    // grid BuscarArtículo
    $('.content').each(function () {
        w2ui['grid-buscar-articulo'].clear();
    });
};

//var resizeGrids = function () {
//    $('.content').each(function () {
//        w2ui['grid-buscar-articulo'].resize();
//        w2ui['grid-buscar-log-articulo'].resize();
//    });
//};

function test() {
    $('input[name=activoCheckbox]').on('change', function () {
//        alert("Si entré");
//        ver como recuperar el valor del toggle
        console.log($('input[name=activo]').val());
    });

//    var otro = $('input[name=activo]').val();
}

function eliminarArticulo() {
    //TODO completar lógica backend
    var $grid = w2ui['grid-buscar-articulo'];
    var recID = $grid.getSelection();
    $grid.remove(recID);
    w2popup.close();
}

//objeto articulo
function LogArticuloObj() {
    // id
    this.fechaHora = null;
    this.idArticulo = null;

    this.idArticuloErp = "";
    this.decreto = null;
    this.acabado = null;
    this.familia = null;
    this.metal = null;
    this.tipoArticulo = null;
    this.estado = null;
    this.contratoCmm = null;
    this.idCapsula = null;
    this.claveCmm = null;
    this.descripcionLarga = null;
    this.descripcionCorta = null;
    this.descripcionIngles = null;
    this.cunio = null;
    this.ley = null;
    this.espesor = null;
    this.diametro = null;
    this.valorNominal = null;
    this.tolLeyOro = null;
    this.tolLeyPlata = null;
    this.tolPesoOro = null;
    this.tolPesoPlata = null;
    this.tolConjuntoPesoOro = null;
    this.tolConjuntoPesoPlata = null;
    this.premioDolar = null;
    this.premioPorcentaje = null;
    this.claveInforme = null;
    this.costoProduccionUsd = null;
    this.costoVariable = null;
    this.costoFijoHerramental = null;
    this.contenidoOnzasOro = null;
    this.contenidoOnzasPlata = null;
    this.contenidoPorcentajeCobre = null;
    this.contenidoOnzasCobre = null;
    this.mermaOro = null;
    this.mermaPlata = null;
    this.infoExtra = null;
    this.claveUsuRegistra = null;
    this.claveUsuAutoriza = null;
    this.fechaEnvioAutorizar = null;
    this.fechaAutorizado = null;
    this.iva = null;
    this.activo = null;
}

function TipoComercializacion() {
    this.tipoComercializacion;
}