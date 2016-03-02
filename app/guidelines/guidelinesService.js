/**
 * Created by AndreaThacker on 2/18/2016.
 */
var GuidelinesServiceModule = angular.module('GuidelinesServiceModule',[]);

GuidelinesServiceModule.factory('guidelinesService', ['$resource',  function ( $resource) {

    return $resource('http://localhost:8080/guidelines/:id', {}, {
        query: { method: 'GET',isArray: false }
    });



    }]);
