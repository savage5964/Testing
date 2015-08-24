<%-- 
    Document   : decreto
    Created on : 17/08/2015, 04:18:21 PM
    Author     : t41841
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page isELIgnored="false" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <c:set var="contextPath" value="${pageContext.servletContext.contextPath}" />
        <title>Catálogo - Decreto</title>
        <link rel="stylesheet" href="${contextPath}/resources/css/jquery.inputfile.css" />
        <link rel="stylesheet" href="${contextPath}/resources/css/sicon/catalogo/decreto.css"/>
        <script src="${contextPath}/resources/js/jquery.inputfile.js"></script>
        <script src="${contextPath}/resources/js/jquery.form.min.js"></script>
        <script type="text/javascript" src="${contextPath}/resources/js/sicon/catalogo/decreto.js"></script>
    </head>
    <body>
        <!--TODO-->
        <main class="ui container">
            <h2 class="ui header blue">
                <i class="tag grey icon"></i>
                <div class="content">
                    Catalogo Decreto
                </div>
            </h2>

            <%--tabs--%>
            <div class="ui attached tabular menu">

                <%--tab names Ver que nombres se usarán para el decreto--%>
                <a class="active item" data-tab="first">Definición</a>
                <a class="item" data-tab="second">Archivo</a>


                <%--búsqueda--%>
                <div class="right menu">
                    <div class="item">
                        <div id="btn-nuevo-decreto" class="ui basic icon button">                        
                            <i class="wizard icon"></i>
                            Registar nuevo Decreto...
                        </div>
                    </div>
                    <div class="item">
                        <div id="btn-buscar-decreto" class="ui basic icon button">                        
                            <i class="search icon"></i>
                            Consultar decreto...
                        </div>
                    </div>
                </div>
            </div>

            <div class="ui botton attached tab active">
                <div class="ui segment rissed">
                    Test
                </div>
            </div>
        </main>
    </body>
</html>
