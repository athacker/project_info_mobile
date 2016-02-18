'use strict';

var guidelines = angular.module('myApp.guidelines', ['ngRoute','GuidelinesControllerModule','GuidelinesServiceModule'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/guidelines', {
    templateUrl: 'guidelines/guidelines.html',
    controller: 'guidelinesController',
    controllerAs: 'gc'
  });
}]);



