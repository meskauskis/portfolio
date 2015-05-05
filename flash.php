<?php
$page_name = 'Flash Development';
$page_class = 'flash';
$nav_selected = 'nav-item-web';

include("includes/head.php");
?>

<h2 id="section-title" class="section-title"><? echo $page_name; ?></h2>

<section class="site-content">
	<h3 class="mod-title">3D Model Rotation</h3>	
	<div class="description">
		An example of bringing a 3D model I created into Flash. You can rotate Rafael Nadal left and right, by mousing left and right over the stage. I used Papervision to import the model.
	</div>
	<object width="250" height="250" id="papervision model" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" >
		<param name="movie" value="swfs/nadal.swf" />
		<param name="allowScriptAccess" value="sameDomain" />
		<param name="allowFullScreen" value="false" />
		<param name="quality" value="high" />
		<param name="wmode" value="transparent" />
		<embed width="250" height="250" src="swfs/nadal.swf" quality="high" wmode="transparent" name="papervision model" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />
	</object>

	<h3 class="mod-title">Clear Skies Game</h3>	
	<div class="description">
		A mini-game I designed/developed that requires the user to switch between day and night to pop balloons and stars. The objects are randomly scattered in the sky, so each time you play it will be different. This is just a proof of concept and could be developed further to make it more challenging and fun. Scripted in AS3.
	</div>
	<object width="500" height="350" id="clear skies game" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" >
		<param name="movie" value="swfs/clear_skies.swf" />
		<param name="allowScriptAccess" value="sameDomain" />
		<param name="allowFullScreen" value="false" />
		<param name="quality" value="high" />
		<param name="wmode" value="transparent" />
		<embed width="500" height="350" src="swfs/clear_skies.swf" quality="high" wmode="transparent" name="clear skies game" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />
	</object>

	<h3 class="mod-title">Room Decorator 2.0</h3>	
	<div class="description">
		An interior designers dream. Allows you to visually wallpaper a room and show it a customer. To use the app, simply drag a swatch to the wall. You can also move the painting. Future versions would be to add more swatches and furniture. Scripted in AS3.
	</div>
	<object width="700" height="400" id="room decorator" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" >
		<param name="movie" value="swfs/wallpapering.swf" />
		<param name="allowScriptAccess" value="sameDomain" />
		<param name="allowFullScreen" value="false" />
		<param name="quality" value="high" />
		<param name="wmode" value="transparent" />
		<embed width="700" height="400" src="swfs/wallpapering.swf" quality="high" wmode="transparent" name="room decorator" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />
	</object>

	<h3 class="mod-title">Tabbed Featured Products</h3>	
	<div class="description">
		A tabbed interface that teases featured products. You can easily swap out the featured products with images of movies, games, gadgets, or anything else. Arrows extends and change colors on rollovers, and then click to redirect you to the product landing page. Scripted in AS3.
	</div>
	<object width="480" height="240" id="featured_games" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" >
		<param name="movie" value="swfs/featured_games.swf" />
		<param name="allowScriptAccess" value="sameDomain" />
		<param name="allowFullScreen" value="false" />
		<param name="quality" value="high" />
		<param name="wmode" value="transparent" />
		<embed width="480" height="240" src="swfs/featured_games.swf" quality="high" wmode="transparent" name="featured_games" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />
	</object>

	<h3 class="mod-title">Product Showcase Rotator</h3>	
	<div class="description">
		A rotation of selected products, that can be stopped and self controlled. Loads external images from folder, and pulls product information from an external xml file. Scripted in AS3 and uses a loader and timer.
	</div>
	<object width="730" height="280" id="oc_slider" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" >
		<param name="movie" value="swfs/oc_slider.swf" />
		<param name="allowScriptAccess" value="sameDomain" />
		<param name="allowFullScreen" value="false" />
		<param name="quality" value="high" />
		<param name="wmode" value="transparent" />
		<embed width="730" height="280" src="swfs/oc_slider.swf" quality="high" wmode="transparent" name="oc_slider" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />
	</object>

	<h3 class="mod-title">Expandable Rollover Ad</h3>	
	<div class="description">
		This is an example of an expandable ad. When you rollover it, it grows in size. This is good for advertisers who want a large ad, but only limited space to display it in.
	</div>
	<div style="float:left; position:relative; width:190px; height:150px; z-index:90" >
		<div id="expander">
			<object width="400" height="200" id="expandable banner" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" >
				<param name="movie" value="swfs/expandable.swf" />
				<param name="allowScriptAccess" value="sameDomain" />
				<param name="allowFullScreen" value="false" />
				<param name="quality" value="high" />
				<param name="wmode" value="transparent" />
				<embed width="400" height="200" src="swfs/expandable.swf" quality="high" wmode="transparent" name="expandable banner" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />
			</object>
		</div>
	</div>
	<div class="fillerTxt">
		This is filler text, surrounding the ad. It is here to represent article content. This is filler text, surrounding the ad. It is here to represent article content. This is filler text, surrounding the ad. It is here to represent article content. This is filler text, surrounding the ad. It is here to represent article content. This is filler text, surrounding the ad. It is here to represent article content. This is filler text, surrounding the ad. It is here to represent article content.<br><br>
		This is filler text, surrounding the ad. It is here to represent article content. This is filler text, surrounding the ad. It is here to represent article content. This is filler text, surrounding the ad. It is here to represent article content.
	</div>
	<div style="clear:both"></div>

	<h3 class="mod-title">Interactive Game Banners</h3>	
	<div class="description">
		A variety of engaging banners that are a bit tacky and annoying, as to encourage interaction. They're designed so that the player wins on nearly every attempt. If it were too difficult, then the click through rate would be low. Scripted in AS3.
	</div>
	<object width="300" height="250" id="slots game" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" style="float: left;" >
		<param name="movie" value="swfs/game_slots.swf" />
		<param name="allowScriptAccess" value="sameDomain" />
		<param name="allowFullScreen" value="false" />
		<param name="quality" value="high" />
		<param name="wmode" />
		<embed width="300" height="250" src="swfs/game_slots.swf" quality="high" name="slots game" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />
	</object>
	<br><br>

	<object width="728" height="90" id="3 card monte game" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" >
		<param name="movie" value="swfs/game_shell.swf" />
		<param name="allowScriptAccess" value="sameDomain" />
		<param name="allowFullScreen" value="false" />
		<param name="quality" value="high" />
		<param name="wmode" />
		<embed width="728" height="90" src="swfs/game_shell.swf" quality="high" name="3 card monte game" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />
	</object>
	<br><br>

	<object width="728" height="90" id="scratch off game" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" >
		<param name="movie" value="swfs/game_scratch.swf" />
		<param name="allowScriptAccess" value="sameDomain" />
		<param name="allowFullScreen" value="false" />
		<param name="quality" value="high" />
		<param name="wmode" />
		<embed width="728" height="90" src="swfs/game_scratch.swf" quality="high" name="scratch off game" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />
	</object>

	<h3 class="mod-title">Ghost Recon Videogame: Banner Set</h3>	
	<div class="description">
		A set of 3 IAB standard banners for website advertising. GRAW is a successful series of console games, published by Ubisoft. Screenshots were taken from IGN.com.
	</div>
	<object width="160" height="600" id="recon banner 160" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" >
		<param name="movie" value="swfs/banner_recon_160.swf" />
		<param name="allowScriptAccess" value="sameDomain" />
		<param name="allowFullScreen" value="false" />
		<param name="quality" value="high" />
		<embed width="160" height="600" src="swfs/banner_recon_160.swf" quality="high" name="recon banner 160" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />
	</object>
	<br><br>

	<object width="300" height="250" id="recon banner 300" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" >
		<param name="movie" value="swfs/banner_recon_300.swf" />
		<param name="allowScriptAccess" value="sameDomain" />
		<param name="allowFullScreen" value="false" />
		<param name="quality" value="high" />
		<embed width="300" height="250" src="swfs/banner_recon_300.swf" quality="high" name="recon banner 300" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />
	</object>
	<br><br>

	<object width="720" height="90" id="recon banner 720" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" >
		<param name="movie" value="swfs/banner_recon_720.swf" />
		<param name="allowScriptAccess" value="sameDomain" />
		<param name="allowFullScreen" value="false" />
		<param name="quality" value="high" />
		<embed width="720" height="90" src="swfs/banner_recon_720.swf" quality="high" name="recon banner 720" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />
	</object>

	<h3 class="mod-title">Transformers Movie: Banner Set</h3>	
	<div class="description">
		A set of 3 IAB standard banners for website advertising. Transformers was a huge blockbuster success and heavily promoted before it's release with teasers of the robots transforming and fighting. The banner incorporate video footage from the trailer.
	</div>
	<object width="160" height="600" id="trans banner 160" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" >
		<param name="movie" value="swfs/banner_trans_160.swf" />
		<param name="allowScriptAccess" value="sameDomain" />
		<param name="allowFullScreen" value="false" />
		<param name="quality" value="high" />
		<embed width="160" height="600" src="swfs/banner_trans_160.swf" quality="high" name="trans banner 160" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />
	</object>
	<br><br>

	<object width="300" height="250" id="trans banner 300" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" >
		<param name="movie" value="swfs/banner_trans_300.swf" />
		<param name="allowScriptAccess" value="sameDomain" />
		<param name="allowFullScreen" value="false" />
		<param name="quality" value="high" />
		<embed width="300" height="250" src="swfs/banner_trans_300.swf" quality="high" name="trans banner 300" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />
	</object>
	<br><br>

	<object width="720" height="90" id="trans banner 720" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" >
		<param name="movie" value="swfs/banner_trans_720.swf" />
		<param name="allowScriptAccess" value="sameDomain" />
		<param name="allowFullScreen" value="false" />
		<param name="quality" value="high" />
		<embed width="720" height="90" src="swfs/banner_trans_720.swf" quality="high" name="trans banner 720" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />
	</object>

	<h3 class="mod-title">Jeep Ad</h3>	
	<div class="description">
		Jeep is known for it's ruggedness and ability to drive it anywhere. To represent this, the Jeep will continously drive up the rocky mountain and never stop. Breaking up the vehicle into individual part and animating them in loops is a great way to give the illusion of a long animation.
	</div>
	<object width="336" height="280" id="jeep banner" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" >
		<param name="movie" value="swfs/jeep.swf" />
		<param name="allowScriptAccess" value="always" />
		<param name="allowFullScreen" value="false" />
		<param name="quality" value="high" />
		<embed width="336" height="280" src="swfs/jeep.swf" quality="high" name="jeep banner" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />
	</object>
</section>

<? include("includes/footer.php"); ?>