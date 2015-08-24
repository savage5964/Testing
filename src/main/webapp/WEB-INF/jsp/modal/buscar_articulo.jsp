<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--encabezado para la búsqueda da artículos--%>
<h2 class="header blue">
    <i class="tag big grey icon"></i>
    Buscar Articulo
</h2>

<!--tabs para búsqueda de artículos-->
<div class="ui attached tabular menu pestanias">
    <%--tab names--%>
    <a class="active item" data-tab="uno">Artículos Guardados</a>
    <a class="item" data-tab="dos">Artículos Autorizados</a>
</div>


<div class="segment rissed contenido">

    <div class="ui bottom attached tab segment active uno" data-tab="uno">
        <div class="content">
            <div id="grid-buscar-log-articulo" style="height: 450px;">

            </div>
        </div>
    </div>

    <div class="ui bottom attached tab segment" data-tab="dos">
        <form class="ui form rissed segment">
            <%--botón borrar--%>
            <a href="#" class="ui blue right corner label limpiar"><i class="icon erase"></i></a>
                <%--ribbon--%>
            <div class="ui blue ribbon label">
                <h4 class="ui header inverted">Filtros</h4>
            </div>
            <div class="ui hidden divider"></div>

            <%--primera fila--%>
            <div class="three fields">
                <div class="two wide field input focus">
                    <label>ID:</label>
                    <input type="text" name="id" placeholder="ID..."/>
                </div>
                <div class="ten wide field">
                    <label>Descripción Larga:</label>
                    <input type="text" name="descripcionLarga" placeholder="Descripción Larga..."/>
                </div>
                <div class="four wide field">
                    <label>Descripción Corta:</label>
                    <input name="descripcionCorta" type="text" placeholder="Descripción Corta"/>
                </div>
            </div>

            <%--segunda fila--%>
            <div class="three fields">
                <%--este es el id del artículo, ver como hacer la tabla recursiva--%>
                <div class="field">
                    <label>Tipo de Artículo:</label>
                    <select class="ui selecttion dropdown tipo-articulo">
                        <option value="">Selecciona un Tipo...</option>
                        <c:forEach items="${listaTipoArticulo}" var="ta">
                            <option value="${ta.id}">${ta.descripcion}</option>
                        </c:forEach>
                    </select>
                </div>
                <div class="field">
                    <label>Valor Nominal:</label>
                    <input type="text" name="valorNominal" placeholder="Valor Nominal..."/>
                </div>

                <!--CUÑO-->
                <div class="field">
                    <label>Cuño:</label>
                    <input type="text" name="cunio" placeholder="Cuño" />
                </div>
            </div>

            <div class="three fields">
                <div class="field">
                    <label>Acabado:</label>
                    <select name="acabado" class="ui selection dropdown acabado">
                        <option value="">Acabado...</option>
                        <c:forEach items="${listaAcabado}" var="ar">
                            <option value="${ar.id}">${ar.descripcion}</option>
                        </c:forEach>
                    </select>
                </div>
                <div class="field">
                    <label>Metal:</label>
                    <select name="metal" class="ui selection dropdown metal">
                        <option value="">Metal...</option>
                        <c:forEach items="${listaMetal}" var="metal">
                            <option value="${metal.id}">${metal.descripcion}</option>
                        </c:forEach>
                    </select>
                </div>
                <div class="field">
                    <label>Familia:</label>
                    <select name="familia" class="ui selection dropdown familia">
                        <option value="">Familia...</option>
                        <c:forEach items="${listaFamilia}" var="familia">
                            <option value="${familia.id}">${familia.descripcion}</option>
                        </c:forEach>
                    </select>

                </div>
            </div>

            <div class="three fields">

                <div class="field">
                    <label>Contenido de Metal:</label>
                    <input name="contenidoMetal" type="text" placeholder="Contenido Metal..." />
                </div>

                <div class="field">
                    <%--check button--%>
                    <label>Iva:</label>
                    <div class="ui toggle checkbox">
                        <input type="checkbox" name="iva" checked="checked" />
                    </div>
                </div>
            </div>
        </form>

        <!--agregar el botón para buscar-->
        <div class="ui right aligned basic segment">           
            <!--<button onclick="obtenerExclusividadesGridDto()" class="ui button blue labeled icon"><i class="search icon"></i>Buscar</button>-->                
            <button id="btn-consultar-articulos-grid" class="ui button blue labeled icon"><i class="search icon"></i>Buscar</button>                
        </div>


        <div class="content">
            <div id="grid-buscar-articulo" style="height: 450px;">

            </div>
        </div>
    </div>





    <%--definición de artículo--%>




</div>

<!--esto estaría en la primera tab, solo mostraría los registros que se han guardado
    No se necesitaría hacer un filtrado, ya que no tienen que ser muchos elementos
-->

