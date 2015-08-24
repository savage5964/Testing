<%-- 
    Document   : catalogo_cliente
    Created on : 15/07/2015, 10:50:32 AM
    Author     : g13380
--%>
<%@page isELIgnored="false" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
    <head>
        <c:set var="contextPath" value="${pageContext.servletContext.contextPath}" />
        <title>Catálogo Cliente</title>
        <link rel="stylesheet" href="${contextPath}/resources/css/jquery.inputfile.css" />
        <link rel="stylesheet" href="${contextPath}/resources/css/sicon/catalogo/cliente.css" />
        <script src="${contextPath}/resources/js/jquery.inputfile.js"></script>
        <script src="${contextPath}/resources/js/jquery.form.min.js"></script>
        <script src="${contextPath}/resources/js/sicon/catalogo/cliente.js"></script>
    </head>
    <body>
        <main class="ui container">            
            <div class="ui attached tabular menu">
                <a class="active item" data-tab="first">Definición</a>
                <a id="tab-item-contrato" class="item" data-tab="second">Contrato</a>
                <a id="tab-item-exclusividad" class="item" data-tab="third">Exclusividad</a>
                <div class="right menu">
                    <div class="item">
                        <div id="btn-nuevo-cliente" class="ui basic icon button">                        
                            <i class="wizard icon"></i>
                            Registrar nuevo cliente...
                        </div>
                    </div>
                    <div class="item">
                        <div id="btn-buscar-cliente" class="ui basic icon button">                        
                            <i class="search icon"></i>
                            Buscar cliente...
                        </div>
                    </div>                    
                </div>                
            </div>
            <div id="tab-cliente-definicion" class="ui clearing bottom attached active tab segment" data-tab="first">
                <div class="ui secondary menu">
                    <div class="right menu">
                        <div class="item">
                            <div class="ui form">
                                <div class="inline fields">
                                    <div id="idCliente" class="field">
                                        <label>ID Cliente:</label>
                                        <span>1117</span>
                                    </div>                                    
                                    <div id="fechaRegistro" class="field">
                                        <label>Fecha Registro:</label>
                                        <span>01/Julio/2015</span>
                                    </div>
                                    <div id="fechaAutorizacion" class="field">
                                        <label>Fecha Autorización:</label>
                                        <span>02/Julio/2015</span>
                                    </div>
                                </div>							
                            </div>
                        </div>										
                    </div>
                </div>
                <div class="ui form rised segment">
                    <a href="#" class="ui blue right corner label limpiar">
                        <i class="erase icon"></i>
                    </a>
                    <span class="ui blue ribbon label">Datos cliente</span>
                    <div class="ui hidden divider"></div>
                    <div class="required field">                            
                        <label>Activo</label>
                        <div class="ui fitted toggle checkbox">
                            <input type="checkbox" name="estadoClienteCheckbox" checked="checked" />
                            <input type="hidden" name="estadoCliente" value="1" /><!-- TODO VERIFICAR ESTA CONSTANTE -->
                            <label>&nbsp;</label>
                        </div>
                    </div>
                    <div class="three fields">
                        <div class="required field">
                            <label>Tipo de cliente</label>
                            <select class="ui selection dropdown tipo-cliente" name="tipoCliente">
                                <option value="">Seleccione un tipo de cliente...</option>
                                <c:forEach items="${listaTipoCliente}" var="tc">
                                    <option value="${tc.id}">${tc.descripcion}</option>
                                </c:forEach>								
                            </select>
                        </div>
                        <div class="required field">
                            <label>Tipo de mercado</label>
                            <select class="ui selection dropdown tipo-mercado" name="tipoMercado">									
                                <option value="">Seleccione un tipo de mercado...</option>
                                <c:forEach items="${listaTipoMercado}" var="tm">
                                    <option value="${tm.id}">${tm.descripcion}</option>
                                </c:forEach>									
                            </select>
                        </div>
                        <div class="required field">
                            <label>Idioma</label>
                            <select class="ui selection dropdown idioma" name="idioma">									
                                <option value="">Seleccione un idioma...</option>
                                <c:forEach items="${listaIdioma}" var="idioma">
                                    <option value="${idioma.id}">${idioma.descripcion}</option>
                                </c:forEach>									
                            </select>
                        </div>
                    </div>
                    <div class="two fields">
                        <div class="required field">
                            <label>Nombre/razón social</label>
                            <input type="text" name="nombre" placeholder="Nombre/razón social..." />
                        </div>
                        <div class="field">
                            <label>Descripción corta</label>
                            <input type="text" name="descripcionCorta" placeholder="Descripción corta..." />
                        </div>                        
                    </div>
                    <div class="three fields">
                        <div class="field">
                            <label>RFC</label>
                            <input type="text" name="rfc" placeholder="RFC..." />
                        </div>
                        <div class="required field">
                            <label>E-mail (1)</label>
                            <input type="text" name="email" placeholder="Email..." />
                        </div>
                        <div class="field">
                            <label>E-mail (2)</label>
                            <input type="text" name="email2" placeholder="Email..." />
                        </div>                        
                    </div>
                    <div class="three fields">
                        <div class="field">
                            <label>Cuenta de cobro (MXN)</label>
                            <input type="text" name="cuentaCobroMxn" placeholder="Cuenta de cobro (MXN)..." />
                        </div>
                        <div class="field">
                            <label>Cuenta de cobro (USD)</label>
                            <input type="text" name="cuentaCobroUsd" placeholder="Cuenta de cobro (USD)..." />
                        </div>
                        <div id="almacen" class="required field">
                            <label>Almacén</label>
                            <select class="ui dropdown almacen" name="almacen">									
                                <option value="">Seleccione un almacén...</option>
                                <option value="1">OCBMP</option>
                                <option value="2">OCN</option>
                            </select>
                        </div>
                    </div>
                </div>                
                <div id="direccion-fiscal" class="ui form rised segment">
                    <a href="#" class="ui blue right corner label limpiar">
                        <i class="erase icon"></i>
                    </a>
                    <span class="ui blue ribbon label">Dirección fiscal</span>
                    <div class="ui hidden divider"></div>                       
                    <div class="three fields">
                        <div class="required field">
                            <label>País</label>
                            <div class="ui selection dropdown pais">
                                <input type="hidden" name="pais">
                                <i class="dropdown icon"></i>
                                <div class="default text">Seleccione un país...</div>
                                <div class="menu">
                                    <c:forEach items="${listaPais}" var="pais">
                                        <div class="item" data-value="${pais.id}"><i class="${pais.claseCss} flag"></i>${pais.nombre}</div>
                                    </c:forEach>                                    
                                </div>
                            </div>
                        </div>
                        <div class="required field">
                            <label>Estado</label>
                            <input type="text" name="estado" placeholder="Estado..." />
                        </div>
                        <div class="required field">
                            <label>Delegación/Municipio</label>
                            <input type="text" name="municipio" placeholder="Delegación/Municipio..." />
                        </div>                        
                    </div>
                    <div class="three fields">
                        <div class="required field">
                            <label>Ciudad</label>
                            <input type="text" name="ciudad" placeholder="Ciudad..." />
                        </div>
                        <div class="required field">
                            <label>Colonia</label>
                            <input type="text" name="colonia" placeholder="Colonia..." />
                        </div>                        
                        <div class="required field">
                            <label>Calle</label>
                            <input type="text" name="calle" placeholder="Calle..." />
                        </div>
                    </div>
                    <div class="three fields">
                        <div class="field">
                            <label>No. Exterior</label>
                            <input type="text" name="numeroExterior" placeholder="No. Exterior..." />
                        </div>
                        <div class="field">
                            <label>No. Interior</label>
                            <input type="text" name="numeroInterior" placeholder="No. Interior..." />
                        </div>
                        <div class="required field">
                            <label>Código Postal</label>
                            <input type="text" name="codigoPostal" placeholder="Código Postal..." />
                        </div>                        
                    </div>
                </div>
                <div class="ui form rised segment direccion-envio">
                    <a href="#" class="ui blue right corner label limpiar">
                        <i class="erase icon"></i>
                    </a>
                    <span class="ui blue ribbon label">Dirección envío (1)</span>
                    <div class="ui hidden divider"></div>
                    <div class="field">
                        <div class="ui checkbox">
                            <input type="checkbox" name="mismaDirFiscal" />
                            <label>Misma que dirección fiscal</label>
                        </div>
                    </div>
                    <div class="three fields">
                        <div class="required field">
                            <label>País</label>
                            <div class="ui selection dropdown pais">
                                <input type="hidden" name="pais">
                                <i class="dropdown icon"></i>
                                <div class="default text">Seleccione un país...</div>
                                <div class="menu">
                                    <c:forEach items="${listaPais}" var="pais">
                                        <div class="item" data-value="${pais.id}"><i class="${pais.claseCss} flag"></i>${pais.nombre}</div>
                                    </c:forEach>                                    
                                </div>
                            </div>
                        </div>
                        <div class="required field">
                            <label>Estado</label>
                            <input type="text" name="estado" placeholder="Estado..." />
                        </div>
                        <div class="required field">
                            <label>Delegación/Municipio</label>
                            <input type="text" name="municipio" placeholder="Delegación/Municipio..." />
                        </div>                        
                    </div>
                    <div class="three fields">
                        <div class="required field">
                            <label>Ciudad</label>
                            <input type="text" name="ciudad" placeholder="Ciudad..." />
                        </div>
                        <div class="required field">
                            <label>Colonia</label>
                            <input type="text" name="colonia" placeholder="Colonia..." />
                        </div>                        
                        <div class="required field">
                            <label>Calle</label>
                            <input type="text" name="calle" placeholder="Calle..." />
                        </div>
                    </div>
                    <div class="three fields">
                        <div class="field">
                            <label>No. Exterior</label>
                            <input type="text" name="numeroExterior" placeholder="No. Exterior..." />
                        </div>
                        <div class="field">
                            <label>No. Interior</label>
                            <input type="text" name="numeroInterior" placeholder="No. Interior..." />
                        </div>
                        <div class="required field">
                            <label>Código Postal</label>
                            <input type="text" name="codigoPostal" placeholder="Código Postal..." />
                        </div>                        
                    </div>
                </div>
                <button id="btn-agregar-direccion" class="ui labeled icon button">
                    <i class="add icon"></i>
                    Agregar Dirección Envío
                </button>                				
            </div>			
            <div class="ui bottom attached tab segment" data-tab="second">
                <div class="ui fluid container datos-contrato">                    
                    <div class="ui secondary menu">					
                        <div class="right menu">
                            <div class="item">
                                <div class="ui form">                                                                            
                                    <div id="fechaRegistroContrato" class="inline field">
                                        <label>Fecha de registro:</label>
                                        01/Agosto/2015
                                    </div>                                    							
                                </div>
                            </div>										
                        </div>
                    </div>
                    <div class="ui form rised segment">                        
                        <input type="hidden" name="fechaRegistroContrato" value="" /><!-- debe depositarse al momento de modificar el contrato -->
                        <a href="#" class="ui blue right corner label limpiar">
                            <i class="erase icon"></i>
                        </a>
                        <span class="ui blue ribbon label">Datos de contrato (1)</span>
                        <div class="ui hidden divider"></div>                                     
                        <div class="fields">
                            <div class="five wide required field">
                                <label>Folio de contrato:</label>
                                <input type="text" name="folioContrato" />
                            </div>
                            <div class="eleven wide required field">
                                <label>Archivo de contrato (PDF)</label>
                                <form method="POST" action="#" enctype="multipart/form-data" class="uploadArchivoContrato">                                
                                    <input type="file" name="archivoContrato" />
                                </form>
                            </div>
                        </div>
                        <div class="fields">
                            <div class="five wide required field">
                                <label>Tipo de contrato</label>
                                <select name="tipoContrato" class="ui dropdown tipo-contrato">
                                    <option value="">Seleccione un tipo de contrato...</option>
                                    <c:forEach items="${listaTipoContrato}" var="tc">                                        
                                        <option value="${tc.id}">${tc.descripcion}</option>
                                    </c:forEach>
                                </select>
                            </div>
                            <div class="eleven wide required field">
                                <label>Descripción</label>         
                                <input type="text" name="descripcionContrato"  />
                            </div>                                                
                        </div>
                        <div class="fields">                            
                            <div class="five wide required field">
                                <label>Fecha inicio</label>
                                <div class="ui icon input">
                                    <input type="text" name="fechaInicioContrato" class="fecha-inicio-contrato" />
                                    <i class="calendar icon"></i>
                                </div>
                            </div>
                            <div class="six wide required field">
                                <label>Fecha fin</label>
                                <div class="ui icon input">
                                    <input type="text" name="fechaFinContrato" class="fecha-fin-contrato" />
                                    <i class="calendar icon"></i>
                                </div>
                            </div>
                            <div class="five wide required field">
                                <label>Fecha firma</label>
                                <div class="ui icon input">
                                    <input type="text" name="fechaFirmaContrato" class="fecha-firma-contrato" />
                                    <i class="calendar icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ui grid">
                        <div class="eight wide column">
                            <div class="ui rised segment">
                                <span class="ui blue ribbon label">Artículos bajo contrato (1)</span>
                                <div class="ui hidden divider"></div>
                                <div id="grid-articulos-contrato-1" style="height: 450px;"></div>
                            </div>
                        </div>
                        <div class="eight wide column">
                            <div class="ui rised segment">
                                <span class="ui blue right ribbon label">Kits bajo contrato (1)</span>
                                <div class="ui hidden divider"></div>
                                <div id="grid-kits-contrato-1" style="height: 450px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ui section divider"></div>
                <button id="btn-agregar-contrato" class="ui labeled icon button">
                    <i class="add icon"></i>
                    Agregar Contrato
                </button>
            </div>
            <div class="ui bottom attached tab segment" data-tab="third">
                <div id="grid-exclusividad-cliente" style="height: 450px;"></div>
            </div>
            <div class="ui right aligned basic segment">
                <button id="btn-guardar" class="ui primary left labeled icon button">
                    <i class="save icon"></i>
                    Guardar
                </button>
                <button id="btn-autorizar" class="ui positive right labeled icon button">
                    <i class="send outline icon"></i>
                    Enviar a Autorizar Contrato
                </button>
            </div>
            <div id="modal-buscar-cliente" class="ui modal">                
                <div class="header">
                    <i class="user icon"></i>
                    Buscar cliente
                </div>
                <div class="content">
                    <div id="grid-buscar-cliente" style="height: 450px;"></div>
                </div>                
            </div>
        </main>		      
    </body>
</html>
