'use strict';

angular.module('adsSystem.admin', ['flow'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('admin', {
                abstract: true,
                templateUrl: 'modules/admin/views/admin.html',
                resolve: {
                    user: ['authService', '$q', function (authService, $q) {
                        if (!authService.isLoggedIn()){
                           return $q.reject({unAuthorized : true})
                        }
                    }]
                }
            })
            .state('adminHome', {
                url: '/admin/home',
                parent: 'admin',
                controller: 'AdminHomeController',
                templateUrl: 'modules/admin/views/admin-home.html'
            })
            .state('adminDeleteAd', {
                url: '/admin/ads/delete/{id:[0-9]+}',
                parent: 'admin',
                controller: 'AdminAdsDeleteController',
                templateUrl: 'modules/admin/views/admin-ads-delete.html'
            })
            .state('adminEditAd', {
                url: '/admin/ads/edit/{id:[0-9]+}',
                parent: 'admin',
                controller: 'AdminAdsEditController',
                templateUrl: 'modules/admin/views/admin-ads-edit.html'
            })
            .state('adminUsers', {
                url: '/admin/users/list',
                parent: 'admin',
                controller: 'AdminUserListController',
                templateUrl: 'modules/admin/views/admin-users-list.html'
            });;
    });