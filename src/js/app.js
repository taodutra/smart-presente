var request = function(res, data, method, type) {
    if(!$.ajaxSettings.headers || !$.ajaxSettings.headers['X-CSRF-TOKEN']) {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
            }
        });        
    }

    var url = res.indexOf('http') == -1 ? window.baseUrl + '/' + res : res;

    method = method || 'get';
    type = type || 'text';

    return $.ajax({
        dataType: type,
        method: method,
        url: url,
        data: data
    });
};

var requestJson = function(res, data, method) {
    return request(res, data, method, 'json');
}

// The one and only global
window.App = window.App || {
	
	init: function(){

	},

	sendGA: function(val, type){
	
	    if(!window.ga) return;

	    val = val || $(this).data('val');
	    type = type || $(this).data('type');

        ga('send', 'event', val, type);        

	}

};

$(function() {
	App.init();
});