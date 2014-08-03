/**
 * Copyright 2014, Adrian Herrera
 * Licensed under the MIT license.
 *
 */

CQ.petroglyphcr = {};


/**
* @class CQ.petroglyphcr.MapMarker
* @extends CQ.form.CompositeField
* This is a custom component to provide the geographical location of a point
* @param {Object} config the config object
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
	* @type CQ.Ext.form.NumberField
	*/
	latitudeValue: null,
	
	/**
	* @private
	* @type CQ.Ext.form.NumberField
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
			"layout": "form"
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
		this.markerText = new CQ.Ext.form.TextField({
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
		this.latitudeValue = new CQ.Ext.form.NumberField({
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
		this.longitudeValue = new CQ.Ext.form.NumberField({
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
			"name": this.markerText.getValue()
		};
		return JSON.stringify(marker);
	},

	updateHidden: function () {
		this.hiddenField.setValue(this.getValue());
	}
	
});

CQ.Ext.reg("mapmarker", CQ.petroglyphcr.MapMarker);

