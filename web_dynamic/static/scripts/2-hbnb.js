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
});
