<%-- 
    Document   : catalogo_kit
    Created on : 21/07/2015, 09:16:11 AM
    Author     : D13515
--%>

<%@page isELIgnored="false" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
    <head>
        <c:set var="contextPath" value="${pageContext.servletContext.contextPath}"/>
        <script src="${contextPath}/resources/js/sicon/catalogo/kit.js"></script>
        <script src="${contextPath}/resources/js/cargaImagen/ImagePreview.js"></script>
        <script src="${contextPath}/resources/js/cargaImagen/MostrarImagen.js"></script>
        <script src="${contextPath}/resources/js/jquery.form.min.js"></script>
        <link rel="stylesheet" href="${contextPath}/resources/css/sicon/catalogo/kit.css" />
        <title>Catálogo kit</title>
    </head>
    <body>
        <main class="ui container">

            <div class="ui top attached tabular menu">
                <a class="item active" data-tab="first">Definición</a>
                <a class="item" data-tab="second">Armado</a>
                <div class="right menu">
                    <div id="buscar_kit_button" class="ui button" style="background:none;"><i class="search icon"></i>Buscar kit</div>
                </div>
            </div>

            <div class="ui bottom attached tab segment active" data-tab="first">         
                <div class="ui rised segment">
                    <div class="ui blue ribbon label">
                        <i class="browser icon"></i> 
                        Datos del kit
                    </div>
                    <a class="ui blue right corner label clear_form">
                        <i class="erase icon"></i>
                    </a>
                    <div id="definicion_kit_form" class="ui form ">
                        <div class="two fields">
                            <div class="field">
                                <label>Descripción corta:</label>   
                                <input id="desc_corta" name="descCorta" type="text" placeholder="Descripción corta">
                            </div>  
                            <div class="field">
                                <label>Descripción en inglés:</label>      
                                <input id="desc_ingles" name="descIngles" type="text" placeholder="Descripción en inglés">
                            </div>
                        </div>
                        <div class="fields">
                            <div class="twelve wide field">
                                <label>Descripción larga:</label>                 
                                <input id="desc_larga" name="descLarga" type="text" placeholder="Descripción larga">
                            </div>
                            <div class="four wide field">
                                <label>Estado:</label>
                                <select id="estado" name="estado" class="ui fluid search dropdown">
                                    <option value="">Estado</option>
                                    <option value="1" selected>Activo</option>
                                    <option value="2">Inactivo</option>	
                                </select>
                            </div>
                        </div>
                        <div class="two fields">
                            <div class="field">
                                <label>Premio dólar</label>                 
                                <input id="premio_dolar" name="premioDolar" type="text" placeholder="Premio en dólares">
                            </div>
                            <div class="field">
                                <label>Premio porcentaje</label>                 
                                <input id="premio_porcentaje" name="premioPorcentaje" type="text" placeholder="Premio en porcentaje">
                            </div>
                        </div>
                    </div>
                </div>      
                <div class="ui rised segment">
                    <div class="ui blue ribbon label">
                        <i class="photo icon"></i> 
                        Imágenes del kit
                    </div>
                    <a id="borrar_imagen_kit" class="ui blue right corner label clear_form">
                        <i class="erase icon"></i>
                    </a>
                    <form id="kitModel" action="#" method="POST" enctype="multipart/form-data">
                        <div class="ui cards centered">
                            <div class="card card_uno">
                                <a id="cargar_imgUno_button" class="ui blue right corner label">
                                    <i class="upload icon"></i>
                                </a>
                                <div class="image previewUno">      
                                    <img src="${contextPath}/resources/images/bm.png">
                                </div>
                                <div class="content">
                                    <div class="meta">
                                        <a id="etiqueta_imagen_uno">Sin imagen</a>
                                    </div>
                                </div>                           
                            </div>
                            <div class="card card_dos">
                                <a id="cargar_imgDos_button" class="ui blue right corner label">
                                    <i class="upload icon"></i>
                                </a>
                                <div class="image previewDos">
                                    <img src="${contextPath}/resources/images/bm.png">
                                </div>
                                <div class="content">
                                    <div class="meta">
                                        <a id="etiqueta_imagen_dos">Sin imagen</a>
                                    </div>
                                </div>                           
                            </div>
                        </div>
                        <input id="numeroImagen" type="text" name="numeroImagen" hidden>
                        <input type="file" id="cargar_imgUno_input" name="imagenUno" hidden> 
                        <input type="file" id="cargar_imgDos_input" name="imagenDos" hidden>
                    </form>
                </div>
            </div>

            <div class="ui bottom attached tab segment" data-tab="second">
                <div id="error_articulos_kit" class="ui rised segment">
                    <div class="ui blue ribbon label">
                        <i class="table icon"></i> 
                        Artículos
                    </div>
                    <div id="ver-articulos-grid"></div>
                </div>  
            </div>

            <div class="ui right aligned basic segment">           
                <button id="guardar_kit" class="ui button blue labeled icon"><i class="save icon"></i>Guardar</button>                
                <button id="autorizar_kit" class="ui button right labeled green icon"><i class="right send outline icon"></i>Enviar a autorizar</button>     
            </div>

            <div id="buscar_kit_modal" class="ui modal">
                <div class="ui rised segment">  
                    <div class="ui form clear_interno_form">
                        <div class="ui rised segment">
                            <div class="ui blue ribbon label">
                                <i class="tasks icon"></i> 
                                Filtros de búsqueda
                            </div>
                            <a class="ui blue right corner label clear_interno_button">
                                <i class="erase icon"></i>
                            </a>
                            <div class="three fields">
                                <div class="field">
                                    <label>ID kit:</label>                 
                                    <input type="text" placeholder="ID kit">
                                </div> 
                                <div class="field">
                                    <label>Descripción corta:</label>                 
                                    <input type="text" placeholder="Descripción corta:">
                                </div>
                                <div class="field">
                                    <label>Estado:</label>
                                    <select class="ui fluid search dropdown">
                                        <option value="">Seleccione una opción</option>
                                        <option value="1">Activo</option>
                                        <option value="2">Inactivo</option>
                                        <option value="3">Guardado</option>
                                    </select>
                                </div>
                            </div>
                            <div class="field">
                                <label>Descripción larga:</label>                 
                                <input type="text" placeholder="Descripción larga">
                            </div>
                            <div class="ui right aligned basic segment">           
                                <button class="ui button blue labeled icon"><i class="tags icon"></i>Buscar</button>                
                            </div>
                        </div>
                        <div class="ui rised segment">
                            <div class="ui blue ribbon label">
                                <i class="table icon"></i> 
                                Resultado
                            </div>
                            <div id="mostrar-kit-grid"></div>
                        </div>
                    </div>
                    <!--div class="actions">
                        <div class="ui right aligned basic segment">
                            <div class="ui right aligned basic segment">
                                <button class="ui button blue labeled icon" id="eliminar_kit_button"><i class="cancel icon"></i>Eliminar</button>                
                                <button class="ui button centered labeled black"></i>Cancelar</button>
                                <button class="ui button right labeled green icon"><i class="right edit icon"></i>Modificar</button>
                            </div>
                        </div>
                    </div-->
                </div>
            </div>
            <div id="buscar_articulo_modal" class="ui modal">
                <div class="ui rised segment">
                    <div class="ui rised segment">
                        <div class="ui blue ribbon label">
                            <i class="tasks icon"></i> 
                            Búsqueda de artículos
                        </div>
                        <a class="ui blue right corner label clear_form">
                            <i class="erase icon"></i>
                        </a>
                        <div id="armado_kit_form" class="ui form">
                            <div class="three fields">
                                <div class="field">
                                    <label>ID artículo:</label>                 
                                    <input type="text" placeholder="ID artículo">
                                </div> 
                                <div class="field">
                                    <label>Descripción corta:</label>                 
                                    <input type="text" placeholder="Descripción corta">
                                </div>
                                <div class="field">
                                    <label>Tipo de artículo:</label>
                                    <select class="ui fluid search dropdown">
                                        <option value="">Tipo de artículo</option>
                                        <option value="1">Moneda</option>
                                        <option value="2">Medalla</option>	
                                        <option value="3">Accesorio</option>	
                                    </select>
                                </div>
                            </div>
                            <div class="three fields">
                                <div class="field">
                                    <label>Familia:</label>
                                    <select class="ui fluid search dropdown">
                                        <option value="">Familia</option>
                                        <option value="1">Herencia numismática</option>
                                        <option value="2">Serie libertad</option>	
                                        <option value="3">Accesorios</option>	
                                    </select>
                                </div>
                                <div class="field">
                                    <label>Acabado:</label>
                                    <select class="ui fluid search dropdown">
                                        <option value="">Acabado</option>
                                        <option value="1">Satín</option>
                                        <option value="2">Proof</option>	
                                        <option value="3">Mate</option>	
                                    </select>
                                </div>
                                <div class="field">
                                    <label>Metal:</label>
                                    <select class="ui fluid search dropdown">
                                        <option value="">Metal</option>
                                        <option value="1">Oro</option>
                                        <option value="2">Plata</option>		
                                    </select>
                                </div>
                            </div>
                            <div class="three fields">
                                <div class="field">
                                    <label>Cuño:</label>                 
                                    <input type="text" placeholder="Cuño">
                                </div>
                                <div class="field">
                                    <label>Valor facial:</label>                 
                                    <input type="text" placeholder="Valor facial">
                                </div>
                                <div class="field">
                                    <label>Contenido de metal:</label>                 
                                    <input type="text" placeholder="Contenido de metal">
                                </div>
                            </div>
                        </div>
                        <div class="ui right aligned basic segment">           
                            <button class="ui button blue labeled icon"><i class="tags icon"></i>Buscar</button>                
                        </div>
                    </div>
                    <div class="ui rised segment">
                        <div class="ui blue ribbon label">
                            <i class="table icon"></i> 
                            Resultado
                        </div>
                        <div id="buscar-articulos-grid"></div>
                    </div>
                    <div class="actions">
                        <div class="ui right aligned basic segment">
                            <div class="ui right aligned basic segment">
                                <button id="salir_articulo_kit" class="ui button left labeled black icon"><i class="left remove icon"></i>Cancelar</button>
                                <button id="agregar_articulo_kit" class="ui button right labeled blue icon"><i class="right edit icon"></i>Agregar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <input id="id_artículo_kit" type="text" >
            <input id="cantidad_artículo_kit" type="text" >
        </main>
    </body>
</html>
