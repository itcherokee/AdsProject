'use strict';

angular.module('adsSystem').controller('LoginController', ['authenticateService', '$scope', '$log', function (authenticateService, $scope, $log) {
    $scope.login = function(){
        authenticateService.userLogin($scope.user)
            .success(function(data){
                alert('logged in!!!');
                sessionStorage['User']=data.username;
            })
            .error(function(error){

            })
    }
}]);