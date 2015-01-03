'use strict';

angular.module('adsSystem.user', []).
    config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('user', {
                abstract:true,
                views: {
                    "": {
                        templateUrl: 'modules/user/views/user.html'
                    },
                    "userLogout": {
                        controller: 'UserLogout',
                        templateUrl: "modules/user/views/user-logout.html"
                    }
                }
            })
            .state('home', {
                url: '/',
                parent: 'user',
                controller: 'UserHomeController',
                templateUrl: 'modules/public/views/user-home.html'
            })
            .state('login', {
                url: '/login',
                parent: 'root',
                controller: 'LoginController',
                templateUrl: 'modules/public/views/user-login.html'
            })
            .state('register', {
                url: '/register',
                parent: 'root',
                controller: 'RegisterController',
                templateUrl: 'modules/public/views/home-register.html'
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