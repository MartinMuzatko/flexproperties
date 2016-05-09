# flexproperties
:construction: Reviving the once pouplar angular material grid property system

As demonstrated on their [official website](https://material.angularjs.org/latest/layout/children).
Since flexbox, this is the greatest grid system that I have found so far. Every other grid system lacks very fundamental usage features.

## Why forking it?

It is part of angular,

## Current Flaws

 * [ ] No configurable breakpoints (amount and size
 * [ ] Too much code output - selectors can be arranged more smartly
 * [ ] VendorPrefixes in the source code - this should be handled via build system
 * [ ] No configurable amount of flex steps ( 5-100 is the default, including 66 and 33)
 * [ ] No configurable orders (-20 to 20 is the current default)
 * [ ] No build setup

I'll fix these issues. For now, you can grab the flex-grid.sass file.
