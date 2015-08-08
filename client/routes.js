angular.module("eCommerce").run(["$rootScope", "$state", function($rootScope, $state) {
    $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
        // We can catch the error thrown when the $requireUser promise is rejected
        // and redirect the user back to the main page
        if (error === "AUTH_REQUIRED") {
            $state.go('parties');
        }
    });
}]);
angular.module('eCommerce').config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$mdThemingProvider', '$mdIconProvider', function($urlRouterProvider, $stateProvider, $locationProvider, $mdThemingProvider, $mdIconProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'client/home/views/home.ng.html',
        controller: 'HomeCtrl'
    }).state('parties', {
        url: '/parties',
        templateUrl: 'client/parties/views/parties-list.ng.html',
        controller: 'PartiesListCtrl'
    }).state('partyDetails', {
        url: '/parties/:partyId',
        templateUrl: 'client/parties/views/party-details.ng.html',
        controller: 'PartyDetailsCtrl',
        resolve: {
            "currentUser": ["$meteor", function($meteor) {
                return $meteor.requireUser();
            }]
        }
    });
    $urlRouterProvider.otherwise('/');
    $mdThemingProvider.definePalette('amazingPaletteName', {
        '50': 'ffebee',
        '100': 'ffcdd2',
        '200': 'ef9a9a',
        '300': 'e57373',
        '400': 'ef5350',
        '500': 'f44336',
        '600': 'e53935',
        '700': 'd32f2f',
        '800': 'c62828',
        '900': 'b71c1c',
        'A100': 'ff8a80',
        'A200': 'ff5252',
        'A400': 'ff1744',
        'A700': 'd50000',
        'contrastDefaultColor': 'light', // whether, by default, text (contrast)
        // on this palette should be dark or light
        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
            '200', '300', '400', 'A100'
        ],
        'contrastLightColors': undefined // could also specify this if default was 'dark'
    });
    $mdThemingProvider.theme('default').primaryPalette('amazingPaletteName')
    $mdIconProvider
    .iconSet("social", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-social.svg")
    .iconSet("action", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-action.svg")
    .iconSet("communication", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-communication.svg")
    .iconSet("content", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content.svg")
    .iconSet("toggle", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-toggle.svg")
    .iconSet("navigation", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-navigation.svg")
    .iconSet("image", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-image.svg");
}]);