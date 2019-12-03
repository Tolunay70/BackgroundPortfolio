$(document).ready(function(){
    var currentMousePos = { x: -1, y: -1 };
    $('.colored').mousemove(function(e) {
        currentMousePos.x = e.pageX;
        currentMousePos.y = e.pageY;

        $('.mousevid').css('-webkit-mask-position-x', currentMousePos.x - 125);
        $('.mousevid').css('-webkit-mask-position-y', currentMousePos.y - 125)
    });
});