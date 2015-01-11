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

        function deleteAdById(id) {
            return restService.serverRequest(API_ADMIN_ENDPOINT + 'ads/' + id, 'DELETE', undefined, undefined)
                .success(function (data) {
                    return data;
                })
                .error(function (error) {
                    return error;
                })
        }

        function editAd(data, imageStatus) {
            var adData = {
                title: data.title,
                text: data.text,
                date: data.date,
                status: data.status
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

            return restService.serverRequest(API_ADMIN_ENDPOINT + 'ads/' + data.id, 'PUT', undefined, adData)
                .success(function (data) {
                    return data;
                })
                .error(function (error) {
                    return error;
                })
        }

        function getAllUsers(startPage, pageSize) {
            var parameters = {
                PageSize: pageSize || 2,
                StartPage: startPage || 1

            };

            return restService.serverRequest(API_ADMIN_ENDPOINT + 'users', 'GET', parameters, undefined)
                .success(function (data) {
                    return data;
                })
                .error(function (error) {
                    return error;
                })
        }

        function getAllCategories(startPage, pageSize) {
            var parameters = {
                PageSize: pageSize || 2,
                StartPage: startPage || 1

            };

            return restService.serverRequest(API_ADMIN_ENDPOINT + 'categories', 'GET', parameters, undefined)
                .success(function (data) {
                    return data;
                })
                .error(function (error) {
                    return error;
                })
        }

        function getAllTowns(startPage, pageSize) {
            var parameters = {
                PageSize: pageSize || 2,
                StartPage: startPage || 1

            };

            return restService.serverRequest(API_ADMIN_ENDPOINT + 'towns', 'GET', parameters, undefined)
                .success(function (data) {
                    return data;
                })
                .error(function (error) {
                    return error;
                })
        }

        return {
            getAllPublishedAds: getAllPublishedAds,
            approveAd: approveAd,
            rejectAd: rejectAd,
            getAdById: getAdById,
            deleteAdById: deleteAdById,
            editAd : editAd,
            getAllUsers : getAllUsers,
            getAllCategories : getAllCategories,
            getAllTowns : getAllTowns
        }
    }]);