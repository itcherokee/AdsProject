'use strict';

angular.module('adsSystem.user')
    .controller('UserLeftMenuController', ['$scope', '$state', function ($scope, $state) {
        $scope.mainMenuSelected = null;
        $scope.mainMenuItems = {
            selected: null,
            items: [
                {
                    title: 'Home',
                    state: $state.go('userHome')
                },
                {
                    title: 'My Ads',
                    state: $state.go('userMyAds')
                },
                {
                    title: 'Publish New Ad',
                    state: $state.go('userPublish')
                },
                {
                    title: 'Edit Profile',
                    state: $state.go('editProfile')
                }
            ]};
        $scope.myAdsMenuItems = {
            enabled : false,
            selected: null,
            items: [
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
            ]};

        $scope.clickMainMenuHandler = function (item) {
            alert(item.title);
        };

        $scope.clickMyAdsMenuHandler = function () {

        };

    }])
;