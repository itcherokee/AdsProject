'use strict';

angular.module('adsSystem.user')
    .controller('UserMyAdsController', ['$rootScope', '$scope', 'userService',
        function ($rootScope, $scope, userService) {
            $rootScope.$broadcast("PageChanged", 'My Ads');

            var selections = {
                startPage: 1,
                pageSize: 2,
                totalAds: undefined,
                numPages: undefined
            };
            $scope.selections = selections;

            $scope.pageChanged = function(){
                loadUserAds(selections);
            };

            function loadUserAds(selections) {
                var startPage = selections.startPage,
                    pageSize = selections.pageSize,
                    status;

                adsService.get.getUserAds(status, startPage, pageSize)
                    .success(function (data) {
                        $scope.ads = data.ads;
                        $scope.selections.totalAds = data.numItems;
                        $scope.selections.numPages = data.numPages;
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

            loadUserAds(selections);

        }]);