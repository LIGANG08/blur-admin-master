(function () {
    'use strict';

    angular.module('BlurAdmin.pages.components.news', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('components.news', {
                url: '/news',
                templateUrl: 'app/pages/components/news/news.html',
                title: '我的消息',
                controller:'myCtrl',
                controllerAs: "tabCtrl",
                sidebarMeta: {
                    icon: 'ion-ios-pulse',
                    order: 50
                },
            }).state('components.news.label', {
            url: '/:label',
            templateUrl: 'app/pages/components/news/list/mailList.html',
            title: '我消息',
            controller: "MailListCtrl",
            controllerAs: "listCtrl"
        });
    }
})();