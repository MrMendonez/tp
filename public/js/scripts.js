$(document).ready(function(){

  // tries to execute the uri:scheme
  function uriSchemeWithHyperlinkFallback(uri, href) {
      if(!window.open(uri)){
          window.location = href;
      }
  }

  // `intent` is the class we're using to wire this up. Use whatever you like.
  $('a.intent').on('click', function (event) {
    uriSchemeWithHyperlinkFallback($(this).data('scheme'), $(this).attr('href'));
    // we don't want the default browser behavior kicking in and screwing everything up.
    event.preventDefault();
  });

}); // end document ready function
