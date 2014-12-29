'use strict';

angular.module('adsSystem').controller('adsHomeController', ['adsData', '$scope', '$log', function (adsData, $scope) {
    adsData.getAllPublishedAds()
        .success(function(data){
            $scope.ads = data.ads;
        })
        .error(function(error){
            $log.error('Ads can not be loaded from server!');
        })
}]);