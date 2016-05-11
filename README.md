# flexproperties
:construction: Reviving the once pouplar angular material grid property framework.

As demonstrated on their [official website](https://material.angularjs.org/latest/layout/children).
Since flexbox, this is the greatest grid framework/library that I have found so far. Every other flexbox grid framework lacks very fundamental usage features.

## Why forking it?

The standalone flexgrid [was part of angular](https://github.com/angular/material/issues/7660#issuecomment-199440833), but was migrated to [bower-material](https://github.com/angular/bower-material/), which contains a [standalone build](https://github.com/angular/material/blob/master/src/core/style/layout.scss). The grid is not actively maintained unfortunately - at least they [don't](https://github.com/angular/bower-material/pull/33#issuecomment-174316983) [allow](https://github.com/angular/bower-material/pull/34#issuecomment-218363943) [PRs](https://github.com/angular/bower-material/pulls?q=is%3Apr+is%3Aclosed) from the community to improve the source. Hence it contains lots of variables and functions not required for the grid.

To continue providing a great flexgrid that can be used in any project but still be adaptable to **your** needs, I created this repository.

## Current Flaws

 * [ ] No configurable breakpoints (amount and size)
 * [ ] Too much code output - selectors can be arranged more smartly
 * [ ] VendorPrefixes in the source code - this should be handled via build system
 * [ ] No configurable amount of flex steps ( 5-100 is the default, including 66 and 33)
 * [ ] No configurable orders (-20 to 20 is the current default)
 * [ ] No build setup

I'll fix these issues. For now, you can grab the cleaned up [flex-grid.sass file here](https://github.com/MartinMuzatko/flexproperties/blob/master/src/flex-grid.sass).

## Disclaimer

The original Source Code belongs to [Angular](https://github.com/angular) licensed as [MIT](https://github.com/angular/bower-material/blob/master/LICENSE)
