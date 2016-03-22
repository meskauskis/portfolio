// Creates html5 elements for IE.
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

(function($) {
	var airportJsonFile = 'airports.json',
			airportsArray = [];
				
	// Parse through all the airports data.
	$.getJSON(airportJsonFile, function(data) {
		$.each(data, function (i, k) {
			if (typeof k.name === 'undefined' || typeof k.code === 'undefined' ||
					typeof k.lat === 'undefined' || typeof k.lon === 'undefined') {
				return false;
			}
			var airport = {
						label: '(' + k.code + ') ' + k.name,
						value: k.code,
						lat: k.lat,
						lon: k.lon,
						name: k.name,
					};
			airportsArray.push(airport);
		});
	}).error(function(){
		console.log('Error fetching json!');
	});

	$(function() {
		var $airportInputs = $('.airport-name-input'),
				$map = $('#map-canvas')[0],
				$searchResults = $('#search-results');
		
		// Build google map.
		function mapInitialize(map, markersArray) {
			// On initial load, center on USA.
		  var usa = new google.maps.LatLng(39, -98),
				  mapOptions = {
				    zoom: 4,
				    center: usa
				  },
				  map = new google.maps.Map(map, mapOptions),
					bounds = new google.maps.LatLngBounds();
		
			// Markers to be placed on the map.
			if (markersArray) {
				var distanceArr = [];

				// Place the markers.  
			  $.each(markersArray, function(i, k) {
		      var position = new google.maps.LatLng(markersArray[i][0], markersArray[i][1]),
				      marker = new google.maps.Marker({
					      position: position,
					      map: map,
				      });

		      distanceArr[i] = position;
		      bounds.extend(position);
		      map.fitBounds(bounds);
				});

	      calculateDistance(distanceArr);
			}
		}

		// Calculate the distance between to 2 points (lat/lon).
		function calculateDistance(distanceArr) {
			var distance = google.maps.geometry.spherical.computeDistanceBetween(
				    distanceArr[0], distanceArr[1]
					),
					distanceMiles = parseInt(distance * 0.000621371),
					departureName = airportCodeToName($('#airport-dest-input').val()),
					arrivalName = airportCodeToName($('#airport-arrival-input').val());
			
			$('body').addClass('distance-show');

			$searchResults.find('.departure-holder').text(departureName).end()
			.find('.arrival-holder').text(arrivalName).end()
			.find('.distance-holder').text(distanceMiles + ' miles');
		}
		
		// Clear all markers from map.
		function mapClearMarkers() {
			marker.setMap(null);
		}

		// Clear selected inputs.
		function airportClearInputs($inputs) {
			$inputs.val('');
			$('body').removeClass('distance-show');
		}
		
		// Get the corresponding name of the airport code.
		function airportCodeToName(code) {
			var name = ''
			$.each(airportsArray, function(i, k) {
				if (code === k.value) {
					name = k.name;
				}
			});
			return name;
		}
		
		// Find lon, lat of the matching airport code.
		function airportConvertLatLon(codeArr) {
			var convertedArr = [],
					locationArr = [];
			
			$.each(codeArr, function(i, k) {
				$.each(airportsArray, function(i2, k2) {
					if (k === k2.value) {
						var newLocation = k2.lat + ',' + k2.lon;
						locationArr[i] = newLocation.split(',');
					}
				});
			});

			return locationArr;
		}

		// When the user enters data into an input.
		function airportInputsChanged($inputs) {
			var codeArr = [];
			
			$inputs.each(function(i) {
				var $item = $(this),
						airportCode = $item.val();
				
				if (airportCode === '') {
					return false;
				}
				// Verify that the user chose 2 unique locations.
				if (codeArr.indexOf(airportCode) >= 0) {
					alert('You chose the same airport twice.');
					airportClearInputs($airportInputs);
					return false;
				}
				codeArr[i] = airportCode;
				// Proceed if both inputs have been chosen.
				if (codeArr.length > 1) {
					mapInitialize($map, airportConvertLatLon(codeArr));
				}
			});
		}

		// Build google map.
		google.maps.event.addDomListener(window, 'load', mapInitialize($map, null));
		
		// Clear airport inputs.
		airportClearInputs($airportInputs);

		// Verify user input.
		$airportInputs.focusout(function() {
			airportInputsChanged($airportInputs);
		});

		// Clear input on focus.
		$airportInputs.focus(function() {
			$(this).val('');
		});

	  $('#airport-dest-input').autocomplete({
	    source: airportsArray
	  });
	
	  $('#airport-arrival-input').autocomplete({
	    source: airportsArray
	  });
	});
})(jQuery);
