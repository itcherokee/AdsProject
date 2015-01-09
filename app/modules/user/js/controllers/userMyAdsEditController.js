'use strict';

angular.module('adsSystem.user')
    .controller('UserMyAdsEditController',
                ['$rootScope', '$scope', '$state', 'userService', '$stateParams', 'townService', 'categoryService', 'infoService',
        function ($rootScope, $scope, $state, userService, $stateParams, townService, categoryService, infoService) {
            $rootScope.$broadcast("PageChanged", 'Delete Ad');

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
                .success(function(data){
                    $scope.ad = data;
                })
                .error(function(error){
                    infoService.error('Error fetching from server the requested Ad for editing.');
                });

            $scope.fileSelected = function (fileInputField) {
                delete $scope.ad.imageDataUrl;
                var file = fileInputField.files[0];
                if (file.type.match(/image\/.*/)) {
                    var reader = new FileReader();
                    reader.onload = function () {
                        $scope.ad.imageDataUrl = reader.result;
                        $(".image-box").html("<img src='" + reader.result + "'>");
                    };
                    reader.readAsDataURL(file);
                } else {
                    $(".image-box").html("<p>File type not supported!</p>");
                }
            };

            // Event handler for editing selected Ad
            $scope.editAd = function () {
                userService.editUserAd($scope.ad)
                    .success(function (data) {
                        $rootScope.$broadcast('userAdEdited');
                        // TODO: finish the event in Right panel
                        $state.go('userMyAds');
                    })
                    .error(function (error) {
                        //TODO: notify in case of error on deletion Ad
                    });

            };
        }]);