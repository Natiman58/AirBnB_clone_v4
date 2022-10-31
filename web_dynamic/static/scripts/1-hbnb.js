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
});
