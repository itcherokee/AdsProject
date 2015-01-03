'use strict';

angular.module('adsSystem.dal')
    .factory('townService', ['dalService', function (dalService) {
        function getAllTowns (){
           return dalService.getAllTowns()
                .success(function(data){
                    return data;
                })
                .error(function(error){
                    console.log('Could not fetch towns from server.')
                })
        }

        return {
            getAllTowns : getAllTowns
        }
    }]);