<!DOCTYPE html>
<%-- 
    Document   : decorator
    Created on : 3/06/2015, 10:55:48 AM
    Author     : g13380
--%>
<%@page isELIgnored="false" %>
<%@page contentType="text/html" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
    <head>
        <c:set var="contextPath" value="${pageContext.servletContext.contextPath}" />
        <title>Catálogo Exclusividad</title>     
        <script src="${contextPath}/resources/js/sicon/catalogo/exclusividad.js"></script>
        <script src="${contextPath}/resources/js/sicon/modal/buscar_exclusividad.js"></script>
        <script src="${contextPath}/resources/js/sicon/modal/buscar_kit.js"></script>
        <link rel="stylesheet" href="${contextPath}/resources/css/sicon/catalogo/exclusividad.css" />
    </head>
    <body>
        <header class="ui top borderless attached menu">
            <div class="item">
                <div class="ui fluid search selection dropdown">
                    <input type="hidden" name="tablero">
                    <i class="dropdown icon"></i>
                    <div class="default text">Seleccione un tablero...</div>
                    <div class="menu">
                        <div class="item" data-value="1">
                            <i class="folder icon"></i>Tablero 1
                        </div>
                        <div class="item" data-value="2">
                            <i class="folder icon"></i>Tablero 2
                        </div>
                    </div>                    
                </div>
            </div>
            <div class="right menu">
                <div class="item">
                    <button class="ui icon button">
                        <i class="plus icon"></i>
                    </button>
                </div>
                <div class="item">
                    <a class="ui label">
                        <img class="ui right spaced image" src="${contextPath}/resources/images/user.png">
                        Nombre usuario
                    </a>
                </div>
            </div>            
        </header>
    <main class="ui container basic segment">
        <label id="idEstado" style="display: none">${idEstado}</label>
        <div class="ui left attached rail">
            <div class="ui vertical small steps">
                <div id="step-guardado">
                    <i class="icon"></i>
                    <div class="content">
                        <div class="title">Guardado</div>
                        <div class="description"></div>
                    </div>
                </div>
                <div id="step-enviar-autorizar">
                    <i class="icon"></i>
                    <div class="content">
                        <div class="title">Enviado a Autorizar</div>
                        <div class="description"></div>
                    </div>
                </div>
                <div id="step-autorizado">
                    <i class="icon"></i>
                    <div class="content">
                        <div class="title">Autorizado</div>
                        <div class="description"></div>
                    </div>
                </div>
            </div>
        </div>
        <h2 class="ui header">
            <i class="ui blue circular lock icon label"></i>
            <div class="content">
                Exclusividad
            </div>
            <div class="ui secondary  menu">
                <div class="right menu">
                    <div class="item">
                        <div class="ui form">
                            <div class="inline fields">
                                <div class="field">
                                    <label>ID:</label>
                                    <label id="idExclusividad" >${idExclusividad}</label>
                                </div>
                                <div class="field">
                                    <label>Fecha Registro:</label>
                                    <label id="fechaRegistro"></label>
                                </div>
                                <div class="field">
                                    <label>Fecha Autorización:</label>
                                    <label id="fechaAutorizacion"></label>
                                </div>
                            </div>							
                        </div>
                    </div>										
                </div>
            </div>
        </h2>
        <div class="ui top attached tabular menu" >
            <a class="item active" data-tab="first">Definición</a>
            <a class="item" data-tab="second">Armado</a>
            <a class="item" id="tab-cliente" data-tab="third">Cliente</a>
            <a id="nuevo-registro" class="right item">
                <i class="wizard icon"></i> Nuevo Registro
            </a>
            <a onclick="obtenerModalExclusividad()" class="right item">
                <i class="search icon"></i> Buscar Exclusividad
            </a>
        </div>
        <!-- Primer Tab !!!!!!!!!!!!!!!!!!!!!!!!-->
        <div class="ui bottom attached tab segment active" data-tab="first">
            <div class="ui segments">
                <div class="ui segment">
                    <p><div class="ui blue ribbon large label">Datos Exclusividad</div></p>
                </div>
                <div class="ui blue segment">
                    <a class="ui blue right corner label limpiar">
                        <i class="erase icon"></i>
                    </a>
                    <form id="formulario" class="ui form">
                        <div class="fields">
                            <div class="field">
                                <label>Activo:</label>
                                <div class="ui fitted toggle checkbox">
                                    <input type="checkbox" id="activo" checked="checked" />
                                    <label></label>
                                </div>
                            </div>
                        </div>
                        <div class="three fields">
                            <div class="field">
                                <label>Comentarios:</label>
                                <textarea rows="2" id="comentarios"></textarea>
                            </div>                     
                        </div>                        
                    </form>
                </div>       
            </div>
        </div>
        <!-- Segundo Tab !!!!!!!!!!!!-->
        <div class="ui bottom attached tab segment" data-tab="second">
            <div class="ui segments">
                <div class="ui segment">
                    <p><div class="ui blue ribbon large label">Tabla Artículos/Kit</div></p>
                </div>
                <div class="ui blue segment" id="segmento-grid-piezas">
                    <div id="grid-piezas-exclusividad" style="height: 450px;"></div>
                </div>
            </div>
            <div style="clear:both;"></div>
        </div>
        <!-- Tercer Tab !!!!!!!!!!!!-->
        <div class="ui bottom attached tab segment" data-tab="third">

            <div class="ui segments" id="segmento-exclusividad-cliente">
                <div class="ui segment">
                    <p><div class="ui blue ribbon large label">Exclusividad/Cliente</div></p>
                </div>


            </div>
            <button  onclick="obtenerModalCliente()" class="ui labeled icon button">
                <i class="add icon"></i>
                Agregar Cliente
            </button>
        </div>

        <!-- Modal Articulo !!!!!!!!!!!!-->            
        <div id="buscarArticulo" class="ui modal">
            <i class="close icon"></i>
            <div class="header">
                Buscar Artículo
            </div>
            <div class="content">
                <div class="ui segments">
                    <div class="ui segment">
                        <p><div class="ui blue ribbon large label">Filtros</div></p>
                    </div>
                    <div class="ui blue segment">
                        <a class="ui blue right corner label limpiar">
                            <i class="erase icon"></i>
                        </a>
                        <form class="ui form">
                            <div class="three fields">
                                <div class="field">
                                    <label>ID Artículo</label>
                                    <input type="text">
                                </div>
                                <div class="field">
                                    <label>Descripción Corta</label>
                                    <input type="text">
                                </div>
                                <div class="field">
                                    <label>Tipo de Artículo</label>
                                    <input type="text">
                                </div>
                            </div>
                            <div class="three fields">
                                <div class="field">
                                    <label>Valor Facial</label>
                                    <input type="text">
                                </div>
                                <div class="field">
                                    <label>Descripción Larga</label>
                                    <input type="text">
                                </div>
                                <div class="field">
                                    <label>Tipo de Artículo</label>
                                    <input type="text">
                                </div>
                            </div>

                            <div class="three fields">
                                <div class="field">
                                    <label>Acabado</label>
                                    <select class="ui search dropdown">
                                        <option value="">Acabado</option>
                                        <option value="AL">Satin</option>
                                        <option value="AK">Proof</option>
                                    </select>
                                </div>
                                <div class="field">
                                    <label>Metal</label>
                                    <select class="ui search dropdown">
                                        <option value="">Metal</option>
                                        <option value="AL">Oro</option>
                                        <option value="AK">Plata</option>
                                        <option value="AK">Cobre</option>
                                    </select>
                                </div>
                                <div class="field">
                                    <label>Cuño</label>
                                    <input type="text">
                                </div>
                            </div>

                            <div class="three fields">
                                <div class="field">
                                    <label>Familia</label>
                                    <select class="ui search dropdown">
                                        <option value="">Familia</option>
                                        <option value="AL">Azteca</option>
                                        <option value="AK">Centenario</option>
                                        <option value="AK">Chichén Itzá</option>
                                        <option value="AK">Libertad</option>
                                    </select>
                                </div>
                                <div class="field">
                                    <label>Contenido Metal</label>
                                    <input type="text">
                                </div>
                                <div class="field">
                                    <label>IVA</label>
                                    <select class="ui fluid dropdown" ">									
                                        <option value="1">Activo</option>
                                        <option value="2">Inactivo</option>									
                                    </select>
                                </div>
                            </div>
                            <button class="ui icon button" style="float: right;">
                                Buscar
                                <i class="search icon"></i>
                            </button>
                            <div style="clear:both;"></div>

                        </form>
                    </div>
                </div>
                <div class="ui segments">
                    <div class="ui segment">
                        <p><div class="ui blue ribbon large label">Resultado</div></p>
                    </div>
                    <div class="ui blue segment">
                        <div id="grid-articulo" style="height: 250px;"></div>
                    </div>
                </div>
            </div>
            <div class="ui right aligned basic segment">
                <div class="ui right aligned basic segment">
                    <button id="salir_articulo_kit" class="ui button left labeled red icon"><i class="left remove icon"></i>Cancelar</button>
                    <button id="agregar_articulo" class="ui button right labeled green icon"><i class="right check icon"></i>Agregar</button>
                </div>
            </div>
        </div>

        <!-- Modal Kit !!!!!!!!!!!!-->            
        <div id="buscarKit" class="ui modal">
            <jsp:include page="../modal/buscar_kit.jsp" />           
        </div>
        <!-- Modal Buscar Exclusividad !!!!!!!!!!!!-->            
        <div id="buscarExclusividad" class="ui modal">
            <jsp:include page="../modal/buscar_exclusividad.jsp" />
        </div>

        <!--Modal mensaje !!!!!! -->
        <div id="mensaje" class="ui basic modal">
            <div class="header">
                Mensaje
            </div>
            <div class="image content">
                <div class="image">
                    <i class="info circle yellow icon"></i>
                </div>
                <div class="description">
                    <p>Registro guardado exitosamente!</p>
                </div>
            </div>
            <div class="actions">
                <div class="ui positive green basic inverted button">
                    <i class="checkmark icon"></i>
                    Aceptar
                </div>
            </div>
        </div>
        <!--Modal Cliente !!!!!! -->
        <div id="buscarCliente" class="ui modal">                
            <div class="header">
                <i class="user icon"></i>
                Buscar cliente
            </div>
            <div class="content">
                <div id="grid-buscar-cliente" style="height: 450px;"></div>
            </div>                
        </div>
    </main> 

    <br>

    <div class="ui container footer">
        <div class="ui right aligned basic segment" >
            <button onclick="mostrarMensaje()" class="ui primary labeled icon button">
                <i class="save icon"></i>
                Guardar
            </button>
            <button id="enviar-autorizar" class="ui positive right labeled icon button">
                <i class="send outline icon"></i>
                Enviar a Autorizar
            </button>
        </div>
    </div>
</body>
</html>
