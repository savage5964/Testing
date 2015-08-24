var APP_CONTEXT = "/ArticuloSicon";
var TIPO_CLIENTE_DISTRIBUIDOR = 2;
var TIPO_CONTRATO_DEPOSITO = 1;
var TIPO_DIRECCION_FISCAL = 1;
var TIPO_DIRECCION_PARTICULAR = 2;
var ESTADO_GUARDADO = 1;
var ESTADO_ENVIADO_A_AUTORIZAR = 2;
var ESTADO_AUTORIZADO = 3;

$(function(){
    // handler borrar formularios
    $('main').on('click', 'a.label.limpiar', function(e){
        e.preventDefault();
        $(this).parent().form('clear');
    });    
});

var notifySicon = {
    TITLE_GUARDAR           : "Guardar",
    TITLE_ENVIAR_AUTORIZAR  : "Enviar a autorizar",
    TITLE_AUTORIZAR         : "Autorizar",
    TITLE_ATENCION          : "Atención",
    MSG_GUARDAR             : "El registro se ha guardado exitosamente",
    MSG_ENVIAR_AUTORIZAR    : "El registro se ha enviado a autorizar exitosamente",
    MSG_AUTORIZAR           : "Autorización exitosa",
    MSG_ELIMINAR            : "El registro seleccionado será eliminado de forma permante. ¿Desea continuar?",
    MSG_SIN_REGISTRO        : "Debe seleccionar algún registro",
    show : function (title, msg){
        w2popup.open({
            title     : title,
            body      : '<div class="w2ui-centered">' + msg + '</div>',
            buttons   : '<button class="ui primary button btn" onclick="w2popup.close();">Aceptar</button>',
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
    }
};

//Debe existir la etiqueta <div id="contenedor_detalle_kit"></div>
var detalleKit = {
    show: function(idKit){ 
            var detalleKit = '<div id="detalle_kit_modal" class="ui modal">'
            +       '<div class="ui rised segment">'
            +           '<div id="tabs_detalle_kit" class="ui top attached tabular menu">'
            +               '<a class="item active" data-tab="first_detalle_kit">Definición</a>'
            +               '<a class="item" data-tab="second_detalle_kit">Artículos</a>'
            +               '<div class="right menu menu_detalle_kit"><span>ID kit:</span><span>0608</span><span>Estado:</span><span>Activo/Autorizado</span></div>'
            +           '</div>'
            +           '<div class="ui bottom attached tab segment active" data-tab="first_detalle_kit">'   
            +               '<div class="ui rised segment">'
            +                   '<div class="ui blue ribbon label">'
            +                       '<i class="tags icon"></i>' 
            +                       'Datos del kit'
            +                   '</div>'
            +                   '<div class="ui two column stackable grid">'
            +                       '<div class="column five wide">'
            +                           '<div class="ui card">'
            +                               '<div id="detalle_imagenes_kit" class="ui slide masked reveal image">'
            +                                   '<img src="./resources/images/herencia1.jpg" class="visible content">'
            +                                   '<img src="./resources/images/herencia2.jpg" class="hidden content">'
            +                               '</div>'
            +                               '<div class="content content_detalle_kit">'
            +                                   '<div class="meta">'
            +                                       '<a>Imagen uno</a>'
            +                                   '</div>'                
            +                               '</div>'
            +                           '</div>'
            +                       '</div>'
            +                       '<div class="column eleven wide">'
            +                           '<table class="ui table table_detalle_kit">'
            +                               '<tr>'
            +                                   '<td class="five wide">Descripción corta:</td>'
            +                                   '<td>SERIE1: Herencia numismática</td>'
            +                               '</tr>'
            +                               '<tr>'
            +                                   '<td class="five wide">Descripción larga:</td>'
            +                                   '<td>SERIE 1: Herencia Numismática con estuche y certificado. 6 Monedas: 8 Reales de 1732; 8 Reales Carlos III de 1783; Morelos de 8 Reales tipo SUD; 8 Reales de1824 Resplandor; Un Peso de 1914; Un Peso de 1913 Hidalgo del Parral Chihuahua Tipo Bolita. </td>'
            +                               '</tr>'
            +                               '<tr>'
            +                                   '<td class="five wide">Descripción en inglés:</td>'
            +                                   '<td>Sin descripción</td>'
            +                               '</tr>'
            +                               '<tr>'
            +                                   '<td class="five wide">Información extra:</td>'
            +                                   '<td>Sin información extra</td>'
            +                               '</tr>'
            +                               '<tr>'
            +                                   '<td class="five wide">Premio:</td>'
            +                                   '<td>16 DLS</td>'
            +                               '</tr>'
            +                               '<tr>'
            +                                   '<td class="five wide">Registró:</td>'
            +                                   '<td>Pamela Elizalde - 18/04/2015</td>'
            +                               '</tr>'
            +                               '<tr>'
            +                                   '<td class="five wide">Autorizó:</td>'
            +                                   '<td>Aidee Bautista - 18/04/2015</td>'
            +                               '</tr>'                                       
            +                           '</table>'
            +                       '</div>'
            +                   '</div>'
            +               '</div>'
            +           '</div>'
            +           '<div class="ui bottom attached tab segment" data-tab="second_detalle_kit">'
            +               '<div class="ui rised segment">'
            +                   '<div class="ui blue ribbon label">'
            +                       '<i class="table icon"></i>' 
            +                       'Artículos del kit'
            +                   '</div>'
            +                   '<div id="detalle_articulos_kit"></div>'
            +               '</div>'  
            +           '</div>'
            +       '</div>'
            +   '</div>';
        //Elimino cualquier contenedor emergente que se haya desplegado anteriormente del kit
        $(".ui.dimmer.modals.page.transition.hidden #detalle_kit_modal").remove();
        $(".ui.dimmer.modals.page.transition.visible.active #detalle_kit_modal").remove();      
        //Seteo la definición del modal que muestra el detalle del kit
        $("#contenedor_detalle_kit").html(detalleKit);
        //Muestra la pantalla emergente del detalle del kit
        $("#detalle_kit_modal").modal({onHide: function(){ w2ui['detalle_articulos_kit'].destroy(); }}).modal('show');
        //Creo la funcionalidad de los tabs que mostrarán las agrupaciones de los datos del kit
        $('#tabs_detalle_kit .item').tab({
            onVisible: function () {
                w2ui['detalle_articulos_kit'].resize();
            }
        });
        //Funcionalidad para cambiar el texto que tiene cada imagen del kit
        $("#detalle_imagenes_kit").hover(function () {
            $(".content_detalle_kit a").text("Imagen dos");
        }, function () {
            $(".content_detalle_kit a").text("Imagen uno");
        });  
        this.getTable();   
    },
    getTable: function(){
        $('#detalle_articulos_kit').w2grid({
        name: 'detalle_articulos_kit',
        show: {
            toolbar: true,
            footer: true,
            toolbarReload: false,
            toolbarColumns: false,
            toolbarAdd: false,
            toolbarDelete: false,
            toolbarSave: false,
            toolbarEdit: false
        }, toolbar: {
            items: [
                {type: 'spacer'},
                {type: 'button', id: 'item-mostrar-articulo', caption: 'Detalle del artículo', icon: 'w2ui-icon-search', disabled: false}
            ],
            onClick: function (target, data) {
//                if (target === 'item-agregar-articulo') {
//                    $("#buscar_articulo_modal").modal('show');
//                    w2ui['buscar-articulos-grid'].resize();
//                    $("#error_articulos_kit").removeClass("error_manual");
//                } else {
//                    if (validaRegistroSeleccionado(w2ui["ver-articulos-grid"].getSelection()) === false) {
//                        notifySicon.show(notifySicon.TITLE_ATENCION, notifySicon.MSG_SIN_REGISTRO);
//                        return;
//                    }
//                    quitarArticuloKit();
//                }
            }
        },
        columns: [
            {field: 'recid', caption: 'ID artículo', size: '8%', sortable: true, attr: 'align=center'},
            {field: 'descripcionCorta', caption: 'Descripción corta', size: '20%', sortable: true, resizable: true},
            {field: 'familia', caption: 'Familia', size: '20%', sortable: true, resizable: true},
            {field: 'metal', caption: 'Metal', size: '11%', sortable: true, resizable: true},
            {field: 'acabado', caption: 'Acabado', size: '11%', sortable: true, resizable: true},
            {field: 'valorFacial', caption: 'Valor facial', size: '11%', sortable: true, resizable: true},
            {field: 'cunio', caption: 'Cuño', size: '8%', sortable: true, resizable: true},
            {field: 'cantidad', caption: 'Cantidad', size: '8%', sortable: false, resizable: true, editable: {type: 'int', min: 1}}
        ],
        sortData: [{field: 'recid', direction: 'ASC'}],
        records: [
            {recid: 11, descripcionCorta: 'Onza Libertad', familia: 'Libertad', metal: 'plata', acabado: 'Proof', valorFacial: '50', cunio: '2013', cantidad: '58'},
            {recid: 24, descripcionCorta: 'Onza Libertad', familia: 'Libertad', metal: 'plata', acabado: 'Proof', valorFacial: '25', cunio: '2014', cantidad: '14'},
            {recid: 37, descripcionCorta: 'Onza Libertad', familia: 'Libertad', metal: 'plata', acabado: 'Proof', valorFacial: '10', cunio: '2015', cantidad: '22'}
        ]
    });
    }
};
