# grid2flex
<a href="https://github.com/AlexisVK/grid2flex"><img
  src="http://alexisvk.github.io/grid2flex/img/grid2flex.png" alt="grid2flex Logo"
  width="80" height="80" align="right"></a>
> Configurable flexbox grid system

[![npm][npm-image]][npm-url][![license][license-image]][license-url]

grid2flex based on Flexbox Layout.

The Flexbox Layout (Flexible Box) module (currently a W3C Last Call Working Draft) aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word "flex").

<a href="http://alexisvk.github.io/grid2flex/demo/">Demo page</a>


## What does it do?

* Includes grid system familiar to bootstrap
* Possibility to change class names for rows, columns etc.
* Gutters setup available
* Vertical and horizontal alignment for columns
* Equal height multi-row columns
* Equal width single-row columns

## Install

### npm
```sh
npm install grid2flex --save
```

### manual install
Unpack and copy files from src/ to your project or <a href="https://raw.githubusercontent.com/AlexisVK/grid2flex/master/demo/grid2flex.min.css">download</a> minified version.


## Include grid2flex module

You can setup grid2flex by adding custom variables file. Use sass @import directive to include your custom variables.

```scss
// importing custom variables
@import "grid2flex-variables-custom";

// import from node_modules
@import "node_modules/grid2flex/src/grid2flex";

// import as module
@import "~grid2flex";

// import from local file
@import "grid2flex";
```

## Variables
grid2flex package includes variables setup, wich can be customized.

Configuration variable:

```scss
$configuration: (
	columns-count:                               12,
	container:                                   grid-container,
	row:                                         row,
	column:                                      col,
	direction-prefix:                            dir,
	offsets-enabled:                             true,
	box-sizing-enabled:                          true,
	row-wrap-enabled:                            true,
	row-vertical-alignment-enabled:              true,
	row-horizontal-alignment-enabled:            true,
	direction-enabled:                           true,
	column-vertical-alignment-enabled:           true,
	column-ordering-enabled:                     true,
	breakpoints-enabled:                         true
);
```

| Variable name | Description | Type | Default value |
| --- | --- | --- | --- |
| columns-count | Used to define how much columns should be generated | `Number` | 12 |
| container | Define class name of main container. Use this container to prevent horizontal scroll on wrapper. Width and height set to 100%. Will not compile if set to "false" | `String` | `grid-container` |
| row | Row container class name. Wrapper for columns | `String` | `row` |
| column | Column class name | `String` | `col` |
| direction-prefix | Direction class name | `String` | `dir` |
| offsets-enabled | Offsets for columns | `Boolean` | `true` |
| box-sizing-enabled | Set box-sizing to border box. Need to correct width calculation on columns. Disable if box-sizing reseted in project | `Boolean` | `true` |
| row-wrap-enabled | Wrap/ nowrap classes for row (available classes: multi, inline) | `Boolean` | `true` |
| row-vertical-alignment-enabled | Vertical alignment for all columns in row | `Boolean` | `true` |
| row-horizontal-alignment-enabled | Distribution for columns in row | `Boolean` | `true` |
| direction-enabled | Direction for columns in row | `Boolean` | `true` |
| column-vertical-alignment-enabled | Vertical alignment for current column in row | `Boolean` | `true` |
| column-ordering-enabled | Ordering for columns (available classes: first, last, ordered) | `Boolean` | `true` |
| breakpoints-enabled | Option to generate class prefixes for media queries | `Boolean` | `true` |

Gutters variable:

```scss
$gutters: (
	gutter:                                      20px,
	gutter-none:                                 0,
	gutter-large:                                40px
);
```



| Variable name | Description |
| --- | --- |
| gutter | Default gutter value |
| gutter-none | Use for grid without gutters |
| gutter-large | Custom gutter example |



Breakpoints variable:

```scss
$breakpoints: (
	xs:                                          0,
	sm:                                          480px,
	md:                                          768px,
	lg:                                          1024px
);
```


This variable define wich prefixes will be generated. If breakpoints-enabled from $configuration set to false, $breakpoints will be ignored.

## Grid classes
### Rows classes:
The main row class is defined in $configuration variable. Basic class name is <i>.row</i>.
Helpers will be generated with basic class name + breakpoint name (if breakpoints are enabled) + helper name:

| Helper name | Classes examples | Description |
| --- | --- | --- |
| Gutter modifiers | .row--gutter-none, .row--gutter-large | Define grid gutters from $gutters |
| Row wrapping | .row-(bp)--multi .row-(bp)--line | Define wrapping behavior for columns in row |
| Vertical alignment | .row-(bp)--top, .row-(bp)--middle, .row-(bp)--baseline, .row-(bp)--bottom, .row-(bp)--stretch | Define vertical alignment for columns in row |
| Space distribution | .row-(bp)--left, .row-(bp)--right, .row-(bp)--between, .row-(bp)--around | Define space distribution in row |

### Direction classes:
Direction class is defined in $configuration variable. Basic class name is <i>.dir</i>.
Direction classes can be added both to rows and columns.

| Helper name | Classes examples | Description |
| --- | --- | --- |
| Grid direction | .dir-(bp)--row .dir-(bp)--row-reverse .dir-(bp)--column .dir-(bp)--column-reverse | Define direction for nested columns |

Use prefix "stretch" for IE11 support in column \| column-reverse cases.


### Columns classes:
The main column class is defined in $configuration variable. Basic class name is <i>.col</i>.
Helpers will be generated with basic class name + breakpoint name (if breakpoints are enabled) + helper name:

| Helper name | Classes examples | Description |
| --- | --- | --- |
| Column sizes | .col-(bp)-$i (from 1 to $columns-count), .col-(bp) (column equal width), .col-(bp)-auto (auto width), col-(bp)-stretch (used for column \| column-reverse direction) | Define column size |
| Column offsets | .col-(bp)-offset-$i (from 0 to $columns-count - 1) | Define offset for column |
| Vertical alignment | .col-(bp)--top, .col-(bp)--middle, .col-(bp)--baseline, .col-(bp)--bottom, .col-(bp)--stretch | Define vertical alignment for column |
| Column ordering | .col-(bp)--first, .col-(bp)--last, .col-(bp)--ordered | Define order for column |


## Browser support
Visit <a href="http://caniuse.com/#feat=flexbox">Can I use</a> to check browser support.

[license-image]: https://img.shields.io/npm/l/grid2flex.svg?style=flat-square
[license-url]: LICENSE
[npm-image]: https://img.shields.io/npm/v/grid2flex.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/grid2flex

