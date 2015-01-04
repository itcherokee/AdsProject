'use strict';

angular.module('adsSystem.user')
    .controller('UserRightMenuController', ['$rootScope', '$scope', 'townService', 'categoryService',
        function ($rootScope, $scope, townService, categoryService) {
            var allElement = {
                'id': '',
                'name': 'All'
            };

            categoryService.getAllCategories()
                .success(function (data) {
                    var categories = {
                        selected: null,
                        data: data
                    };

                    categories.data.unshift(allElement);
                    categories.selected = categories.data[0];
                    $scope.categories = categories;
                })
                .error(function (error) {
                    console.log('Categories cannot be loaded from server!');
                });

            townService.getAllTowns()
                .success(function (data) {
                    var towns = {
                        selected: null,
                        data: data
                    };

                    towns.data.unshift(allElement);
                    towns.selected = towns.data[0];
                    $scope.towns = towns;
                })
                .error(function (error) {
                    console.log('Towns cannot be loaded from server!');
                });

            $scope.clickCategoryHandler = function clickCategoryHandler(categoryId) {
                $scope.$emit("categorySelectionChanged", categoryId);
            };

            $scope.clickTownHandler = function clickTownHandler(townId) {
                $scope.$emit("townSelectionChanged", townId);
            };

            $scope.accordionStatus = {
                showOneItem: true,
                categoryIsOpen: false,
                townIsOpen: false
            };
        }]);