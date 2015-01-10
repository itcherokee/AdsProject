'use strict';

angular.module('adsSystem.user', ['flow'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('user', {
                abstract: true,
                templateUrl: 'modules/user/views/user.html'
            })
            .state('userHome', {
                url: '/user/home',
                parent: 'user',
                controller: 'UserHomeController',
                templateUrl: 'modules/user/views/user-home.html',
                re
            })
            .state('userMyAds', {
                url: '/user/ads',
                parent: 'user',
                controller: 'UserMyAdsController',
                templateUrl: 'modules/user/views/user-myads.html'
            })
            .state('userPublish', {
                url: '/user/ads/publish',
                parent: 'user',
                controller: 'UserMyAdsNewController',
                templateUrl: 'modules/user/views/user-myads-new.html'
            })
            .state('editProfile', {
                url: '/user/profile',
                parent: 'user',
                controller: 'UserEditProfileController',
                templateUrl: 'modules/user/views/user-profile.html'
            })
            .state('userDeleteAd', {
                url: '/user/ads/{id:[0-9]+}',
                parent: 'user',
                controller: 'UserMyAdsDeleteController',
                templateUrl: 'modules/user/views/user-myads-delete.html'
            })
            .state('userEditAd', {
                url: '/user/ads/edit/{id:[0-9]+}',
                parent: 'user',
                controller: 'UserMyAdsEditController',
                templateUrl: 'modules/user/views/user-myads-edit.html'
            });
    });