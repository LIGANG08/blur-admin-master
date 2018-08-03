(function () {
    'use strict';

    angular.module('BlurAdmin.pages.components.news')
        .service('newsMessages', newsMessages);

    /** @ngInject */
    function newsMessages($sce) {
        var message = [
            {
                "id": "4563faass",
                "name": "资产",
                // "subject": "Great text",
                // "date": "2015-08-28T07:57:09",
                // "body": $sce.trustAsHtml("<p>Hey John, </p><p>Check out this cool text.</p>"),
                // "pic": "img/Nasta.png",
                // "email": "petraramsey@mail.com",
                // "attachment": "poem.txt",
                // "position": "Great Employee",
                "tag": "friend",
                "labels": ['inbox']
            },
            {
                // "id": "4563fdfvd",
                // "name": "Nasta Linnie",
                // "tag": "study",
                // "labels": ['inbox']
            },
            // {
            //     "id": "4563zxcss",
            //     "name": "Nasta Linnie",
            //     "subject": "Lores ipsum",
            //     "date": "2015-10-19T03:30:45",
            //     "important": false,
            //     "body": $sce.trustAsHtml("<p>Hey Nasta, </p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>"),
            //     "pic": "img/Nasta.png",
            //     "email": "petraramsey@mail.com",
            //     "position": "Great Employee",
            //     "tag": "work",
            //     "labels": ['sent', 'important']
            // },
        ].sort(function (a, b) {
            if (a.date > b.date) return 1;
            if (a.date < b.date) return -1;
        }).reverse();
        var tab = [{
            label: 'inbox',
            name: '消息1',
            // newMails: 7
        }, {
            label: 'sent',
            name: '消息2'
        }, {
            label: 'important',
            name: '消息3'
        }];
        var page = [
            {state: 'tree', sta: 'tree.html'},
            {state: 'users', sta: 'users.html'},
        ];

        return{
            getTabs : function(){
                return tab
            },
            getPage : function(){
                return page
            },
            getMessagesByLabel : function(label){
                return message.filter(function(m){
                    return m.labels.indexOf(label) != -1;
                });
            },
            getMessageById : function(id){
                return message.filter(function(m){
                    return m.id == id;
                })[0];
            }
        }

    }
})();