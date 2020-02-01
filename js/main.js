var REQ = {
    fetchReq: function(url, type, data){
        return $.ajax({
            type:"POST",
            data: data,
            url: url
        }).done(function(){
            alert("Success");
        }).fail(function(){
            alert("Failed")
        }).always(function(){
            alert("Request Finish")
        });
    }
};