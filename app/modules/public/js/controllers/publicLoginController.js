'use strict';

angular.module('adsSystem.public')
    .controller('PublicLoginController', ['$rootScope', '$scope', 'authenticateService', '$state', 'infoService',
        function ($rootScope, $scope, authenticateService, $state, infoService) {
            $rootScope.$broadcast("PageChanged", 'Ads - Login');
            $scope.login = function () {
                if ($scope.loginForm.$valid) {
                    authenticateService.userLogin($scope.user)
                        .success(function (data) {
                            if (sessionStorage['user']) {
                                $rootScope.$broadcast("UserLoggedIn", sessionStorage.user);

                                if (sessionStorage['isAdmin'] == true){
                                    $state.go('userHome');
                                } else {
                                    $state.go('adminHome');
                                }
                            } else {
                                $state.go('home');
                            }

                            $rootScope.$broadcast("UserLoggedIn", data.username);
                            infoService.success('Successful login.');
                            $state.go('userHome');
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