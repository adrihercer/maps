<%--

	Copyright 2014, Adrian Herrera
	Licensed under the MIT license.
	
 --%>

<%@include file="/libs/foundation/global.jsp"%>

<%
	final String mapId = properties.get("mapId", "map-default-id");
	final String map = properties.get("map", "");
	final String height = properties.get("height", "400");
	final String width = properties.get("width", "600");
%>

<cq:includeClientLib js="maps" />
<div id="<%= mapId %>" style="width: <%= width %>px; height: <%= height %>px"></div>
<script src="/etc/designs/maps/<%= map %>.js" type="text/javascript"></script>
<script>
    $(function(){
      $('#<%= mapId %>').vectorMap({map: '<%= map %>'});
    });
</script>