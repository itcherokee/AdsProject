'use strict';

angular.module('adsSystem.ads', []).
    config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('root', {
//                url: '/',
//                controller: 'adsHomeController',
                templateUrl: 'modules/ads/views/home-public.html'
            })
            .state('home', {
                url: '/',
                parent: 'root',
                controller: 'HomeController',
                templateUrl: 'modules/ads/views/home-public-ads.html'
            })
            .state('login', {
                url: '/login',
                parent: 'root',
                controller: 'LoginController',
                templateUrl: 'modules/ads/views/home-public-login.html'
            })
            .state('register', {
                url: '/register',
                parent: 'root',
                controller: 'RegisterController',
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