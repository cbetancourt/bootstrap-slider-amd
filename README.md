# Bootstrap Slider #
Fork of pammacdotnet's [bootstrap-slider](https://github.com/pammacdotnet/bootstrap-slider),
which is a fork of eyecon's [bootstrap-slider](http://www.eyecon.ro/bootstrap-slider/).

## Installation ##
Run `bower install bootstrap-slider-amd` to install from the [Bower registry](http://bower.io/search).

## Examples ##

To run the examples, make sure to install the runtime dependencies by running
`npm install` from the project's root folder. Then use your favorite browser to
open the sample `index.html` pages.

## Changes ##

### 2.2.3 ###
- Made jQuery a developement dependency.

### 2.2.2 ###
- Fixed jQuery example.

### 2.2.1 ###
- Updated documentation.

### 2.2.0 ###
- Improved look and feel of slider track, active selection and handles.
- Updated build and runtime dependencies.

### 2.1.6 ###
- Updated project name prior to publication to NPM repository.

### 2.1.5 ###
- Moved calls to `this.setValue` inside of calculation logic to solve rounding
errors when the sliders is reset to original min/max values.
- Updated examples.

### 2.1.4 ###
- Range validation is now checked using `this.value.length` instead of checking
for the existence of a second array member. This bug caused the second drag
handle to be hidden when an unusual, yet valid, range like `0:0` is used.
- Updated examples.

### 2.1.3 ###
Added support for the unusual case of ranges that use the same min and max
values. Typically these values are derived from calculations. In the
special case of the range `0:0`, the `data-slider-value` property (or `value`
option) should not be included to avoid range formatting issues.

When this issue is present, the slider's `dragLocked` property will be set to
`true` and the slider handles will not be draggable. The corresponding CSS
was also updated to reflect this behavior.

### 2.1.2 ###
- Added support for custom `width` for horizontal, and `height` for vertical sliders.
- Updated CSS to fix issues with vertical sliders.
- Added vertical slider examples.
- Changed the minimum required version of jQuery from `^2.1.22` to `^1.12.0`
- Made `requirejs` an NPM developement dependency. It has been moved from
bower.json to package.json.

### 2.1.1 ###
- Added build process.
- Created distributable directory.

### 2.1.0 ###
- Wrapped jQuery plugin in a module that works with AMD and browser globals.
- Added standalone handles CSS for those who need them.
- Added samples for [AMD (using RequireJS)](https://github.com/cbetancourt/bootstrap-slider-amd/blob/master/examples/amd/)
and [browser globals](https://github.com/cbetancourt/bootstrap-slider-amd/blob/master/examples/globals/).
