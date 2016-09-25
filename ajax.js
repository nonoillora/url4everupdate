function sendMessage() {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url: location.protocol + '//' + location.host + '/' + window.location.pathname.split('/')[1] + '/newMessage',
        type: 'POST',
        async: false,
        data: {
            email: $('#email').val(),
            subject: $('#subject').val(),
            name: $('#name').val(),
            message: $('#message').val(),
            _token: $('meta[name="csrf-token"]').attr('content')
        },
        dataType: 'JSON',
        beforeSend: function (xhr) {
            $('#panelContact').html('<img src="img/squares.svg" width="25%" height="25%" class="img-responsive center-block" alt="Loading..."/>');
        }, success: function (data) {
            if (data.status) {
                $('#panelContact').html('<span class="center-block"><span class="lead">'+data.message+'</span></span>');
                $('#panelContact').height($('#panelContact').height());
                $('#panelContact').width($('#panelContact').width());
                $('#panelContact').addClass('text-center');
                $('#panelContact').css('line-height', $('#panelContact').height() + 'px');
            }
        }
    });
}