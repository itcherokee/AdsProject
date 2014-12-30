'use strict';

angular.module('adsSystem').controller('adsHomeController', ['adsData', '$scope', '$log', function (adsData, $scope) {
    $scope.townId = null;
    $scope.categoryId = null;
    $scope.startPage = 1;

    function loadAds(){
        adsData.getAllPublishedAds($scope.startPage, $scope.townId, $scope.categoryId)
            .success(function(data){
                $scope.ads = data.ads;

            })
            .error(function(error){
                $log.error('Ads can not be loaded from server!');
            });
    }

    adsData.getAllCategories()
        .success(function(data){
            $scope.categories = data;
        })
        .error(function(error){
            $log.error('Categories cannot be loaded from server!');
        });

    adsData.getAllTowns()
        .success(function(data){
            $scope.towns = data;
        })
        .error(function(error){
            $log.error('Towns cannot be loaded from server!');
        });

    $scope.clickCategoryHandler = function clickCategoryHandler(categoryId){
        $scope.categoryId = categoryId;
        $scope.startPage = 1;
        loadAds();
    };

    $scope.clickTownHandler= function clickTownHandler(townId){
        $scope.townId = townId;
        $scope.startPage = 1;
        loadAds();
    };

    $scope.accordionShowOneItem = true;
    loadAds();
}]);