'use strict';

angular.module('adsSystem')
    .controller('TitleController', ['$rootScope', '$scope', '$state', 'authService', 'infoService',
        function ($rootScope, $scope, $state, authService, infoService) {
            $scope.currentPage = 'Home';

            if (sessionStorage.user) {
                $scope.username = sessionStorage.user;
            }

            $scope.$on("PageChanged", function (event, pageName) {
                $scope.currentPage = pageName;
            });

            $scope.$on("UserLoggedIn", function (event, username) {
                $scope.username = username;
            });

            $scope.clickLogoutHandler = function () {
                $scope.currentPage = 'Home';
                authService.userLogout()
                    .success(function () {
                        $scope.username = undefined;
                        sessionStorage.clear();
                        infoService.success('You have been successfully logged-off.')
                        $state.go('home');
                    })
                    .error(function (data) {
                        infoService.error('There was a problem to log you off. Try again later or just close the browser.')
                    });
            }
        }]);