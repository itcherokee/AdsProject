'use strict';

angular.module('adsSystem').controller('adsHomeController', ['adsData', '$scope', '$log', function (adsData, $scope) {
    adsData.getAllPublishedAds()
        .success(function(data){
            $scope.ads = data.ads;

        })
        .error(function(error){
            $log.error('Ads can not be loaded from server!');
        });

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

}]);