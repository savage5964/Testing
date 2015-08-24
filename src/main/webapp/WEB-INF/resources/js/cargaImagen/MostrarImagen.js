/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//Ajax Image Preview
function mostrarImagen(idBtn,idFrm,cara){ 
    var options = {
        url:           'ImageReader',
        type:          'POST',
        target:        '.preview' + cara, //target element(s) to be updated with server response
        success:       showResponse, //post-submit callback
        error:         showError
    };
    imagePreviewHandler( options, idBtn, idFrm, cara );  
}//Fin
                
