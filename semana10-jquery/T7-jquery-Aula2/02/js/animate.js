$(document).ready(function () {
    $('a').click(function (event) {
        // existe um hash? checkagem
        event.preventDefault();
        if (this.hash !== "") {
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // coloca na url do navegador
                window.location.hash = hash;
            })
        }
    })
});