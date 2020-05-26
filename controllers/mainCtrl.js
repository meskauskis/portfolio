app
.controller('appCtrl', function($rootScope, $scope, $http) {
    var $body = $('body');

    // Cache json results.
    $rootScope.jsonSectionItems = null;
    $rootScope.jsonExamplesItems = null;
    $rootScope.nav = [
        {
            'key': 'web',
            'title': 'Web',
            'items': [
                {
                    'title': 'Websites',
                    'link': '#!/section/web/web-design',
                },
                {
                    'title': 'Tricks',
                    'link': '#!/code/tips',
                },
                {
                    'title': 'Tips',
                    'link': '#!/code/css',
                }
            ],
        },
        {
            'key': '2d',
            'title': '2d',
            'items': [
                {
                    'title': 'UI / UX',
                    'link': '#!/section/2d/ui-ux',
                },
                {
                    'title': 'Vector',
                    'link': '#!/section/2d/vector',
                },
                {
                    'title': 'Print',
                    'link': '#!/section/2d/print',
                }
            ],
        },
        {
            'key': '3d',
            'title': '3d',
            'items': [
                {
                    'title': 'Characters',
                    'link': '#!/section/3d/character-3d',
                },
                {
                    'title': 'Environments',
                    'link': '#!/section/3d/environment-3d',
                },
                {
                    'title': 'Miscellaneous',
                    'link': '#!/section/3d/misc-3d',
                }
            ],
        },
        {
            'key': 'animation',
            'title': 'Animation',
            'items': [
                {
                    'title': 'Pixel',
                    'link': '#!/examples/anim/sprites',
                },
                {
                    'title': '3d',
                    'link': '#!/examples/anim/renderings',
                },
            ],
        },
    ];


  // Set page elements with the json data.
  $scope.setPageElements = function($scope, data, section) {
    var exampleTitle = data[section][0].name;
    
    $scope.section = section;
    $scope.sectionTitle = exampleTitle;
    $scope.sectionItems = data[section][0].groups ? data[section][0].groups : data[section][0].items;
    $rootScope.browserTitle = $scope.setBrowserTitle(exampleTitle);
  }

    // Change thumbnail shapes.
    $scope.thumbShape = 'circle';
    $scope.changeThumbsShape = function(shape) {
        $scope.thumbShape = shape;
    };

	// Set the page title.
	$scope.setBrowserTitle = function(section) {
		var title = 'Neil Meskauskis Portfolio', updatedTitle = section ? title + ' | ' + section : title;

		return updatedTitle;
	};

	// Toggle the nav.
	$scope.navToggle = function() {
        $('#PageHead-toggle').toggleClass('PageHead-toggle--open');
        $('#PageNav').toggleClass('PageNav--open');
        $('html, body').toggleClass('is-locked');
	};
	
	// Close the nav.
    $rootScope.navToggleSwitch = function() {
        $('#PageHead-toggle').removeClass('PageHead-toggle--open');
        $('#PageNav').removeClass('PageNav--open');
        $('html, body').removeClass('is-locked');
    }

	// Expand the nav to show subnav.
	$scope.subNavToggle = function($event) {
        var $element = $(event.currentTarget).closest('.PageNav-item');

        $element.siblings().removeClass('PageNav-item--open');
        $element.toggleClass('PageNav-item--open');
	}

    // Show bio on homepage.
	$scope.bioShow = function() {
        $('.page-intro').addClass('show-bio');
	};
})
.controller('pageSection', function($rootScope, $scope, $routeParams, $http) {
  if (!$routeParams.hasOwnProperty('section')) {
		$rootScope.browserTitle = $scope.setBrowserTitle(null);
  	return;
  }
  var section = $routeParams.section;

  // If the results have already been loaded.
  if ($rootScope.jsonSectionItems) {
    $scope.setPageElements($scope, $rootScope.jsonSectionItems, section);
  }
  else {
    $http.get('data/sections.json')
    .success(function(data, status, headers, config) {
      $rootScope.jsonSectionItems = data[0];
      $scope.setPageElements($scope, $rootScope.jsonSectionItems, section);
    })
    .error(function(data, status, headers, config) {
      // Error log.
    });
  }
})
.controller('pageExamples', function($rootScope, $scope, $routeParams, $http) {
  if (!$routeParams.hasOwnProperty('section')) {
    $rootScope.browserTitle = $scope.setBrowserTitle(null);
    return;
  }
  var section = $routeParams.section;

  // If the results have already been loaded.
  if ($rootScope.jsonExamplesItems) {
    $scope.setPageElements($scope, $rootScope.jsonExamplesItems, section);
  }
  else {
    $http.get('data/examples.json')
    .success(function(data, status, headers, config) {
      $rootScope.jsonExamplesItems = data[0];
      $scope.setPageElements($scope, $rootScope.jsonExamplesItems, section);
    })
    .error(function(data, status, headers, config) {
      // Error log.
    });
  }
})
.controller('pageCode', function($rootScope, $route, $scope, $routeParams) {
	var sectionTitle = $route.current.$$route.sectionTitle;
	
  $scope.sectionTitle = sectionTitle;
	$rootScope.browserTitle = $scope.setBrowserTitle(sectionTitle);
})
;
