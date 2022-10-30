$(document).ready (function() {
    let amenity_id = {}
    $(document).on('change', "input[type='checkbox']", function () {
        if ($(this).is(':checked')) {
            amenity_id[$(this).data('id')] = $(this).data('name');
        } else {
            delete amenity_id[$(this).data('id')];
        }
        let objs = Object.values(amenity_id);
        if (objs.length > 0) {
            $('div.amenities h4').text(Object.values(amenity_id).join(', '));
        } else {
            $('div.amenities h4').html('&nbsp;');
        }
    });

    $.get('http://0.0.0.0:5001/api/v1/status/', (response) => {
        if (response.status === "OK") {
            $('DIV#api_status').addClass('available');
        } else {
            $('DIV#api_status').removeClass('available')
        }
    });
});
