var gifs = [
    `<img src="https://img.buzzfeed.com/buzzfeed-static/static/2015-11/2/11/enhanced/webdr09/anigif_enhanced-22194-1446481827-6.gif" alt="">`,
    `<img src="https://3.bp.blogspot.com/-hLMlHh_4yK0/VR4aZoTCq4I/AAAAAAAAEa0/camgSLkVy2w/s1600/slide_355109_3892111_free.gif" alt="">`,
    `<img src="https://img.buzzfeed.com/buzzfeed-static/static/2015-11/2/12/enhanced/webdr06/anigif_enhanced-1080-1446484438-3.gif?output-quality=auto&output-format=auto&downsize=360:*" alt="">`,
]
function sortearGifs(){
    var random = Math.floor(Math.random()*3);
    document.getElementById('ondeVaoOsGifs').innerHTML= gifs[random];
};