'use strict';

angular.module('adsSystem.public')
    .controller('PublicLoginController', ['$rootScope', '$scope', 'authService', '$state', 'infoService',
        function ($rootScope, $scope, authService, $state, infoService) {
            $rootScope.$broadcast("PageChanged", 'Ads - Login');
            $scope.login = function () {
                if ($scope.loginForm.$valid) {
                    authService.userLogin($scope.user)
                        .success(function (data) {
                            infoService.success('Successful login.');
                            $rootScope.$broadcast("UserLoggedIn", data.username);

                            if (authService.isAdmin()) {
                                $state.go('adminHome');
                            } else {
                                $state.go('userHome');
                            }
                        })
                        .error(function (error) {
                            infoService.error('Invalid login. Wrong username and/or password.');
                            $scope.submitted = false;
                            $scope.user = {};
                        });
                } else {
                    infoService.error('All fields marked in red are mandatory!');
                }
            }
        }]);