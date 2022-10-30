$(document).ready (function() {
    let amenity_id = {}
    $(document).on('change', "input[type='checkbox']", function () {
        if (this.checked) {
            amenity_id[$(this).data('id')] = $(this).data('name');
        } else {
            delete amenity_id[$(this).data('id')];
        }
        let objs = Object.values(amenity_id);
        if (objs.length > 0) {
            $('div.amenities > h4').text(Object.values(amenity_id).join(', '));
        } else {
            $('div.amenities > h4').html('&nbsp;');
        }
    });

});

