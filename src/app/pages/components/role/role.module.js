/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.components.role', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('components.role', {
                url: '/role',
                templateUrl: 'app/pages/components/role/role.html',
                styles:'app/pages/components/role/role.css',
                title: '我的申请',
                sidebarMeta: {
                    icon: 'ion-ios-pulse',
                    order: 10,
                },
            })
            .state('components.role.label', {
                    url: '/:label',
                    templateUrl: 'app/pages/components/role/list/roleList.html',
                    title: '我的申请',
                    controller: "roleListCtrl",
                    controllerAs: "listCtrl"
                })
            .state('components.role.detail', {
                url: '/:label/:id',
                templateUrl: 'app/pages/components/role/detail/roleDetail.html',
                title: 'Mail',
                controller: "roleDetailCtrl",
                controllerAs: "detailCtrl"
            });
        $urlRouterProvider.when('/components/role','/components/role/inbox');
    }
})();