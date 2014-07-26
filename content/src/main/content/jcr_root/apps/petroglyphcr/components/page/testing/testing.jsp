<%--
  Copyright 1997-2008 Day Management AG
  Barfuesserplatz 6, 4001 Basel, Switzerland
  All Rights Reserved.

  This software is the confidential and proprietary information of
  Day Management AG, ("Confidential Information"). You shall not
  disclose such Confidential Information and shall use it only in
  accordance with the terms of the license agreement you entered into
  with Day.

  ==============================================================================

  Default page component.

  Is used as base for all "page" components. It basically includes the "head"
  and the "body" scripts.

  ==============================================================================

--%><%@page session="false"
            contentType="text/html; charset=utf-8"
            import="com.day.cq.commons.Doctype,
                    com.day.cq.wcm.api.WCMMode,
                    com.day.cq.wcm.foundation.ELEvaluator" %><%
%><%@taglib prefix="cq" uri="http://www.day.com/taglibs/cq/1.0" %><%
%><cq:defineObjects/><%

    // read the redirect target from the 'page properties' and perform the
    // redirect if WCM is disabled.
    String location = properties.get("redirectTarget", "");
    // resolve variables in path
    location = ELEvaluator.evaluate(location, slingRequest, pageContext);
    if (WCMMode.fromRequest(request) != WCMMode.EDIT && location.length() > 0) {
        // check for recursion
        if (!location.equals(currentPage.getPath())) {
            final int protocolIndex = location.indexOf(":/");
            final int queryIndex = location.indexOf('?');
            final String redirectPath;
            if (  protocolIndex > -1 || queryIndex > -1 ) {
                redirectPath = location;
           // Fall back to appending, most likely the link was generated using browse dialog.
            } else {
                redirectPath = request.getContextPath() + location + ".html";
            }
            response.sendRedirect(redirectPath);
        } else {
            response.sendError(HttpServletResponse.SC_NOT_FOUND);
        }
        return;
    }
%><!DOCTYPE HTML>
<html>
	<head>
		<meta charset="UTF-8"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

		<cq:include script="/libs/wcm/core/components/init/init.jsp" />


		<!--[if lt IE 9]>
		<script src="https://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->

		
		<meta name="viewport" content="width=device-width">
		
	</head>
	<body>
		<div id="">
			<cq:include path="mainpar" resourceType="foundation/components/parsys" />
		</div>
	</body>
</html>