'use strict';

angular.module('adsSystem.user')
    .controller('AdminCategoriesListController', ['$rootScope', '$scope', '$state', 'adminService', 'infoService',
        function ($rootScope, $scope, $state, adminService, infoService) {
            $rootScope.$broadcast("PageChanged", 'Ads Administration - Users');

            var selections = {
                startPage: 1,
                pageSize: 5,
                totalAds: undefined,
                numPages: undefined,
                status: undefined
            };

            $scope.selections = selections;

            $scope.pageChanged = function () {
                loadUsers(selections);
            };

            function loadUsers(selections) {
                var startPage = selections.startPage,
                    pageSize = selections.pageSize;

                adminService.getAllUsers(startPage, pageSize)
                    .success(function (data) {
                        $scope.users = data.users;
                        $scope.adsLoaded = true;
                        $scope.selections.totalAds = data.numItems;
                        $scope.selections.numPages = data.numPages;
                    })
                    .error(function (error) {
                        infoService.error('Users can not be loaded from server!');
                    });
            }

            $rootScope.adminTitle = 'admin-color';
            loadUsers(selections);
        }]);