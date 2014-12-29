'use strict';

angular.module('adsSystem.ads').factory('adsData',['$http', function($http){
    function isLoggedIn(){
        return false;
    }

    function getAllAds(){

    }

    function getAllPublishedAds(){
        return $http({
            method: 'GET',
            url: 'http://softuni-ads.azurewebsites.net/api/ads'
        });
    }

    function getAllTowns (){

    }

    function getAllCategories(){

    }

    return {
        isLoggedIn: isLoggedIn,
        getAllAds : getAllAds,
        getAllPublishedAds : getAllPublishedAds,
        getAllCategories : getAllCategories,
        getAllTowns : getAllTowns

    }
}]);