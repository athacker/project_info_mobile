/**
 * Created by AndreaThacker on 1/28/2016.
 */

architecture.controller('architectureController', ['$scope',function( $scope) {
    var ac = this;

    ac.title = "Architecture";
    ac.data=[];

    ac.init=init();

    function init(){
        ac.data.push({'title': 'Front End', 'value':'Angular'});
        ac.data.push({'title': 'Back End', 'value':'Restful API'});
        ac.data.push({'title': 'Database', 'value':'Mongo'});
    };




}]);