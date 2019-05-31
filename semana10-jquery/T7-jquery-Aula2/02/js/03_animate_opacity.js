$(document).ready(function () {
    $('#animate').click(function () {
        $('#content').animate({
            opacity: 0.25
        }, 'slow');
    });
});