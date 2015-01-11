'use strict';

angular.module('adsSystem.user')
    .controller('AdminTownsListController', ['$rootScope', '$scope', '$state', 'adminService', 'infoService',
        function ($rootScope, $scope, $state, adminService, infoService) {
            $rootScope.$broadcast("PageChanged", 'Ads Administration - Categories');

            var selections = {
                startPage: 1,
                pageSize: 5,
                totalAds: undefined,
                numPages: undefined,
                status: undefined
            };

            $scope.selections = selections;

            $scope.pageChanged = function () {
                loadTowns(selections);
            };

            function loadTowns(selections) {
                var startPage = selections.startPage,
                    pageSize = selections.pageSize;

                adminService.getAllTowns(startPage, pageSize)
                    .success(function (data) {
                        $scope.towns = data.towns;
                        $scope.adsLoaded = true;
                        $scope.selections.totalAds = data.numItems;
                        $scope.selections.numPages = data.numPages;
                    })
                    .error(function (error) {
                        infoService.error('Categories can not be loaded from server!');
                    });
            }

            $rootScope.adminTitle = 'admin-color';
            loadTowns(selections);
        }]);