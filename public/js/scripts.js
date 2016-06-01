$(document).ready(function(){

  (function () {

    // tries to execute the uri:scheme
    function goToUri(uri, href) {
        var start, end, elapsed;

        // start a timer
        start = new Date().getTime();

        // attempt to redirect to the uri:scheme
        // the lovely thing about javascript is that it's single threadded.
        // if this WORKS, it'll stutter for a split second, causing the timer to be off
        document.location = uri;

        // end timer
        end = new Date().getTime();

        elapsed = (end - start);

        // if there's no elapsed time, then the scheme didn't fire, and we head to the url.
        if (elapsed < 1) {
            document.location = href;
        }
    }

    $('a.intent').on('click', function (event) {
        goToUri($(this).data('scheme'), $(this).attr('href'));
        event.preventDefault();
    });
  })();

}); // end document ready function
