/**
 * Created by AndreaThacker on 1/27/2016.
 */
guidelines.controller('guidelinesController', ['$scope',function( $scope) {

   
    var gc = this;
    gc.title = "Guidelines";
    gc.data=[];

    gc.init = init();


    /**
     * @todo replace with api
     */
    function init(){
        gc.data.push({'title': 'Dev Process', 'value':'Agile'});
        gc.data.push({'title': 'Quality', 'value':'Unit Testing Protractor, Mockito'});
        gc.data.push({'title': 'Peer Reviews', 'value':'Per Iteration before push to test.'});
    };









}]);

