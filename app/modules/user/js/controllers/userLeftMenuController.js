'use strict';

angular.module('adsSystem.user')
    .controller('UserLeftMenuController', ['$scope', '$state', function ($scope, $state) {
        $scope.mainMenuSelected = null;
        $scope.mainMenuItems = [
            {
                title: 'Home',
                state: function () {

                }
            },
            {
                title: 'My Ads'
            },
            {
                title: 'Publish New Ad'
            },
            {
                title: 'Edit Profile'
            }
        ];
        $scope.myAdsMenuItems = [
            {
                title: 'All'
            },
            {
                title: 'Published'
            },
            {
                title: 'Waiting Approval'
            },
            {
                title: 'Inactive'
            },
            {
                title: 'Rejected'
            }
        ];

        $scope.clickMainMenuHandler = function () {

        };

        $scope.clickMyAdsMenuHandler = function () {

        };

    }]);