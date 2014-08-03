<%--

	Copyright 2014, Adrian Herrera
	Licensed under the MIT license.
	
 --%>
 
<%@include file="/libs/foundation/global.jsp" %>
<%@page contentType="text/html"
         pageEncoding="utf-8"
         import="java.util.Arrays,
                 java.util.HashMap,
                 java.util.HashSet,
                 java.util.Map,
                 java.util.Set,
                 org.apache.sling.commons.json.JSONException,
                 com.day.cq.commons.TidyJSONWriter" %><%
%>
<cq:defineObjects/>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN">
<html>
	<head>
    	<title>Map Manager</title>
    	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

		<cq:includeClientLib categories="cq.wcm.edit,cq.security,cq.tagging,petroglyphcr.mapmanager"/>
		
    	<script src="/libs/cq/ui/resources/cq-ui.js" type="text/javascript"></script>
	</head>
	<body>
		<h1>Map Manager</h1>

		<div id="CQ">
    		<div id="petroglyphcr-maps"></div>
		</div>
		<script type="text/javascript">
		    CQ.Ext.onReady(function() {
		        var mapmanager = new CQ.petroglyphcr.MapManagerForm({renderTo:"petroglyphcr-maps"});
		    });
		</script>
	</body>
</html>