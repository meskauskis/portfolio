app
.controller('appCtrl', function($rootScope, $scope, $http) {
    var $body = $('body');

    // Cache json results.
    $rootScope.jsonSectionItems = null;
    $rootScope.jsonExamplesItems = null;
    
    // Site navigation.
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
                    'title': 'Tips',
                    'link': '#!/section/web/tips',
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
                    'link': '#!/examples/animation/sprites',
                },
                {
                    'title': '3d',
                    'link': '#!/examples/animation/renderings',
                },
            ],
        },
    ];

    // Set page elements with the json data.
    $scope.setPageElements = ($scope, data, section) => {
        const exampleTitle = data[section][0].name;
        
        $scope.section = section;
        $scope.sectionTitle = exampleTitle;
        $scope.sectionItems = data[section][0].groups ? data[section][0].groups : data[section][0].items;
        $rootScope.browserTitle = $scope.setBrowserTitle(exampleTitle);
    }

    // Change thumbnail shapes.
    $scope.thumbShape = 'circle';
    $scope.changeThumbsShape = (shape) => {
        $scope.thumbShape = shape;
    };

    // Set the page title.
    $scope.setBrowserTitle = (section) => {
        const title = 'Neil Meskauskis Portfolio';
        const updatedTitle = section ? title + ' | ' + section : title;

        return updatedTitle;
    };

	// Toggle the nav open/closed.
	$scope.navToggle = () => {
        $('#PageHead-toggle').toggleClass('PageHead-toggle--open');
        $('#PageNav').toggleClass('PageNav--open');
        $('html, body').toggleClass('is-locked');
    };

	// Close the nav.
    $rootScope.navClose = () => {
        $('#PageHead-toggle').removeClass('PageHead-toggle--open');
        $('#PageNav').removeClass('PageNav--open');
        $('html, body').removeClass('is-locked');
    }

	// Toggle the sub nav open/closed.
	$scope.subNavToggle = ($event) => {
	    const className = 'PageNav-item--open';
        const $element = $(event.currentTarget).closest('.PageNav-item');
        
        $element.siblings().removeClass(className);
        $element.toggleClass(className);
    }

    // Show bio on homepage.
	$scope.bioShow = function() {
        $('#PageIntro-bio').addClass('PageIntro-bio--show');
        $('#PageIntro-bioButton').addClass('PageIntro-bioButton--hidden');
	};
})
.controller('pageSection', function($rootScope, $scope, $routeParams, $http) {
    if (!$routeParams.hasOwnProperty('section')) {
        $rootScope.browserTitle = $scope.setBrowserTitle(null);

        return;
    }
    const section = $routeParams.section;

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
    const section = $routeParams.section;

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
    const sectionTitle = $route.current.$$route.sectionTitle;

    $scope.sectionTitle = sectionTitle;
    $rootScope.browserTitle = $scope.setBrowserTitle(sectionTitle);
})
;
