'use strict';

var guidelines = angular.module('myApp.guidelines', ['ngRoute', 'ngResource','GuidelinesControllerModule','GuidelinesServiceModule'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/guidelines', {
    templateUrl: 'guidelines/guidelines.html',
    controller: 'guidelinesController',
    controllerAs: 'gc'
  });
}]);



