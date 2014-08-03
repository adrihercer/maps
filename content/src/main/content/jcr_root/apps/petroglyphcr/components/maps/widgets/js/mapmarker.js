/**
 * Copyright 2014, Adrian Herrera
 * Licensed under the MIT license.
 *
 */

CQ.petroglyphcr = {};


/**
* @class MyClientLib.CustomPathFieldWidget
* @extends CQ.form.CompositeField
* This is a custom path field with link text and target
* @param {Object} config the config object
*/
/**
* @class Ejst.CustomWidget
* @extends CQ.form.CompositeField
* This is a custom widget based on {@link CQ.form.CompositeField}.
* @constructor
* Creates a new CustomWidget.
* @param {Object} config The config object
*/
CQ.petroglyphcr.MapMarker =  CQ.Ext.extend(CQ.form.CompositeField, {
	
	/**
	* @private
	* @type CQ.Ext.form.Hidden
	*/
	hiddenField: null,

	/**
	* @private
	* @type CQ.Ext.form.TextField
	*/
	markerText: null,

	/**
	* @private
	* @type CQ.Ext.form.TextField
	*/
	latitudeValue: null,
	
	/**
	* @private
	* @type CQ.Ext.form.TextField
	*/
	longitudeValue: null,

	/**
	* @private
	* @type CQ.Ext.form.FormPanel
	*/
	formPanel: null,

	constructor: function (config) {
		config = config || {};
		var defaults = {
			"border": true,
			//"labelWidth": 75,
			"layout": "form"
				//”columns”:6
		};
		
		config = CQ.Util.applyDefaults(config, defaults);
		CQ.petroglyphcr.MapMarker.superclass.constructor.call(this, config);
	},

	//overriding CQ.Ext.Component#initComponent
	initComponent: function () {
		CQ.petroglyphcr.MapMarker.superclass.initComponent.call(this);

		// Hidden field
		this.hiddenField = new CQ.Ext.form.Hidden({
			name: this.name
		});
		this.add(this.hiddenField);

		// Marker text
		this.add(new CQ.Ext.form.Label({
			cls: "customwidget-label",
			text: "Marker Text"
		}));
		this.markerText = new CQ.Ext.form.TextField({
			cls: "customwidget-1",
			fieldLabel: "Marker Text: ",
			maxLength: 30,
			maxLengthText: "A maximum of 30 characters is allowed for the Marker Text.",
			allowBlank: true,
			listeners: {
				change: {
					scope: this,
					fn: this.updateHidden
				}
			}
		});
		this.add(this.markerText);

		// Latitude
		/*this.add(new CQ.Ext.form.Label({
			cls: "customwidget-label",
			text: "Latitude"
		}));*/
		this.latitudeValue = new CQ.Ext.form.NumberField({
			//cls: "customwidget-2",
			fieldLabel: "Latitude: ",
			maxLength: 10,
			allowBlank: false,
			listeners: {
				change: {
					scope: this,
					fn: this.updateHidden
				},
				dialogclose: {
					scope: this,
					fn: this.updateHidden
				}
			}
		});
		this.add(this.latitudeValue);
		
		// Longitude
		/*this.add(new CQ.Ext.form.Label({
			cls: "customwidget-label",
			text: "Longitude"
		}));*/
		this.longitudeValue = new CQ.Ext.form.NumberField({
			//cls: "customwidget-2",
			fieldLabel: "Longitude: ",
			maxLength: 10,
			allowBlank: false,
			listeners: {
				change: {
					scope: this,
					fn: this.updateHidden
				},
				dialogclose: {
					scope: this,
					fn: this.updateHidden
				}
			}
		});
		this.add(this.longitudeValue);

	},

	processInit: function (path, record) {
		this.markerText.processInit(path, record);
		this.latitudeValue.processInit(path, record);
		this.longitudeValue.processInit(path, record);
	},

	setValue: function (value) {
		var marker = JSON.parse(value);
		this.markerText.setValue(marker.name);
		this.latitudeValue.setValue(marker.latLng[0]);
		this.longitudeValue.setValue(marker.latLng[1]);
		this.hiddenField.setValue(value);
	},

	getValue: function () {
		return this.getRawValue();
	},

	getRawValue: function () {
		var marker = {
			"latLng": [this.latitudeValue.getValue(), this.longitudeValue.getValue()],
			//"longitude": this.longitudeValue.getValue(),
			"name": this.markerText.getValue()
		};
		return JSON.stringify(marker);
	},

	updateHidden: function () {
		this.hiddenField.setValue(this.getValue());
	}
	
});

CQ.Ext.reg("mapmarker", CQ.petroglyphcr.MapMarker);

