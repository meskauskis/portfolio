<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head>
<title>Neil Meskauskis | Flash Site</title>
<link rel="stylesheet" type="text/css" href="site.css"/>

<script type="text/javascript">
	function changeBg(hex, reference) {
		var body = document.getElementsByTagName('body')[0];
		body.style.background = hex + " url('bg-" + reference + ".jpg') no-repeat center top";
	}
</script>
</head>


<body onload="changeBg('#0e3055', 'blue');">

<div class="top-bar">
	<a href="http://www.meskauskis.com/">Switch to HTML5 Version</a>
	
	<div class="top-bar-right">
		Change background color: &nbsp;&nbsp;
		<div class="swatch swatch-blue" onclick="changeBg('#0e3055', 'blue');"></div>
		<div class="swatch swatch-green" onclick="changeBg('#094e32', 'green');"></div>
		<div class="swatch swatch-yellow" onclick="changeBg('#8f6010', 'yellow');"></div>
		<div class="swatch swatch-pink" onclick="changeBg('#720f2e', 'pink');"></div>
	</div>
</div>

<div align="center">
	<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="1000" height="800">
		<param name="movie" value="index.swf"></param>
		<param name="wmode" value="transparent"></param>
		<embed src="index.swf" width="1000" height="800" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer">
		</embed>
	</object>
</div>

</body>
</html>