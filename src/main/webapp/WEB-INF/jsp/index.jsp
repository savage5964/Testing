<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <c:set var="contextPath" value="${pageContext.servletContext.contextPath}" />
        <title>SICON</title>
    </head>
    <body>
        <div class="ui basic segment">
            <h1>Hola, aquí así pueden agregar sus mapeos de prueba (para no hacer controllers):</h1>
            <p>Clase <strong>DispatcherConfig.java</strong></p>            
            <p>
                @Override<br/>
                public void addViewControllers(ViewControllerRegistry registry) {<br/>
                    registry.addViewController("/").setViewName("index");<br/>
                    <strong>
                        <em>registry.addViewController("/catalogo-cliente").setViewName("catalogo_cliente");</em>
                        <span style="color:red;"><-- así (param1 = url, param2 = nombre de jsp)</span>
                    </strong>
                    <br/>
                } 
            </p>
        </div>                
    </body>
</html>
