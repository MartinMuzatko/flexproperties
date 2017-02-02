
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
<section layout="row" nowrap layout-align="space-around center">
    <article class="card">
        <h2>Hobby</h2>
        <ul>
            <li>one free domain</li>
            <li>10GB space</li>
        </ul>
    </article>
    <article class="card">
        <h2>Starter</h2>
        <ul>
            <li>all from Hobby</li>
            <li>10 free domains</li>
            <li>100GB space</li>
            <li>1 year of support</li>
            <li>analytics tools</li>
        </ul>
    </article>
    <article class="card">
        <h2>Enterprise</h2>
        <ul>
            <li>all from Starter</li>
            <li>∞ space</li>
            <li>∞ domains</li>
            <li>build tools</li>
        </ul>
    </article>
</section>
```
