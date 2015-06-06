app
.controller('appCtrl', function($scope, $http) {
	var $body = $('body');
	//angular.element("#id").val()

	// Json section data.
	$scope.jsonSectionItems = [];
	$http.get('data/sections.json')
		.success(function(data, status, headers, config) {
			$scope.jsonSectionItems = data[0];                
		})
		.error(function(data, status, headers, config) {
			// Error log.
		});

	// Json examples data.
	$scope.jsonExamplesItems = [];
	$http.get('data/examples.json')
		.success(function(data, status, headers, config) {
			$scope.jsonExamplesItems = data[0];                
		})
		.error(function(data, status, headers, config) {
			// Error log.
		});

	// Toggle the nav expansion.
	$scope.navToggle = function() {
		$body.toggleClass('nav-closed');
	}

	// Set the page title.
	$scope.setBrowserTitle = function(section) {
		var title = 'Neil Meskauskis Portfolio',
				updatedTitle = section ? title + ' | ' + section : title;

		return updatedTitle;
	}
})
.controller('pageSection', function($rootScope, $scope, $routeParams) {
  if (!$routeParams.hasOwnProperty('section')) {
		$rootScope.browserTitle = $scope.setBrowserTitle(null);
  	return;
  }
  var section = $routeParams.section,
  		sectionTitle = $scope.jsonSectionItems[section][0].name;

  $scope.sectionTitle = sectionTitle;
  $scope.sectionItems = $scope.jsonSectionItems[section][0].items;
	$rootScope.browserTitle = $scope.setBrowserTitle(sectionTitle);
})
.controller('pageExamples', function($rootScope, $scope, $routeParams) {
  var section = $routeParams.section,
  		exampleTitle = $scope.jsonExamplesItems[section][0].name;

  $scope.section = $routeParams.section;
  $scope.examplesTitle = exampleTitle;
  $scope.examplesGroups = $scope.jsonExamplesItems[section][0].groups;
	$rootScope.browserTitle = $scope.setBrowserTitle(exampleTitle);

  // Flag which type of content to show on the template.
  $scope[section] = true;
})
.controller('pageCode', function($rootScope, $route, $scope, $routeParams) {
	var sectionTitle = $route.current.$$route.sectionTitle;
	
  $scope.sectionTitle = sectionTitle;
	$rootScope.browserTitle = $scope.setBrowserTitle(sectionTitle);
})
;

