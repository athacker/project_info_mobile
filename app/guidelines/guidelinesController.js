
var GuidelinesControllerModule = angular.module('GuidelinesControllerModule', ['GuidelinesServiceModule']);


/**
 * Created by AndreaThacker on 1/27/2016.
 */
GuidelinesControllerModule.controller('guidelinesController', ['$scope','guidelinesService',function( $scope, guidelinesService) {

   
    var gc = this;
    gc.title = "Guidelines";
    gc.data=[];

    gc.init = init();


    /**
     * @todo replace with api
     */
    function init(){
         guidelinesService.query(  function(data) {
            gc.data = data._embedded.guidelines;
            console.log(gc.data);
        });

        //gc.data.push({'title': 'Dev Process', 'value':'Agile'});
        //gc.data.push({'title': 'Quality', 'value':'Unit Testing Protractor, Mockito'});
        //gc.data.push({'title': 'Peer Reviews', 'value':'Per Iteration before push to test.'});
    };









}]);


