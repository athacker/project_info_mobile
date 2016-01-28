'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [ 'ngRoute','myApp.grid', 'myApp.architecture', 'myApp.process', 'myApp.guidelines', 'myApp.version', 'mobile-angular-ui']).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: 'main'});
}]);
