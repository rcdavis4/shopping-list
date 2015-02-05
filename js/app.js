$(document).ready(function() {

  // click add button to create item list
  $('.add').click(function() {

    // create variable to store value from input element
    var item = $('#add-item').val();

    // makes new list item
    $('#list').append('<li>' + item + '<span class="delete close"></span></li>');

    // resets input field's placeholder value
    $('input').val('');
  })

  // pressing enter will also add new list item
  $(document).keydown(function(event) {
    if(event.which == 13) { // enter key
      $('.add').click(); // calls click function from above
    }
  });

  // clicking item crosses out
  $('#list').click(function() {
    $('.item-list li').toggleClass('checked');
  })


  // clicking x removes item

  // select and hold raises item, changes color to arrange


}); // end of document.ready
