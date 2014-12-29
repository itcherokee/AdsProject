'use strict';

angular.module('adsSystem').factory('dal',['$http', function($http){
    function getAllPublishedAds(){

    }

    function getAllTowns (){

    }
    function getAllCategories(){

    }

    return {
        getAllPublishedAds : getAllPublishedAds,
        getAllCategories : getAllCategories,
        getAllTowns : getAllTowns

    }
}]);