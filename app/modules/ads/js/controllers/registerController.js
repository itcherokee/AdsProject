'use strict';

angular.module('adsSystem').controller('RegisterController', ['$scope', 'townService', function($scope, townService){
    $scope.towns = [];
    townService.getAllTowns()
        .success(function (data) {
            $scope.towns = data;
        })
        .error(function (error) {
            $log.error('Towns cannot be loaded from server!');
        });

    $scope.register = function(){
        console.log('register');
    }
}]);