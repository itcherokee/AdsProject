'use strict';

angular.module('adsSystem.dal')
    .factory('authenticateService', ['restService', 'API_USER_ENDPOINT', function (restService, API_USER_ENDPOINT) {
        var authentication = {};

        //TODO: It is good to introduce check for logged-in user
        // here (including check of sessionStorage in case of page refresh,
        // instead doing that by TitleController
        function saveUserDataToSession(username, isAdmin, accessToken) {
            sessionStorage['user'] = username;
            sessionStorage['isAdmin'] = isAdmin;
            sessionStorage['accessToken'] = accessToken;
        }

        function loadUserDataFromSession() {
            authentication.user = sessionStorage.getItem['user'];
            authentication.user = sessionStorage.getItem['isAdmin'];
            authentication.user = sessionStorage.getItem['accessToken'];
        }

        function isLoggedIn() {
            return authentication.user ? true : false;
        }

        function isAdmin() {
            return authentication.user.isAdmin === 'true';
        }

        function userLogin(userData) {
            var data = JSON.stringify(userData);
            return restService.serverRequest(API_USER_ENDPOINT + 'login', 'POST', undefined, data)
                .success(function (data) {
                    saveUserDataToSession(data.username, data.isAdmin, data.access_token);
                    authentication.user = data;
//                    isLoggedIn = true;
//                    if (data.isAdmin){
//                        isAdmin = true;
//                    }

                    return data;
                })
                .error(function (error) {
                    return error;
                })
        }

        function userRegister(userData) {
            var data = JSON.stringify(userData);
            return restService.serverRequest(API_USER_ENDPOINT + 'register', 'POST', undefined, data)
                .success(function (data) {
                    return data;
                })
                .error(function (error) {
                    return error;
                })
        }

        function userLogout() {
            return restService.serverRequest(API_USER_ENDPOINT + 'logout', 'POST', undefined, undefined)
                .success(function (data) {
                    return data;
                })
                .error(function (error) {
                    return error;
                })
        }

        return {
            userLogin: userLogin,
            userRegister: userRegister,
            userLogout: userLogout,
            isLoggedIn: isLoggedIn,
            isAdmin: isAdmin,
            loadUserDataFromSession: loadUserDataFromSession
        }
    }]);