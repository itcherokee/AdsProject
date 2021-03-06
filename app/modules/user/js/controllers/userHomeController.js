'use strict';

angular.module('adsSystem.user')
    .controller('UserHomeController', ['$rootScope', '$scope', 'adsService', 'infoService',
        function ($rootScope, $scope, adsService, infoService) {
            $rootScope.$broadcast("PageChanged", 'Ads - Home');

            var selections = {
                townId: undefined,
                categoryId: undefined,
                startPage: 1,
                pageSize: 2,
                totalAds: undefined,
                numPages: undefined
            };

            $scope.adsLoaded = false;
            $scope.selections = selections;

            $scope.pageChanged = function(){
                loadAds(selections);
            };

            function loadAds(selections) {
                var startPage = selections.startPage,
                    pageSize = selections.pageSize,
                    townId = selections.townId,
                    categoryId = selections.categoryId;

                adsService.getAllPublishedAds(startPage, townId, categoryId, pageSize)
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

            loadAds(selections);
        }]);