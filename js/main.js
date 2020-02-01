var REQ = {
    fetchReq: function (url, type, data) {
        return $.ajax({
            type: type,
            data: data,
            url: url
        }).done(function () {
            console.log("Request Success");
        }).fail(function () {
            alert("Request Failed");
        }).always(function () {
            console.log("Request Finish");
        });
    }
};

var DT = {
    config: {},
    getInput: function (inputType) {
        switch (inputType, data) {
            case inputType == 'text':
                return '<input type="text" class="organization-type" value="' +
                    data + '">';

            default:
                break;
        }
    },
    getColumns: function () {
        return this.config;
    }
};