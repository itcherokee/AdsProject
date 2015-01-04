'use strict';

angular.module('adsSystem.dal')
    .factory('userService', ['restService', 'API_USER_ENDPOINT', function (restService, API_USER_ENDPOINT) {

        function getAllPublishedAds(startPage, townId, categoryId) {
            var parameters = {
                PageSize: 100,
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



        function isLoggedIn() {
            return false;
        }

        function getAllAds() {

        }

        function createNewAd() {

        }

        function getUserAds() {

        }

        function deactivateUserAd() {

        }

        function publishAgainUserAd() {

        }

        function getUserAdById() {

        }

        function editUserAd() {

        }

        function deleteUserAdById() {

        }

        function changeUserPassword() {

        }

        function getUserProfile() {

        }

        function editUserProfile() {

        }

        return {
            isLoggedIn: isLoggedIn,
            getAllAds: getAllAds,
            createNewAd: createNewAd,
            getUserAds: getUserAds,
            deactivateUserAd: deactivateUserAd,
            publishAgainUserAd: publishAgainUserAd,
            getUserAdById: getUserAdById,
            editUserAd: editUserAd,
            deleteUserAdById: deleteUserAdById,
            changeUserPassword: changeUserPassword,
            getUserProfile: getUserProfile,
            editUserProfile: editUserProfile
        }
    }]);