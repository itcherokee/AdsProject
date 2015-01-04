'use strict';

angular.module('adsSystem.user', [])
    .config(function ($stateProvider) {
        $stateProvider
            .state('user', {
                abstract:true,
                views: {
                    "": {
                        templateUrl: 'modules/user/views/user.html'
                    }
                }
            })
            .state('userHome', {
                url: '/user/home',
                parent: 'user',
                views: {
                    "": {
                        controller: 'UserHomeController',
                        templateUrl: 'modules/user/views/user-home.html'
                    },
                    "leftMenu": {
                        controller: 'UserLeftMenuController',
                        templateUrl: "modules/user/views/user-menu-left.html"
                    }
                }

            }).state('userPublish', {
                url: '/user/ads/publish',
                parent: 'user',
                views: {
                    "": {
                        controller: 'UserHomeController',
                        templateUrl: 'modules/user/views/user-home.html'
                    },
                    "leftMenu": {
                        controller: 'UserLeftMenuController',
                        templateUrl: "modules/user/views/user-menu-left.html"
                    }
                }
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
//        $urlRouterProvider.otherwise('home');

    });