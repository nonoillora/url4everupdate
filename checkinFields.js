$(document).ready(function () {
    $('#SendMessage').on('click', sendContact);
    $('[data-toggle="tooltip"]').tooltip();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#up').fadeIn();
        } else {
            $('#up').fadeOut();
        }
    });
    $('#up').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $(window).on('hashchange', function (e) {
       urlupdate();
    });

})

function checkName() {
    if ($('#name').val() == "" || $('#name').val().length == 0) {
        $('#name').css('border', '2px solid #F00');
        $('#name').focus();
        $('#nameInfo').removeClass('hidden').css({'margin-bottom': '10px', 'margin-top': '10px'});
        return false;
    } else {
        $('#name').css('border', 'none');
        $('#name').blur();
        $('#nameInfo').addClass('hidden').css({'margin-bottom': '0px', 'margin-top': '0px'});
        return true;
    }
}
function checkSubject() {
    if ($('#subject').val() == "" || $('#subject').val().length == 0) {
        $('#subject').css('border', '2px solid #F00');
        $('#subject').focus();
        $('#subjectInfo').removeClass('hidden').css({'margin-bottom': '10px', 'margin-top': '10px'});
        return false;
    } else {
        $('#subject').css('border', 'none');
        $('#subject').blur();
        $('#subjectInfo').addClass('hidden').css({'margin-bottom': '0px', 'margin-top': '0px'});
        return true;
    }
}
function checkEmail() {
    if ($('#email').val() == "" || $('#email').val().length == 0) {
        $('#email').css('border', '2px solid #F00');
        $('#email').focus();
        $('#emailInfo').html('Este campo es requerido');
        $('#emailInfo').removeClass('hidden').css({'margin-bottom': '10px', 'margin-top': '10px'});
        return false;
    } else {
        if (isAEmail($('#email').val())) {
            $('#email').css('border', 'none');
            $('#email').blur();
            $('#emailInfo').addClass('hidden').css({'margin-bottom': '0px', 'margin-top': '0px'});
            $('#emailInfo').html('');
            return true;
        } else {
            $('#email').css('border', '2px solid #F00');
            $('#email').blur();
            $('#emailInfo').removeClass('hidden').css({'margin-bottom': '10px', 'margin-top': '10px'});
            $('#emailInfo').html('Este email no es valido');
            return false;
        }
    }
}
function checkMessage() {
    if ($('#message').val() == "" || $('#message').val().length == 0) {
        $('#message').css('border', '2px solid #F00');
        $('#message').focus();
        $('#messageInfo').removeClass('hidden').css({'margin-bottom': '10px', 'margin-top': '10px'});
        return false;
    } else {
        $('#message').css('border', 'none');
        $('#message').blur();
        $('#subjectInfo').addClass('hidden').css({'margin-bottom': '0px', 'margin-top': '0px'});
        return true;
    }
}
function isAEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

function sendContact() {
    if (checkName() && checkEmail() && checkSubject() && checkMessage()) {
        sendMessage();
    }
}

function urlupdate(){
    if (location.href.indexOf('#') == '27') {
        if ($('#langEs').length == 0) {
            $('#langEn').prop('href', location.protocol + '//' + location.host + '/newSite/en#' + location.href.split('#')[1]);
        } else {
            $('#langEs').prop('href', location.protocol + '//' + location.host + '/newSite/es#' + location.href.split('#')[1]);
        }
        //$('.dropdown-toggle').prop('href', location.protocol + '//' + location.host + '/newSite/es#' + location.href.split('#')[1]);
    } else {
        if ($('#langEs').length == 0) {
            $('#langEn').prop('href', '#' + location.protocol + '//' + location.host + '/newSite/en');
        } else {
            $('#langEs').prop('href', '#' + location.protocol + '//' + location.host + '/newSite/es');
        }
    }
}