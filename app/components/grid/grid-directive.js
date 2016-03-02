/**
 * Created by AndreaThacker on 12/22/2015.
 */
'use strict';

angular.module('myApp.grid.grid-directive', [])
.directive('grid', function(){
    return{
        restrict: 'E',

        scope:{
            accept: '&', title: '=', data: '=',
        },
        templateUrl: 'components/grid/grid.html',
        controller: function($scope  ){
            $scope.editItem={};
            $scope.item={};

            $scope.save= function(item){
                alert("Directive save: " + JSON.stringify(item));
                $scope.accept({item: item});
            },

            $scope.delete = function(removeItem ){
                $scope.remove( {item: removeItem});
            };

            $scope.cancel=function(){
                $scope.newItem={};
                $scope.addNew=false;
            };

            $scope.populateEditModal = function(item){
                angular.extend($scope.editItem, item);
            }


        }

    };//return


});