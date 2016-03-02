
var GuidelinesControllerModule = angular.module('GuidelinesControllerModule', ['GuidelinesServiceModule']);


/**
 * Created by AndreaThacker on 1/27/2016.
 */
GuidelinesControllerModule.controller('guidelinesController', ['$scope','guidelinesService',function( $scope, guidelinesService) {

    var gc = this;
    gc.title = "Guidelines";
    gc.data=[];
    gc.currentRecord={};
    gc.init = init();


    function init() {
        guidelinesService.query(function (data) {
            gc.data = data._embedded.guidelines;
            console.log(gc.data);
        });
    }

    $scope.getRecord = function(ID){
        var guideline = guidelinesService.get({id: ID}, function () {
            console.log(guideline);
        });
    }

    $scope.saveGuideline=function(item) {

       guidelinesService.save(item, function (data) {
            console.log("Saved...");
        });
    }


        //console.log(gc.record.id);
        //console.log(gc.record.value);
        //console.log(gc.record.title)
        //if(gc.record.id) {
        //    guidelinesService.update(gc.record, function (data) {
        //        console.log("Saved...");
        //    });
        //}else{
        //    gc.saveRecord(record);
        //}


    function saveGuideline(item){
        alert("Save Guideline!!");
        if(typeof gc.newRecord.title != 'undefined'  ){
            guidelinesService.save(gc.newRecord, function (data) {
                console.log("Saved...");
            });
        }
    }

    function deleteGuideline(){
        console.log("Finish coding delete..");
    }



}]);


