'use strict';

angular.module('adsSystem.dal').factory('restService', ['$http', function ($http) {
    var accessToken = sessionStorage.accessToken || undefined;

    function httpRequest(url, method, parameters, data) {
        var contentType = method === 'POST' ? 'application/x-www-form-urlencoded' : 'application/json',
            requestHeaders = {
//                'Content-Type': contentType
            },
            requestParams = parameters || undefined,
            requestData = data || undefined;

        if (accessToken) {
            requestHeaders['Authorization'] = 'Bearer ' + accessToken;
        }

        return $http({
            headers: requestHeaders,
            params: requestParams,
            data: requestData,
            method: method,
            url: url
        })
    }

    function serverRequest(url, method, parameters, data) {
        return httpRequest(url, method, parameters, data)
            .success(function (data) {
                if (data.access_token) {
                    accessToken = data.access_token;
                }
            })
            .error(function (error) { })
    }

    function clearAccessToken(){
        accessToken = undefined;
    }

    return {
        serverRequest: serverRequest,
        clearAccessToken : clearAccessToken
    }
}]);