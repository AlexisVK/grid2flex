# grid2flex
## Configurable flexbox grid system
v. 0.0.7

grid2flex based on Flexbox Layout.

The Flexbox Layout (Flexible Box) module (currently a W3C Last Call Working Draft) aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word "flex").

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
	box-sizing-enabled:                          true,
	offsets-enabled:                             true,
	row-vertical-alignment-enabled:              true,
	row-horizontal-alignment-enabled:            true,
	column-vertical-alignment-enabled:           true,
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
			<td>Define class name of main container. Use this container to prevent gorizontal scroll on wrapper. Width and height set to 100%</td>
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
			<td>box-sizing-enabled</td>
			<td>Set box-sizing to border box. Need to correct width calculation on columns. Disable if box-sizing reseted in project</td>
			<td>boolean, default == true</td>
		</tr>
		<tr>
			<td>offsets-enabled</td>
			<td>Offsets for columns</td>
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
			<td>column-vertical-alignment-enabled</td>
			<td>Vertical alignment for current column in row</td>
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


## Browser support
Visit <a href="http://caniuse.com/#feat=flexbox">Can I use</a> to check browser support.


## Install

### npm
<pre><code>npm install grid2flex --save</code></pre>

### bower
<pre><code>bower install grid2flex --save</code></pre>
