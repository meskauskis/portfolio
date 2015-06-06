$(function() {
  var $body = $('body'),
			$pageNav = $('.page-nav'),
		  $pageSide = $('.page-side');

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

	/*
	// toggle menu based off of cookie settings
	if (getCookie('navStatus') === 'open') {
		$body.removeClass('nav-closed');
	}

	// set selected nav item (variable set in head)
	if (navSelected != '') {
		$('.' + navSelected).addClass('selected');
	}

	// cookie to track nav bar state
	function setCookie(cookieName, value, suggestedDays) {
		var exdate = new Date();
		exdate.setDate(exdate.getDate() + suggestedDays);
		
		var cookieValue = escape(value) + ((suggestedDays === null) ? "" : "; expires=" + exdate.toUTCString());
		document.cookie = cookieName + "=" + cookieValue;
	}

	// click event for toggling menu
	$menuToggle.add($menuToggleMobile).click(function() {
		var isClosed = $body.hasClass('nav-closed');
		$body.toggleClass('nav-closed');

		if (isClosed === true) {
			setCookie('navStatus', 'open', 30);
		} else {
			setCookie('navStatus', 'closed', 30);
		}
	});
  */
});
