
$(document).ready(function(){
  $('input[type=checkbox]').on('change', function (e) {
    $('.submit').attr("disabled", true); 
    if ( $('input[type=checkbox]:checked').length > 2 )  {
      $('.submit').removeAttr('disabled')
    }
  });

  $('.submit').on('click', function() {
    $('.success').removeClass('none');
    $('.next_question').removeClass('none');
    $('.first_question').addClass('none');
    $('.success').text('score: ' + $('input[type=checkbox]:checked').length);
  });
  
})
