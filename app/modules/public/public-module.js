'use strict';

angular.module('adsSystem.public', []).
    config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('root', {
                abstract: true,
                templateUrl: 'modules/public/views/public.html',
                resolve: {
                    user: ['authService', '$q', function (authService, $q) {
                        if (authService.username){
                            return $q.reject({authorized: true});
                        }
                    }]
                }
            })
            .state('home', {
                url: '/',
                parent: 'root',
                controller: 'PublicHomeController',
                templateUrl: 'modules/public/views/public-home.html'
            })
            .state('login', {
                url: '/login',
                parent: 'root',
                controller: 'PublicLoginController',
                templateUrl: 'modules/public/views/public-login.html',

            })
            .state('register', {
                url: '/register',
                parent: 'root',
                controller: 'PublicRegisterController',
                templateUrl: 'modules/public/views/public-register.html'
            });
        $urlRouterProvider.otherwise('home');
    });