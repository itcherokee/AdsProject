'use strict';

angular.module('adsSystem.public')
    .controller('PublicRegisterController', ['$rootScope', '$scope', 'townService', 'authenticateService', '$state', 'infoService',
        function ($rootScope, $scope, townService, authenticateService, $state, infoService) {
            $rootScope.$broadcast("PageChanged", 'Ads - Registration');

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
                    if ($scope.registerForm.password.$modelValue !== $scope.registerForm.confirmPassword.$modelValue) {
                        infoService.error('Passwords do not match!!');
                    } else {
                        authenticateService.userRegister($scope.user)
                            .success(function (data) {
                                $rootScope.$broadcast("UserLoggedIn", data.username);
                                infoService.success('User account created. Successful login.');
                                $state.go('userHome');
                            })
                            .error(function (error) {
                                var serverErrMsg = error.modelState[Object.keys(error.modelState)][0];
                                infoService.error('Unsuccessful registration. ' + serverErrMsg + ' Try again.');
                                $scope.submitted = false;
                                $scope.user = {};
                            })
                    }
                } else if ($scope.registerForm.$error.minlength) {
                    infoService.error('Password must be at least 2 characters!');
                } else {
                    infoService.error('All fields marked in red are mandatory!');
                }
            }
        }]);