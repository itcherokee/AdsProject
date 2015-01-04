'use strict';

angular.module('adsSystem.dal')
    .factory('townService', ['restService', 'API_PUBLIC_ENDPOINT', function (restService, API_PUBLIC_ENDPOINT) {
        function getAllTowns (){
            return restService.serverRequest(API_PUBLIC_ENDPOINT + 'towns', 'GET', undefined, undefined)
                .success(function(data){
                    return data;
                })
                .error(function(error){
                    return error;
                })
        }

        return {
            getAllTowns : getAllTowns
        }
    }]);