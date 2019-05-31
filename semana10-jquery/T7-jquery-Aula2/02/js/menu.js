// $(document).ready(function () {
//     $('li').hover(function () {
//         $(this).find('.menu2').slideDown();
//     }, function () {
//         $(this).find('.menu2').slideUp();
//     });
// });

$(document).ready(function () {
    $('li').click(function () {
        $(this).find('.menu2').toggle();
        $(this).siblings().find('.menu2').slideUp();
        // }, function () {
        //     $(this).find('.menu2').slideUp();
    });
});