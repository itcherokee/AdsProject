'use strict';

angular.module('adsSystem').controller('adsHomeController', ['dalService', '$scope', '$log', function (adsData, $scope) {
    $scope.townId = '';
    $scope.categoryId = '';
    $scope.startPage = 1;

    var allElement = {
        'id': '',
        'name': 'All'
    }

    function loadAds() {
        adsData.getAllPublishedAds($scope.startPage, $scope.townId, $scope.categoryId)
            .success(function (data) {
                $scope.ads = data.ads;

            })
            .error(function (error) {
                $log.error('Ads can not be loaded from server!');
            });
    }

    adsData.getAllCategories()
        .success(function (data) {
            var categories = {
                selected: null,
                data: data
            };

            categories.data.unshift(allElement);
            categories.selected = categories.data[0];
            $scope.categories = categories;
        })
        .error(function (error) {
            $log.error('Categories cannot be loaded from server!');
        });

    adsData.getAllTowns()
        .success(function (data) {
            var towns = {
                selected: null,
                data: data
            };

            towns.data.unshift(allElement);
            towns.selected = towns.data[0];
            $scope.towns = towns;
        })
        .error(function (error) {
            $log.error('Towns cannot be loaded from server!');
        });

    $scope.clickCategoryHandler = function clickCategoryHandler(categoryId) {
        $scope.categoryId = categoryId;
        $scope.isCategoryFilterStrict = categoryId !== '';
//        $scope.startPage = 1;
//        loadAds();
    };

    $scope.clickTownHandler = function clickTownHandler(townId) {
        $scope.townId = townId;
        $scope.isTownFilterStrict = townId !== '';
//        $scope.startPage = 1;
//
//        loadAds();
    };

    $scope.accordionStatus = {
        showOneItem: true,
        categoryIsOpen: false,
        townIsOpen: false
    };

    loadAds();
}]);