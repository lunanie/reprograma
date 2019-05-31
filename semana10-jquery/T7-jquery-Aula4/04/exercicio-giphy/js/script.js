$(document).ready(function () {
    $('#btn-busca').click(function (e) {
        e.preventDefault();
        $('.area-gif').html("");
        let buscarGif = $("#campo-busca").val();
        $.ajax({
            url: `https://api.giphy.com/v1/gifs/search?api_key=cxSao7SEeC5JORmyo7Hy3RCuOMe6xOYG&q=${buscarGif}&limit=25`,
            type: "GET",
            success: function (gifs) {
                let arrayDeGifs = gifs.data;
                $(arrayDeGifs).each(function () {
                    const container = $('<div>').attr('class', 'gif');
                    const gif = $('<img>').attr('src', this.images.fixed_width.url);
                    container.append(gif);
                    $('#exibe-busca').find('.area-gif').append(container);
                });
            },
            error: function (req) {
                const errorImage = $('<img>').attr("src", `https://http.cat/${req.status}`);
                $(".area-gif").append(errorImage);
            },
        });
    })
});