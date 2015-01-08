'use strict';

angular.module('adsSystem.public')
    .controller('PublicRegisterController', ['$rootScope', '$scope', 'townService', 'authenticateService', '$state', 'infoService',
        function ($rootScope, $scope, townService, authenticateService, $state, infoService) {
            $rootScope.$broadcast("PageChanged", 'Registration');

            $scope.towns = [];
            townService.getAllTowns()
                .success(function (data) {
                    $scope.towns = data;
                })
                .error(function (error) {
                    infoService.warning('Towns cannot be loaded from server!');
                });

            $scope.register = function () {
                if ($scope.registerForm.$valid) {
                    authenticateService.userRegister($scope.user)
                        .success(function (data) {
                            $rootScope.$broadcast("UserLoggedIn", data.username);
                            infoService.success('User account created. Successful login.');
                            $state.go('userHome');
                        })
                        .error(function (error) {
                            infoService.error('Unsuccessful registration. Try again.');
                            $scope.user = {};
                        })
                } else {
                    infoService.error('All fields marked in red are mandatory!');
                }
            }
        }]);