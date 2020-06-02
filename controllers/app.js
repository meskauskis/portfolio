var app = angular.module('app', [
    'ngRoute', 
    'ngSanitize'
])
.value('app', {
    //basePath: '/portfolio/',
})
.filter('titleCase', function() {
    return function(value) {
        value = value || '';

        return value.replace(/\w\S*/g, (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
})
.run(function($location, $route, $rootScope, $routeParams) {
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
        const path = $location.path().substring(1);
        const cat = $route.current.cat !== undefined ? $route.current.cat : $routeParams.cat;
        const section = $routeParams.section;

        // Close nav when changing pages.
        $rootScope.navClose();
        
        // Set selected nav item.
        $('.PageNav-item').removeClass('PageNav-item--selected');
        $('#PageNav-item--' + cat).addClass('PageNav-item--selected');
        
        // Set a body class for each page.
        let bodyClass = '';
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
    });
})
.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('!');
    $routeProvider
    .when('/', {
        controller: 'pageSection',
        templateUrl: 'templates/page-home.html',
    })
    .when('/section/web/tips', {
        cat: 'web',
        controller: 'pageCode',
        sectionTitle: 'Web Tips',
        templateUrl: 'templates/page-tips.html',
    })
    .when('/section/:cat/:section', {
        controller: 'pageSection',
        templateUrl: 'templates/page-section.html',
    })
    .when('/examples/:cat/:section', {
        controller: 'pageExamples',
        templateUrl: 'templates/page-examples.html',
    })
    .otherwise({
        redirectTo: '/',
    })
})
.directive('codeBlock', function($sce) {
    return {
        restrict: 'A',
        replace: true,
        scope: true,
        link: function(scope, element, attributes) {
            scope.title = attributes.title;
            if (attributes.example) {
                scope.example = $sce.trustAsHtml(attributes.example);
            }
            if (attributes.code) {
                scope.code = $sce.trustAsHtml(attributes.code);
            }
            scope.text = $sce.trustAsHtml(attributes.text);
        },
        templateUrl: 'templates/directive-code-block.html'
    };
})
;
