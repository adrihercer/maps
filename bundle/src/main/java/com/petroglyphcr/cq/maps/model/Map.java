/**
 * Copyright 2014, Adrian Herrera
 * Licensed under the MIT license.
 */

package com.petroglyphcr.cq.maps.model;

import javax.inject.Inject;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;

/**
 * Map class that represents the configuration of the map component.
 * The Model annotation allows to perform a direct mapping with the 
 * content stored in the JCR.
 * 
 * @author Adrian Herrera
 *
 */
@Model(adaptables=Resource.class)
public class Map {

	@Inject
	@Optional
	private String mapId;
	
	@Inject
	@Optional
	private String map;
	
	@Inject
	@Optional
	private String height;
	
	@Inject
	@Optional
	private String width;
	
	public String getMapId() {
		return mapId;
	}

	public String getMap() {
		return map;
	}

	public String getHeight() {
		return height;
	}

	public String getWidth() {
		return width;
	}

	public String getBackgroundColor() {
		return backgroundColor;
	}

	public String getMarkers() {
		return StringUtils.join(markers, ",");
	}

	public String getMarkersFill() {
		return markersFill;
	}

	public String getMarkerStroke() {
		return markerStroke;
	}

	@Inject
	@Optional
	private String backgroundColor;
	
	@Inject
	@Optional
	private String[] markers;
	
	@Inject
	@Optional
	private String markersFill;
	
	@Inject
	@Optional
	private String markerStroke;
	
	public Map() {
		mapId = "";
		map= "";
		height = "400";
		width = "600";
		backgroundColor = "383f47";
		markers = new String[]{};
		markersFill = "F8E23B";
		markerStroke = "383f47";
	}
	
	@Override
	public String toString() {
		return "Map = [mapId=" + mapId + "]";
	}
	
}
