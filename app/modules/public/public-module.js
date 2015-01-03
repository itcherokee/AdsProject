'use strict';

angular.module('adsSystem.public', []).
    config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('root', {
                abstract:true,
                templateUrl: 'modules/public/views/home.html'
            })
            .state('home', {
                url: '/',
//                parent: 'root',
                controller: 'HomeController',
                templateUrl: 'modules/public/views/public-home.html'
            })
            .state('login', {
                url: '/login',
                parent: 'root',
                controller: 'LoginController',
                templateUrl: 'modules/public/views/home-login.html'
            })
            .state('register', {
                url: '/register',
                parent: 'root',
                controller: 'RegisterController',
                templateUrl: 'modules/public/views/home-register.html'
            });
        $urlRouterProvider.otherwise('home');
    });