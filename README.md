# FlexProperties

![Downloads](https://img.shields.io/npm/dt/flexproperties.svg)
![Version](https://img.shields.io/npm/v/flexproperties.svg)
[![License](https://img.shields.io/npm/l/flexproperties.svg)](https://github.com/MartinMuzatko/flexproperties/blob/master/LICENSE)
[![Star](https://img.shields.io/github/stars/martinmuzatko/flexproperties.svg?style=social&label=Star)](https://github.com/martinmuzatko/flexproperties)
[![Tweet](https://img.shields.io/twitter/url/http/martinmuzatko.github.io/flexproperties.svg?style=social)](https://twitter.com/intent/tweet?text=Check%20out%20http%3A%2F%2Fmartinmuzatko.github.io%2Fflexproperties%20by%20%40martinmuzatko)

Use flexbox in your HTML as part of the layout.

* Responsive
* Customizable breakpoints
* Layout in the HTML
* Quick sketching

FlexProperties enables you to create layouts as quickly as you can sketch a wireframe.

Check out the [FlexProperties playground](http://run.plnkr.co/lRYMsHtCT3iL65Fg/)

[Open Codepen](http://codepen.io/MartinMuzatko/pen/mRjgqX/)
```html
<section>
    <h1>Plans</h1>
    <div layout="row" layout-align="space-between end">
        <article flex="100" flex-gt-md="33">
            <h2>Hobby</h2>
        </article>
        <article flex="100" flex-gt-md="33">
            <h2>Standard</h2>
        </article>
        <article flex="100" flex-gt-md="33">
            <h2>Enterprise</h2>
        </article>
    </div>
</section>
```

## Install

```bash
npm install flexproperties -D
```

```bash
yarn add flexproperties
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


## Whats next?

I'm [creating an online build tool](https://martinmuzatko.github.io/flexmaid/), that lets you interactively choose features you want for your own breakpoints. Flexgrid outputs a lot of rules (see comparison below). Sometimes, you won't need `flex-offset` for every breakpoint. While the SASS file is already very powerful to do that, a tool has to be created for that.

https://martinmuzatko.github.io/flexmaid/

## Disclaimer

The original Source Code belongs to [Angular](https://github.com/angular) licensed as [MIT](https://github.com/angular/bower-material/blob/master/LICENSE)
They had flexbox as html properties in their original angular material package. However, they do not provide a customizable or standalone version.

Since then, I heavily optimized and adapted flex-grid to serve as general purpose layout library. It is almost a complete rewrite.
