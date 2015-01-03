'use strict';

angular.module('adsSystem.dal').factory('dalMain', function($http){


    function isLoggedIn(){
        return false;
    }

    function getAllAds(){

    }

    function getAllPublishedAds(startPage, townId, categoryId){
        var parameters ={
            PageSize : 100,
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
            url: API_ENDPOINT + 'ads'
        })
    }

    function getAllTowns (){
        return $http({
            method: 'GET',
            url: API_ENDPOINT + 'towns'
        })
    }

    function getAllCategories(){
        return $http({
            method: 'GET',
            url: API_ENDPOINT + 'categories'
        })
    }

    return {
        isLoggedIn: isLoggedIn,
        getAllAds : getAllAds,
        getAllPublishedAds : getAllPublishedAds,
        getAllCategories : getAllCategories,
        getAllTowns : getAllTowns,
        userLogin : userLogin,
        registerUser : registerUser,
        createNewAd : createNewAd,
        getUserAds : getUserAds,
        deactivateUserAd : deactivateUserAd,
        publishAgainUserAd : publishAgainUserAd,
        getUserAdById : getUserAdById,
        editUserAd : EditUserAd,
        deleteUserAdById : deleteUserAdById,
        changeUserPassword : changeUserPassword
    }
});