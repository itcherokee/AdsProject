'use strict';

angular.module('adsSystem.dal')
    .factory('loginService', ['restService', 'API_USER_ENDPOINT', function (restService, API_USER_ENDPOINT) {
        function userLogin (userData){
            var data = JSON.stringify(userData);
            return restService.serverRequest(API_USER_ENDPOINT + 'login', 'POST', undefined, data)
                .success(function(data){
                    return data;
                })
                .error(function(error){
                    console.log('Could not fetch towns from server.')
                })
        }

        return {
            userLogin : userLogin
        }
    }]);