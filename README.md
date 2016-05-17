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

 * [ ] No configurable breakpoints (amount, less breakpoints -> less code)
 * [x] Too much code output - smarter way to arrange layout-aligns 
 * [x] VendorPrefixes in the source code - this should be handled via build system (autoprefixer)
 * [ ] No configurable amount of flex steps ( 5-100 is the default, including 66 and 33)
 * [x] No configurable orders (-20 to 20 is the current default)
 * [ ] No build setup - we want to generate css that can be prefixed and minimized
 * [ ] Breakpoints in mixin `layout-padding-margin` are manually created

I'll fix these issues. For now, you can grab the cleaned up [flex-grid.sass file here](https://github.com/MartinMuzatko/flexproperties/blob/master/src/flex-grid.sass).

So far, I reduced 80 lines from the original source but still keep the original behavior

## Currently WIP: Breakpoints mixin

Currently, media queries are added manually for each breakpoint.
I want it to be more configurable.

```sass
$breakpoints: (
    (sm, 600px)
    (md, 960px)
    (lg, 1200px)
);

@each $label, $value in $breakpoints {
    $first: nth($breakpoints, 1);
    $last: nth($breakpoints, length($breakpoints));
    $index: index($breakpoints, ($label, $value));
    /* #{$label} - I: #{$index} */
        
    @if $label == nth($first, 1) {
        @media (max-width: $value - 1) {
            body {
                content: $label;
            }
        }

    } @else {
          @media (min-width: nth(nth($breakpoints, $index - 1), 2) ) and (max-width: $value - 1) {
            body {
                content: $label;
            }
        }
    }

        @media (min-width: $value) {
          body {
            content: "gt-#{$label}";
          }
        }
}


```

## Disclaimer

The original Source Code belongs to [Angular](https://github.com/angular) licensed as [MIT](https://github.com/angular/bower-material/blob/master/LICENSE)
