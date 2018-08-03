(function () {
    'use strict';

    angular.module('BlurAdmin.pages.components.news')
        .service('usersMessages', usersMessages);

    /** @ngInject */
    function usersMessages($sce,$http) {
        $http({
            method: 'POST',
            url: '192.168..1.125'
        }).then(function successCallback(response) {
            $scope.names = response.data;
            alert("请求成功");
            console.log(response.data)
        }, function errorCallback(response) {
            // 请求失败执行代码
            alert("请求失败");
            console.log("请求失败")
            console.log(response.data)
        });
    }
})();