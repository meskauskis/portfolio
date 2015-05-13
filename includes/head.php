<?php
session_start();

if (stristr($_SERVER['HTTP_USER_AGENT'],"Android") == true || stristr($_SERVER['HTTP_USER_AGENT'],"iPhone") == true || stristr($_SERVER['HTTP_USER_AGENT'],"BlackBerry") == true || stristr($_SERVER['HTTP_USER_AGENT'],"BlackBerryTouch") == true || stristr($_SERVER['HTTP_USER_AGENT'],"WindowsMobile") == true || stristr($_SERVER['HTTP_USER_AGENT'],"PalmWebOS") == true || stristr($_SERVER['HTTP_USER_AGENT'],"PalmOS") == true || $_GET['mobile'] == "yes" ) { 
	$mobile == TRUE;
	$mobile_class = ' mobile';
}

function codeTitleFromUrl($selected) {
	return ucwords(str_replace('-', ' ', $selected));
}

function displayArrow() {
	return
	'<div class="arrow">'.
		'<b class="arrow-line arrow-line1 shadow-line"></b>'.
		'<b class="arrow-line arrow-line2 shadow-line"></b>'.
		'<b class="arrow-line arrow-line3 shadow-line"></b>'.
		'<b class="arrow-line arrow-line4 shadow-line"></b>'.
		'<b class="arrow-line arrow-line5 shadow-line"></b>'.
		'<b class="arrow-line arrow-line6 shadow-line"></b>'.
		'<b class="arrow-line arrow-line7 shadow-line"></b>'.
		'<b class="arrow-line arrow-line8 shadow-line"></b>'.
		'<b class="arrow-line arrow-line9 shadow-line"></b>'.
		'<b class="arrow-line arrow-line10 shadow-line"></b>'.
	'</div>';
}
?>

<!doctype html>
<!--[if IE 7]><html lang="en" class="page-<? echo $page_class . $mobile_class; ?> lt-ie9 lt-ie8 ie7"><![endif]-->
<!--[if IE 8]><html lang="en" class="page-<? echo $page_class . $mobile_class; ?> lt-ie9 ie8"><![endif]-->
<!--[if IE 9]><html lang="en" class="page-<? echo $page_class . $mobile_class; ?> ie9"><![endif]-->
<!--[if gte IE 9]><!--><html lang="en" class="page-<? echo $page_class . $mobile_class; ?>"><!--<![endif]-->
<head>
	<meta charset=utf-8>
	<meta name="description" content="Neil Meskauskis Portfolio: UX / Web Developer / Designer (NYC)" />
	<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0" />
	<meta name="google-site-verification" content="gEp_-K2dWfFPrI6DgINXR_rhEdH0bXGFvYNI_0Vo1I4" />
	
	<title>Neil Meskauskis <? if (!empty($page_name)) { echo " | " . $page_name; } ?></title>
	
	<link href="http://www.meskauskis.com/images/apple-touch-icon-180x180.png" rel="apple-touch-icon" sizes="180x180" />
	<link href="http://www.meskauskis.com/images/apple-touch-icon-hires.png" rel="apple-touch-icon" sizes="192x192" />
	<link href="http://www.meskauskis.com/images/apple-touch-icon-normal.png" rel="apple-touch-icon" sizes="128x128" />
	
	<!--
	<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Josefin+Sans|Scada">
	<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Poiret+One:400,700">
	<link rel='stylesheet' type='text/css' href='http://fonts.googleapis.com/css?family=Roboto:400,300'>
	-->
	<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Raleway:300,600">
	<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Montserrat">
	<link rel="stylesheet" type="text/css" href="/js_css/icons/icons.css"/>
	<link rel="stylesheet" type="text/css" href="/js_css/flowplayer-functional.css"/>
	<link rel="stylesheet" type="text/css" href="/js_css/main.css"/>
	<link rel="stylesheet" type="text/css" href="/js_css/nav.css"/>
	
	<script>
	<!--
	// creates html5 elements, it's a fix for IE
	document.createElement('article');
	document.createElement('aside');
	document.createElement('eventsource');
	document.createElement('figure');
	document.createElement('figcaption');
	document.createElement('footer');
	document.createElement('header');
	document.createElement('nav');
	document.createElement('section');
	document.createElement('video');
	
			// Sets what li in the nav to highlight.
	var navSelected = '<? echo $nav_selected; ?>',
			// Section tells it which nodes of the XML you want to load.
			section = '<? echo $selected; ?>';
	-->
	</script>
	
	<script type="text/javascript" src="/js_css/jquery-1.8.1.min.js"></script>
	<script type="text/javascript" src="/js_css/extras.js"></script>
	<script type="text/javascript" src="/js_css/main.js"></script>
</head>


<body class="nav-closed">
	<div class="page-shell">
		<?
		if ($large_image !== TRUE) {
			include("includes/nav.php");
		}
		?>
	
		<div class="page-main">
			<header class="page-head clear-fix">
				<h1 id="page-logo" class="page-logo">
					<a href="/index.php" title="Home"><img src="/images/logo_nm.svg" alt="Neil Meskauskis Web Developer NYC"/></a>
				</h1>

				<div id="nav-toggle-mobile" class="nav-toggle-mobile">
					<span class="icon"></span>
				</div>
			</header>
			