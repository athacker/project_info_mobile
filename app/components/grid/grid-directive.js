/**
 * Created by AndreaThacker on 12/22/2015.
 */
'use strict';

angular.module('myApp.grid.grid-directive', [])
.directive('grid', function(){
    return{
        restrict: 'E',

        scope:{
             title: '=', data: '=', remove: '&', accept: '&'
        },
        templateUrl: 'components/grid/grid.html',
        controller: function($scope  ){
            $scope.isEdit=false;
            $scope.newItem={};
            $scope.databackup=[];


            //this isn't rednering fast enough!!'
            angular.copy($scope.data, $scope.databackup);

            $scope.saveNewItem=function(){
                $scope.$broadcast('show-errors-check-validity');
                if($scope.itemform.$valid){
                    $scope.save($scope.newItem);
                    $scope.addNew=false;
                }
            };

            $scope.save= function(saveItem){
                $scope.accept({item: saveItem});
            },

                $scope.delete = function(removeItem ){
                    $scope.remove( {item: removeItem});
                };

            $scope.cancel=function(){
                $scope.newItem={};
                $scope.addNew=false;
            };
            $scope.cancelEdit=function( $index ){
                $scope.data[$index].value = $scope.databackup[$index].value;
            };

            $scope.reset=function(){
                $scope.newItem={};
                $scope.$broadcast('show-errors-reset');
            };

            $scope.resetEdit=function( $index ){
                $scope.data[$index].value = $scope.databackup[$index].value;
            };
        }

    };//return


});