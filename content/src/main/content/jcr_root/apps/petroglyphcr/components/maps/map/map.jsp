<%--

	Copyright 2014, Adrian Herrera
	Licensed under the MIT license.
	
 --%>

<%@include file="/libs/foundation/global.jsp"%>
<%@page import="org.apache.commons.lang.StringUtils" %>

<%
	final String mapId = properties.get("mapId", "map-default-id");
	final String map = properties.get("map", "");
	final String height = properties.get("height", "400");
	final String width = properties.get("width", "600");
	final String backgroundColor = properties.get("backgroundColor", "383f47");
	final String[] markers = properties.get("markers", new String[]{});
	
	String markerValues = StringUtils.join(markers, ",");
%>

<cq:includeClientLib js="maps" />
<cq:includeClientLib js="petroglyphcr.maps.widgets" />

<div id="<%= mapId %>" style="width: <%= width %>px; height: <%= height %>px"></div>
<script src="/etc/designs/maps/<%= map %>.js" type="text/javascript"></script>
<script>
    $(function(){
      $('#<%= mapId %>').vectorMap({map: '<%= map %>', backgroundColor: '#<%= backgroundColor %>', markers: [<%= markerValues %>]});
    });
</script>