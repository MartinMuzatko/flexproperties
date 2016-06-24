# flexproperties
:construction: Reviving the once pouplar angular material grid property framework.

As demonstrated on their [official website](https://material.angularjs.org/latest/layout/children).
Since flexbox, this is the greatest grid framework/library that I have found so far. Every other flexbox grid framework lacks very fundamental usage features.

Currently, I'm looking to improve on the code output (smart selectors)
I created a [codepen](http://codepen.io/MartinMuzatko/full/BKbgOQ/) to showcase all different layout-align scenarios with the reduced code.

## Why forking it?

The standalone flexgrid [was part of angular](https://github.com/angular/material/issues/7660#issuecomment-199440833), but was migrated to [bower-material](https://github.com/angular/bower-material/), which contains a [standalone build](https://github.com/angular/material/blob/master/src/core/style/layout.scss). The grid is not actively maintained unfortunately - at least they [don't](https://github.com/angular/bower-material/pull/33#issuecomment-174316983) [allow](https://github.com/angular/bower-material/pull/34#issuecomment-218363943) [PRs](https://github.com/angular/bower-material/pulls?q=is%3Apr+is%3Aclosed) from the community to improve the source. Hence it contains lots of variables and functions not required for the grid.

To continue providing a great flexgrid that can be used in any project but still be adaptable to **your** needs, I created this repository. Since the improvements I propose are out of the scope of the original project, I decided to improve it on my own.

## Current Flaws - What has been fixed so far

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

Since forking from Angular, I heavily optimized and adapted flex-grid to serve as general purpose layout framework.
