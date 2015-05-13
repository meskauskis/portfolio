<aside class="page-side clear-fix">
	<?php /*
	<a href="/" title="Home">
		<img src="/images/logo_face.svg" class="logo-face" alt="neil logo">
	</a>
	*/ ?>

	<div id="nav-toggle" class="nav-toggle">
		<span class="icon"></span>
	</div>

	<nav class="page-nav">
		<ul>
			<li class="nav-item nav-item-web clear-fix" onclick="void(0);">
				<span class="icon icon-web"></span>
				<h4 class="nav-item-text">Web</h4>
				<div class="sub-nav">
					<a href="/section.php?selected=web">Websites</a>
					<a href="/flash.php">Flash</a>
					<a href="/flash" target="_blank">My Flash Site</a>
				</div>
				<? echo displayArrow(); ?>
			</li>
	
			<li class="nav-item nav-item-2d clear-fix" onclick="void(0);">
				<span class="icon icon-2d"></span>
				<h4 class="nav-item-text">2D</h4>
				<div class="sub-nav">
					<a href="/section.php?selected=ui2d">UI / UX</a>
					<a href="/section.php?selected=vector2d">Vector</a>
					<a href="/section.php?selected=print2d">Print</a>
				</div>
				<? echo displayArrow(); ?>
			</li>

			<li class="nav-item nav-item-3d clear-fix" onclick="void(0);">
				<span class="icon icon-3d"></span>
				<h4 class="nav-item-text">3D</h4>
				<div class="sub-nav">
					<a href="/section.php?selected=char3d">Characters</a>
					<a href="/section.php?selected=env3d">Environments</a>
					<a href="/section.php?selected=misc3d">Miscellaneous</a>
				</div>
				<? echo displayArrow(); ?>
			</li>

			<li class="nav-item nav-item-animation clear-fix" onclick="void(0);">
				<span class="icon icon-animation"></span>
				<h4 class="nav-item-text">Animation</h4>
				<div class="sub-nav">
					<a href="/sprites.php">2D / Pixel</a>
					<a href="/section.php?selected=anim3d">3D</a>
				</div>
				<? echo displayArrow(); ?>
			</li>

			<li class="nav-item nav-item-code clear-fix" onclick="void(0);">
				<span class="icon icon-code"></span>
				<h4 class="nav-item-text">Code</h4>
				<div class="sub-nav">
					<a href="/code.php">Sample Code</a>
					<a href="/tips.php">Coding Tips</a>
				</div>
				<? echo displayArrow(); ?>
			</li>
		</ul>
	</nav>
</aside>
