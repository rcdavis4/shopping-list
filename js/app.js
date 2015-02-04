$(document).ready(function() {
  $('.add').click(function() {
    $('.item-list').show();
    $('.list').append('<li><span class="checked fa fa-check"></span>temp item<span class="delete fa fa-times"></span></li>');
  })

}); // end of document.ready