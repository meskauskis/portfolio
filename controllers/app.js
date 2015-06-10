var app = angular.module('app', ['ngRoute', 'ngSanitize'])
.value('app', {
	//basePath: '/portfolio3/',
})
.filter('titleCase', function() {
  return function(value) {
    value = value || '';
    return value.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  };
})
.run(function($location, $route, $rootScope, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    var path = $location.path().substring(1),
        cat = $route.current.cat !== undefined ? $route.current.cat : $routeParams.cat,
        section = $routeParams.section,
    		bodyClass = '';

    // Set selected nav item.
    $('.nav-item').removeClass('selected');
    $('#nav-' + cat).addClass('selected');

    // Set a body class for each page.
    if ($routeParams.section) {
    	bodyClass = section;
    }
    else if (section) {
    	bodyClass = section;
    }
    else if (path) {
    	bodyClass = path;
    }
    else {
    	bodyClass = 'home';
    }
    $rootScope.bodyClass = 'site-' + bodyClass;
    
    // Collapse nav between changes, if it's mobile.
    console.log(window.innerWidth);
    //$('body').addClass('nav-closed');
  });
})
.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(false).hashPrefix('!');
  $routeProvider
    .when('/', {
      templateUrl: 'templates/page-home.html',
      controller: 'pageSection',
      //controllerAs: 'test'
    })
    .when('/section/:cat/:section', {
      templateUrl: 'templates/page-section.html',
      controller: 'pageSection',
    })
    .when('/examples/:cat/:section', {
      templateUrl: 'templates/page-examples.html',
      controller: 'pageExamples',
    })
    .when('/code/learnings', {
      templateUrl: 'templates/page-code.html',
      controller: 'pageCode',
      sectionTitle: 'Code Learnings',
      cat: 'code',
    })
    .when('/code/tips', {
      templateUrl: 'templates/page-tips.html',
      controller: 'pageCode',
      sectionTitle: 'Coding Tips',
      cat: 'code',
    })
    .otherwise({
    	redirectTo: '/',
    })
    ;
})
.directive('codeBlock', function($sce) {
  return {
    restrict: 'A',
    replace: true,
    scope: true,
    link: function(scope, element, attributes) {
      scope.title = attributes.title;
      if (attributes.code) {
        scope.code = $sce.trustAsHtml(attributes.code);
      }
      scope.text = $sce.trustAsHtml(attributes.text);
    },
    templateUrl: 'templates/code-block.html'
  };
})
/*
.directive('flash', function() {
  return {
  	//restrict: 'AE',
  	replace: true,
		scope: false,
		link: function(scope, element, attributes) {
			var params = scope.$eval(attributes.param);

			scope.path = params.path;
			scope.width = params.width;
			scope.height = params.height;
		},
		template:
			'<object id="papervision model" type="application/x-shockwave-flash" data="{{path}}" width="{{width}}" height="{{height}}">' +
				'<param name="allowScriptAccess" value="sameDomain" />' +
				'<param name="movie" value="{{path}}"/>' +
				'<param name="wmode" value="opaque">' +
				'<param name="quality" value="high"/>' +
			'</object>',
  };
})
*/
;
