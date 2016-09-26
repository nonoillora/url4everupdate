$(document).ready(function () {
   $(window).on('hashchange', function (e) {
       urlupdate();
    });

})

function urlupdate(){
    if (location.href.indexOf('#') == '27') {
        if ($('#langEs').length == 0) {
            $('#langEn').prop('href', location.protocol + '//' + location.host + '/en#' + location.href.split('#')[1]);
        } else {
            $('#langEs').prop('href', location.protocol + '//' + location.host + '/es#' + location.href.split('#')[1]);
        }
    } else {
        if ($('#langEs').length == 0) {
            $('#langEn').prop('href', '#' + location.protocol + '//' + location.host + '/en');
        } else {
            $('#langEs').prop('href', '#' + location.protocol + '//' + location.host + '/es');
        }
    }
}