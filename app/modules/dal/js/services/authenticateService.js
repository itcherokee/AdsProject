'use strict';

angular.module('adsSystem.dal')
    .factory('authenticateService', ['restService', 'API_USER_ENDPOINT', function (restService, API_USER_ENDPOINT) {
        var isAdmin = false,
            isLoggedIn = false;

        //TODO: It is good to introduce check for logged-in user
        // here (including check of sessionStorage in case of page refresh,
        // instead doing that by TitleController

        function userLogin (userData){
            var data = JSON.stringify(userData);
            return restService.serverRequest(API_USER_ENDPOINT + 'login', 'POST', undefined, data)
                .success(function(data){
                    sessionStorage['User'] = data.username;
                    sessionStorage['IsAdmin'] = isAdmin;
                    sessionStorage['AccessToken'] = data.access_token;
                    isLoggedIn = true;
                    if (data.isAdmin){
                        isAdmin = true;
                    }

                    return data;
                })
                .error(function(error){
                    return error;
                })
        }

        function userRegister (userData){
            var data = JSON.stringify(userData);
            return restService.serverRequest(API_USER_ENDPOINT + 'register', 'POST', undefined, data)
                .success(function(data){
                   return data;
                })
                .error(function(error){
                    return error;
                })
        }

        function userLogout (){
            return restService.serverRequest(API_USER_ENDPOINT + 'logout', 'POST', undefined, undefined)
                .success(function(data){
                    return data;
                })
                .error(function(error){
                    return error;
                })
        }

        return {
            userLogin : userLogin,
            userRegister : userRegister,
            userLogout : userLogout
        }
    }]);