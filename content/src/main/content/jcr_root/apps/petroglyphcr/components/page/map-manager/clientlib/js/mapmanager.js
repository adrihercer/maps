/**
 * Copyright 2014, Adrian Herrera
 * Licensed under the MIT license.
 *
 */

CQ.petroglyphcr = {};

CQ.petroglyphcr.MapManager = CQ.Ext.extend(CQ.Ext.Panel, {
    constructor: function(config) {
        config = (!config ? {} : config);
        
        var defaults = {
            "hideBorders": true,
            "border": false,
            "stateful": false,
            "autoHeight": true,
            "colsMetadata": {
                "jcr:path": {
                    "readOnly": true
                }
            },
            "bodyStyle": {
                "background-color": "#e8e8e8"
            },
            "encodeMapping": {
                "\\.": "_DOT_"
            }
        };

        // init component by calling super constructor
        CQ.petroglyphcr.MapManager.superclass.constructor.call(this, defaults);
    },

	// overriding CQ.Ext.Panel#initComponent
	initComponent : function() {
		CQ.petroglyphcr.MapManager.superclass.initComponent.call(this);
	},
	
	// overriding CQ.Ext.Panel#onRender
    onRender: function(ct, position) {
        CQ.petroglyphcr.MapManager.superclass.onRender.call(this, ct, position);
    }
});

CQ.Ext.reg("mapmanager", CQ.petroglyphcr.MapManager);