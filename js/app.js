$(document).ready(function(){
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    })
    .mousedown(function(){
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function(){
                $('.hadouken').hide();
                $('.hadouken').css('left', '520px');
            });
    })
    .mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });

     $('.ryu').keydown(function (e) {
        if (e.keyCode == 88) {
            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-cool').show();
        }
    })
    .keyup(function (e) {
        if (e.keyCode == 88) {
            $('.ryu-still').show();
            $('.ryu-cool').hide();
        };
    })


});

function playHadouken() {
    $('#hadouken')[0].volume = "0.2" ;
    $('#hadouken')[0].load();
    $('#hadouken')[0].play();
}