/* global require */

require.config({
	paths: {
		"jquery": "../../node_modules/jquery/dist/jquery.min",
		"slider": "../../dist/js/bootstrap-slider.min"
	}
});

require([
	"jquery",
	"slider"
], function($, slider) {

	"use strict";

	$(".list-group input").slider();

});
