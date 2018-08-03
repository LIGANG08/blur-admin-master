/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.system', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('system', {
          url: '/system',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          controller: 'TablesPageCtrl',
          title: '系统管理',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300,
          },
        }).state('system.basic', {
          url: '/basic',
          templateUrl: 'app/pages/system/basic/system.html',
          title: 'Basic Tables',
          sidebarMeta: {
            order: 0,
          },
        }).state('system.smart', {
          url: '/smart',
          templateUrl: 'app/pages/system/smart/system.html',
          title: 'Smart Tables',
          sidebarMeta: {
            order: 100,
          },
        });
    $urlRouterProvider.when('/system','/system/basic');
  }

})();
