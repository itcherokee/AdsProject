'use strict';

angular.module('adsSystem.dal')
    .factory('adminService', ['restService', 'API_ADMIN_ENDPOINT', function (restService, API_ADMIN_ENDPOINT) {

        function getAllPublishedAds(startPage, townId, categoryId, pageSize, Status) {
            var parameters = {
                PageSize: pageSize || 2,
                StartPage: startPage || 1

            };
            if (categoryId) {
                parameters['CategoryId'] = categoryId;
            }
            if (townId) {
                parameters['TownId'] = townId;
            }
            if (Status) {
                parameters['Status'] = Status;
            }

            return restService.serverRequest(API_ADMIN_ENDPOINT + 'ads', 'GET', parameters, undefined)
                .success(function (data) {
                    return data;
                })
                .error(function (error) {
                    return error;
                })
        }

        function approveAd(id) {
            return restService.serverRequest(API_ADMIN_ENDPOINT + 'ads/approve/' + id, 'PUT', undefined, undefined)
                .success(function (data) {
                    return data;
                })
                .error(function (error) {
                    return error;
                })
        }

        function rejectAd(id) {
            return restService.serverRequest(API_ADMIN_ENDPOINT + 'ads/reject/' + id, 'PUT', undefined, undefined)
                .success(function (data) {
                    return data;
                })
                .error(function (error) {
                    return error;
                })
        }

        function getAdById(id) {
            return restService.serverRequest(API_ADMIN_ENDPOINT + 'ads/' + id, 'GET', undefined, undefined)
                .success(function (data) {
                    return data;
                })
                .error(function (error) {
                    return error;
                })
        }
//
//        // tested
//        function getUserAds(status, startPage, pageSize) {
//            var parameters = {
//                PageSize: pageSize || 2,
//                StartPage: startPage || 1,
//                status: status
//            };
//
//            return restService.serverRequest(API_ADMIN_ENDPOINT + 'ads', 'GET', parameters, undefined)
//                .success(function (data) {
//                    return data;
//                })
//                .error(function (error) {
//                    return error;
//                })
//        }
//
//        // tested
//        function deactivateUserAd(id) {
//            return restService.serverRequest(API_ADMIN_ENDPOINT + 'ads/deactivate/' + id, 'PUT', undefined, undefined)
//                .success(function (data) {
//                    return data;
//                })
//                .error(function (error) {
//                    return error;
//                })
//        }
//
//        // tested
//        function publishAgainUserAd(id) {
//            return restService.serverRequest(API_ADMIN_ENDPOINT + 'ads/publishagain/' + id, 'PUT', undefined, undefined)
//                .success(function (data) {
//                    return data;
//                })
//                .error(function (error) {
//                    return error;
//                })
//        }
//
//        // tested

//
//        function editUserAd(data, imageStatus) {
//            var adData = {
//                title: data.title,
//                text: data.text
//            };
//
//            switch (imageStatus) {
//                case 'delete':
//                    adData['changeImage'] = true;
//                    break;
//                case 'update':
//                    adData['imageDataUrl'] = data.imageDataUrl;
//                    adData['changeImage'] = true;
//                    break;
//                default:
//                    adData['changeImage'] = false;
//                    break;
//            }
//
//            if (data.categoryId) {
//                adData['categoryId'] = data.categoryId;
//            }
//
//            if (data.townId) {
//                adData['townId'] = data.townId;
//            }
//
//            return restService.serverRequest(API_ADMIN_ENDPOINT + 'ads/' + data.id, 'PUT', undefined, adData)
//                .success(function (data) {
//                    return data;
//                })
//                .error(function (error) {
//                    return error;
//                })
//        }
//
//        // tested
//        function deleteUserAdById(id) {
//            return restService.serverRequest(API_ADMIN_ENDPOINT + 'ads/' + id, 'DELETE', undefined, undefined)
//                .success(function (data) {
//                    return data;
//                })
//                .error(function (error) {
//                    return error;
//                })
//        }
//
//        // tested
//        function changeUserPassword(passwordData) {
//            var data = {
//                oldPassword: passwordData.oldPassword,
//                newPassword: passwordData.newPassword,
//                confirmPassword: passwordData.confirmPassword
//            };
//
//            return restService.serverRequest(API_ADMIN_ENDPOINT + 'changePassword', 'PUT', undefined, data)
//                .success(function (data) {
//                    return data;
//                })
//                .error(function (error) {
//                    return error;
//                })
//        }
//
//        // tested
//        function getUserProfile() {
//            return restService.serverRequest(API_ADMIN_ENDPOINT + 'profile', 'GET', undefined, undefined)
//                .success(function (data) {
//                    return data;
//                })
//                .error(function (error) {
//                    return error;
//                })
//        }
//
//        // tested
//        function editUserProfile(userData) {
//            var data = {
//                name: userData.name,
//                email: userData.email,
//                phoneNumber: userData.phoneNumber
//            };
//
//            if (userData.townId) {
//                data['townId'] = userData.townId;
//            }
//
//            return restService.serverRequest(API_ADMIN_ENDPOINT + 'profile', 'PUT', undefined, data)
//                .success(function (data) {
//                    return data;
//                })
//                .error(function (error) {
//                    return error;
//                })
//        }

        return {
            getAllPublishedAds: getAllPublishedAds,
            approveAd: approveAd,
            rejectAd: rejectAd,
            getAdById: getAdById


//            getUserAds: getUserAds,
//            deactivateUserAd: deactivateUserAd,
//            publishAgainUserAd: publishAgainUserAd,
//            editUserAd: editUserAd,
//            deleteUserAdById: deleteUserAdById,
//            changeUserPassword: changeUserPassword,
//            getUserProfile: getUserProfile,
//            editUserProfile: editUserProfile
        }
    }]);