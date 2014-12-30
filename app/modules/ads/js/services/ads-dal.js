'use strict';

angular.module('adsSystem.ads').factory('adsData',['$http', '$log', function($http, $log){
    function isLoggedIn(){
        return false;
    }

    function getAllAds(){

    }

    function getAllPublishedAds(){
        return $http({
            method: 'GET',
            url: 'http://softuni-ads.azurewebsites.net/api/ads'
        })
    }

    function getAllTowns (){
        return $http({
            method: 'GET',
            url: 'http://softuni-ads.azurewebsites.net/api/categories'
        })
    }

    function getAllCategories(){
        return $http({
            method: 'GET',
            url: 'http://softuni-ads.azurewebsites.net/api/towns'
        })
    }

    return {
        isLoggedIn: isLoggedIn,
        getAllAds : getAllAds,
        getAllPublishedAds : getAllPublishedAds,
        getAllCategories : getAllCategories,
        getAllTowns : getAllTowns

    }
}]);