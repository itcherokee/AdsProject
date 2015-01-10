'use strict';

angular.module('adsSystem.user')
    .controller('UserMyAdsController', ['$rootScope', '$scope', 'userService', '$state', 'infoService',
        function ($rootScope, $scope, userService, $state, infoService) {
            $rootScope.$broadcast("PageChanged", 'My Ads');

            var selections = {
                startPage: 1,
                pageSize: 2,
                totalAds: undefined,
                numPages: undefined,
                status: undefined
            };

            selections.status = sessionStorage['userMyAdsMenuItemStatus'] || undefined;
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
                var $that = $(this.ad)[0];
                userService.deactivateUserAd(ad.id)
                    .success(function (data) {
                        infoService.success('Advertisement successfully deactivated.');
                        $rootScope.$broadcast('userAdDeactivated', $that.status);
                        loadUserAds($scope.selections);
                    })
                    .error(function (error) {
                        infoService.error('Error occurred. Advertisement cannot be deactivated.');
                    });

            };

            //Event for republishing Ad again
            $scope.publishAgainAd= function(ad){
                var $that = $(this.ad)[0];
                userService.publishAgainUserAd(ad.id)
                    .success(function (data) {
                        infoService.success('Advertisement successfully re-published.');
                        $rootScope.$broadcast('userAdRePublished', $that.status);
                        loadUserAds($scope.selections);
                    })
                    .error(function (error) {
                        infoService.error('Error occurred. Advertisement cannot be re-published..');
                    });
            };

            //Event for editing Ad
            $scope.userEditAd= function(ad){
//                $rootScope.$broadcast('userEditAdStarted');
                $state.go('userEditAd', {id: ad.id});
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
                        infoService.error('Error occurred. Advertisements cannot be loaded.');
                    });
            }

            loadUserAds(selections);

        }]);