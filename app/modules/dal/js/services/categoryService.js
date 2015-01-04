'use strict';

angular.module('adsSystem.dal')
    .factory('categoryService', ['restService', 'API_PUBLIC_ENDPOINT', function (restService, API_PUBLIC_ENDPOINT) {
        function getAllCategories() {
            return restService.serverRequest(API_PUBLIC_ENDPOINT + 'categories', 'GET', undefined, undefined)
                .success(function (data) {
                    return data;
                })
                .error(function (error) {
                    return error;
                })
        }

        return {
            getAllCategories: getAllCategories
        }
    }]);