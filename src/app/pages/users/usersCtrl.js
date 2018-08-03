(function () {
    'use strict';

    angular.module('BlurAdmin.pages.users')
        .controller('uCtrl', ufCtrl);

    /** @ngInject */
    function ufCtrl(composeModal, newsMessages,$scope, $filter, editableOptions, editableThemes) {

        var vm = this;
        vm.navigationCollapsed = true;
        vm.showCompose = function(subject, to , text){
            composeModal.open({
                subject : subject,
                to: to,
                text: text
            })
        };
        vm.tabs = newsMessages.getTabs();
        $scope.smartTablePageSize = 2;

        $scope.smartTableData = [
            {
                id: 1,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28'
            },
            {
                id: 2,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45'
            },
            {
                id: 3,
                firstName: 'Larry',
                lastName: 'Bird',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18'
            },
            {
                id: 4,
                firstName: 'John',
                lastName: 'Snow',
                username: '@snow',
                email: 'snow@gmail.com',
                age: '20'
            },
        ];

        $scope.editableTableData = $scope.smartTableData.slice(0, 2);

        $scope.peopleTableData = [
            {
                id: 1,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28',
                status: 'info'
            },
            {
                id: 2,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45',
                status: 'primary'
            },
            {
                id: 3,
                firstName: 'Larry',
                lastName: 'Bird',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18',
                status: 'success'
            },
        ];

        $scope.metricsTableData = [
            {
                image: 'app/browsers/chrome.svg',
                browser: 'Google Chrome',
                visits: '10,392',
                isVisitsUp: true,
                purchases: '4,214',
                isPurchasesUp: true,
                percent: '45%',
                isPercentUp: true
            },
            {
                image: 'app/browsers/firefox.svg',
                browser: 'Mozilla Firefox',
                visits: '7,873',
                isVisitsUp: true,
                purchases: '3,031',
                isPurchasesUp: false,
                percent: '28%',
                isPercentUp: true
            },
            {
                image: 'app/browsers/ie.svg',
                browser: 'Internet Explorer',
                visits: '5,890',
                isVisitsUp: false,
                purchases: '2,102',
                isPurchasesUp: false,
                percent: '17%',
                isPercentUp: false
            },

        ];

        $scope.users = [
            // {
            //     "id": 1,
            //     "name": "Esther Vang",
            //     "status": 4,
            //     "group": 3
            // },
            // {
            //     "id": 2,
            //     "name": "Leah Freeman",
            //     "status": 3,
            //     "group": 1
            // },
            // {
            //     "id": 3,
            //     "name": "Mathews Simpson",
            //     "status": 3,
            //     "group": 2
            // },
        ];

        $scope.statuses = [
            {value: 1, text: 'Good'},
            {value: 2, text: 'Awesome'},
            {value: 3, text: 'Excellent'},
        ];

        $scope.groups = [
            {id: 1, text: 'user'},
            {id: 2, text: 'customer'},
            {id: 3, text: 'vip'},
            {id: 4, text: 'admin'}
        ];

        $scope.showGroup = function(user) {
            if(user.group && $scope.groups.length) {
                var selected = $filter('filter')($scope.groups, {id: user.group});
                return selected.length ? selected[0].text : 'Not set';
            } else return 'Not set'
        };

        // 渲染用户数据
        $scope.showStatus = function(user) {
            var selected = [];
            if(user.status) {
                selected = $filter('filter')($scope.statuses, {value: user.status});
            }
            return selected.length ? selected[0].text : 'Not set';
        };

        // 删除用户
        $scope.removeUser = function(index) {
            $scope.users.splice(index, 1);
        };

        // 添加用户
        $scope.addUser = function() {
            $scope.inserted = {
                id: $scope.users.length+1,
                name: '',
                status: null,
                group: null
            };
            $scope.users.push($scope.inserted);
        };
        // $http.get("http://qd.baidu.com/tgr/api/index.aspx?day=82&type=tabs").success(function (data) {
        //     $scope.data=data;
        //     console.log(data)
        // })
        editableOptions.theme = 'bs3';
        editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
        editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';
    }
})();
