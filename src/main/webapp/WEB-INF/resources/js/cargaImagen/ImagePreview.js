/**
 * Manejador para generar el preview de una imagen local antes de ser
 * persistida en la DB.
 * @param  opciones  {Object} las opciones para configurar la petici�n
 *                            as�ncrona para generar el preview.
 * @param  idBtnFile {String} id del input type=file.
 * @param  idForm    {String} id de la forma que contiene el input type=file.
 * @return <code>void</code>
 */

var posicion = null;
var documento = null;

function imagePreviewHandler(opciones, idBtnFile, idForm, cara) {
    //generar el preview inmediatamente despues de seleccionar imagen
    $('#' + idBtnFile).change(function () {
        $('#' + idForm).ajaxSubmit(opciones);
        posicion = cara;
        documento = idBtnFile;
    });
}

/***** definir callbacks para cada preview distinto que se desee ******/

// pre-submit callback
function showRequest(formData, jqForm, options) {
    // formData is an array; here we use $.param to convert it to a string to display it
    // but the form plugin does this for you automatically when it submits the data
    var queryString = $.param(formData);

    // jqForm is a jQuery object encapsulating the form element.  To access the
    // DOM element for the form do this:
    // var formElement = jqForm[0];

    alert('About to submit: \n\n' + queryString);

    // here we could return false to prevent the form from being submitted;
    // returning anything other than false will allow the form submit to continue
    return true;
}

// post-submit callback
function showResponse(responseText, statusText, xhr, $form) {
    // for normal html responses, the first argument to the success callback
    // is the XMLHttpRequest object's responseText property

    // if the ajaxSubmit method was passed an Options Object with the dataType
    // property set to 'xml' then the first argument to the success callback
    // is the XMLHttpRequest object's responseXML property

    // if the ajaxSubmit method was passed an Options Object with the dataType
    // property set to 'json' then the first argument to the success callback
    // is the json data object returned by the server

    //alert('status: ' + statusText + '\n\nresponseText: \n' + responseText +
    //    '\n\nThe output div should have already been updated with the responseText.');

    var imgPreview = $('.preview' + posicion + ' img');
    var nav = navigator.appName;

    if (imgPreview.attr("id") == "imagenInvalida") {
        imgPreview.attr("width", "130");
        //Determinar si el navegador es IE u Otro
        if (nav == "Microsoft Internet Explorer") {
            //Clonar el input para inicializarlo
            $fileupload = $('#' + documento);
            $fileupload.replaceWith($fileupload.clone(true));
        } else {
            //resetear manualmente el input type=file
            $('#' + documento).val('');
        }
        //iluminar el recuadro del nombre del archivo
        if ($("#numeroImagen").val() === "imagenUno") {
            $(".card_uno .content").addClass("error_manual");
        } else {
            $(".card_dos .content").addClass("error_manual");
        }
    } else {
        imgPreview.attr("width", "155");
        imgPreview.removeAttr("height");
        //iluminar el recuadro del nombre del archivo
        if ($("#numeroImagen").val() === "imagenUno") {
            $(".card_uno .content").removeClass("error_manual");
        } else {
            $(".card_dos .content").removeClass("error_manual");
        }
    }
    //Asigna el nombre del archivo a la etiqueta del elemento card semantic ui
    if ($("#numeroImagen").val() === "imagenUno") {
        $("#etiqueta_imagen_uno").text(($("#imagenUno").val()).split("\\").length === 1 ? $("#imagenUno").val() : ($("#imagenUno").val()).split("\\")[($("#imagenUno").val()).split("\\").length - 1]);
    } else {
        $("#etiqueta_imagen_dos").text(($("#imagenDos").val()).split("\\").length === 1 ? $("#imagenDos").val() : ($("#imagenDos").val()).split("\\")[($("#imagenDos").val()).split("\\").length - 1]);
    }
    //Redimensiona el tamaño del contenedor principal del card
    dimension();
}

// error callback
function showError() {
    alert("Error al hacer el image preview");
}

//Recalcular dimensión imagen
function dimension() {
    var dimImgUno = parseInt($(".previewUno img").css("height")) + 48;
    $(".card_uno").css("height", dimImgUno + "px");
    var dimImgDos = parseInt($(".previewDos img").css("height")) + 48;
    $(".card_dos").css("height", dimImgDos + "px");
}