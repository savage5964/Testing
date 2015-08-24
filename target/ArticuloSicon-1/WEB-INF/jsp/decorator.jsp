<!DOCTYPE html>
<%-- 
    Document   : decorator
    Created on : 3/06/2015, 10:55:48 AM
    Author     : g13380
--%>
<%@page isELIgnored="false" %>
<%@page contentType="text/html" pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
        <title>DGE_SICON - <sitemesh:write property="title" /></title>
        <c:set var="contextPath" value="${pageContext.servletContext.contextPath}" />
        <link rel="icon" type="image/jpeg" href="${contextPath}/resources/images/favicon.jpg" />
        <link rel="stylesheet" href="${contextPath}/resources/css/semantic-ui/semantic.min.css" />
        <link rel="stylesheet" href="${contextPath}/resources/css/w2ui-1.4.3.min.css" />
        <link rel="stylesheet" href="${contextPath}/resources/css/default.css" />
        <script src="${contextPath}/resources/js/jquery-2.1.4.min.js"></script>
        <script src="${contextPath}/resources/js/semantic.min.js"></script>
        <script src="${contextPath}/resources/js/w2ui/w2ui-1.4.3.min.js"></script>
        <script src="${contextPath}/resources/js/sicon/global_sicon.js"></script>
        <script>
            w2utils.locale('${contextPath}/resources/js/w2ui/es-mx.json');
        </script>
        <sitemesh:write property='head'/>
    </head>
    <body>
        <sitemesh:write property='body'/>
    </body>
</html>
