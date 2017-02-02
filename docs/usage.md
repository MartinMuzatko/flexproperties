
## layout

with the attribute `layout` you can set the `flex-direction` of a container.

This will also define how `layout-align` and `flex` values are used.

**possible values:** `row` and `column`

**tip:** `column` will swap main and cross axis.

``` html
<ul class="breadcrumbs" layout="row">
    <li>Documentation</li>
    <li>Layout</li>
    <li>Contribute</li>
</ul>
```

## layout-align

**requirement:** There has to be a `layout` assigned in order for this to take effect. Depending on the layout, this will se

This property defines the flow of direct children elements.

The first value sets the alignment of the items on the main-axis, the second for the cross-axis.

**possible values:** `start`, `end`, `center`, `space-between` and `space-around`

If there is no value provided, it will stretch the items for the axis.

``` html
<section layout="row" layout-align="space-between start">
    <article class="card">...</article>
    <article class="card">...</article>
    <article class="card">...</article>
</section>
```
