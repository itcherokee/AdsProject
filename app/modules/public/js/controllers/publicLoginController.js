'use strict';

angular.module('adsSystem.public').controller('PublicLoginController', ['authenticateService', '$scope', function (authenticateService, $scope) {
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