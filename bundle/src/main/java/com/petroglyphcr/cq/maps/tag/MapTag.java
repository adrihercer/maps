/**
 * Copyright 2014, Adrian Herrera
 * Licensed under the MIT license.
 */

package com.petroglyphcr.cq.maps.tag;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.BodyTag;
import javax.servlet.jsp.tagext.BodyTagSupport;

import org.apache.sling.api.SlingHttpServletRequest;

import com.petroglyphcr.cq.maps.model.Map;

import tldgen.Tag;
import tldgen.TagAttribute;

@Tag
public class MapTag extends BodyTagSupport {

	private String var;
    
	@Override
	public int doEndTag() throws JspException {
		
		SlingHttpServletRequest request = (SlingHttpServletRequest) this.pageContext.getRequest();
		
		Map map = request.getResource().adaptTo(Map.class);
		
		this.pageContext.setAttribute(var, map);
		 
        return BodyTag.EVAL_PAGE;
	}
	
	@TagAttribute(required=true)
    public void setVar(String var) {
        this.var = var;
    }
}
