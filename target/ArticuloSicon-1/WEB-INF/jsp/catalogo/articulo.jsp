<%-- 
    Document   : articulo
    Created on : 24/07/2015, 10:57:36 AM
    Author     : t41841
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page isELIgnored="false" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
    <head>
        <c:set var="contextPath" value="${pageContext.servletContext.contextPath}" />
        <title>Catálogo - Artículo</title>
        <link rel="stylesheet" href="${contextPath}/resources/css/sicon/catalogo/articulo.css"/>
        <script src="${contextPath}/resources/js/cargaImagen/ImagePreview.js"></script>
        <script src="${contextPath}/resources/js/cargaImagen/MostrarImagen.js"></script>
        <script src="${contextPath}/resources/js/jquery.form.min.js"></script>
        <script type="text/javascript" src="${contextPath}/resources/js/sicon/modal/buscar_articulo.js" ></script>
        <script type="text/javascript" src="${contextPath}/resources/js/sicon/catalogo/articulo.js"></script>
    </head>
    <body>

        <%--main--%>
        <main class="ui container">

            <h2 class="ui header blue">
                <i class="tag grey icon"></i>
                <div class="content">
                    Catalogo Artículo
                </div>
            </h2>

            <%--tabs--%>
            <div class="ui attached tabular menu">

                <%--tab names--%>
                <a class="active item" data-tab="first">Definición</a>
                <a class="item" data-tab="second">Costeo</a>
                <a class="item" data-tab="third">Comercialización</a>

                <%--búsqueda--%>
                <div class="right menu">
                    <div class="item">
                        <div id="btn-nuevo-articulo" class="ui basic icon button">                        
                            <i class="wizard icon"></i>
                            Registar nuevo artículo...
                        </div>
                    </div>
                    <div class="item">
                        <div id="btn-buscar-articulo" class="ui basic icon button">                        
                            <i class="search icon"></i>
                            Consultar artículo...
                        </div>
                    </div>
                </div>
            </div>

            <%--tab Definición - first--%>
            <div id="tab-articulo-deficnicion" class="ui bottom attached tab segment active" data-tab="first">
                <%--datos genéricos--%>
                <div class="ui secondary menu">
                    <div class="right menu">
                        <div class="item">
                            <div class="ui form">
                                <div class="inline fields">
                                    <div class="field">
                                        <label>ID Artículo:</label>
                                        <label id="id-articulo" name="idArticulo"><span>${idArticulo}</span></label>
                                    </div>                                    
                                    <div class="field">
                                        <label>Fecha Registro:</label>
                                        <label id="fecha-hora" name="fechaHora">${fechaRegistro}</label>
                                    </div>
                                    <div class="field">
                                        <label>Fecha Autorización:</label>
                                        <%--recuperar la Fecha de autorización, en caso de que no se haya autorizado
                                        Se mostrará "---", indicando que no se ha autorizado--%>
                                        <label id="fecha-autorizacion">
                                            <c:choose>
                                                <c:when test="${fechaAutorizacion} != null">
                                                    ${fechaAutorizacion}
                                                </c:when>
                                                <c:otherwise>
                                                    ---
                                                </c:otherwise>
                                            </c:choose></label>
                                    </div>
                                </div>                          
                            </div>
                        </div>                                      
                    </div>
                </div>

                <%--definición de artículo--%>
                <div id="form-definicion-articulo" class="ui form rissed segment">
                    <%--botón borrar--%>
                    <a href="#" class="ui blue right corner label limpiar"><i class="icon erase"></i></a>
                        <%--ribbon--%>
                    <div class="ui blue ribbon label">
                        <h4 class="ui header inverted">Definición</h4>
                    </div>
                    <div class="ui hidden divider"></div>

                    <%--primera fila--%>
                    <div class="required field">
                        <%--check button--%>
                        <label>Activo:</label>
                        <div id="articulo-activo-checkbox" class="ui fitted toggle checkbox">
                            <input type="checkbox" name="activoCheckbox" checked="checked" />
                            <input type="hidden" name="activo" value="1" />
                            <label>&nbsp;</label>
                        </div>
                    </div>

                    <%--segunda fila--%>
                    <div class="two fields">
                        <div class="required field">
                            <label>Descripción Larga:</label>
                            <input id="descripcion-larga" type="text" name="descripcionLarga" placeholder="Descripción larga..."/>
                        </div>
                        <div class="field">
                            <label>Descripción Inglés:</label>
                            <input id="descripcion-ingles" type="text" name="descripcionIngles" placeholder="Description..."/>
                        </div>
                    </div>

                    <div class="two fields">
                        <div class="field">
                            <label>Descripción Corta</label>
                            <input id="descripcion-corta" name="descripcionCorta" type="text" placeholder="Descripción Corta..." />
                        </div>
                        <!--                        <div class="field">
                                                    <label>IVA:</label>
                                                    <div id="iva-checkbox" class="ui fitted toggle checkbox">
                                                        <input type="checkbox" name="ivaCheck" />
                                                        <input type="hidden" name="iva" value="1" />
                                                        <label>&nbsp;</label>
                                                    </div>
                                                </div>-->
                        <div class="required field">
                            <label>Clave CMM:</label>
                            <input id="clave-cmm" type="text" name="claveCmm" placeholder="Clace CMM...">
                        </div>
                    </div>

                    <%--tercera fila--%>
                    <div class="two fields">
                        <%--este es el id del artículo, ver como hacer la tabla recursiva--%>
                        <div class="field">
                            <label>Clave Cápsula:</label>
                            <input id="clave-capsula" type="text" name="claveCapsula" placeholder="Clave Cápsula"/>
                        </div>
                        <div class="field">
                            <label>Artículo Relacionado:</label>
                            <select id="articulo-relacionado-select" name="articuloRelacionado" class="ui selection dropdown articulo-relacionado">
                                <%--ver como traer la informaicón del artículo relacionado--%> 
                                <option value="">Artículo Relacionado...</option>
                                <c:forEach items="${listaArticuloRelacionado}" var="ar">
                                    <option value="${ar.id}">**Opción**</option>
                                </c:forEach>
                            </select>
                        </div>
                    </div>
                </div>

                <%--Imágenes--%>
                <div class="ui form rissed segment">
                    <a id="borrar-imagen" href="#" class="ui blue right corner label limpiar"><i class="icon erase"></i></a>
                    <div class="ui blue ribbon label">
                        <h4 class="ui header inverted">Imágenes</h4>
                    </div>
                    <div class="ui hidden divider"></div>

                    <!--imágenes-->
                    <form id="articulo-model" class="ui form" action="#" method="POST" enctype="multipart/form-data">
                        <div class="ui cards centered">
                            <div class="card card_uno">
                                <a id="buttonImagenUno" class="ui blue right corner label">
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
                                <a id="buttonImagenDos" class="ui blue right corner label">
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
                        <input type="file" id="inputImagenUno" name="imagenUno" hidden> 
                        <input type="file" id="inputImagenDos" name="imagenDos" hidden>
                    </form>
                </div>

                <!%--Características - Artículo-->
                <div class="ui form rissed segment">
                    <a href="#" class="ui blue right corner label limpiar"><i class="icon erase"></i></a>
                    <div class="ui blue ribbon label">
                        <h4 class="ui header inverted">Características</h4>
                    </div>
                    <div class="ui hidden divider"></div>

                    <div class="ui two column grid">
                        <div class="ten wide column">
                            <div class="ui segment rissed">
                                <div class="ui teal ribbon label">
                                    <h4 class="ui header inverted">Familia. Cuño. Valor Nominal.</h4>
                                </div>
                                <div class="ui divider"></div>

                                <div class="ui form">
                                    <%--campos para la familia, ley, cuño. etc.--%>


                                    <div class="ui three fields">

                                        <div class="field">
                                            <label>Familia: </label>
                                            <select id="familia-select" name="familia" class="ui selection dropdown familia">
                                                <%--ver como traer la informaicón del artículo relacionado--%>
                                                <option value="">Familia...</option>
                                                <c:forEach items="${listaFamilia}" var="fam">
                                                    <!--<option value="${fam.id}"><i class="icon triangle right"></i>${fam.descripcion}</option>-->
                                                    <option value="${fam.id}">${fam.descripcion}</option>
                                                    </c:forEach>
                                            </select>
                                        </div>
                                        <div class="field">
                                            <label>Tipo de Artículo: </label>
                                            <select id="tipo-articulo-select" name="tipo-articulo" class="ui selection dropdown tipo-articulo">
                                                <%--Agregar datos desde la db--%>
                                                <option value="">Selecciona un artículo...</option>
                                                <c:forEach items="${listaTipoArticulo}" var="ta">
                                                    <option value="${ta.id}"><i class="icon triangle right"></i>${ta.descripcion}</option>
                                                </c:forEach>
                                            </select>
                                        </div>
                                        <div class="field">
                                            <%--terminar decreto--%>
                                            <label>Decreto:</label>
                                            <select id="decreto-select" name="decreto" class="ui selection dropdown decreto">
                                                <option value="">Selecciona un decreto...</option>
                                                <c:forEach items="${listaDecreto}" var="dec">
                                                    <option value="${dec[0]}"><i class="icon file outline"></i>${dec[0]}</option>

                                                </c:forEach>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="ui four fields">
                                        <div class="field">
                                            <label>Clave Informe: </label>
                                            <input id="clave-informe" name="claveInforme" type="text" placeholder="Clave Informe..."/>
                                        </div>
                                        <div class="field">
                                            <label>Cuño: </label>
                                            <input id="cunio" type="text" name="cunio" placeholder="Cuño...">
                                        </div>
                                        <div class="field">
                                            <label>Ley: </label>
                                            <input id="ley" name="ley" type="text" placeholder="Ley...">
                                        </div>
                                        <div class="field">
                                            <label>Valor Nominal: </label>
                                            <input id="valor-nominal" name="valorNominal" type="text" placeholder="Valor Nominal...">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="dimensiones" class="six wide column">

                            <div class="ui segment rissed">
                                <div class="ui teal right ribbon label">
                                    <h4 class="ui header inverted">Dimensiones</h4>
                                </div>
                                <div class="ui hidden divider"></div>

                                <div class="ui form">
                                    <%--se agrega la clase "error" para marcar que existe un error--%>
                                    <div class="field centered">
                                        <label>Espesor: </label>
                                        <input id="espesor" name="espesor" type="text" placeholder="Espesor...">
                                        <%--agregar pop-up para los datos modificados
                                        desde js para que cuaando se realice un mouse
                                        over, salga la notificación de la informaicón
                                        anterior en ese campo--%>
                                        <!--agregar esta div desde el js-->
                                        <!--tratar de mover las divs con css-->
                                        <!--<div class="ui red pointing label left">Campo obligatorio!</div>-->
                                        <!--<div class="floating ui red label ">22</div>-->
                                    </div>
                                    <div class="field">
                                        <label>Diámetro: </label>
                                        <input id="diametro" name="diametro" type="text" placeholder="Diámetro...">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="ui grid centered">
                        <div class="eleven wide column">
                            <div class="ui segment rissed">
                                <div class="ui teal ribbon label">
                                    <h4 class="ui header inverted">Tolerancias</h4>
                                </div>
                                <div class="ui hidden divider"></div>

                                <div class="ui form">
                                    <div class="two fields">
                                        <%--campos para la tolerancia--%>
                                        <div class="field">
                                            <label>Tolerancia x pza. en ley Oro: </label>
                                            <input id="tol-ley-oro" name="tolLeyOro" type="text" placeholder="Tolerancia Oro...">
                                        </div>
                                        <div class="field">
                                            <label>Tolerancia x pza. en ley Plata: </label>
                                            <input id="tol-ley-plata" name="tolLeyPlata" type="text" placeholder="Tolerancia Plata...">
                                        </div>
                                    </div>

                                    <div class="two fields">
                                        <div class="field">
                                            <label>Tolerancia x pza. en Peso Oro: </label>
                                            <input id="tol-peso-oro" name="tolPesoOro" type="text" placeholder="Tolerancia Oro...">
                                        </div>
                                        <div class="field">
                                            <label>Tolerancia x pza. en Peso Plata: </label>
                                            <input id="tol-peso-plata" name="tolPesoPlata" type="text" placeholder="Tolerancia Plata...">
                                        </div>
                                    </div>
                                    <div class="two fields">
                                        <div class="field">
                                            <label>Tolerancia conjunto de 1000 pzas. en Peso Oro: </label>
                                            <input id="tol-conjunto-peso-oro" name="tolConjuntoPesoOro" type="text" placeholder="Tolerancia Oro...">
                                        </div>
                                        <div class="field">
                                            <label>Tolerancia conjunto de 1000 pzas. en Peso Plata: </label>
                                            <input id="tol-conjunto-peso-plata" name="tolConjuntoPesoPlata" type="text" placeholder="Tolerancia Plata...">
                                        </div>
                                    </div>
                                    <div class="two fields">
                                        <div class="field">
                                            <label>Premio Dólar: </label>
                                            <input id="premio-dolar" name="premioDolar" type="text" placeholder="Premio en usd...">
                                        </div>
                                        <div class="field">
                                            <label>Premio en porcentaje</label>
                                            <input id="premio-porcentaje" name="premioPorcentaje" type="text" placeholder="Premio en %...">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--tab Costeo - second-->
            <div id="tab-articulo-costeo" class="ui bottom attached tab segment" data-tab="second">
                <!--<h4 class="ui header">Costeo</h4>-->
                <!--agregar forma para costeo-->
                <div class="ui hidden divider"></div>

                <div class="ui form rissed segment">
                    <!--icono borrar-->
                    <a href="#" class="ui blue right corner label limpiar"><i class="icon erase"></i></a>
                    <!--ribbon-->
                    <div class="ui blue ribbon label">
                        <h4 class="ui header inverted">Costeo</h4>
                    </div>
                    <!--divider-->
                    <div class="ui hidden divider"></div>

                    <!--grid-->
                    <div class="ui two column grid">

                        <div class="ten wide column">

                            <div class="ui segment rissed">
                                <div class="ui teal ribbon label">
                                    <h4 class="ui header inverted">Costos</h4>
                                </div>
                                <!--divider-->
                                <div class="ui hidden divider"></div>
                                <!--llenar campos-->
                                <div class="ui form">
                                    <!--primera fila-->
                                    <div class="ui two fields">
                                        <!--campos-->
                                        <div class="field">
                                            <label>Contrato CMM: </label>
                                            <select id="contrato-cmm-select" name="contratoCmm" class="ui selection dropdown">
                                                <option value="">Selecciona un Contrato...</option>
                                                <c:forEach items="${listaContratoCmm}" var="conCmm">
                                                    <option value="${conCmm.id}">${conCmm.tipo}</option>
                                                </c:forEach>
                                            </select>
                                        </div>
                                        <div class="field">
                                            <label>Costo de Producción (USD): </label>
                                            <input id="costo-produccion-usd" name="costoProduccionUsd" type="text" placeholder="cantidad en usd...">
                                        </div>

                                        <!--/campos-->
                                    </div>

                                    <!--segunda fila-->
                                    <div class="ui two fields">
                                        <!--campos-->
                                        <div class="field">
                                            <label>Costo Variable: </label>
                                            <input id="costo-variable" name="costoVariable" type="text" placeholder="costo variable...">
                                        </div>
                                        <div class="field">
                                            <label>Costo Fijo y Herramental: </label>
                                            <input id="costo-fijo-herramental" name="costoFijoHerramental" type="text" placeholder="costo fijo...">
                                        </div>
                                        <!--/campos-->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="dimensiones" class="six wide column">
                            <div class="ui segment rissed">
                                <div class="ui teal right ribbon label">
                                    <h4 class="ui header inverted">Metal y acabado</h4>
                                </div>
                                <!--divider-->
                                <div class="ui hidden divider"></div>
                                <!--llenar campos-->
                                <!--<div id="divDimensiones" class="ui form">-->
                                <div class="ui form">
                                    <!--campos-->
                                    <!--se agrega la clase "error" para marcar que existe un error-->
                                    <div class="ui ten wide field">
                                        <label>Metal: </label>
                                        <select id="metal-select" name="metal" class="ui selection dropdown metal">
                                            <option value="">Selecciona un Metal...</option>
                                            <c:forEach items="${listaMetal}" var="metal">
                                                <option value="${metal.id}">${metal.descripcion}</option>
                                            </c:forEach>
                                        </select>

                                    </div>
                                    <div class="ten wide field">
                                        <label>Acabado: </label>
                                        <select id="acabado-select" name="acabado" class="ui selection dropdown acabado">
                                            <option value="">Selecciona un acabado...</option>
                                            <c:forEach items="${listaAcabado}" var="acabado">
                                                <option value="${acabado.id}">${acabado.descripcion}</option>
                                            </c:forEach>
                                        </select>
                                    </div>
                                    <!--/campos-->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ui grid centered">
                        <div class="eleven wide column">
                            <div class="ui segment rissed">
                                <div class="ui teal ribbon label">
                                    <h4 class="ui header inverted">Contenido de Metal</h4>
                                </div>
                                <!--divider-->
                                <div class="ui hidden divider"></div>
                                <div class="ui form">
                                    <div class="two fields">
                                        <%--campos para la tolerancia--%>
                                        <%--primera fila--%>
                                        <div class="field">
                                            <label>Contenido de metal en Oz. Oro: </label>
                                            <input id="contenido-onzas-oro" name="contenidoOnzasOro" type="text" placeholder="Contenido Oro...">
                                        </div>
                                        <div class="field">
                                            <label>Contenido de metal en Oz. Plata: </label>
                                            <input id="contenido-onzas-plata" name="contenidoOnzasPlata" type="text" placeholder="Contenido Plata...">
                                        </div>
                                    </div>
                                    <%--segunda fila--%>
                                    <div class="two fields">
                                        <%--primera fila--%>
                                        <div class="field">
                                            <label>Merma esperada Oro: </label>
                                            <input id="merma-oro" name="mermaOro" type="text" placeholder="Merma Oro...">
                                        </div>
                                        <div class="field">
                                            <label>Merma esperada Plata: </label>
                                            <input id="merma-plata" name="mermaPlata" type="text" placeholder="Merma Plata...">
                                        </div>
                                    </div>
                                    <%--tercera fila--%>
                                    <div class="two fields">
                                        <%--primera fila--%>
                                        <div class="field">
                                            <label>Contenido de metal en Oz. Cobre: </label>
                                            <input id="contenido-onzas-cobre" name="contenidoOnzasCobre" type="text" placeholder="Contenido oz. cobre...">
                                        </div>
                                        <div class="field">
                                            <label>Contenido de metal en %. Cobre: </label>
                                            <input id="contenido-porcentaje-cobre" name="contenidoPorcentajeCobre" type="text" placeholder="Contenido %. cobre...">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <%--tab Comercialización - third--%>
            <div id="tab-articulo-comercializacion" class="ui bottom attached tab segment" data-tab="third">
                <%--agregar form para comercialización--%>
                <div class="ui hidden divider"></div>
                <div class="ui form rissed segment">
                    <%--icono borrar--%>
                    <a href="#" class="ui blue right corner label limpiar"><i class="icon erase"></i></a>
                        <%--ribbon--%>
                    <div class="ui blue ribbon label">
                        <h4 class="ui header inverted">Comercialización</h4>
                    </div>
                    <div class="ui hidden divider"></div>

                    <div class="fields">

                        <!--                        <div class="compact field">
                                                    <label>Venta Nómina:</label>
                                                    <div class="ui toggle checkbox">
                                                        <input type="checkbox" name="ventaNominaCheck" />
                                                        <input type="hidden" name="ventaNomina" value="1" />
                                                        <label>&nbsp;</label>
                                                    </div>
                                                </div>-->
                        <div class="compact field">
                            <label>IVA:</label>
                            <div class="ui toggle checkbox">
                                <input id="iva-checkbox" type="checkbox" name="ivaCheck" />
                                <input type="hidden" name="iva" value="1" />
                                <label>&nbsp;</label>
                            </div>
                        </div>
                    </div>
                    <div class="compact field">
                        <label>Tipo de Comercialización:</label>
                        <select id="tipo-comercializacion-select" class="ui selection dropdown tipo-comercializacion">
                            <option value="">Selecciona un Tipo de Comercialización...</option>
                            <c:forEach items="${listaTipoComercializacion}" var="tc">
                                <option value="${tc.id}">${tc.descripcion}</option>
                            </c:forEach>
                        </select>
                    </div>
                    <!--</div>-->
                </div>
            </div>

            <div class="ui right aligned basic segment">
                <button id="btn-guardar" class="ui primary left labeled icon button">
                    <i class="save icon"></i>
                    Guardar
                </button>
                <button id="btn-autorizar" class="ui positive right labeled icon button">
                    <i class="send outline icon"></i>
                    Enviar a Autorizar
                </button>
            </div>

            <!--modal-->
            <div id="modal-buscar-articulo" class="ui modal">
                <jsp:include page="../modal/buscar_articulo.jsp" />
            </div>
        </main>
    </body>
</html>
