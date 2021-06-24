/* Cycle v1.0 by AquaTheme */
/* TABLE OF CONTENTS */
/* ------------------
1. Header script
2. Carousel script
3. Active class to toggle script 
4. Show plans script 
-------------------- */

// Header script
$(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
        $('#navbar').addClass('header-scrolled');
    } else {
        $('#navbar').removeClass('header-scrolled');
    }
});




// Carousel script

$('.testimonials-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})




// Active class to toggle script 

var $links = $('.pricing-btn');
$links.click(function() {
    $links.removeClass('active');
    $(this).addClass('active');
});



// Show plans script 

$(".monthly-plan").hide();

$("#yearly").click(function() {
    $(".monthly-plan").hide();
    $(".yearly-plan").show();
});

$("#monthly").click(function() {
    $(".monthly-plan").show();
    $(".yearly-plan").hide();
});


// Back To Top 
$(window).on('scroll', function() {
    if ($(this).scrollTop() < 100) {
        $('.back_top').slideUp();
    } else {
        $('.back_top').slideDown();
    }
});
$('.back_top').on('click', function() {
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
    return false;
});