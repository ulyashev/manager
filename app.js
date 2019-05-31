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
                text : 'Add user',
                // margin:'75 0 0 125',
                enableToggle: true                
            }
            
            ]
        });
    }
});