'use strict';

angular.module('adsSystem.user')
    .controller('UserPublishNewAdController', ['$rootScope', '$scope', 'userService', 'townService', 'categoryService',
            '$state', 'infoService',
        function ($rootScope, $scope, userService, townService, categoryService, $state, infoService) {
            $rootScope.$broadcast("PageChanged", 'Publish New Ad');

            var newAd = {
                    title: '',
                    text: '',
                    imageDataUrl: '',
                    categoryId: '',
                    townId: ''
                },
                imagePath = '';

            $scope.ad = newAd;
            $scope.imagePath = imagePath;
            townService.getAllTowns()
                .success(function (data) {
                    $scope.towns = data;
                })
                .error(function (error) {
                    infoService.warning('Towns cannot be loaded from server!');
                });

            categoryService.getAllCategories()
                .success(function (data) {
                    $scope.categories = data;
                })
                .error(function (error) {
                    infoService.warning('Categories cannot be loaded from server!');
                });

            $scope.publishAd = function(data) {

                userService.createNewAd(data)
                    .success(function (data) {
                        //TODO: notify about successful publishment of new Ad
                        $rootScope.$broadcast('userNewAdPublished');
                        $state.go('userMyAds');
                    })
                    .error(function (error) {
                        infoService.error('Error occurred. New advertisement cannot be published.');
                    });
            };

            $scope.fileSelected = function ($file) {
                delete $scope.ad.imageDataUrl;
                var file = $file.file;
                if (file.type.match(/image\/.*/)) {
                    var reader = new FileReader();
                    reader.onload = function () {
                        $scope.ad.imageDataUrl = reader.result;
                    };
                    reader.readAsDataURL(file);
                } else {
                    infoService.warning('File type not supported!');
                }
            };
        }]);