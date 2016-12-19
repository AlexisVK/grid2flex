# grid2flex
## Configurable flexbox grid system
v. 0.2

grid2flex based on Flexbox Layout.

The Flexbox Layout (Flexible Box) module (currently a W3C Last Call Working Draft) aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word "flex").

<a href="http://alexisvk.github.io/grid2flex/demo/">Demo page</a>

## Install

### npm
<pre><code>npm install grid2flex --save</code></pre>

### bower
<pre><code>bower install grid2flex --save</code></pre>

### manual install
Unpack and copy files from src/ to your project or <a href="https://raw.githubusercontent.com/AlexisVK/grid2flex/master/demo/grid2flex.min.css">download</a> minified version.


## Include grid2flex module

You can setup grid2flex by adding custom variables file. Use sass @import directive to include your custom variables.

<pre><code>// importing custom variables
@import "grid2flex-variables-custom";

// importing grid2flex module

// import using bower install
@import "bower_components/grid2flex/src/grid2flex";

// import using npm install
@import "node_modules/grid2flex/src/grid2flex";

// for manual import
@import "grid2flex";</code></pre>



## Variables
Original grid2flex-variables file include next variables:

Configuration variable:

<pre><code>$configuration: (
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
);</code></pre>


<table>
	<thead>
		<tr>
			<th>Variable name</th>
			<th>Description</th>
			<th>Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>columns-count</td>
			<td>Used to define how much columns should be generated</td>
			<td>Integer</td>
		</tr>
		<tr>
			<td>container</td>
			<td>Define class name of main container. Use this container to prevent horizontal scroll on wrapper. Width and height set to 100%. Will not compile if set to "false"</td>
			<td>string, default == grid-container</td>
		</tr>
		<tr>
			<td>row</td>
			<td>Row container class name. Wrapper for columns</td>
			<td>string, default == row</td>
		</tr>
		<tr>
			<td>column</td>
			<td>Column class name</td>
			<td>string, default == row</td>
		</tr>
		<tr>
			<td>direction-prefix</td>
			<td>Direction class name</td>
			<td>string, default == dir</td>
		</tr>
		<tr>
			<td>offsets-enabled</td>
			<td>Offsets for columns</td>
			<td>boolean, default == true</td>
		</tr>
		<tr>
			<td>box-sizing-enabled</td>
			<td>Set box-sizing to border box. Need to correct width calculation on columns. Disable if box-sizing reseted in project</td>
			<td>boolean, default == true</td>
		</tr>
		<tr>
			<td>row-wrap-enabled</td>
			<td>Wrap/ nowrap classes for row (available classes: multi, inline)</td>
			<td>boolean, default == true</td>
		</tr>
		<tr>
			<td>row-vertical-alignment-enabled</td>
			<td>Vertical alignment for all columns in row</td>
			<td>boolean, default == true</td>
		</tr>
		<tr>
			<td>row-horizontal-alignment-enabled</td>
			<td>Distribution for columns in row</td>
			<td>boolean, default == true</td>
		</tr>
		<tr>
			<td>direction-enabled</td>
			<td>Direction for columns in row</td>
			<td>boolean, default == true</td>
		</tr>
		<tr>
			<td>column-vertical-alignment-enabled</td>
			<td>Vertical alignment for current column in row</td>
			<td>boolean, default == true</td>
		</tr>
		<tr>
			<td>column-ordering-enabled</td>
			<td>Ordering for columns (available classes: first, last, ordered)</td>
			<td>boolean, default == true</td>
		</tr>
		<tr>
			<td>breakpoints-enabled</td>
			<td>Option to generate class prefixes for media queries</td>
			<td>boolean, default == true</td>
		</tr>
	</tbody>
</table>

Gutters variable:

<pre><code>$gutters: (
	gutter:                                      20px,
	gutter-none:                                 0,
	gutter-large:                                40px
);</code></pre>


<table>
	<thead>
		<tr>
			<th>Variable name</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>gutter</td>
			<td>Default gutter value</td>
		</tr>
		<tr>
			<td>gutter-none</td>
			<td>Use for grid without gutters</td>
		</tr>
		<tr>
			<td>gutter-large</td>
			<td>Custom gutter example</td>
		</tr>
	</tbody>
</table>


Breakpoints variable:

<pre><code>$breakpoints: (
	xs:                                          0,
	sm:                                          480px,
	md:                                          768px,
	lg:                                          1024px
);</code></pre>


This variable define wich prefixes will be generated. If breakpoints-enabled from $configuration set to false, $breakpoints will be ignored.

## Grid classes
### Rows classes:
The main row class is defined in $configuration variable. Basic class name is <i>.row</i>.
Helpers will be generated with basic class name + breakpoint name (if breakpoints are enabled) + helper name:
<table>
	<thead>
		<tr>
			<th>Helper name</th>
			<th>Classes examples</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Gutter modifiers</td>
			<td>.row--gutter-none, .row--gutter-large</td>
			<td>Define grid gutters from $gutters</td>
		</tr>
		<tr>
			<td>Row wrapping</td>
			<td>.row-(bp)--multi .row-(bp)--line</td>
			<td>Define wrapping behavior for columns in row</td>
		</tr>
		<tr>
			<td>Vertical alignment</td>
			<td>.row-(bp)--top, .row-(bp)--middle, .row-(bp)--baseline, .row-(bp)--bottom, .row-(bp)--stretch</td>
			<td>Define vertical alignment for columns in row</td>
		</tr>
		<tr>
			<td>Space distribution</td>
			<td>.row-(bp)--left, .row-(bp)--right, .row-(bp)--between, .row-(bp)--around</td>
			<td>Define space distribution in row</td>
		</tr>
	</tbody>
</table>

### Direction classes:
Direction class is defined in $configuration variable. Basic class name is <i>.dir</i>.
Direction classes can be added both to rows and columns.
<table>
	<thead>
		<tr>
			<th>Helper name</th>
			<th>Classes examples</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Grid direction</td>
			<td>.dir-(bp)--row .dir-(bp)--row-reverse .dir-(bp)--column .dir-(bp)--column-reverse</td>
			<td>Define direction for nested columns</td>
		</tr>
	</tbody>
</table>
Use prefix "stretch" for IE11 support in column | column-reverse cases.


### Columns classes:
The main column class is defined in $configuration variable. Basic class name is <i>.col</i>.
Helpers will be generated with basic class name + breakpoint name (if breakpoints are enabled) + helper name:
<table>
	<thead>
		<tr>
			<th>Helper name</th>
			<th>Classes examples</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Column sizes</td>
			<td>.col-(bp)-$i (from 1 to $columns-count), .col-(bp) (column equal width), .col-(bp)-auto (auto width), col-(bp)-stretch (used for column | column-reverse direction)</td>
			<td>Define column size</td>
		</tr>
		<tr>
			<td>Column offsets</td>
			<td>.col-(bp)-offset-$i (from 0 to $columns-count - 1)</td>
			<td>Define offset for column</td>
		</tr>
		<tr>
			<td>Vertical alignment</td>
			<td>.col-(bp)--top, .col-(bp)--middle, .col-(bp)--baseline, .col-(bp)--bottom, .col-(bp)--stretch</td>
			<td>Define vertical alignment for column</td>
		</tr>
		<tr>
			<td>Column ordering</td>
			<td>.col-(bp)--first, .col-(bp)--last, .col-(bp)--ordered</td>
			<td>Define order for column</td>
		</tr>
	</tbody>
</table>


## Browser support
Visit <a href="http://caniuse.com/#feat=flexbox">Can I use</a> to check browser support.
