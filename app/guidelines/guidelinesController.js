
var GuidelinesControllerModule = angular.module('GuidelinesControllerModule', ['GuidelinesServiceModule']);


/**
 * Created by AndreaThacker on 1/27/2016.
 */
GuidelinesControllerModule.controller('guidelinesController', ['$scope','guidelinesService',function( $scope, guidelinesService) {

    var gc = this;
    gc.title = "Guidelines";
    gc.data=[];
    gc.init = init();

    function init() {
        guidelinesService.query(function (data) {
            gc.data = data._embedded.guidelines;
            console.log(gc.data);
        });
    }

    $scope.getGuideline = function(ID){
        var guideline = guidelinesService.get({id: ID}, function () {
            console.log(guideline);
        });
    }

    $scope.saveGuideline=function(item) {
       if(typeof item.id === 'undefined') {
           guidelinesService.save(item, function (data) {
               console.log("Saved...");
           });
       }else{
           guidelinesService.update(item, function (data) {
                console.log("Updated...");
           });
       }
    }

    function deleteGuideline(){
        console.log("Finish coding delete..");
    }



}]);


