'use strict';

angular.module('adsSystem.ads').factory('adsData',['$http', '$log', function($http, $log){
    function isLoggedIn(){
        return false;
    }

    function getAllAds(){

    }

    function getAllPublishedAds(startPage, townId, categoryId){
        var parameters ={
            PageSize : 3,
            StartPage : startPage || 1
        };
        if (categoryId) {
            parameters['CategoryId'] = categoryId;
        }
        if (townId) {
            parameters['TownId'] = townId;
        }
        return $http({
            params: parameters,
            method: 'GET',
            url: 'http://softuni-ads.azurewebsites.net/api/ads'
        })
    }

    function getAllTowns (){
        return $http({
            method: 'GET',
            url: 'http://softuni-ads.azurewebsites.net/api/towns'
        })
    }

    function getAllCategories(){
        return $http({
            method: 'GET',
            url: 'http://softuni-ads.azurewebsites.net/api/categories'
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