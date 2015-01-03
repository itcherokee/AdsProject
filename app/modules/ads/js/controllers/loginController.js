'use strict';

angular.module('adsSystem').controller('LoginController', ['loginService', '$scope', '$log', function (loginService, $scope, $log) {
    $scope.login = function(){
        loginService.userLogin($scope.user)
            .success(function(data){
                alert('logged in!!!')

            })
            .error(function(error){

            })
    }
}]);