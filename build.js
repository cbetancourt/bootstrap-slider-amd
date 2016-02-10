/**
 * NodeJS
 * Simple build file that minifies our source code for distribution.
 */

var fs = require("fs-extra")

var UglifyJS = require("uglify-js")
var CleanCSS = require("clean-css")

var srcDir = "./src"
var distDir = "./dist"

// Housekeeping
// -------------------------------

// make sure distribution dirs exist
fs.ensureDir(distDir, function (err) {
    if (err)
        throw err
})
fs.ensureDir(distDir + "/js", function (err) {
    if (err)
        throw err
})
fs.ensureDir(distDir + "/css", function (err) {
    if (err)
        throw err
})

// JavaScript
// -------------------------------

// copy original to dist
fs.copy(srcDir + "/js/bootstrap-slider.js", distDir + "/js/bootstrap-slider.js")

// uglify JS
var uglyJS = UglifyJS.minify([srcDir + "/js/bootstrap-slider.js"], {
    outSourceMap: "bootstrap-slider.min.js.map"
})
// write JS
fs.writeFile(distDir + "/js/bootstrap-slider.min.js", uglyJS.code)
fs.writeFile(distDir + "/js/bootstrap-slider.min.js.map", uglyJS.map)

// Styles
// -------------------------------

// copy originals to dist
fs.copy(srcDir + "/css/slider.css", distDir + "/css/bootstrap-slider.css")
fs.copy(srcDir + "/css/slider-handles.css", distDir + "/css/bootstrap-slider-handles.css")

// minify CSS
var source = "@import url(" + srcDir + "/css/slider.css);";
var uglyCSS = new CleanCSS().minify(source, function (err, minified) {
    // write CSS
    fs.writeFile(distDir + "/css/bootstrap-slider.min.css", minified.styles)
})

var source = "@import url(" + srcDir + "/css/slider-handles.css);";
var uglyCSS = new CleanCSS().minify(source, function (err, minified) {
    // write CSS
    fs.writeFile(distDir + "/css/bootstrap-slider-handles.min.css", minified.styles)
})
