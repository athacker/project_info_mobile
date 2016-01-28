'use strict';

angular.module('myApp.process', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: 'main/main.html',
    controller: 'MainCtrl'
  });
}])

.controller('MainCtrl', ['$scope', '$location', function($scope, $location) {
    console.log("Main Controller...");

}]);