Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    model: 'AM.model.User',
    autoLoad: true,

    proxy: {
        type: 'localstorage',
        id  : 'users'
},
data: [
    {name: 'Ed',    email: 'ed@sencha.com'},
    {name: 'Tommy', email: 'tommy@sencha.com'}
]
});