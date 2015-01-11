'use strict';

angular.module('adsSystem.admin')
    .controller('AdminLeftMenuController', ['$rootScope', '$scope', '$state',
        function ($rootScope, $scope, $state) {


            var mainMenuItems = {
                    selected: null,
                    items: [
                        {
                            id: 0,
                            title: 'Home',
                            state: function () {
                                $state.go('adminHome')
                            }
                        },
                        {
                            id: 1,
                            title: 'Users',
                            state: function () {
                                $state.go('adminUsers')
                            }
                        },
                        {
                            id: 2,
                            title: 'Categories',
                            state: function () {
                                $state.go('adminCategories')
                            }
                        },
                        {
                            id: 3,
                            title: 'Towns',
                            state: function () {
                                $state.go('adminTowns')
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
            $scope.myAdsMenuItems.selected = myAdsMenuItems.items[parseInt(sessionStorage['userMyAdsMenuItemId'], 10)] || myAdsMenuItems.items[0];
            $scope.myAdsMenuItems.enabled = sessionStorage['userMyAdsMenuItems-Enabled'] || true;

            function getMyAdsItemByStatus(statusName) {
                var item = undefined;
                angular.forEach(myAdsMenuItems.items, function (value, key, obj) {
                    if (value.status === statusName) {
                        item = value;
                    }
                });

                return item;
            }

            function refreshMainMenu (){

            }


            function disableMyAdsSubMenu() {
                myAdsMenuItems.enabled = false;
            }

            $scope.clickMainMenuHandler = function (item) {
                sessionStorage['userMainMenuItemId'] = item.id;
                if (item.title === 'Home') {
                    myAdsMenuItems.enabled = true;
                    $scope.myAdsMenuItems.selected = myAdsMenuItems.items[0];
                    sessionStorage['userMyAdsMenuItems-Enabled'] = true;
                    sessionStorage['userMyAdsMenuItemId'] = 0;
                    sessionStorage.removeItem('userMyAdsMenuItemStatus');
                } else {
                    disableMyAdsSubMenu()
                }


                item.state();
            };

            $scope.clickMyAdsMenuHandler = function (item) {
                sessionStorage['userMyAdsMenuItemId'] = item.id;
                sessionStorage['userMyAdsMenuItemStatus'] = item.status;

                item.state()
            };


            $scope.$on('userNewAdPublished', function (event) {
                $scope.mainMenuItems.selected = mainMenuItems.items[1];
                $scope.clickMainMenuHandler(mainMenuItems.items[1]);
            });

            $scope.$on('userMainCancelClicked', function (event) {
                $scope.mainMenuItems.selected = mainMenuItems.items[0];
                $scope.clickMainMenuHandler(mainMenuItems.items[0]);
            });

            function restoreMyAdsMenuSelection(status) {
                var selectedMyAdsMenuItem = getMyAdsItemByStatus(status);
                $scope.myAdsMenuItems.selected = myAdsMenuItems.items[selectedMyAdsMenuItem.id];
                $scope.clickMyAdsMenuHandler(myAdsMenuItems.items[selectedMyAdsMenuItem.id]);
            }

            $scope.$on('userAdDeleted', function (event) {
                $scope.mainMenuItems.selected = mainMenuItems.items[0];
                $scope.clickMainMenuHandler(mainMenuItems.items[0]);
//                var status = undefined;
//
//                if (sessionStorage['userMyAdsMenuItemStatus']) {
//                    status = sessionStorage.getItem('userMyAdsMenuItemStatus');
//                }
//
//                restoreMyAdsMenuSelection(status);
            });

            $scope.$on('userAdEdited', function (event, status) {
                var status = undefined;

                if (sessionStorage['userMyAdsMenuItemStatus']) {
                    status = sessionStorage.getItem('userMyAdsMenuItemStatus');
                }

                restoreMyAdsMenuSelection(status);
            });


            // no separate view event handlers: deactivate, publish - return to where they was:  Waiting approval & Inactive
            $scope.$on('userAdDeactivated', function (event, status) {
                restoreMyAdsMenuSelection(status);
            });

            $scope.$on('userAdRePublished', function (event, status) {
                restoreMyAdsMenuSelection(status);
            });


        }]);