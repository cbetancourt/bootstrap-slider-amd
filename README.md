# Bootstrap Slider #
Fork of pammacdotnet's [bootstrap-slider](https://github.com/pammacdotnet/bootstrap-slider),
which is a fork of eyecon's [bootstrap-slider](http://www.eyecon.ro/bootstrap-slider/).

## Changes ##
- Wrapped jQuery plugin in a module that works with AMD and browser globals.
- Added standalone handles CSS for those who need them.
- Added samples for [AMD (using RequireJS)](https://github.com/cbetancourt/bootstrap-slider-amd/blob/master/examples/amd/)
and [browser globals](https://github.com/cbetancourt/bootstrap-slider-amd/blob/master/examples/globals/).

## Examples ##

To run the examples, make sure to install the runtime dependencies by running
`npm install` and `bower install` from the project's root. Then use your
favorite browser to open the sample `index.html` pages.

## Changes ##

### 2.1.2 ###
- Added support for custom `width` for horizontal, and `height` for vertical sliders.
- Updated CSS to fix issues with vertical sliders.
- Added vertical slider examples.
- Changed the minimum required version of jQuery from `^2.1.22` to `^1.12.0`
- Made `requirejs` an NPM developement dependency. It has been moved from bower.json to package.json.

### 2.1.1 ###
- Added build process.
- Created distributable directory.

### 2.1.0 ###
- Wrapped plugin in AMD/globals module.
- Added examples.