'use strict';

angular.module('adsSystem')
    .directive("advertisement", [function () {
        return  {
            link: function (scope, element, attrs) {
//                console.log(scope);
//                console.log(attrs);
//                console.log(attrs['advertisement']);
//                console.log(scope;
//                console.log (scope.source);
//                console.log(scope['ads'])
            },
            restrict: "A",
            templateUrl: 'js/directives/advertisement/adv-template.html'



        }
    }]);