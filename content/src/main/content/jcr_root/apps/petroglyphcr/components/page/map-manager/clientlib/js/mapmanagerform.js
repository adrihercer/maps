CQ.petroglyphcr.MapManagerForm = CQ.Ext.extend(CQ.Ext.form.FormPanel, {
    constructor: function(config) {
        config = (!config ? {} : config);

        config.xtype = "mapmanager";
        var renderTo = config["renderTo"];
        delete config["renderTo"];

        var defaults = {
            "renderTo": renderTo,
            //"region": "center",
            "items": [ config ],
            "hideBorders": true,
            "border": false,
            "stateful": false,
            "layout": "fit"
        };

        // init component by calling super constructor
        CQ.petroglyphcr.MapManagerForm.superclass.constructor.call(this, defaults);
    }
});

CQ.Ext.reg("mapmanagerform", CQ.petroglyphcr.MapManagerForm);