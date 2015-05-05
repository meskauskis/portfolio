<?php
$page_name = 'Coding Tips';
$page_class = 'tips';
include("includes/head.php");
?>

<h2 id="section-title" class="section-title"><? echo $page_name; ?></h2>

<div class="site-content">
	<section class="mod-wrap clear-fix">
		<div class="mod-padding">
			<div class="mod-inner">
				<h3 class="mod-title2">Query Selectors</h3>
				<article class="mod">
					<code class="code">
						 document.querySelectorAll(".example");<br/>
						 document.querySelector("#blah");
					</code>
					If you want to select DOM elements without using jQuery, you can use the easier to remember/type query selectors, instead of <i>document.getElementById("blah")</i> or <i>document.getElementsByClassName("example")</i>.
				</article>
			</div>
		</div>
	</section>

	<section class="mod-wrap clear-fix">
		<div class="mod-padding">
			<div class="mod-inner">
				<h3 class="mod-title2">Content Space</h3>
				<article class="mod">
					<code class="code">
						 p:before { content: '\00a0'; }
					</code>
					If you need to add a white space via css, this is your method. Empty quotes will not do the trick.
				</article>
			</div>
		</div>
	</section>

	<section class="mod-wrap clear-fix">
		<div class="mod-padding">
			<div class="mod-inner">
				<h3 class="mod-title2">Click Events On New DOM Elements</h3>
				<article class="mod">
					<code class="code">
						$('PARENT').on('click', '.CLASS-NAME', function() {<br/>
						<i>&nbsp;&nbsp;do something...</i><br/>
						});
					</code>
					If you're using jQuery to create new page elements after the page has loaded, you will notice a problem with binding events to them. Since this element does not exist at page load time, then it does not know how to bind events to it correctly. The way around this is to use <i>on</i>.<br/>
					In the example above, it will listen for any new element that has the class name <i>class-name</i> within the <i>parent</i>. This <i>parent</i> should be a DOM element that exists and remains unchanged during the duration of the user experience.
				</article>
			</div>
		</div>
	</section>

	<section class="mod-wrap clear-fix">
		<div class="mod-padding">
			<div class="mod-inner">
				<h3 class="mod-title2">Easy Clear Fix</h3>
				<article class="mod">
					<code class="code">
						.clear-fix:after {<br/>
							&nbsp;&nbsp;display: block;<br/>
							&nbsp;&nbsp;height: 0;<br/>
							&nbsp;&nbsp;visibility: hidden;<br/>
							&nbsp;&nbsp;line-height: 0;<br/>
							&nbsp;&nbsp;clear: both;<br/>
							&nbsp;&nbsp;content: "\00a0";<br/>
						}
					</code>
					<i>:before</i> and <i>:after</i> allow you to put content into your DOM through CSS. You can put icons or even divs anywhere on the page with this method. The best part is that it also has great browser support for as far back as I would even worry about.<br/>
					This is an elegant solution without adding extra page markup.<br/><br/>
					<b>NOTE:</b> you can also do, "width:100%; overflow:hidden;", but sometimes setting an overflow will have undesired effects.
				</article>
			</div>
		</div>
	</section>

	<section class="mod-wrap clear-fix">
		<div class="mod-padding">
			<div class="mod-inner">
				<h3 class="mod-title2">Self Executing Functions</h3>
				<article class="mod">
					<code class="code">
						(function() {<br/>
							&nbsp;&nbsp;var blah = true;<br/><br/>
							&nbsp;&nbsp;<i>do something...</i><br/><br/>
							&nbsp;&nbsp;function sampleName() {<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;<i>do something...</i><br/>
							&nbsp;&nbsp;}<br/>
						})();<br/>
					</code>
					I think it's good practice to use self executing functions whenever possible. They're nice because it will automatically execute upon page load and all the variables and functions can only be used within that function. Why is that good? You don't have to worry about naming conflicts or variables overriding each other. You can have a function or variable with the same name elsewhere on your site or file and there won't be any problems.
				</article>
			</div>
		</div>
	</section>

	<section class="mod-wrap clear-fix">
		<div class="mod-padding">
			<div class="mod-inner">
				<h3 class="mod-title2">Attr vs Prop</h3>
				<article class="mod">
					Before jQuery 1.6, the .attr() method sometimes took property values into account when retrieving some attributes, which could cause inconsistent behavior. As of jQuery 1.6, the .prop() method provides a way to explicitly retrieve property values, while .attr() retrieves attributes.
				</article>
			</div>
		</div>
	</section>

	<section class="mod-wrap clear-fix">
		<div class="mod-padding">
			<div class="mod-inner">
				<h3 class="mod-title2">2 Even Height Columns</h3>
				<article class="mod">
					<div style="border: 1px solid #000; width: 60%; overflow: hidden;">
						<div style="float: left; width: 50%; background: yellow;">this is some short text. this is some short text.</div>
						<div style="float: left; width: 50%; background: orange;">this is a lot of text. this is a lot of text. this is a lot of text. this is a lot of text. this is a lot of text. this is a lot of text. this is a lot of text. this is a lot of text.</div>
					</div>
					<p class="caption">(2 even width divs)</p>
					<div style="border: 1px solid #000; width: 60%; overflow: hidden;">
						<div style="display: table-cell; width: 50%; background: yellow;">this is some short text. this is some short text.</div>
						<div style="display: table-cell; width: 50%; background: orange;">this is a lot of text. this is a lot of text. this is a lot of text. this is a lot of text. this is a lot of text. this is a lot of text.</div>
					</div>
					<p class="caption">(2 even width divs with <i>display: table-cell</i>)</p>
					This method is great if you don't want to set a height [however, doesn't work prior to ie8]. Don't be confused between using tables as layout and using table styles.
					With a <i>table-cell</i> layout, you can still toggle it on media queries.
				</article>
			</div>
		</div>
	</section>

	<section class="mod-wrap clear-fix">
		<div class="mod-padding">
			<div class="mod-inner">
				<h3 class="mod-title2">1 Short Column Middle Aligned With A Tall Column</h3>
				<article class="mod">
					<div style="border: 1px solid #000; width: 60%; overflow: hidden;">
						<div style="float: left; width: 50%; background: yellow;">this is some short text.</div>
						<div style="float: left; width: 50%; background: orange;">this is a lot of text. this is a lot of text. this is a lot of text. this is a lot of text. this is a lot of text. this is a lot of text. this is a lot of text. this is a lot of text.</div>
					</div>
					<p class="caption">(2 columns top aligned)</p>
					<div style="border: 1px solid #000; width: 60%; overflow: hidden;">
						<div style="display: table-cell; vertical-align: middle; width: 50%;"><div style="background: yellow;">this is some short text.</div></div>
						<div style="display: table-cell; width: 50%; background: orange;">this is a lot of text. this is a lot of text. this is a lot of text. this is a lot of text. this is a lot of text. this is a lot of text.</div>
					</div>
					<p class="caption">(1 column middle aligned with <i>vertical-align: middle</i>)</p>
					You can absolutely position the short column, but if this column shrinks and it reaches the bottom then it will peak out. So once again, we'll use the <i>display: table-cell</i> layout. Since it mimics a table layout, you can now take advantage of <i>vertical-align</i>.
				</article>
			</div>
		</div>
	</section>

	<section class="mod-wrap clear-fix">
		<div class="mod-padding">
			<div class="mod-inner">
				<h3 class="mod-title2">1 Responsive Column and 1 Fixed Width Column</h3>
				<article class="mod">
					<div style="border: 1px solid #000; width: 50%; overflow: hidden;">
						<div style="float: left; width: 100px; background: yellow;">this is some short text. this is some short text.</div>
						<div style="float: right; width: 100%; background: orange;">this is a lot of text. this is a lot of text. this is a lot of text. this is a lot of text. this is a lot of text. this is a lot of text.</div>
					</div>
					<p class="caption">(1 div set to <i>100px</i> and another <i>100%</i>)</p>
					<div style="border: 1px solid #000; width: 50%; overflow: hidden;">
						<div style="float: left; width: 100px; background: yellow;">this is some short text. this is some short text.</div>
						<div style="float: right; width: 75%; background: orange;">this is a lot of text. this is a lot of text. this is a lot of text. this is a lot of text. this is a lot of text. this is a lot of text.</div>
					</div>
					<p class="caption">(1 div set to <i>100px</i> and another <i>75%</i>)</p>
					<div style="position: relative; border: 1px solid #000; width: 50%; overflow:hidden;">
						<div style="width: 100px; background: yellow;">this is some short text. this is some short text.</div>
						<div style="position: absolute; top:0; left:0; margin-left: 100px; background: orange;">this is a lot of text. this is a lot of text. this is a lot of text. this is a lot of text. this is a lot of text. this is a lot of text.</div>
					</div>
					<p class="caption">(1 div set to <i>100px</i> and another <i>absolutely</i> positioned with a <i>100px</i> margin)</p>
					The trick to making this work is set the <i>margin</i> of the 2nd column to the <i>width</i> of the 1st column. And on the wrapping div, set it to <i>position:relative</i>.
				</article>
			</div>
		</div>
	</section>

	<section class="mod-wrap clear-fix">
		<div class="mod-padding">
			<div class="mod-inner">
				<h3 class="mod-title2">3 Randomly Wide Columns Center Aligned</h3>
				<article class="mod">
					<div style="border: 1px solid #000; text-align: center; width: 100%; overflow: hidden;">
						<div style="float: left; background: yellow;">A Really Long<br/>Item 1</div>
						<div style="float: left; background: orange;">Item 2</div>
						<div style="float: left; background: green;">A Short<br/>Item 3</div>
					</div>
					<p class="caption">(3 floated divs)</p>
					<div style="border: 1px solid #000; text-align: center;">
						<div style="display: inline-block; background: yellow;">A Really Long<br/>Item 1</div>
						<div style="display: inline-block; background: orange;">Item 2</div>
						<div style="display: inline-block; background: green;">A Short<br/>Item 3</div>
					</div>
					<p class="caption">(3 divs set to <i>display: inline-block</i>)</p>
					If you <i>float</i> divs they will start from the left or right. The trick is to set the parent div to <i>text-align: center</i> and the children to <i>display: inline-block</i>.
				</article>
			</div>
		</div>
	</section>

	<section class="mod-wrap clear-fix">
		<div class="mod-padding">
			<div class="mod-inner">
				<h3 class="mod-title2">Prevent Padding From Affecting The Size</h3>
				<article class="mod">
					<div style="border: 1px solid #000; width: 200px; background: yellow;">
						this is text in a div that is kind of long and will wrap.
					</div>
					<p class="caption">(<i>200px</i> wide div)</p>
					<div style="border: 1px solid #000; width: 200px; padding: 10px; background: yellow;">
						this is text in a div that is kind of long and will wrap.
					</div>
					<p class="caption">(<i>200px</i> wide div with <i>10px</i> padding becomes <i>220px</i>)</p>
					<div style="border: 1px solid #000; width: 200px; padding: 10px; background: yellow; box-sizing: border-box; -moz-box-sizing: border-box; -webkit-box-sizing: border-box;">
						this is text in a div that is kind of long and will wrap.
					</div>
					<p class="caption">(<i>200px</i> wide div with <i>box-sizing: border-box</i>)</p>
					When you add padding to a div, it pushes the width out. You can solve this by putting a child div inside it, and putting the padding on that, or using <i>box-sizing: border-box</i>. This keeps the set width and uses the padding to push inside.
				</article>
			</div>
		</div>
	</section>
</div>

<? include("includes/footer.php"); ?>
