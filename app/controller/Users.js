Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',
    stores: ['Users'],
    models: ['User'],
    views: [
        'user.List',
        'user.Edit',
        'user.Add'
    ],
    init: function() {
        this.control({
            'viewport > userlist': {
                itemdblclick: this.editUser
            },
            'button': {
                click: this.addUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            }
        });
    },
    updateUser: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
    
        record.set(values);
        this.getUsersStore().sync();
        win.close();
    },
    addUser: function() {
        var view = Ext.widget('useradd');

        view.down('form').loadRecord(record);
    },
    editUser: function(grid, record) {
        var view = Ext.widget('useredit');

        view.down('form').loadRecord(record);
    }
});