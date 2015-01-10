'use strict';

angular.module('adsSystem.admin', ['flow'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('admin', {
                abstract: true,
                templateUrl: 'modules/admin/views/admin.html'
            })
            .state('adminHome', {
                url: '/admin/home',
                parent: 'admin',
                controller: 'AdminHomeController',
                templateUrl: 'modules/admin/views/admin-home.html'
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