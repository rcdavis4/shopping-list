$(document).ready(function() {

  // click add button to create item list
  $('.add').click(function() {

    // create variable to store value from input element
    var userIn = $('#add-item').val();

    // makes new list item
    $('#list').append('<li class="item">' + userIn + '<span class="delete"></span></li>');

    // resets input field's placeholder value
    $('input').val('');
  })

  // pressing enter will also add new list item
  $(document).keydown(function(event) {
    if(event.which == 13) { // enter key
      $('.add').click(); // calls click function from above
    }
  });

  // mark item as completed
  $('#list').on('click', '.item', function() {
    $(this).toggleClass('completed');
  });

  // clicking close-icon deletes item
  $('#list').on('click', '.delete', function() {
    $('.item').remove();
  });

  // select and hold raises item, changes color to arrange (import jquery-ui)
  $(function() {
    $('#list').sortable();
    $('#list').disableSelection();
  })

}); // end of document.ready
