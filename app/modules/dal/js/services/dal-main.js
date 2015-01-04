'use strict';

angular.module('adsSystem.dal')
    .factory('dalService', ['$http', 'API_PUBLIC_ENDPOINT', function ($http, API_PUBLIC_ENDPOINT) {
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