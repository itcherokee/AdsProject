'use strict';

angular.module('adsSystem')
    .controller('TitleController', ['$rootScope', '$scope', '$state', 'authenticateService', 'infoService',
        function ($rootScope, $scope, $state, authenticateService, infoService) {
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
                authenticateService.userLogout()
                    .success(function () {
                        $scope.username = undefined;
                        sessionStorage.clear();
                        infoService.success('You have been successfully logged-off.')
                        $state.go('home');
                    })
                    .error(function (data) {
                        infoService.success('There was a problem to log you off. Try again later or just close the browser.')
                    });
            }
        }]);