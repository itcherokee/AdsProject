'use strict';

angular.module('adsSystem')
    .controller('TitleController', ['$rootScope', '$scope', '$state', 'authenticateService',
        function ($rootScope, $scope, $state, authenticateService) {
            $scope.currentPage = 'Home';

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
                        sessionStorage.removeItem('User');
                        sessionStorage.removeItem('IsAdmin');
                        sessionStorage.removeItem('AccessToken');
                        $state.go('userHome');
                    })
                    .error(function (data) {
                        //TODO: show error
                    });
            }
        }]);