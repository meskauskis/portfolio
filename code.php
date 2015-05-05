<?php
$selected = htmlentities($_GET['selected']);
$filename = 'code/' . $selected . '.php';

$page_name = 'Sample Code';
$page_class = 'code';
$nav_selected = 'nav-item-code';

// redirect page if there is no file associated
if (!empty($selected)) {
	if (!file_exists($filename)) {
		header("Location: /code.php");
	}
}

include("includes/head.php");
?>

<h2 id="section-title" class="section-title"><? echo $page_name; ?></h2>

<section class="site-content clear-fix">
	<div class="code-list">
		<ol class="item-list">
			<li><a href="?selected=ical_reminder_link">iCal Reminder Link</a></li>
			<li><a href="?selected=image_swapping">Image Swapping Using An Array</a></li>
			<li><a href="?selected=twitter_widget">Twitter Widget</a></li>
		</ol>
	</div>

	<? if (!empty($selected)) { ?>
		<div class="code-display">
			<div class="code-display-inside">
				<h3 class="mod-title"><?php echo ucwords(str_replace("_", " ", $selected)); ?></h3>
				
				<? include('code/' . $selected . '.php'); ?>
			</div>
		</div>
	<? } ?>
</section>

<? include("includes/footer.php"); ?>