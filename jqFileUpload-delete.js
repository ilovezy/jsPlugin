
var Handler = {
    _deleteHandler: function(e){
        e.preventDefault()
        
        var button = $(e.currentTarget)
        
        this._trigger('destory', e, $.extend({
            context: button.closest('.template-download')      
        }, button.data()))
    }
}
