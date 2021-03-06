'use strict';

angular.module('adsSystem')
    .controller('TitleController', ['$rootScope', '$scope', '$state', 'authService', 'infoService',
        function ($rootScope, $scope, $state, authService, infoService) {
            $scope.currentPage = 'Ads - Home';

            if (sessionStorage.user) {
                $scope.username = sessionStorage.user;
            }

            $scope.$on("PageChanged", function (event, pageName) {
                $scope.currentPage = pageName;
            });

            $scope.$on("UserLoggedIn", function (event, username) {
                $scope.username = username;
                if (username === 'admin'){
                    $rootScope.adminTitle ='admin-color'
                } else {
                    $rootScope.adminTitle ='well'
                }
            });

            $scope.clickLogoutHandler = function () {
                $scope.currentPage = 'Ads - Home';
                authService.userLogout()
                    .success(function () {
                        $scope.username = undefined;
                        $rootScope.adminTitle = 'well';
                        sessionStorage.clear();
                        infoService.success('You have been successfully logged-off.')
                        $state.go('home');
                    })
                    .error(function (data) {
                        infoService.error('There was a problem to log you off. Try again later or just close the browser.')
                    });
            }
        }]);