'use strict';

angular.module('adsSystem.user', []).
    config(function ($stateProvider) {
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
            .state('userHome', {
                url: '/user/home',
                parent: 'user',
                controller: 'UserHomeController',
                templateUrl: 'modules/user/views/user-home.html'
            });
//            .state('login', {
//                url: '/login',
//                parent: 'user',
//                controller: 'LoginController',
//                templateUrl: 'modules/public/views/user-login.html'
//            })
//            .state('register', {
//                url: '/register',
//                parent: 'user',
//                controller: 'RegisterController',
//                templateUrl: 'modules/public/views/home-register.html'
//            });
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
//        $urlRouterProvider.otherwise('home');
    });