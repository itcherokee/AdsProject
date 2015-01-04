'use strict';

angular.module('adsSystem.public')
    .controller('PublicLoginController', ['authenticateService', '$scope', '$state', function (authenticateService, $scope, $state) {
        $scope.login = function () {
            authenticateService.userLogin($scope.user)
                .success(function (data) {
                    alert('logged in!!!');
                    sessionStorage['User'] = data.username;
                    $state.go('userHome');
                })
                .error(function (error) {

                })
        }
    }]);