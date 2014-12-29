'use strict';

angular.module('adsSystem.ads').factory(['$http', function($http){
    function isLoggedIn(){
        return false;
    }

    function getAllAds(){

    }

    function getAllPublishedAds(){

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