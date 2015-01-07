'use strict';

angular.module('adsSystem.user')
    .controller('UserMyAdsController', ['$rootScope', '$scope', 'userService',
        function ($rootScope, $scope, userService) {
            $rootScope.$broadcast("PageChanged", 'My Ads');

            var selections = {
                startPage: 1,
                pageSize: 2,
                totalAds: undefined,
                numPages: undefined,
                status: undefined
            };

            $scope.selections = selections;

            $scope.$on('userMyAdsStatusSelected', function (event, status) {
                $scope.selections.status = status;
                loadUserAds($scope.selections);
            });

            $scope.pageChanged = function () {
                loadUserAds(selections);
            };

            // Event handler for deactivating selected Ad
            $scope.deactivateAd = function (ad) {
                userService.deactivateUserAd(ad.id)
                    .success(function (data) {
                        loadUserAds($scope.selections);
                    })
                    .error(function (error) {
                        //TODO: notify in case of error on deactivation Ad
                    });

            };

            function loadUserAds(selections) {
                var startPage = selections.startPage,
                    pageSize = selections.pageSize,
                    status = selections.status;

                userService.getUserAds(status, startPage, pageSize)
                    .success(function (data) {
                        $scope.ads = data.ads;
                        $scope.selections.totalAds = data.numItems;
                        $scope.selections.numPages = data.numPages;
                    })
                    .error(function (error) {
                        console.log('Ads can not be loaded from server!');
                    });
            }

            loadUserAds(selections);

        }]);