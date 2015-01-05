'use strict';

angular.module('adsSystem.user')
    .controller('UserLeftMenuController', ['$rootScope', '$scope', '$state',
        function ($rootScope, $scope, $state) {

            var mainMenuItems = {
                    selected: null,
                    items: [
                        {
                            id: 0,
                            title: 'Home',
                            state: function () {
                                $state.go('userHome')
                            }
                        },
                        {
                            id: 1,
                            title: 'My Ads',
                            state: function () {
                                $state.go('userMyAds')
                            }
                        },
                        {
                            id: 2,
                            title: 'Publish New Ad',
                            state: function () {
                                $state.go('userPublish')
                            }
                        },
                        {
                            id: 3,
                            title: 'Edit Profile',
                            state: function () {
                                $state.go('editProfile')
                            }
                        }
                    ]},
                myAdsMenuItems = {
                    enabled: false,
                    selected: null,
                    items: [
                        {
                            id: 0,
                            title: 'All',
                            state: function () {
                                $rootScope.$broadcast('userMyAdsStatusSelected', 'All');
                            }
                        },
                        {
                            id: 1,
                            title: 'Published',
                            state: function () {
                                $rootScope.$broadcast('userMyAdsStatusSelected', 'Published');
                            }
                        },
                        {
                            id: 2,
                            title: 'Waiting Approval',
                            state: function () {
                                $rootScope.$broadcast('userMyAdsStatusSelected', 'Waiting Approval');
                            }
                        },
                        {
                            id: 3,
                            title: 'Inactive',
                            state: function () {
                                $rootScope.$broadcast('userMyAdsStatusSelected', 'Inactive');
                            }
                        },
                        {
                            id: 4,
                            title: 'Rejected',
                            state: function () {
                                $rootScope.$broadcast('userMyAdsStatusSelected', 'Rejected');
                            }
                        }
                    ]};

            $scope.mainMenuItems = mainMenuItems;
            $scope.mainMenuItems.selected = mainMenuItems.items[parseInt(sessionStorage['userMainMenuItemId'], 10)] || mainMenuItems.items[0];
            $scope.myAdsMenuItems = myAdsMenuItems;
            $scope.myAdsMenuItems.enabled = sessionStorage['userMyAdsMenuItems-Enabled'] || false;
            $scope.myAdsMenuItems.selected = myAdsMenuItems.items[parseInt(sessionStorage['userMyAdsMenuItemId'], 10)] || myAdsMenuItems.items[0];

            $scope.clickMainMenuHandler = function (item) {
                sessionStorage['userMainMenuItemId'] = item.id;
                if (item.title === 'My Ads') {
                    myAdsMenuItems.enabled = true;
                    sessionStorage['userMyAdsMenuItems-Enabled'] = true;
                    sessionStorage['userMyAdsMenuItemId'] = 0;
                } else {
                    myAdsMenuItems.enabled = false;
                    sessionStorage.removeItem('userMyAdsMenuItems-Enabled');
                    sessionStorage.removeItem('userMyAdsMenuItemId');
                }

                item.state();
            };

            $scope.clickMyAdsMenuHandler = function (item) {
                sessionStorage['userMyAdsMenuItemId'] = item.id;
            };

        }])
;