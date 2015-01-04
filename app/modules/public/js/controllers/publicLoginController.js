'use strict';

angular.module('adsSystem.public')
    .controller('PublicLoginController', ['$rootScope', '$scope', 'authenticateService', '$state',
        function ($rootScope, $scope, authenticateService, $state) {
            $rootScope.$broadcast("PageChanged", 'Login');
            $scope.login = function () {
                authenticateService.userLogin($scope.user)
                    .success(function (data) {
                        $rootScope.$broadcast("UserLoggedIn", data.username);
                        $state.go('userHome');
                    })
                    .error(function (error) {
                        //TODO: show error
                    });
            }
        }]);