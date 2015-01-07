'use strict';

angular.module('adsSystem.user')
    .controller('UserPublishNewAdController', ['$rootScope', '$scope', 'userService', 'townService', 'categoryService', '$state',
        function ($rootScope, $scope, userService, townService, categoryService, $state) {
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
            $scope.categories = categoryService.getAllCategories();
            $scope.towns = townService.getAllTowns();

            $scope.publishAd = function(data) {

                userService.createNewAd(data)
                    .success(function (data) {
                        //TODO: notify about successful publishment of new Ad
                        $rootScope.$broadcast('userNewAdPublished');
                        $state.go('userHome');
                    })
                    .error(function (error) {
                        //TODO: notify about error
                    });
            }

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


        }]);