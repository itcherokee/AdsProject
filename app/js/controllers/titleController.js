'use strict';

angular.module('adsSystem')
    .controller('TitleController', ['$rootScope', '$scope', '$state', 'authenticateService',
        function ($rootScope, $scope, $state, authenticateService) {
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
                        sessionStorage.removeItem('user');
                        sessionStorage.removeItem('isAdmin');
                        sessionStorage.removeItem('accessToken');
                        $state.go('home');
                    })
                    .error(function (data) {
                        //TODO: show error
                    });
            }
        }]);