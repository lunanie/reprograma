$(document).ready(function () {
    $('#animate').click(function () {
        $('#content').animate({
                "width": "60%",
                "height": "200px"
            }, 1000,
            function () {
                $(this).html("A animação terminou!!!")
            });
    });
});