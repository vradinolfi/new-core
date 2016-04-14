/* Video Header */
$(document).ready(function(){
function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}

window.isIEOld = isIE() && isIE() < 9;
window.isiPad = navigator.userAgent.match(/iPad/i);

var img = $('.video').data('placeholder'),
    video = $('.video').data('video'),
    noVideo = $('.video').data('src'),
    el = '';

if($(window).width() > 599 && !isIEOld && !isiPad) {
    el +=   '<video autoplay loop poster="' + img + '">';
    el +=       '<source src="' + video + '" type="video/mp4">';
    el +=   '</video>';
} else {
    el = '<div class="video-element" style="background-image: url(' + noVideo + ')"></div>';
}

$('.video').prepend(el);
});

/* Video Header */

/* Panel Triangle Auto Height & Color */
        
$(document).ready(function(){

    $(".panel-triangle").each(function(){

        var parentHeight = $(this).parent().height();
        var triangleColorLeft = $(this).parent().next(".panel-content-wrapper").css("background-color");
        var triangleColorRight = $(this).parent().prev(".panel-content-wrapper").css("background-color");

        if ($(this).parent(".panel-image--left")){

            $(this).css({
                "border-bottom-width": parentHeight,
                "border-bottom-color": triangleColorLeft
            });

        }

        if ($(this).parent(".panel-image--right")){

            $(this).css({
                "border-bottom-width": parentHeight,
                "border-bottom-color": triangleColorRight
            });

        }

    });

});

$(window).on('resize', function(){
    $(".panel-triangle").each(function(){

        var parentHeight = $(this).parent().height();

        $(this).css({
            "border-bottom-width": parentHeight
        });

    });
});

/* Panel Triangle Auto Height & Color */



/* Swap Elements */

$(document).ready(function(){
    var windowWidth = $(window).width();
    if(windowWidth < 790){
        $(".swap > .swap2").insertBefore(".swap > .swap1");
    }
    if(windowWidth > 790){
        $(".swap > .swap1").insertBefore(".swap > .swap2");
    }
});

$(window).on('resize', function(){
    var windowWidth = $(window).width();
    if(windowWidth < 790){
        $(".swap > .swap2").insertBefore(".swap > .swap1");
    }
    if(windowWidth > 790){
        $(".swap > .swap1").insertBefore(".swap > .swap2");
    }
});

/*
function em(input) {
    var emSize = parseFloat($("html").css("font-size"));
    return (emSize * input);
}*/

/* Swap Elements */