'use strict';

angular.module('adsSystem.ads', []).
    config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
//                url: '/',
//                controller: 'adsHomeController',
                templateUrl: 'modules/ads/views/home-public.html'
            })
            .state('home.ads', {
                url: '/',
                controller: 'adsHomeController',
                templateUrl: 'modules/ads/views/home-public-ads.html'
            })
            .state('login', {
                url: '/login',
                parent: 'home',
                controller: 'loginController',
                templateUrl: 'modules/ads/views/home-public-login.html'
            })
            .state('home.register', {
                url: '/register',
                controller: 'registerController',
                templateUrl: 'modules/ads/views/home-public-register.html'
            });
//            .state('user', {
//                url: '/user',
//                controller: 'UserController as user',
//                templateUrl: '/user/views/user.html'
//            });
//            .state('view2', {
//                url: '/view2/:firstname/:lastname',
//                controller: 'Controller2',
//                resolve: {
//                    names: function () {
//                        return;
//                    }
//                },
//                templateUrl: '/partials/view2.html'
//            });
        $urlRouterProvider.otherwise('home');
    });