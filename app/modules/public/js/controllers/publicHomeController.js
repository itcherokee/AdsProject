'use strict';

angular.module('adsSystem.public')
    .controller('PublicHomeController', ['$rootScope', '$scope', 'townService', 'categoryService', 'adsService',
        function ($rootScope, $scope, townService, categoryService, adsService) {
//            $rootScope.$broadcast("PageChanged", 'Home');
//            $scope.townId = '';
//            $scope.categoryId = '';
//            $scope.startPage = 1;
//
//            var allElement = {
//                'id': '',
//                'name': 'All'
//            };
//
//            function loadAds() {
//                adsService.getAllPublishedAds($scope.startPage, $scope.townId, $scope.categoryId)
//                    .success(function (data) {
//                        $scope.ads = data.ads;
//                    })
//                    .error(function (error) {
//                        console.log('Ads can not be loaded from server!');
//                    });
//            }
//
//            categoryService.getAllCategories()
//                .success(function (data) {
//                    var categories = {
//                        selected: null,
//                        data: data
//                    };
//
//                    categories.data.unshift(allElement);
//                    categories.selected = categories.data[0];
//                    $scope.categories = categories;
//                })
//                .error(function (error) {
//                    console.log('Categories cannot be loaded from server!');
//                });
//
//            townService.getAllTowns()
//                .success(function (data) {
//                    var towns = {
//                        selected: null,
//                        data: data
//                    };
//
//                    towns.data.unshift(allElement);
//                    towns.selected = towns.data[0];
//                    $scope.towns = towns;
//                })
//                .error(function (error) {
//                    console.log('Towns cannot be loaded from server!');
//                });
//
//            $scope.clickCategoryHandler = function clickCategoryHandler(categoryId) {
//                $scope.categoryId = categoryId;
//                $scope.isCategoryFilterStrict = categoryId !== '';
//            };
//
//            $scope.clickTownHandler = function clickTownHandler(townId) {
//                $scope.townId = townId;
//                $scope.isTownFilterStrict = townId !== '';
//            };
//
//            $scope.accordionStatus = {
//                showOneItem: true,
//                categoryIsOpen: false,
//                townIsOpen: false
//            };
//
//            loadAds();

            $rootScope.$broadcast("PageChanged", 'Home');

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