/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.news', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('news', {
                url: '/news',
                templateUrl: 'app/pages/news/news.html',
                title: '采购申请',
                sidebarMeta: {
                    icon: 'ion-ios-pulse',
                    order: 50
                },
            });
    }
})();