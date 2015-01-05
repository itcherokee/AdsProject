'use strict';

angular.module('adsSystem.user')
    .controller('UserHomeController', ['$rootScope', '$scope', 'adsService',
        function ($rootScope, $scope, adsService) {
            $rootScope.$broadcast("PageChanged", 'Home');

            var selections = {
                townId: undefined,
                categoryId: undefined,
                startPage: 1
            };

            function loadAds(selections) {
                var startPage = selections.startPage,
                    townId = selections.townId,
                    categoryId = selections.categoryId;

                adsService.getAllPublishedAds(startPage, townId, categoryId)
                    .success(function (data) {
                        $scope.ads = data.ads;
                        $scope
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

            loadAds(selections);

        }]);