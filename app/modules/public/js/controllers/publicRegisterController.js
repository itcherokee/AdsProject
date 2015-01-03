'use strict';

angular.module('adsSystem.public').controller('PublicRegisterController', ['$scope', 'townService', function($scope, townService){
    $scope.towns = [];
    townService.getAllTowns()
        .success(function (data) {
            $scope.towns = data;
        })
        .error(function (error) {
            console.log('Towns cannot be loaded from server!');
        });

    $scope.register = function(){
        console.log('register');
    }
}]);