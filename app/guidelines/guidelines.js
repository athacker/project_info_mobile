
    'use strict';

var guidelines = angular.module('myApp.guidelines', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/guidelines', {
    templateUrl: 'guidelines/guidelines.html',
    controller: 'guidelinesController',
    controllerAs: 'gc'
  });
}]);



