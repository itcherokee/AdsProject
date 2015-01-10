'use strict';

angular.module('adsSystem.user')
    .controller('UserMyAdsEditController',
    ['$rootScope', '$scope', '$state', 'userService', '$stateParams', 'townService', 'categoryService', 'infoService', 'flowFactory',
        function ($rootScope, $scope, $state, userService, $stateParams, townService, categoryService, infoService, flowFactory) {
            $rootScope.$broadcast("PageChanged", 'Delete Ad');

            $scope.image = {};

            $scope.cancel = function () {
                $rootScope.$broadcast('userAdEdited');
                $state.go('userMyAds');
            };

            townService.getAllTowns()
                .success(function (data) {
                    $scope.towns = data;
                })
                .error(function (error) {
                    infoService.warning('Unable to fetch from server the towns.');
                });

            categoryService.getAllCategories()
                .success(function (data) {
                    $scope.categories = data;
                })
                .error(function (error) {
                    infoService.warning('Unable to fetch from server the categories.');
                });

            userService.getUserAdById($stateParams.id)
                .success(function (data) {
                    $scope.ad = data;
                    if (data.imageDataUrl) {
                        var blob = new Blob([data.imageDataUrl], {type: "image/png"});
                        blob.name = 'file.png';

                     //   $scope.image.flow.files = [blob];
                    }
                })
                .error(function (error) {
                    infoService.error('Error fetching from server the requested Ad for editing.');
                });

            $scope.fileSelected = function (fileInputField) {
                delete $scope.ad.imageDataUrl;
                var file = fileInputField.files[0];
                if (file.type.match(/image\/.*/)) {
                    var reader = new FileReader();
                    reader.onload = function () {
                        $scope.ad.imageDataUrl = reader.result;
//                        $(".image-box").html("<img src='" + reader.result + "'>");
                    };
                    reader.readAsDataURL(file);
                } else {
                    infoService.warning('File type not supported!');
                }
            };

            // Event handler for editing selected Ad
            $scope.editAd = function () {
                userService.editUserAd($scope.ad, $scope.imageStatus ? $scope.imageStatus : undefined)
                    .success(function (data) {
                        $rootScope.$broadcast('userAdEdited');
                        infoService.success('Advertisement successfully edited.');
                        $state.go('userMyAds');
                    })
                    .error(function (error) {
                        infoService.error('An error occurred. Advertisement changes has not been saved.');
                    });
            };

            $scope.deleteImage = function () {
                $scope.imageStatus = 'delete';
            };

            $scope.changeImage = function () {
                $scope.imageStatus = 'update';
            }
        }]);