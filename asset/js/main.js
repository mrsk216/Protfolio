//Pre Loader
// setTimeout(function() { $('.pre-loader-wapper').fadeOut(); }, 2000);
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
            "body").style.visibility = "hidden";
        document.querySelector(
            ".pre-loader-wapper").style.visibility = "visible";
    } else {
        document.querySelector(
            ".pre-loader-wapper").style.display = "none";
        document.querySelector(
            "body").style.visibility = "visible";
    }
};

//Nav Menu
$('.homeBtn').on('click', function() {
    $('html, body').animate({
        scrollTop: $('html, body').offset().top,
    });
})
$('.aboutBtn').on('click', function() {
    $('html, body').animate({
        scrollTop: $('#about').offset().top,
    });
})
$('.serviceBtn').on('click', function() {
    $('html, body').animate({
        scrollTop: $('#service').offset().top,
    });
})
$('.portfolioBtn').on('click', function() {
    $('html, body').animate({
        scrollTop: $('#portfolio').offset().top,
    });
})
$('.skillBtn').on('click', function() {
    $('html, body').animate({
        scrollTop: $('#skills').offset().top,
    });
})
$('.contactBtn').on('click', function() {
    $('html, body').animate({
        scrollTop: $('#contact').offset().top,
    });
})


//Header Sticky Start
if ($(window).width() > 991) {
    $(window).scroll(function() {
        var sticky = $('.sticky'),
            navbar = $('.navbar'),
            scroll = $(window).scrollTop();

        if (scroll >= 500) {
            sticky.addClass('fixed');
            navbar.removeClass('py-3');
        } else {
            sticky.removeClass('fixed');
            navbar.addClass('py-3');
        }
    });
};

//Nav Link Start
$(".nav-item .nav-link").on("click", function() {
    $(".nav-item").find(".active").removeClass("active");
    $(this).addClass("active");
});


//Skills start
$(".skills-show").css("opacity", "1");
$(".circle_percent").css("background", "#ddd");
$(".circle_percent").each(function() {
    var $this = $(this),
        $dataV = $this.data("percent"),
        $dataDeg = $dataV * 3.6,
        $round = $this.find(".round_per");
    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
    $this.append('<div class="circle_inbox"><span class="percent_text text-white"></span></div>');
    $this.prop('Counter', 0).animate({ Counter: $dataV }, {
        duration: 2000,
        easing: 'swing',
        step: function(now) {
            $this.find(".percent_text").text(Math.ceil(now) + "%");
        }
    });
    if ($dataV >= 51) {
        $round.css("transform", "rotate(" + 360 + "deg)");
        setTimeout(function() {
            $this.addClass("percent_more");
        }, 1000);
        setTimeout(function() {
            $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
        }, 1000);
    }
});

//Theme Color
$(".light").on('click', function() {
    $(".light").addClass("d-none");
    $(".dark").removeClass("d-none");
});
$(".dark").on('click', function() {
    $(".dark").addClass("d-none");
    $(".light").removeClass("d-none");
});
$(".theme").on('click', function() {

    $("body").toggleClass("light-mood");
    $(".theme-icon").toggleClass("d-none");

});

//Desable Context Menu
// $(document).bind("contextmenu", function(e) {
//     return false;
// });