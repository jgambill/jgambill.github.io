$(document).ready(function() {

    // add a class to all outbound links for GA tracking
    $('a:not([href^="http://jodiegambill.com"]):not([href^="#"]):not([href^="/"])').addClass('outbound');

    // from https://support.google.com/analytics/answer/1136920?hl=en
    $('a.outbound').click(function() {
        ga('send', 'event', 'outbound', 'click', $(this).attr('href'), {'hitCallback':
            function () {
                document.location = $(this).attr('href');
            }
        });
    });

});
