/* global require */

require.config({
    paths: {
        "jquery": "../../bower_components/jquery/dist/jquery.min",
        "slider": "../../bootstrap-slider"
    }
});

require([
    "jquery",
    "slider"
], function ($, slider) {

    "use strict";

    $("input").slider();

});
