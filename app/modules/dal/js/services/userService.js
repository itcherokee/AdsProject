'use strict';

angular.module('adsSystem.dal')
    .factory('userService', ['restService', 'API_USER_ENDPOINT', function (restService, API_USER_ENDPOINT) {

        // tested
        function createNewAd(adData) {
            var data = {
                title: adData.title,
                text: adData.text
            };

            if (adData.imageDataUrl) {
                data['imageDataUrl'] = adData.imageDataUrl;
            }

            if (adData.categoryId) {
                data['categoryId'] = adData.categoryId;
            }

            if (adData.townId) {
                data['townId'] = adData.townId;
            }

            return restService.serverRequest(API_USER_ENDPOINT + 'ads', 'POST', undefined, data)
                .success(function (data) {
                    return data;
                })
                .error(function (error) {
                    return error;
                })
        }

        // tested
        function getUserAds(status, startPage, pageSize) {
            var parameters = {
                PageSize: pageSize || 2,
                StartPage: startPage || 1,
                status: status
            };

            return restService.serverRequest(API_USER_ENDPOINT + 'ads', 'GET', parameters, undefined)
                .success(function (data) {
                    return data;
                })
                .error(function (error) {
                    return error;
                })
        }

        // tested
        function deactivateUserAd(id) {
            return restService.serverRequest(API_USER_ENDPOINT + 'ads/deactivate/' + id, 'PUT', undefined, undefined)
                .success(function (data) {
                    return data;
                })
                .error(function (error) {
                    return error;
                })
        }

        // tested
        function publishAgainUserAd(id) {
            return restService.serverRequest(API_USER_ENDPOINT + 'ads/publishagain/' + id, 'PUT', undefined, undefined)
                .success(function (data) {
                    return data;
                })
                .error(function (error) {
                    return error;
                })
        }

        // tested
        function getUserAdById(id) {
            return restService.serverRequest(API_USER_ENDPOINT + 'ads/' + id, 'GET', undefined, undefined)
                .success(function (data) {
                    return data;
                })
                .error(function (error) {
                    return error;
                })
        }

        function editUserAd(data, imageStatus) {
            var adData = {
                title: data.title,
                text: data.text
            };

            switch (imageStatus) {
                case 'delete':
                    adData['changeImage'] = true;
                    break;
                case 'update':
                    adData['imageDataUrl'] = data.imageDataUrl;
                    adData['changeImage'] = true;
                    break;
                default:
                    adData['changeImage'] = false;
                    break;
            }

            if (data.categoryId) {
                adData['categoryId'] = data.categoryId;
            }

            if (data.townId) {
                adData['townId'] = data.townId;
            }

            return restService.serverRequest(API_USER_ENDPOINT + 'ads/' + data.id, 'PUT', undefined, adData)
                .success(function (data) {
                    return data;
                })
                .error(function (error) {
                    return error;
                })
        }

        // tested
        function deleteUserAdById(id) {
            return restService.serverRequest(API_USER_ENDPOINT + 'ads/' + id, 'DELETE', undefined, undefined)
                .success(function (data) {
                    return data;
                })
                .error(function (error) {
                    return error;
                })
        }

        // tested
        function changeUserPassword(passwordData) {
            var data = {
                oldPassword: passwordData.oldPassword,
                newPassword: passwordData.newPassword,
                confirmPassword: passwordData.confirmPassword
            };

            return restService.serverRequest(API_USER_ENDPOINT + 'changePassword', 'PUT', undefined, data)
                .success(function (data) {
                    return data;
                })
                .error(function (error) {
                    return error;
                })
        }

        // tested
        function getUserProfile() {
            return restService.serverRequest(API_USER_ENDPOINT + 'profile', 'GET', undefined, undefined)
                .success(function (data) {
                    return data;
                })
                .error(function (error) {
                    return error;
                })
        }

        // tested
        function editUserProfile(userData) {
            var data = {
                name: userData.name,
                email: userData.email,
                phoneNumber: userData.phoneNumber
            };

            if (userData.townId) {
                data['townId'] = userData.townId;
            }

            return restService.serverRequest(API_USER_ENDPOINT + 'profile', 'PUT', undefined, data)
                .success(function (data) {
                    return data;
                })
                .error(function (error) {
                    return error;
                })
        }

        return {
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