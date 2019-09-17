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
        id: 'test',
        store: {
            root: {
                id: 'root',
                expanded: true,
                text: 'root',
                children: [{
                    text: 'detention',
                    leaf: true,
                    iconCls: 'x-fa fa-frown-o'
                }, {
                    text: 'homework',
                    expanded: true,
                    iconCls: 'x-fa fa-folder',
                    children: [{
                        text: 'book report',
                        leaf: true,
                        iconCls: 'x-fa fa-book'
                    }, {
                        text: 'algebra',
                        leaf: true,
                        iconCls: 'x-fa fa-graduation-cap'
                    }]
                }, {
                    text: 'buy lottery tickets',
                    leaf: true,
                    iconCls: 'x-fa fa-usd'
                }]
            }

        }
    }

});