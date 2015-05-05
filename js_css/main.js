$(function() {
  var $body = $('body'),
			$pageNav = $('.page-nav'),
		  $pageSide = $('.page-side'),
		  $thumbHolder = $('.thumbnails-holder'),
		  $menuToggle = $('#nav-toggle'),
		  $menuToggleMobile = $('#nav-toggle-mobile'),
		  $carouselMain = $('.main-carousel');

	// toggle menu based off of cookie settings
	if (getCookie('navStatus') === 'open') {
		$body.removeClass('nav-closed');
	}

	// set selected nav item (variable set in head)
	if (navSelected != '') {
		$('.' + navSelected).addClass('selected');
	}

	// get the cookie setting
	function getCookie(cookieName) {
		var i, x, y;
		var ARRcookies = document.cookie.split(";");
	
		for (i=0; i<ARRcookies.length; i++) {
			x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
			y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
			x = x.replace(/^\s+|\s+$/g,"");
	
			if (x === cookieName) {
				return unescape(y);
			}
		}
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

	/*
	// homepage carousel items
	if ($carouselMain.length) {
		(function() {
			var $arrowPrev = $carouselMain.find('.arrow-l'),
  			$arrowNext = $carouselMain.find('.arrow-r'),
  			$overlay = $carouselMain.find('.overlay').find('span'),
  			$icons = $carouselMain.siblings('.affordance').find('.slide-icon'),
  			slideCount = $('.main-carousel').find('.slide').length,
  			counterCurrent = 0,
  			carouselSpeed = 900,
  			imgLoaded = true,
  			autoScrolling = true,
  			slideTitle = $carouselMain.find('.slide').eq(0).attr('data-title');

			$carouselMain.find('.slide:first').addClass('slide-main');
			$overlay.text(slideTitle);

			$arrowPrev.click(function() {
				if (imgLoaded === true) {
					counterCurrent = (counterCurrent == 0) ? (slideCount - 1) : counterCurrent - 1;
					swapImage(counterCurrent);
				}
			});

			$arrowNext.click(function() {
				if (imgLoaded === true) {
					counterCurrent = (counterCurrent < (slideCount - 1)) ? counterCurrent + 1 : 0;
					swapImage(counterCurrent);
				}
			});

			function swapImage(counterCurrent) {
				$slideMain = $carouselMain.find('.slide-main');
				imgLoaded = false;
				var dataTitle = $carouselMain.find('.slide').eq(counterCurrent).attr('data-title');
	
				// update carousel indicator icon
				$icons.removeClass('selected');
				$icons.eq(counterCurrent).addClass('selected');
				// update overlay text
				$overlay.text(dataTitle);
				// fade in the new image
				$carouselMain.find('.slide').eq(counterCurrent).addClass('slide-next').animate({
					opacity: 1
				}, carouselSpeed, function() {
					$slideMain.removeClass('slide-main');
					$(this).removeClass('slide-next').addClass('slide-main').removeAttr('style');
					imgLoaded = true;
				});
			}

			// stop auto swapping on mouse over
			$carouselMain.mouseenter(function(){
				autoScrolling = false;
			}).mouseleave(function(){
				autoScrolling = true;
			});

			// start the auto swapping
			$(window).load(function(){
				setInterval(function() {
					if (autoScrolling == true && imgLoaded == true) { 
						counterCurrent = (counterCurrent < (slideCount - 1)) ? counterCurrent + 1 : 0;
						swapImage(counterCurrent);
					}
				}, 4000);
			});
		})();
	}
	*/

	// get the xml gallery images/videos
	if (section != '') {
    // display the large image and placeholders for the other large images
    function displayLargeImage(galleryArray, targetHolder) {
      var $sectionTitle = $('#section-title'),
        $largeImageHolder = $(targetHolder),
        $arrowPrev = $largeImageHolder.find('.arrow-l'),
        $arrowNext = $largeImageHolder.find('.arrow-r'),
        counterCurrent = window.location.hash.substr(1) * 1,
        imageLoaded = true,
        carouselSpeed = 600;

      // animate and replace the large image
      function swapLargeImage(direction) {
        var $currentImage = $('.large-image:visible'),
          $desiredItem = $('.large-image').eq(counterCurrent - 1),
          desiredSrc = $desiredItem.attr('data-src'),
          imageWidth = $currentImage.width(),
          moveAmount = (direction == 'prev') ? '+=' + (imageWidth / 3) : '-=' + (imageWidth / 3);
  
        window.location = "#" + counterCurrent;
        imageLoaded = false;
        $desiredItem.attr('src', desiredSrc);
  
        $currentImage.animate({
          opacity: 0,
          left: moveAmount
        }, carouselSpeed, function() {
          $(this).removeAttr('style').hide();
          $sectionTitle.text(galleryArray[counterCurrent - 1].title);
          $desiredItem.show();
          imageLoaded = true;
        });
      }
  
      // put all items on the page as empty image tags
      $.each(galleryArray, function(index, value) {
        if (index == (counterCurrent - 1)) {
          $largeImageHolder.append('<img src="' + value.image + '" class="large-image" data-src="' + value.image + '" />');
          $sectionTitle.text(value.title);
        } else {
          $largeImageHolder.append('<img src="" class="large-image" data-src="' + value.image + '" style="display: none;"/>');
        }
      });

      // check arrows on page load
      $arrowPrev.removeClass('hidden');
      $arrowNext.removeClass('hidden');
      if (counterCurrent <= 1) {
        $arrowPrev.addClass('hidden');
      } else if (counterCurrent >= galleryArray.length) {
        $arrowNext.addClass('hidden');
      }

      // click event for previous arrow
      $arrowPrev.click(function() {
        if (imageLoaded === true) {
          if (counterCurrent <= 2) {
            counterCurrent = 1;
            $arrowPrev.addClass('hidden');
          } else {
            counterCurrent--;
            $arrowNext.removeClass('hidden');
          }
          swapLargeImage('prev');
        }
      });

      // click event for next arrow
      $arrowNext.click(function() {
        if (imageLoaded === true) {
          if (counterCurrent >= (galleryArray.length - 1)) {
            counterCurrent = galleryArray.length;
            $arrowNext.addClass('hidden');
          } else {
            counterCurrent++;
            $arrowPrev.removeClass('hidden');
          }
          swapLargeImage('next');
        }
      });
    }

    // convert the array to thumbs on the page
    function displayThumbsVideo(galleryArray, targetHolder) {
      var $thumbHolder = $(targetHolder);
      if ($thumbHolder.length) {
        var output = '';
        for (a = 0; a < galleryArray.length; a++ ) {
          output += '<div class="video-item">';
            output += '<div class="video-wrap">';
              output += '<div class="flow-player" data-ratio=".65" style="background:#000 url(' + galleryArray[a]['thumbnail'] + ') no-repeat; background-size: 100% 100%;">';
                output += '<video>';
                  output += '<source type=\'video/webm; codecs="vp8, vorbis"\' src="' + galleryArray[a]['video'] + '.webm" />';
                  output += '<source type=\'video/ogg; codecs="theora, vorbis"\' src="' + galleryArray[a]['video'] + '.ogv" />';
                  output += '<source type=\'video/mp4; codecs="avc1.42E01E, mp4a.40.2"\' src="' + galleryArray[a]['video'] + '.mp4" />';
                output += '</video>';
              output += '</div>';
            output += '</div>';
            output += '<h4 class="item-title" title="' + galleryArray[a]['title'] + '">' + galleryArray[a]['title'] + '</h4>';
          output += '</div>';
        }
        $thumbHolder.html(output);

        // embed the flow player
        $('.flow-player').flowplayer({
          engine: 'html5',
          swf: "/video/flowplayer-5.4.2.swf"
        });
      }
    }

	  // display the thumbs on the page from the array
	  function displayThumbs(galleryArray, targetHolder) {
	    var $thumbHolder = $(targetHolder);
	    if ($thumbHolder.length) {
        var output = '';
        for (a = 0; a < galleryArray.length; a++ ) {
          output += '<div class="thumbnail-item">';
            output += '<div class="thumbnail-wrap">';
              output += '<a href="/image.php?selected=' + galleryArray[a]['section'].toLowerCase() + '#' + (galleryArray[a]['id'] + 1) + '" title="View larger image">';
              output += '<img src="' + galleryArray[a]['thumbnail'] + '" class="thumbnail"/>';
              output += '<div class="overlay">';
                output += '<h4 class="item-title" title="' + galleryArray[a]['title'] + '">' + galleryArray[a]['title'] + '<div class="magnify icon-zoom-in"></div></h4>';
              output += '</div>';
              output += '</a>';
            output += '</div>';
            output += '<div class="details">';
              if (galleryArray[a]['spec'] != '') {
                output += galleryArray[a]['spec'];
              }
              if (galleryArray[a]['link'] != '') {
                output += '<a href="' + galleryArray[a]['link'] + '" title="View site" rel="nofollow" target="_blank">View Site</a>';
              }
            output += '</div>';
          output += '</div>';
        }
        $thumbHolder.html(output);
	    }
	  }
	  
	  // convert xml to an array
    function parseXml(xml) {
      var galleryArray = [];

      $(xml).find(section.toUpperCase()).each(function(i, val) {
        var $item = $(this),
          title = ($item.find("TITLE").text() != '') ? $item.find("TITLE").text() : '',
          thumbnail = ($item.find("THUMBNAIL").text() != '') ? $item.find("THUMBNAIL").text() : '',
          image = ($item.find("IMAGE").text() != '') ? $item.find("IMAGE").text() : '',
          spec = ($item.find("SPEC").text() != '') ? $item.find("SPEC").text() : '',
          link = ($item.find("LINK").text() != '') ? $item.find("LINK").text() : '',
          videoPath = ($item.find("VIDEO").text() != '') ? $item.find("VIDEO").text() : '';
  
        galleryArray[i] = {
          id: i,
          section: section,
          title: title,
          thumbnail: thumbnail,
          image: image,
          spec: spec,
          link: link,
          video: videoPath
        }
      });
      
      if ($('.large-image-wrap').length) {
        displayLargeImage(galleryArray, '.large-image-wrap');
      } else if ($('.thumbnails-holder-anim3d').length) {
        displayThumbsVideo(galleryArray, '.thumbnails-holder');
      } else if ($('.thumbnails-holder').length) {
        displayThumbs(galleryArray, '.thumbnails-holder');
      }
    }

		// get the XML content
		$.ajax({
			type: "GET",
			url: "/includes/list.xml",
			dataType: "xml",
			success: parseXml,
			error:function(x,e) {
				if (x.status===0) {
					alert('Please Check Your Network');
				} else if (x.status===404) {
					alert('Requested URL not found');
				} else if (x.status===500) {
					alert('Internel Server Error');
				} else if (e==='parsererror') {
					alert('Error.\nParsing JSON Request failed');
				} else if (e==='timeout') {
					alert('Request Time out');
				}
			}
		});
	}
});


/*
// scale page title font
//$('#page-title').fitText(1, { minFontSize: '30px', maxFontSize: '120px' });

// change the order in which the thumbnails are displayed
$('#sort_menu').change(function() {
  var value = $("#sort_menu option:selected").val();
  if (value == "new") {
    galleryArray.sort(function(a, b){
      return a.id-b.id;
    });
    write_thumbs();
  } else if (value == "old") {
    galleryArray.sort(function(a, b){
      return b.id-a.id;
    });
    write_thumbs();
  } else if (value == "a_z") {
    galleryArray.sort(function(a, b){ 
      var titleA=a.title.toLowerCase(), titleB=b.title.toLowerCase();
      if (titleA < titleB) { return -1 } else if (titleA > titleB) { return 1 } else { return 0 }
    });
    write_thumbs();
  } else if (value == "z_a") {
    galleryArray.sort(function(a, b){ 
      var titleA=a.title.toLowerCase(), titleB=b.title.toLowerCase();
      if (titleA > titleB) { return -1 } else if (titleA < titleB) { return 1 } else { return 0 }
    });
    write_thumbs();
  }
});
*/
