<p class="example">Purpose:</p>
A fullsize image that can be swapped out through thumbnail clicks, driven by a javascript array of item data. Also set it to automatically swap to the next item every couple seconds.

<p class="example">Example:</p>
<style>
.swapper { margin-bottom: 10px; border: 1px solid #999; width: 260px; padding: 10px; text-align: center; }
.swapper .main { margin-bottom: 10px; }
.swapper .main img { width: 200px; }
.swapper .thumbnails img { width: 80px; margin: 0 2px; cursor: pointer; }
</style>

<div class="swapper">
	<div class="main"></div>
	<div class="thumbnails"></div>
</div>

<script type="text/javascript">
$(function() {
	var autoScrolling = true;
	var currentCount = 0;
	$swapper = $('.swapper');
	$swapperMain = $swapper.find('.main');
	$swapperThumbs = $swapper.find('.thumbnails');

	// place the fullsize image and thumbnails on page
	$swapperMain.html('<a href="' + rotatorSlides[0].link + '"><img src="' + rotatorSlides[0].fullsize + '"/></a>');
	$.each(rotatorSlides, function(key, value) {
		$swapperThumbs.append('<img src="' + rotatorSlides[key].thumb + '" data-key="' + key + '" class="thumbnail"/>');
	})

	// click event for each thumbnail
	$swapperThumbs.find('.thumbnail').click(function() {
		var key = $(this).attr('data-key');
		currentCount = key * 1;
		swapNext(key);
	});

	function swapNext(key) {
		$swapperMain.find('img').attr('src', rotatorSlides[key].fullsize);
		$swapperMain.find('a').attr('href', rotatorSlides[key].link);
	}

	// stop auto rotate if you hover over the area
	$swapper.mouseover(function() {
		autoScrolling = false;
	}).mouseout(function () {
		autoScrolling = true;
	});
	
	// auto rotate images
	setInterval(function() {
		if (autoScrolling == true) {
			currentCount = (currentCount == (rotatorSlides.length - 1)) ? 0 : currentCount + 1;
			swapNext(currentCount);
		}
	}, 3000);
});

rotatorSlides = [
	{ "title":"Title 1", "thumb":"/images/carousel1.jpg", "fullsize":"/images/carousel1.jpg", "link":"/page1.html" },
	{ "title":"Title 2", "thumb":"/images/carousel2.jpg", "fullsize":"/images/carousel2.jpg", "link":"/page2.html" },
	{ "title":"Title 3", "thumb":"/images/carousel3.jpg", "fullsize":"/images/carousel3.jpg", "link":"/page3.html" },
];
</script>

<p class="example">Source Code:</p>
<pre class="code">
// you need jquery installed for this to work

&lt;style&gt;
.swapper { margin-bottom: 10px; border: 1px solid #999; width: 260px; padding: 10px; text-align: center; }
.swapper .main { margin-bottom: 10px; }
.swapper .main img { width: 200px; }
.swapper .thumbnails img { width: 80px; margin: 0 2px; cursor: pointer; }
&lt;/style&gt;

&lt;div class="swapper"&gt;
	&lt;div class="main"&gt;&lt;/div&gt;
	&lt;div class="thumbnails"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script type="text/javascript"&gt;
$(function() {
	var autoScrolling = true;
	var currentCount = 0;
	$swapper = $('.swapper');
	$swapperMain = $swapper.find('.main');
	$swapperThumbs = $swapper.find('.thumbnails');

	// place the fullsize image and thumbnails on page
	$swapperMain.html('&lt;a href="' + rotatorSlides[0].link + '"&gt;&lt;img src="' + rotatorSlides[0].fullsize + '"/&gt;&lt;/a&gt;');
	$.each(rotatorSlides, function(key, value) {
		$swapperThumbs.append('&lt;img src="' + rotatorSlides[key].thumb + '" data-key="' + key + '" class="thumbnail"/&gt;');
	})

	// click event for each thumbnail
	$swapperThumbs.find('.thumbnail').click(function() {
		var key = $(this).attr('data-key');
		currentCount = key * 1;
		swapNext(key);
	});

	function swapNext(key) {
		$swapperMain.find('img').attr('src', rotatorSlides[key].fullsize);
		$swapperMain.find('a').attr('href', rotatorSlides[key].link);
	}

	// stop auto rotate if you hover over the area
	$swapper.mouseover(function() {
		autoScrolling = false;
	}).mouseout(function () {
		autoScrolling = true;
	});
	
	// auto rotate images
	setInterval(function() {
		if (autoScrolling == true) {
			currentCount = (currentCount == (rotatorSlides.length - 1)) ? 0 : currentCount + 1;
			swapNext(currentCount);
		}
	}, 3000);
});

rotatorSlides = [
	{ "title":"Title 1", "thumb":"/images/carousel1.jpg", "fullsize":"/images/carousel1.jpg", "link":"/page1.html" },
	{ "title":"Title 2", "thumb":"/images/carousel2.jpg", "fullsize":"/images/carousel2.jpg", "link":"/page2.html" },
	{ "title":"Title 3", "thumb":"/images/carousel3.jpg", "fullsize":"/images/carousel3.jpg", "link":"/page3.html" },
];
&lt;/script&gt;
</code>
</pre>
