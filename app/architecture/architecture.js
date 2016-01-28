'use strict';

var architecture = angular.module('myApp.architecture', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/architecture', {
            templateUrl: 'architecture/architecture.html',
            controller: 'architectureController'
        });
    }]);

