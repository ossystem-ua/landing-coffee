$(document).ready(function () {
    var contactForm = $('#emailForm'),
        contentWrapper = $('.main-title');

    contactForm.on("submit", (function (e) {
        e.preventDefault();

        var email = $('#inputemail'),
            regV = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        email.keyup(function() {
            $('.control-form').removeClass('failed');
        });

        if (email.val().length < 1) {
            $('.control-form').addClass('failed');
            email.addClass('placeholder-error');
            email.attr('placeholder', 'Email cannot be blank');
        }

        if (email.val().search(regV) != -1 && email.val().length > 1) {
            var form_data = $("#emailForm").serialize();
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: form_data
            });
            $('.main-section').addClass('active-background');
            $('.foam').fadeIn(300);
            contentWrapper.html('<p>Thank you for joining!</p>')

            $('#inputemail').val('');
        }
    }));
});
