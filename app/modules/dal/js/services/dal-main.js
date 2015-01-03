'use strict';

angular.module('adsSystem.dal')
    .factory('dalService', ['$http', 'API_PUBLIC_ENDPOINT', function ($http, API_PUBLIC_ENDPOINT) {
        function isLoggedIn() {
            return false;
        }

        function getAllAds() {

        }

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
            return $http({
                params: parameters,
                method: 'GET',
                url: API_PUBLIC_ENDPOINT + 'ads'
            })
        }

        function getAllTowns() {
            return $http({
                method: 'GET',
                url: API_PUBLIC_ENDPOINT + 'towns'
            })
        }

        function getAllCategories() {
            return $http({
                method: 'GET',
                url: API_PUBLIC_ENDPOINT + 'categories'
            })
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
            getAllPublishedAds: getAllPublishedAds,
            getAllCategories: getAllCategories,
            getAllTowns: getAllTowns,
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