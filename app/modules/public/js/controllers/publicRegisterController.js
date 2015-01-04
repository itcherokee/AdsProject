'use strict';

angular.module('adsSystem.public')
    .controller('PublicRegisterController', ['$scope', 'townService', 'authenticateService',
            function ($scope, townService, authenticateService) {
        $scope.towns = [];
        townService.getAllTowns()
            .success(function (data) {
                $scope.towns = data;
            })
            .error(function (error) {
                console.log('Towns cannot be loaded from server!');
            });

        $scope.register = function () {
            authenticateService.userRegister($scope.user)
                .success(function(data){
                    alert('registered and logged in!!!');
                    sessionStorage['User']=data.username;
                })
                .error(function(error){

                })
        }
    }]);