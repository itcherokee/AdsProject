'use strict';

angular.module('adsSystem.admin')
    .controller('AdminHomeController', ['$rootScope', '$scope', 'adminService', 'infoService',
        function ($rootScope, $scope, adminService, infoService) {
            $rootScope.$broadcast("PageChanged", 'Ads Administration - Ads');

            var selections = {
                townId: undefined,
                categoryId: undefined,
                startPage: 1,
                pageSize: 1,
                totalAds: undefined,
                numPages: undefined,
                status: undefined
            };

            $scope.adsLoaded = false;
            selections.status = sessionStorage['userMyAdsMenuItemStatus'] || undefined;
            $scope.selections = selections;

            $scope.pageChanged = function () {
                loadAds(selections);
            };

            function loadAds(selections) {
                var startPage = selections.startPage,
                    pageSize = selections.pageSize,
                    townId = selections.townId,
                    categoryId = selections.categoryId,
                    status = selections.status;

                adminService.getAllPublishedAds(startPage, townId, categoryId, pageSize, status)
                    .success(function (data) {
                        $scope.ads = data.ads;
                        $scope.adsLoaded = true;
                        $scope.selections.totalAds = data.numItems;
                        $scope.selections.numPages = data.numPages;
                    })
                    .error(function (error) {
                        infoService.error('Ads can not be loaded from server!');
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

            $scope.$on('userMyAdsStatusSelected', function (event, status) {
                $scope.selections.status = status;
                loadAds($scope.selections);
            });

            $scope.approveAd = function (ad) {
                adminService.approveAd(ad.id)
                    .success(function (data) {
                        infoService.success('Advertisement successfully approved.');
                        loadAds(selections);
                    })
                    .error(function (error) {
                        infoService.error('Error occurred. Advertisement cannot be approved.');
                    });
            };

            $scope.rejectAd = function (ad) {
                adminService.rejectAd(ad.id)
                    .success(function (data) {
                        infoService.success('Advertisement successfully rejected.');
                        loadAds(selections);
                    })
                    .error(function (error) {
                        infoService.error('Error occurred. Advertisement cannot be rejected.');
                    });
            };

//            $scope.editAd = function (ad) {
////                            $scope.userEditAd= function(ad){
//                $rootScope.$broadcast('userEditAdStarted');
//            $state.go('userEditAd', {id: ad.id});
//        };
//            };
//
//            $scope.deleteAd = function (ad) {
////                $state.go('adminAdDelete');
//
//            };

            loadAds(selections);
        }]);