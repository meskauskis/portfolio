<?php
$selected = htmlentities($_GET['selected']);

// convert url name to XML name
if ($selected == 'char3d') {
	$page_name = '3D : Characters';
	$nav_selected = 'nav-item-3d';
} else if ($selected == 'env3d') {
	$page_name = '3D : Environments';
	$nav_selected = 'nav-item-3d';
} else if ($selected == 'misc3d') {
	$page_name = '3D : Miscellaneous';
	$nav_selected = 'nav-item-3d';
} else if ($selected == 'print2d') {
	$page_name = '2D : Print';
	$nav_selected = 'nav-item-2d';
} else if ($selected == 'ui2d') {
	$page_name = '2D : User Interface / Experience';
	$nav_selected = 'nav-item-2d';
} else if ($selected == 'vector2d') {
	$page_name = '2D : Vector';
	$nav_selected = 'nav-item-2d';
} else if ($selected == 'web') {
	$page_name = 'Web Design / Development';
	$nav_selected = 'nav-item-web';
} else if ($selected == 'anim3d') {
	$page_name = 'Animations';
	$nav_selected = 'nav-item-animation';
}

$page_class = 'large-image';
$large_image = TRUE;

include("includes/head.php");
?>

<h2 id="section-title">&nbsp;</h2>

<a href="/section.php?selected=<? echo $selected; ?>" class="button" id="btn-back">&laquo; Back</a>

<section class="site-content">
	<div class="large-image-wrap">
		<div class="carousel-arrow arrow-l icon-arrow-left hidden"></div>	
		<div class="carousel-arrow arrow-r icon-arrow-right hidden"></div>
	</div>
</section>

<? include("includes/footer.php"); ?>