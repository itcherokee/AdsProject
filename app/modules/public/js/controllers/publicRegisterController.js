'use strict';

angular.module('adsSystem.public')
    .controller('PublicRegisterController', ['$rootScope', '$scope', 'townService', 'authenticateService', '$state',
        function ($rootScope, $scope, townService, authenticateService, $state) {
            $rootScope.$broadcast("PageChanged", 'Registration');

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
                    .success(function (data) {
                        //TODO: show successful login and request to login
                        $state.go('home');
                    })
                    .error(function (error) {
                        //TODO:  show error
                    })
            }
        }]);