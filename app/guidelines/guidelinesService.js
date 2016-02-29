/**
 * Created by AndreaThacker on 2/18/2016.
 */
var GuidelinesServiceModule = angular.module('GuidelinesServiceModule',[]);

GuidelinesServiceModule.service('guidelinesService', ['$resource',  function ( $resource) {

    return $resource('http://localhost:8080/guidelines ', {}, {
        query: { method: 'GET',isArray: false }
    });



    }]);
