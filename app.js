Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'AM',

    appFolder: 'app',
    
    controllers: [
        'Users'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'auto',
            items: [
                {xtype: 'userlist'},
               {
                xtype: 'button',
                id: 'adduser',
                text : 'Add user',
                enableToggle: true                
            }
            
            ]
        });
    }
});