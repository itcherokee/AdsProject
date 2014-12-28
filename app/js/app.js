'use strict';

angular.module('adsSystem', ['ui.bootstrap', 'ui.router']).
    config(function ($stateProvider, $urlRouterProvider) {
        //$stateProvider and $urlRouterProvider are from ui.router module
        $stateProvider
            .state('allAds', {
                url: '/ads',
                controller: 'Controller1',
                templateUrl: '/ads/allads.html'
            })
            .state('login', {
                url: '/login',
                controller: 'LoginController as login',
                templateUrl: '/login/views/login.html'
            })
            .state('register', {
                url: '/login',
                controller: 'RegisterController as register',
                templateUrl: '/login/views/register.html'
            })
            .state('user', {
                url: '/user',
                controller: 'UserController as user',
                templateUrl: '/user/views/user.html'
            })
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
        $urlRouterProvider.otherwise('/view1');
    });