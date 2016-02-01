/* global require */

require.config({
    paths: {
        "jquery": "../../bower_components/jquery/dist/jquery.min",
        "slider": "../../dist/js/bootstrap-slider.min"
    }
});

require([
    "jquery",
    "slider"
], function ($, slider) {

    "use strict";

    $("input").slider();

});
