/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    tabsKit();//Pinta los tabs de la pantalla principal kit
    definicion();//Convierte los elementos a componentes semantic
    busqueda();//Busca el kit específico con sus métodos de modificar y eliminar
    armado();//Crea la tabla de armado del kit con los métodos de agregar y eliminar
    borrar();//Reinicia todos los campos por contenedor a su valor default
    cargarImagen();//Carga y muestra las imágenes del kit
    contenidoKit();//Crea la tabla de los artículos que pueden pertenecer al kit
    guardarAutorizarKit();//Función para gurdar o enviar a validar el registro
    validarInformacion();//Valida los campos del formulario
    cargarArticulo();//Carga al kit los artículos seleccionados
    cerrarCargarArticulo();//Esconde la pantalla emergente al oprimir cerrar
});

function tabsKit() {
    $('.menu .item').tab({
        onVisible: function () {
            w2ui['buscar-articulos-grid'].resize();
            w2ui['ver-articulos-grid'].resize();
        }
    });
}

function definicion() {
    $('.ui .dropdown').dropdown();
}

function busqueda() {
    $("#buscar_kit_button").click(function () {
        $("#buscar_kit_modal").modal('show');
        w2ui['mostrar-kit-grid'].resize();
    });
    $('#mostrar-kit-grid').w2grid({
        name: 'mostrar-kit-grid',
        show: {
            toolbar: true,
            footer: true,
            toolbarReload: false,
            toolbarColumns: false,
            toolbarAdd: false,
            toolbarDelete: false,
            toolbarSave: false,
            toolbarEdit: false
        },
        multiSelect: false,
        toolbar: {
            items: [
                {type: 'spacer'},
                {type: 'button', id: 'item-editar', caption: 'Editar', icon: 'w2ui-icon-pencil', disabled: false},
                {type: 'break'},
                {type: 'button', id: 'item-eliminar', caption: 'Eliminar', icon: 'w2ui-icon-cross', disabled: false}
            ],
            onClick: function (target, data) {
                if (target === 'item-eliminar') {
                    if (validaRegistroSeleccionado(w2ui["mostrar-kit-grid"].getSelection()) === false) {
                        notifySicon.show(notifySicon.TITLE_ATENCION, notifySicon.MSG_SIN_REGISTRO);
                        return;
                    }
                    // TODO agregar lógica botón aceptar
                    w2popup.open({
                        title: notifySicon.TITLE_ATENCION,
                        body: '<div class="w2ui-centered">' + notifySicon.MSG_ELIMINAR + '</div>',
                        buttons: '<button class="ui primary button btn" onclick="eliminarKit();">Aceptar</button><button class="ui black button btn" onclick="w2popup.close();">Cancelar</button>',
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
                    if (validaRegistroSeleccionado(w2ui["mostrar-kit-grid"].getSelection()) === false) {
                        notifySicon.show(notifySicon.TITLE_ATENCION, notifySicon.MSG_SIN_REGISTRO);
                        return;
                    }
                    editarKit();
                }
            }
        },
        columns: [
            {field: 'recid', caption: 'ID kit', size: '8%', sortable: true, attr: 'align=center'},
            {field: 'descripcionCorta', caption: 'Descripción corta', size: '25%', sortable: true, resizable: true},
            {field: 'descripcionLarga', caption: 'Descripción larga', size: '45%', sortable: true, resizable: true},
            {field: 'estado', caption: 'Estado', size: '22%', sortable: true, resizable: true}
        ],
        sortData: [{field: 'recid', direction: 'ASC'}],
        records: [
            {recid: 91, descripcionCorta: 'Onza Libertad1', descripcionLarga: 'Onza libertad 2014', estado: 'DISPONIBLE'},
            {recid: 22, descripcionCorta: 'Onza Libertad2', descripcionLarga: 'Onza libertad 2014', estado: 'DISPONIBLE'},
            {recid: 30, descripcionCorta: 'Onza Libertad3', descripcionLarga: 'Onza libertad 2014', estado: 'DISPONIBLE'}
        ],
    });
}

function armado() {
    $('#ver-articulos-grid').w2grid({
        name: 'ver-articulos-grid',
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
            type: 'break'
        }, toolbar: {
            items: [
                {type: 'spacer'},
                {type: 'button', id: 'item-agregar-articulo', caption: 'Agregar artículo', icon: 'w2ui-icon-plus', disabled: false},
                {type: 'break'},
                {type: 'button', id: 'item-eliminar-articulo', caption: 'Eliminar', icon: 'w2ui-icon-cross', disabled: false}
            ],
            onClick: function (target, data) {
                if (target === 'item-agregar-articulo') {
                    $("#buscar_articulo_modal").modal('show');
                    w2ui['buscar-articulos-grid'].resize();
                    $("#error_articulos_kit").removeClass("error_manual");
                } else {
                    if (validaRegistroSeleccionado(w2ui["ver-articulos-grid"].getSelection()) === false) {
                        notifySicon.show(notifySicon.TITLE_ATENCION, notifySicon.MSG_SIN_REGISTRO);
                        return;
                    }
                    quitarArticuloKit();
                }
            }
        },
        columns: [
            {field: 'recid', caption: 'ID artículo', size: '8%', sortable: true, attr: 'align=center'},
            {field: 'descripcionCorta', caption: 'Descripción corta', size: '20%', sortable: true, resizable: true},
            {field: 'familia', caption: 'Familia', size: '20%', sortable: true, resizable: true},
            {field: 'metal', caption: 'Metal', size: '11%', sortable: true, resizable: true},
            {field: 'acabado', caption: 'Acabado', size: '11%', sortable: true, resizable: true},
            {field: 'valorFacial', caption: 'Valor facial', size: '11%', sortable: true, resizable: true},
            {field: 'cunio', caption: 'Cuño', size: '9%', sortable: true, resizable: true},
            {field: 'cantidad', caption: 'Cantidad', size: '9%', sortable: false, resizable: true, editable: {type: 'int', min: 1}}
        ],
        sortData: [{field: 'recid', direction: 'ASC'}]//,
//        records: [
//            {recid: 11, descripcionCorta: 'Onza Libertad', familia: 'Libertad', metal: 'plata', acabado: 'Proof', valorFacial: '50', cunio: '2013', cantidad: '58'},
//            {recid: 24, descripcionCorta: 'Onza Libertad', familia: 'Libertad', metal: 'plata', acabado: 'Proof', valorFacial: '25', cunio: '2014', cantidad: '14'},
//            {recid: 37, descripcionCorta: 'Onza Libertad', familia: 'Libertad', metal: 'plata', acabado: 'Proof', valorFacial: '10', cunio: '2015', cantidad: '22'}
//        ]
    });
}

function borrar() {
    $(".clear_form").on("click", function () {
        $(this).parent().find(".form").form("clear");
    });
    $(".clear_interno_button").on("click", function () {
        $(".clear_interno_form").form("clear");
    });
    $("#borrar_imagen_kit").on("click", function () {
        $("#cargar_imgUno_input").val("");
        $("#cargar_imgDos_input").val("");
        $("#numeroImagen").val("");
        $(".previewUno img,.previewDos img").attr("src", "/sicon/resources/images/bm.png");
        dimension();
        $("#etiqueta_imagen_uno,#etiqueta_imagen_dos").text("Sin imagen");
        $(".card_uno .content,.card_dos .content").removeClass("error_manual");
    });
}

function cargarImagen() {
    $("#cargar_imgUno_button").click(function () {
        $("#numeroImagen").val("imagenUno");
        $("#cargar_imgUno_input").click();

    });
    $("#cargar_imgDos_button").click(function () {
        $("#numeroImagen").val("imagenDos");
        $("#cargar_imgDos_input").click();
    });
    mostrarImagen("cargar_imgUno_input", "kitModel", "Uno");
    mostrarImagen("cargar_imgDos_input", "kitModel", "Dos");
    $("#cargar_imgUno_input,#cargar_imgDos_input").val("");
}

function contenidoKit() {
    $('#buscar-articulos-grid').w2grid({
        name: 'buscar-articulos-grid',
        show: {
            toolbar: true,
            footer: true,
            toolbarReload: false,
            toolbarColumns: false,
            toolbarAdd: false,
            toolbarDelete: false,
            toolbarSave: false,
            toolbarEdit: false
        },
        columns: [
            {field: 'recid', caption: 'ID artículo', size: '8%', sortable: true, attr: 'align=center'},
            {field: 'descripcionCorta', caption: 'Descripción corta', size: '20%', sortable: true, resizable: true},
            {field: 'familia', caption: 'Familia', size: '20%', sortable: true, resizable: true},
            {field: 'metal', caption: 'Metal', size: '11%', sortable: true, resizable: true},
            {field: 'acabado', caption: 'Acabado', size: '11%', sortable: true, resizable: true},
            {field: 'valorFacial', caption: 'Valor facial', size: '11%', sortable: true, resizable: true},
            {field: 'cunio', caption: 'Cuño', size: '9%', sortable: true, resizable: true}
        ],
        sortData: [{field: 'recid', direction: 'ASC'}],
        records: [
            {recid: 1, descripcionCorta: 'Onza Libertad', familia: 'Libertad', metal: 'plata', acabado: 'Proof', valorFacial: '50', cunio: '2013'},
            {recid: 2, descripcionCorta: 'Onza Libertad', familia: 'Libertad', metal: 'plata', acabado: 'Proof', valorFacial: '25', cunio: '2014'},
            {recid: 3, descripcionCorta: 'Onza Libertad', familia: 'Libertad', metal: 'plata', acabado: 'Proof', valorFacial: '10', cunio: '2015'}
        ]
    });
}

function guardarAutorizarKit() {
    $("#guardar_kit").click(function () {
        notifySicon.show(notifySicon.TITLE_GUARDAR, notifySicon.MSG_GUARDAR);
    });
    $("#autorizar_kit").click(function () {
        if (validarPremio() === false) {
            return;
        }
        notifySicon.show(notifySicon.TITLE_ENVIAR_AUTORIZAR, notifySicon.MSG_ENVIAR_AUTORIZAR);
    });
}

function validarInformacion() {
    $('#definicion_kit_form')
            .form({
                fields: {
                    descCorta: {
                        identifier: 'descCorta',
                        rules: [
                            {
                                type: 'empty',
                                prompt: 'La descripción corta es obligatoria'
                            }
                        ]
                    },
                    descIngles: {
                        identifier: 'descIngles',
                        rules: [
                            {
                                type: 'empty',
                                prompt: 'La descripción en inglés es obligatoria'
                            }
                        ]
                    },
                    descLarga: {
                        identifier: 'descLarga',
                        rules: [
                            {
                                type: 'empty',
                                prompt: 'La descripción larga es obligatoria'
                            }
                        ]
                    },
                    estado: {
                        identifier: 'estado',
                        rules: [
                            {
                                type: 'empty',
                                prompt: 'El estado es obligatorio'
                            }
                        ]
                    }
                }
            });
}

function validarPremio() {
    var formVal = $('#definicion_kit_form').form("is valid");
    var premioDolar = $("#premio_dolar").val().trim();
    var premioPorcentaje = $("#premio_porcentaje").val().trim();
    var numArtículos = ($("#id_artículo_kit").val()).split(",").length;
    $("#premio_dolar").keypress(function () {
        $(this).parent().removeClass("error");
        $("#premio_porcentaje").parent().removeClass("error");
    });
    $("#premio_porcentaje").keypress(function () {
        $(this).parent().removeClass("error");
        $("#premio_dolar").parent().removeClass("error");
    });
    if (premioDolar === '' && premioPorcentaje === '') {
        $("#premio_porcentaje,#premio_dolar").parent().addClass('error');
        formVal = false;
    } else if (premioDolar !== '' && premioPorcentaje !== '') {
        $("#premio_porcentaje,#premio_dolar").parent().addClass('error');
        formVal = false;
    }
    if (premioPorcentaje !== '' && $.isNumeric(premioPorcentaje) !== true) {
        $("#premio_porcentaje").parent().addClass('error');
    }
    if (premioDolar !== '' && $.isNumeric(premioDolar) !== true) {
        $("#premio_dolar").parent().addClass('error');
    }
    if (numArtículos < 2) {
        $("#error_articulos_kit").addClass("error_manual");
        formVal = false;
    } else {
        $("#error_articulos_kit").removeClass("error_manual");
    }
    return formVal;
}

function eliminarKit() {
    var selectorGridKit = w2ui["mostrar-kit-grid"];
    var sel = selectorGridKit.getSelection();
    //selectorGridKit.get(sel)).descripcionCorta); 
    selectorGridKit.remove(sel);
    w2popup.close();
}

function editarKit() {
    //Buscar en base y setear valores
    $('#buscar_kit_modal').modal('hide');

}

function validaRegistroSeleccionado(regSel) {
    if (regSel.length === 0) {
        return false;
    }
    return true;
}

function quitarArticuloKit() {
    var selectorGridArticulo = w2ui["ver-articulos-grid"];
    var sel = selectorGridArticulo.getSelection();
    alert(sel);
    for (var i = 0; i < sel.length; i++) {
        selectorGridArticulo.remove(sel[i]);
    }
    //selectorGridKit.get(sel)).descripcionCorta); 
    //selectorGridArticulo.remove(sel);
    //w2popup.close();
}

function cargarArticulo() {
    $("#agregar_articulo_kit").on("click", function () {
        var selectorGridArticulo = w2ui["buscar-articulos-grid"];
        var sel = selectorGridArticulo.getSelection();
        for (var i = 0; i < sel.length; i++) {
            w2ui["ver-articulos-grid"].add({
                recid: (selectorGridArticulo.get(sel[i])).recid,
                descripcionCorta: (selectorGridArticulo.get(sel[i])).descripcionCorta,
                familia: (selectorGridArticulo.get(sel[i])).familia,
                metal: (selectorGridArticulo.get(sel[i])).metal,
                acabado: (selectorGridArticulo.get(sel[i])).acabado,
                valorFacial: (selectorGridArticulo.get(sel[i])).valorFacial,
                cunio: (selectorGridArticulo.get(sel[i])).cunio,
                cantidad: 1});
            selectorGridArticulo.remove(sel[i]);
        }
    });
}

function cerrarCargarArticulo() {
    $("#salir_articulo_kit").on("click", function () {
        $('#buscar_articulo_modal').modal('hide');
    });
}