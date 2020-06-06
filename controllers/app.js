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
        /*
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
        */
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
    /*
    A : Specifies that Directive will be used as an attribute.
    E : Specifies that Directive will be used as an Element.
    C : Specifies that Directive can be used as class name in existing HTML elements.
    M : Specifies that Directive can be used as HTML comments.
    */
    return {
        restrict: 'A',
        replace: true,
        scope: true,
        link: function(scope, element, attributes) {
            scope.title = attributes.title ? attributes.title : null;
            scope.text = attributes.text ? $sce.trustAsHtml(attributes.text) : null;
            scope.example = attributes.example ? $sce.trustAsHtml(attributes.example) : null;
            scope.code = attributes.code ? $sce.trustAsHtml(attributes.code) : null;
        },
        templateUrl: 'templates/directive-code-block.html'
    };
})
.directive('cardBlock', function($sce) {
    return {
        restrict: 'A',
        replace: true,
        scope: true,
        link: function(scope, element, attributes) {
            scope.title = attributes.title;
            scope.customclass = attributes.customclass ? attributes.customclass : null;
            scope.customclass2 = attributes.customclass2 ? attributes.customclass2 : null;

            scope.subtitle = attributes.subtitle;
            scope.subtext = $sce.trustAsHtml(attributes.subtext);
            scope.image = attributes.image ? $sce.trustAsHtml(attributes.image) : null;

            scope.subtitle2 = attributes.subtitle2 ? attributes.subtitle2 : null;
            scope.subtext2 = attributes.subtext2 ? $sce.trustAsHtml(attributes.subtext2) : null;
            scope.image2 = attributes.image2 ? $sce.trustAsHtml(attributes.image2) : null;

            scope.subtitle3 = attributes.subtitle3 ? attributes.subtitle3 : null;
            scope.subtext3 = attributes.subtext3 ? $sce.trustAsHtml(attributes.subtext3) : null;
            scope.image3 = attributes.image3 ? $sce.trustAsHtml(attributes.image3) : null;

            scope.subtitle4 = attributes.subtitle4 ? attributes.subtitle4 : null;
            scope.subtext4 = attributes.subtext4 ? $sce.trustAsHtml(attributes.subtext4) : null;
            scope.image4 = attributes.image4 ? $sce.trustAsHtml(attributes.image4) : null;
        },
        templateUrl: 'templates/directive-card-block.html'
    };
})
;
