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
                            status: undefined,
                            state: function () {
                                $rootScope.$broadcast('userMyAdsStatusSelected', undefined);
                            }
                        },
                        {
                            id: 1,
                            title: 'Published',
                            status: 'Published',
                            state: function () {
                                $rootScope.$broadcast('userMyAdsStatusSelected', 'Published');
                            }
                        },
                        {
                            id: 2,
                            title: 'Waiting Approval',
                            status: 'WaitingApproval',
                            state: function () {
                                $rootScope.$broadcast('userMyAdsStatusSelected', 'WaitingApproval');
                            }
                        },
                        {
                            id: 3,
                            title: 'Inactive',
                            status: 'Inactive',
                            state: function () {
                                $rootScope.$broadcast('userMyAdsStatusSelected', 'Inactive');
                            }
                        },
                        {
                            id: 4,
                            title: 'Rejected',
                            status: 'Rejected',
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

            function getMyAdsItemByStatus(statusName) {
                angular.forEach(myAdsMenuItems.items, function (value, key, obj) {
                    if (obj.status === statusName) {
                        return obj;
                    }
                });
            }

            $scope.clickMainMenuHandler = function (item) {
                sessionStorage['userMainMenuItemId'] = item.id;
                if (item.title === 'My Ads') {
                    myAdsMenuItems.enabled = true;
                    $scope.myAdsMenuItems.selected = myAdsMenuItems.items[0];
                    sessionStorage['userMyAdsMenuItems-Enabled'] = true;
                    sessionStorage['userMyAdsMenuItemId'] = 0;
                    sessionStorage['userMyAdsMenuItemStatus'] = undefined;
                } else {
                    myAdsMenuItems.enabled = false;
                    sessionStorage.removeItem('userMyAdsMenuItems-Enabled');
                    sessionStorage.removeItem('userMyAdsMenuItemId');
                    sessionStorage.removeItem('userMyAdsMenuItemStatus');
                }

                item.state();
            };

            $scope.clickMyAdsMenuHandler = function (item) {
                sessionStorage['userMyAdsMenuItemId'] = item.id;
                sessionStorage['userMyAdsMenuItemStatus'] = item.status;
                item.state()
            };

            function restoreMyAdsMenuSelection(status){
                var selectedMyAdsMenuItem = getMyAdsItemByStatus(status);
                $scope.myAdsMenuItems.selected = myAdsMenuItems.items[selectedMyAdsMenuItem.id];
                $scope.clickMyAdsMenuHandler(myAdsMenuItems.items[selectedMyAdsMenuItem.id]);
            }

            $scope.$on('userNewAdPublished', function (event) {
                $scope.mainMenuItems.selected = mainMenuItems.items[1];
                $scope.clickMainMenuHandler(mainMenuItems.items[1]);
            });

            $scope.$on('userAdDeleted', function (event) {
                var status = undefined;

                if (sessionStorage['userMyAdsMenuItemStatus']){
                    status = sessionStorage.getItem('userMyAdsMenuItemStatus');
                }

                restoreMyAdsMenuSelection(status);
            });

            $scope.$on('userAdDeactivated', function (event, status) {
                restoreMyAdsMenuSelection(status);
            });

            $scope.$on('userAdEdited', function (event, status) {
                restoreMyAdsMenuSelection(status);
            });

        }])
;