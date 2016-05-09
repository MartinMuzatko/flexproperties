# flexproperties
:construction: Reviving the once pouplar angular material grid property system

As demonstrated on their [official website](https://material.angularjs.org/latest/layout/children).
Since flexbox, this is the greatest grid systems that I have found so far. Every other grid system lacks very fundamental usage features.

## Why forking it?

The standalone flexgrid [was part of angular](https://github.com/angular/material/issues/7660#issuecomment-199440833), but was migrated to [bower-material](https://github.com/angular/bower-material/), which contains a [standalone build](https://github.com/angular/material/blob/master/src/core/style/layout.scss) now, which is not actively maintained unfortunately. Hence it contains lots of variables and functions not required for the grid.

To continue providing a great flexgrid that can be used in any project, I created this repo 


## Current Flaws

 * [ ] No configurable breakpoints (amount and size
 * [ ] Too much code output - selectors can be arranged more smartly
 * [ ] VendorPrefixes in the source code - this should be handled via build system
 * [ ] No configurable amount of flex steps ( 5-100 is the default, including 66 and 33)
 * [ ] No configurable orders (-20 to 20 is the current default)
 * [ ] No build setup

I'll fix these issues. For now, you can grab the flex-grid.sass file.
