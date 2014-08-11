<%--

	Copyright 2014, Adrian Herrera
	Licensed under the MIT license.
	
 --%>

<%@include file="/libs/foundation/global.jsp"%>
<%@page import="org.apache.commons.lang.StringUtils" %>
<%@taglib prefix="petroglyphcr" uri="http://www.petroglyphcr.com/cq" %>
<petroglyphcr:map var="map" />

<cq:includeClientLib js="maps" />
<cq:includeClientLib js="petroglyphcr.maps.widgets" />

<div id="${map.mapId}" style="width: ${map.width}px; height: ${map.height}px"></div>
<script src="/etc/designs/maps/${map.map}.js" type="text/javascript"></script>
<script>
    $(function(){
    	$('#${map.mapId}').vectorMap({ 
    		map: '${map.map}', 
    		backgroundColor: '#${map.backgroundColor}', 
    		markers: [${map.markers}],
    		markerStyle: {
    			initial: {
    		      	fill: '#${map.markersFill}',
    		    	stroke: '#${map.markerStroke}'
    			}
    		}
    	});
    });
</script>