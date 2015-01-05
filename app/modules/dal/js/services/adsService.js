'use strict';

angular.module('adsSystem.dal')
    .factory('adsService', ['restService', 'API_PUBLIC_ENDPOINT', function (restService, API_PUBLIC_ENDPOINT) {
        function getAllPublishedAds(startPage, townId, categoryId) {
            var parameters = {
                PageSize: 2,
                StartPage: startPage || 1
            };
            if (categoryId) {
                parameters['CategoryId'] = categoryId;
            }
            if (townId) {
                parameters['TownId'] = townId;
            }

            return restService.serverRequest(API_PUBLIC_ENDPOINT + 'ads', 'GET', parameters, undefined)
                .success(function (data) {
                    return data;
                })
                .error(function (error) {
                    return error;
                })
        }

        return {
            getAllPublishedAds: getAllPublishedAds
        }
    }]);

