jQuery(document).ready(function(){
"use strict";

    /*=================== Header Search  ===================*/
    $(".header-search").on("click",function(){
        $(this).toggleClass("opened").parent().find("form").toggleClass("active");
        return false;
    });


    /*=================== Sticky Header  ===================*/
        if($("header").hasClass('stick')){
            var header_stick = $("header.stick").offset().top;
        }
        var header_height = $("header.stick").innerHeight();
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll > header_stick) {
                $("header.stick").addClass("sticky");
            } else {
                $("header.stick").removeClass("sticky");
            }
        });


    /*=================== Side Header Button  ===================*/
    $(".sideheader-btn").on("click",function(){
        $(".sideheader").toggleClass("slidein");
        $("body").toggleClass("move");
        return false;
    });
    $("html").on("click",function(){
        $(".sideheader").removeClass("slidein");
        $("body").removeClass("move");
    });
    $(".sideheader,.sideheader-btn").on("click",function(e){
        e.stopPropagation();
    });

    /*=================== Sideheader ===================*/
    $(".sideheader > ul").enscroll({
        showOnHover: false,
        verticalTrackClass: 'track3',
        verticalHandleClass: 'handle3'
    });

    $(".sideheader ul li ul").parent().addClass("menu-item-has-children");
    $(".sideheader ul li.menu-item-has-children > a").on("click", function() {
        $(this).parent().siblings().removeClass("active").find("ul").slideUp();
        $(this).next("ul").slideToggle();
        $(this).parent().toggleClass("active");
        return false;
    });


    /*=================== Responsive Button Menu And Links Slide In ===================*/
    $(".responsive-bar span").on("click", function(e) {
        var target = $(e.target);
        var data_menu = $(e.target.attributes['data-target']).val();
        if (target.is('.open-menu') || data_menu == 'menu') {
            $(".responsive-links.other").removeClass("slidein");
            $(".responsive-links.menu").toggleClass("slidein");
        }
        if (target.is('.open-links') || data_menu == 'links') {
            $(".responsive-links.menu").removeClass("slidein");
            $(".responsive-links.other").toggleClass("slidein");
        }
        return false;
    });


    $("html").on("click", function() {
        $(".responsive-links.other").removeClass("slidein");
        $(".responsive-links.menu").removeClass("slidein");
    });

    $(".responsive-header").on("click", function(e) {
        e.stopPropagation();
    })

    /*=================== Responsive Menu And Links Dropdown ===================*/
    $(".responsive-links ul li ul").parent().addClass("menu-item-has-children");
    $(".responsive-links ul li.menu-item-has-children > a").on("click", function() {
        $(this).parent().siblings().removeClass("active").find("ul").slideUp();
        $(this).next("ul").slideToggle();
        $(this).parent().toggleClass("active");
        return false;
    });
    $(".responsive-links ul li .lang-selector span").on("click", function() {
        $(this).next("ul").slideToggle();
        return false;
    })


/*=================== Accordion ===================*/
$(".toggle").each(function(){
    $(this).find('.content').hide();
    $(this).find('h3:first').addClass('active').next().slideDown(500).parent().addClass("activate");
    $(this).find('h3').on("click", function() {
        if ($(this).next().is(':hidden')) {
            $(this).parent().parent().find("h3").removeClass('active').next().slideUp(500).removeClass('animated zoomIn').parent().removeClass("activate");
            $(this).toggleClass('active').next().slideDown(500).addClass('animated zoomIn').parent().toggleClass("activate");
        }
    });
});


/*=================== Team Selectors ===================*/  
$(".team-selectors > li a").on("click",function(){
	$(this).addClass("active");
	$(this).parent().siblings().find("a").removeClass("active");
});

/*=================== LightBox ===================*/  
$(function() {
    var foo = $('.lightbox');
    foo.poptrox({
        usePopupCaption: true
    });
});

});


$(window).load(function(){
$('.parallax').scrolly({bgParallax: true});

});






