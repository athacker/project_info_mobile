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
            $scope.currentIndex=0;
            $scope.item={};

            $scope.save= function(item){
                $scope.accept({item: item});
            },

            $scope.delete = function(removeItem ){
                $scope.remove( {item: removeItem});
            };

            $scope.cancel=function(){
                $scope.newItem={};
            };

            $scope.populateEditModal = function($index){
                angular.extend($scope.editItem, $scope.data[$index]);
                $scope.currentIndex = $index;
            }

            $scope.update = function(editItem){
                angular.extend($scope.data[ $scope.currentIndex],editItem);
                $scope.save(editItem);
            }

        }

    };//return


});