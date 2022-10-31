const $ = window.$;
$(document).ready(function () {
  const amenityId = {};
  $(document).on('change', "input[type='checkbox']", function () {
    if ($(this).is(':checked')) {
      amenityId[$(this).data('id')] = $(this).data('name');
    } else {
      delete amenityId[$(this).data('id')];
    }
    const objs = Object.values(amenityId);
    if (objs.length > 0) {
      $('div.amenities h4').text(Object.values(amenityId).join(', '));
    } else {
      $('div.amenities h4').html('&nbsp;');
    }
  });

  $.get('http://0.0.0.0:5001/api/v1/status/', (response) => {
    if (response.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });

  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    contentType: 'application/json',
    data: {},
    dataType: 'json',
    async: false,
    processData: false,
    success: function (data) {
      for (let i = 0; i < data.length; i++) {
        const place = data[i];
        $('.places ').append('<article><h2>' + place.name + '</h2><div class="price_by_night"><p>$' + place.price_by_night + '</p></div><div class="information"><div class="max_guest"><p>' + place.max_guest + '</p></div><div class="number_rooms">' + place.number_rooms + '<div class="number_bathrooms"><p>' + place.number_bathrooms + '</p></div><div class="user">' + place.user.first_name + place.user.last_name + ' </div><div class="description"><p>' + place.description + '</p></div></article>');
      }
    }
  });
});
