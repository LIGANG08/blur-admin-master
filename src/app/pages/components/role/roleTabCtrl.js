angular.module('BlurAdmin.pages.components.role')
    .controller('roleCtrl', function($scope) {
        $scope.record = [
            {
                // image: 'app/browsers/chrome.svg',
                number: '序号',
                browser: '资产编码',
                visits: '资产名称',
                isVisitsUp: true,
                purchases: '资产品牌',
                isPurchasesUp: true,
                percent: '规格型号',
                isPercentUp: true
            },
            {
                // image: 'app/browsers/firefox.svg',
                number: 1,
                browser: 'Mozilla Firefox',
                visits: '7,873',
                isVisitsUp: true,
                purchases: '3,031',
                isPurchasesUp: false,
                percent: '28%',
                isPercentUp: true
            },
            {
                number: 2,
                browser: 'Internet Explorer',
                visits: '5,890',
                isVisitsUp: false,
                purchases: '2,102',
                isPurchasesUp: false,
                percent: '规格型号',
                isPercentUp: false
            },
            {
                number: 3,
                browser: 'Safari',
                visits: '4,001',
                isVisitsUp: false,
                purchases: '1,001',
                isPurchasesUp: false,
                percent: '14%',
                isPercentUp: true
            },
            {
                number: 4,
                browser: 'Opera',
                visits: '1,833',
                isVisitsUp: true,
                purchases: '83',
                isPurchasesUp: true,
                percent: '5%',
                isPercentUp: false
            }
        ]
    });

