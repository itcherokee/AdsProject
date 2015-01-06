'use strict';

angular.module('adsSystem.user')
    .controller('UserPublishNewAdController', ['$rootScope', '$scope', 'userService',
        function ($rootScope, $scope, userService) {
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

            $scope.browseForImage = function () {

            };

            function publishAd(data) {
                var startPage = selections.startPage,
                    townId = selections.townId,
                    categoryId = selections.categoryId;

                userService.getAllPublishedAds(startPage, townId, categoryId)
                    .success(function (data) {
                        $scope.ads = data.ads;
                    })
                    .error(function (error) {
                        console.log('Ads can not be loaded from server!');
                    });
            }

            $scope.$on("categorySelectionChanged", function (event, categoryId) {
                selections.categoryId = categoryId;
                event.stopPropagation();
                loadAds(selections);
            });

            $scope.$on("townSelectionChanged", function (event, townId) {
                selections.townId = townId;
                event.stopPropagation();
                loadAds(selections);
            });


        }]);