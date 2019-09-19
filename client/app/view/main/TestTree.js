Ext.define('App.view.main.TestTree', {
    extend: 'Ext.Panel',
    xtype: 'treetest',
    requires: [
        'Ext.list.Tree',
        'Ext.data.TreeStore'
    ],
    layout: 'fit',

    items: {

        xtype: 'treelist',
        expanderOnly: false,
        store: {
            root: {
                expanded: true,
                text: 'root',
                children: [{
                    text: 'Organization',
                    expanded: true,
                    iconCls: 'x-fa fa-sitemap',
                    children: [{
                        text: 'Customer service',
                        leaf: true,
                        iconCls: 'x-fa fa-square'
                    }, {
                        text: 'Enginering',
                        leaf: true,
                        iconCls: 'x-fa fa-square'
                    }]
                }, {
                    text: 'Offices',
                    expanded: true,
                    iconCls: 'x-fa fa-globe',
                    children: [{
                        text: 'Dottie',
                        leaf: true,
                        iconCls: 'x-fa fa-building'
                    }, {
                        text: 'Dryen',
                        leaf: true,
                        iconCls: 'x-fa fa-building'
                    }, {
                        text: 'Fairfield',
                        leaf: true,
                        iconCls: 'x-fa fa-building'
                    }]
                }, {
                    text: 'Employees',
                    expanded: true,
                    iconCls: 'x-fa fa-users',
                    children: [{
                        text: 'Philip Harper',
                        leaf: true,
                        iconCls: 'x-fa fa-user'
                    }, {
                        text: 'Doris Guterrez',
                        leaf: true,
                        iconCls: 'x-fa fa-user'
                    }, {
                        text: 'Stephanie Gomez',
                        leaf: true,
                        iconCls: 'x-fa fa-user'
                    }]
                }]
            }

        }
    }

});