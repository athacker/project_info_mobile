'use strict';

describe('myApp.architecture module', function() {

    beforeEach(module('myApp.architecture'));

    describe('architecture controller', function(){
        var scope, testCont;
        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            testCont = $controller('architectureController', {$scope: scope});
        }));

        it('should ....', inject(function($controller, $scope) {
            //spec body
            var view1Ctrl = $controller('architectureController');
            expect(view1Ctrl).toBeDefined();
        }));

    });
});