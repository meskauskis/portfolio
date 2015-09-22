app
.controller('appCtrl', function($rootScope, $scope, $http) {
	var $body = $('body');
	//angular.element("#id").val()

	// Cache json results.
	$rootScope.jsonSectionItems = null;
	$rootScope.jsonExamplesItems = null;

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
		var title = 'Neil Meskauskis Portfolio',
				updatedTitle = section ? title + ' | ' + section : title;

		return updatedTitle;
	};

	// Toggle the nav expansion.
	$scope.navToggle = function() {
		$body.toggleClass('nav-closed');
	};
	
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
    console.log('good1');
    $scope.setPageElements($scope, $rootScope.jsonSectionItems, section);
  }
  else {
    console.log('bad1');
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
    console.log('good2');
    $scope.setPageElements($scope, $rootScope.jsonExamplesItems, section);
  }
  else {
    console.log('bad2');
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
