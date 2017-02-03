# FlexProperties

![Downloads](https://img.shields.io/npm/dt/flexproperties.svg)
![Version](https://img.shields.io/npm/v/flexproperties.svg)
[![License](https://img.shields.io/npm/l/flexproperties.svg)](https://github.com/MartinMuzatko/flexproperties/blob/master/LICENSE)
[![Star](https://img.shields.io/github/stars/martinmuzatko/flexproperties.svg?style=social&label=Star)](https://github.com/martinmuzatko/flexproperties)
[![Tweet](https://img.shields.io/twitter/url/http/martinmuzatko.github.io/flexproperties.svg?style=social)](https://twitter.com/intent/tweet?text=Check%20out%20http%3A%2F%2Fmartinmuzatko.github.io%2Fflexproperties%20by%20%40martinmuzatko)

## Install

``` sh
npm install flexproperties
```

### Download

There are some built files in `dist/` one that has the vendor prefixes and one that isn't.
https://github.com/MartinMuzatko/flexproperties/tree/master/dist

### CDN

Via rawgit.com

[flexproperties.prefixed.min.css](https://cdn.rawgit.com/MartinMuzatko/flexproperties/c17eb6d5/dist/flex-grid.prefixed.min.css)

[flexproperties.min.css](https://cdn.rawgit.com/MartinMuzatko/flexproperties/c17eb6d5/dist/flex-grid.min.css)

### Can you build it for me?

FlexProperties consists of many different settings that define features, breakpoints and file-size.
There is a [build tool](https://github.com/MartinMuzatko/flexmaid) in progress.

## Setup

### Using Sass

If you are not satisfied with the default setup, feel free to change the variables before importing FlexProperties.
Default setup:

``` scss
// Sets breakpoints
$breakpoints: (
    (sm, 600px)
    (md, 960px)
    (lg, 1200px)
);

// Sets features to use, available globally
$features: (
  'order'
  'offset'
  'layout'
  'flex'
  'layout-align'
  'visibility'
);

// Features for each breakpoint
$breakpoint-features: (
  'order'
  'offset'
  'layout'
  'flex'
  'layout-align'
  'visibility'
);

$ie: false;

// Defines grid percentages
// 100/5 = 20 steps (5,10,15,20,25, etc)
// 100/10 = 10 steps (10,20,30, etc)
// available values: (1,2,5,10,20,25,50)
$flex-step: 5;

@import '<path to node_modules>/flexproperties/src/flex-grid.scss'
```

### Webpack

With webpack, you can import the file using `@import '~flexproperties'`.
Of course you still have to define your config.


## About

Reviving the once popular angular material grid property framework.

As demonstrated on their [official website](https://material.angularjs.org/latest/layout/children).
Since flexbox, this is the greatest grid framework/library that I have found so far. Every other flexbox grid framework lacks very fundamental usage features.

Currently, I'm looking to improve on the code output (smart selectors)
I created a [codepen](http://codepen.io/MartinMuzatko/full/BKbgOQ/) to showcase all different layout-align scenarios with the reduced code.

### Can I use it in production?

Yes! Flexbox is safe to use for IE10 and upwards.

See some **real** websites using flexproperties:

* [k15t.com](http://k15t.com)
* [help.k15t.com](http://help.k15t.com)
* [happy-css.com](http://happy-css.com)
* [martinmuzatko.github.io/flexproperties](martinmuzatko.github.io/flexproperties)

### Why forking it?

The standalone flexgrid [was part of angular](https://github.com/angular/material/issues/7660#issuecomment-199440833), but was migrated to [bower-material](https://github.com/angular/bower-material/), which contains a [standalone build](https://github.com/angular/material/blob/master/src/core/style/layout.scss). The grid is not actively maintained unfortunately - at least they [don't](https://github.com/angular/bower-material/pull/33#issuecomment-174316983) [allow](https://github.com/angular/bower-material/pull/34#issuecomment-218363943) [PRs](https://github.com/angular/bower-material/pulls?q=is%3Apr+is%3Aclosed) from the community to improve the source. Hence it contains lots of variables and functions not required for the grid.

To continue providing a great flexgrid that can be used in any project but still be adaptable to **your** needs, I created this repository. Since the improvements I propose are out of the scope of the original project, I decided to improve it on my own.

### Current Flaws - What has been fixed so far

 * [x] No configurable breakpoints (amount, less breakpoints -> less code)
 * [x] Too much code output - smarter way to arrange layout-aligns
 * [x] VendorPrefixes in the source code - this should be handled via build system (autoprefixer)
 * [x] No configurable amount of flex steps ( 5-100 is the default, including 66 and 33)
 * [x] No configurable orders (-20 to 20 is the current default)
 * [x] No build setup - we want to generate css that can be prefixed and minimized
 * [x] mixin `layout-padding-margin` uses properties that do not exist ([flex-lt-md] e.g.)
 * [x] hide/show for breakpoints is manually written
 * [x] Too much output - Many CSS rules can be reduced or merged

I'll fix these issues. For now, you can grab the cleaned up [flex-grid.sass file here](https://github.com/MartinMuzatko/flexproperties/blob/master/src/flex-grid.sass).

### Whats next?

I'm [creating an online build tool](https://martinmuzatko.github.io/flexmaid/), that lets you interactively choose features you want for your own breakpoints. Flexgrid outputs a lot of rules (see comparison below). Sometimes, you won't need `flex-offset` for every breakpoint. While the SASS file is already very powerful to do that, a tool has to be created for that.

https://martinmuzatko.github.io/flexmaid/

## Performance - Comparison

Looking at the original framework, I saw that many rules can be merged or reduced.

**Comparison Rules**
The comparison is made with
* 3 breakpoints
* Same amount of offsets (20), flex steps (20) etc.
* No vendor prefixes
* same end result in terms of behavior

Comparing the CSS output of the cleaned standalone version of angular material against my version:

| Comparison | Original | Updated |
| --- | --- | --- |
| Url | [Gist](https://gist.github.com/MartinMuzatko/5b9f675d41e72f56f3446935d3a8ca86) | [Gist](https://gist.github.com/MartinMuzatko/ed9877462232d65b366a598394da453c) |
| Lines - Total | 6644 | 4043 |
| Lines - Per Breakpoint (sm, gt-sm) | ~1645  | 1150 |
| Filesize (minified) | 90.7kb | 55.1kb |

## Disclaimer

The original Source Code belongs to [Angular](https://github.com/angular) licensed as [MIT](https://github.com/angular/bower-material/blob/master/LICENSE)

Since then, I heavily optimized and adapted flex-grid to serve as general purpose layout framework. It is almost a complete rewrite.
