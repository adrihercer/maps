/**
 * Copyright 2014, Adrian Herrera
 * Licensed under the MIT license.
 */

package com.petroglyphcr.cq.maps.servlet;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;
import javax.servlet.ServletException;

import org.apache.felix.scr.annotations.sling.SlingServlet;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;

import com.google.gson.Gson;

/**
 * Servlet class that returns the list of maps stored under the 
 * /etc/designs/maps path. The list is returned in JSON format.
 * 
 * @author Adrian Herrera
 *
 */
@SlingServlet(
	    paths = {"/bin/petroglyphcr/maplisting"},
	    extensions = "json",
	    methods = "GET")
public class MapListingServlet extends SlingSafeMethodsServlet {
	
	// Literal constants used across the class
	private static final String DESIGN_MAPS_PATH = "/etc/designs/maps";
	private static final String LABEL = "label";
	private static final String VALUE = "value";
	private static final String JSON_CONTENT_TYPE = "application/json";
	private static final String JCR_CONTENT = "jcr:content";
	private static final String JCR_TITLE = "jcr:title";

	@Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws ServletException, IOException {
        
		ResourceResolver resourceResolver = request.getResourceResolver();
		
		// Gets the node of the /etc/designs/maps path
		Node mapsNode = resourceResolver.getResource(DESIGN_MAPS_PATH).adaptTo(Node.class);
		
		List<Map<String, String>> mapsList = new ArrayList<Map<String, String>>();
		
		try {
			NodeIterator it = mapsNode.getNodes();
			
			Node current;
			Map<String, String> mapData;
			
			// Iterates over the mapsNode children to get the data for each map
			while (it.hasNext()) {
				current = it.nextNode();
				
				mapData = new HashMap<String, String>();
				
				mapData.put(VALUE, current.getName().replace(".js", ""));
				mapData.put(LABEL, current.getNode(JCR_CONTENT).getProperty(JCR_TITLE).getString());
				
				mapsList.add(mapData);
			}
		} catch (RepositoryException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		Gson gson = new Gson();
		
		response.setContentType(JSON_CONTENT_TYPE);
		response.getWriter().write("{\"options\":" + gson.toJson(mapsList) + "}");
		
    }
}
