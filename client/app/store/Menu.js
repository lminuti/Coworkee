Ext.define('App.store.Menu', {
    extend: 'Ext.data.Store',
    alias: 'store.menu',

    data: [{
        id: 'home',
        xtype: 'home',
        text: 'Home',
        icon: 'x-fa fa-home'
    }, {
        id: 'people',
        xtype: 'personbrowse',
        text: 'Employees',
        icon: 'x-fa fa-users'
    }, {
        id: 'organizations',
        xtype: 'organizationbrowse',
        text: 'Organizations',
        icon: 'x-fa fa-sitemap'
    }, {
        id: 'offices',
        xtype: 'officebrowse',
        text: 'Offices',
        icon: 'x-fa fa-globe'
    }, {
        id: 'history',
        xtype: 'historybrowse',
        text: 'Activity',
        icon: 'x-fa fa-history'
    }, {
        id: 'treetest',
        xtype: 'treetest',
        text: 'Tree test',
        icon: 'x-fas fa-tree'
    }]
});
