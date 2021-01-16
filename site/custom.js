jQuery(document).ready(function ($) {

    // function valid() {
    //     var ru = {
    //         errorTitle:         "Отправка формы не удалось!",
    //         requiredFields:         "Вы не ответили на все необходимые поля",
    //         badTime:         "Вы не дали правильное время",
    //         badEmail:         "Вы не дали правильный адрес электронной почты",
    //         badTelephone:         "Вы не дали правильный номер телефона",
    //         badSecurityAnswer:         "Вы не дали правильный ответ на секретный вопрос,",
    //         badDate:         "Вы не дали правильную дату",
    //         lengthBadStart:         "Входное значение должно быть между",
    //         lengthBadEnd:         "",
    //         lengthTooLongStart:         "Входное значение больше, чем ",
    //         lengthTooShortStart:         "Входное значение короче, чем ",
    //         notConfirmed:         "Входные значения не могут быть подтверждены",
    //         badDomain:         "Неверное значение домена",
    //         badUrl:         "Входное значение не является правильным URL",
    //         badCustomVal:         "Входное значение неверно",
    //         andSpaces:         "И пробелы",
    //         badInt:         "Входное значение не правильный номер",
    //         badSecurityNumber:         "Ваш номер социального страхования был неправильным",
    //         badUKVatAnswer:         "Неправильная Великобритания ИНН",
    //         badStrength:         "Пароль не устойчив",
    //         badNumberOfSelectedOptionsStart:         "Вы должны выбрать хотя бы",
    //         badNumberOfSelectedOptionsEnd:         "Ответы",
    //         badAlphaNumeric:         "Входное значение может содержать только алфавитно-цифровые символы",
    //         badAlphaNumericExtra:         'И',
    //         wrongFileSize:         "Файл, который вы пытаетесь загрузить, слишком велик (макс% s)",
    //         wrongFileType:         "Только файлы типа% S допускается",
    //         groupCheckedRangeStart:         "Пожалуйста, выберите между",
    //         groupCheckedTooFewStart:         "Пожалуйста, выберите, по крайней мере",
    //         groupCheckedTooManyStart:         "Пожалуйста, выберите максимум",
    //         groupCheckedEnd:         "Пункт (ы)",
    //         badCreditCard:         "Номер кредитной карты не является правильным",
    //         badCVV:         "The CVV номер не был правильным ",
    //         wrongFileDim:          "Неправильные размеры изображения,",
    //         imageTooTall:          "изображение не может быть выше, чем",
    //         imageTooWide:          "изображение не может быть шире, чем",
    //         imageTooSmall:          "образ был слишком мал",
    //         min:          "мин",
    //         max:          "Макс",
    //         imageRatioNotAccepted:          "Соотношение изображения не принимаются"
    //     };

    //     $.validate({
    //         language : ru
    //     });
    // }

	

			
	$('header').waypoint('sticky', {});

	
    $('a[data-nivo-rel="nivoLightbox-short"]').nivoLightbox({
        effect: 'fade',
        afterShowLightbox: function(lightbox){
            // valid();
            $('.nivo-lightbox-wrap').attr('style', 'height: 540px;margin: 0 auto;');
        }
    });

    $('a[data-nivo-rel="nivoLightbox-call"]').nivoLightbox({
        effect: 'fade',
        afterShowLightbox: function(lightbox){
            // valid();
            $('.nivo-lightbox-wrap').attr('style', 'height: 540px;margin: 0 auto;');
        }
    });


    $('a[data-nivo-rel="nivoLightbox-call-header"]').nivoLightbox({
        effect: 'fade',
        afterShowLightbox: function(lightbox){
            // valid();
            $('.nivo-lightbox-wrap').attr('style', 'height: 650px;margin: 0 auto;');
        }
    });

    // $('a[data-nivo-rel^="nivoLightbox"]').nivoLightbox({
    //     effect: 'fade'
    // });


    //PAGE PRELOADER

    $(window).load(function() { // makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});
    });

    // var slidertestimonial = $('.bxslider');
    // try{        
    //     slidertestimonial.bxSlider({
    //         mode: 'vertical'
    //     });
    // } catch(err) {
    // }
   
    var slider = $('.bxslider').bxSlider({
        mode: 'vertical',
        infiniteLoop: true,
        controlNav: false,
        // slideWidth: 200,
        // minSlides: 1,
        // maxSlides: 1,
        // slideMargin: 10        
    });

    $('#slider-next').click(function(){
      slider.goToNextSlide();
      return false;
    });

//SLIDER REVOLUTION 

    //Content Sliders

    $('#slider').revolution({
        delay:6000,                                             
        startheight: 480,
        startwidth: 1008,

        hideThumbs: 1000,

        navigationType: 'none', //bullet, thumb, none, both     (No Thumbs In FullWidth Version !)
        navigationArrows: 'nexttobullets', //nexttobullets, verticalcentered, none                          

        touchenabled: 'on', // Enable Swipe Function : on/off
        onHoverStop: 'on', // Stop Banner Timet at Hover on Slide on/off

        navOffsetHorizontal: 0,
        navOffsetVertical: 0,

        dottedOverlay: 'none',
        shadow: 0, //0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
        fullWidth: 'on' // Turns On or Off the Fullwidth Image Centering in FullWidth Modus

    });

    //Big Image Slider

    $('#slider-block').revolution({
        delay:6000,                                             
        startheight: 640,
        startwidth: 1008,

        hideThumbs: 1000,

        navigationType: 'none', //bullet, thumb, none, both     (No Thumbs In FullWidth Version !)
        navigationArrows: 'nexttobullets', //nexttobullets, verticalcentered, none                          

        touchenabled: 'on', // Enable Swipe Function : on/off
        onHoverStop: 'on', // Stop Banner Timet at Hover on Slide on/off

        navOffsetHorizontal: 0,
        navOffsetVertical: 0,

        dottedOverlay: 'none',
        shadow: 0, //0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
        fullWidth: 'on' // Turns On or Off the Fullwidth Image Centering in FullWidth Modus

    });

//INITIALIZES TWITTER FEED PLUGIN

    // $('.twitter-feed').tweet({
    //     username: 'ashotash', //just enter your twitter username 
    //    modpath: './php/twitter/',  //uncomment this line after you set up your twiiter configuration (see the documentation)
    //     join_text: '',
    //     avatar_size: null,
    //     count: 3, //number of tweets showing
    //     auto_join_text_default: ' ',
    //     loading_text: 'loading latest tweets...' //text displayed while loading tweets
    // });

    // $('.sidebar-twitter, .footer-twitter').tweet({
    //     username: 'ashotash', //just enter your twitter username 
    //    modpath: './php/twitter/',  //uncomment this line after you set up your twiiter configuration (see the documentation)
    //     join_text: '',
    //     avatar_size: null,
    //     count: 1, //number of tweets showing
    //     auto_join_text_default: ' ',
    //     loading_text: 'loading latest tweets...' //text displayed while loading tweets
    // }); 

// FLICKR FEED

    $('.flickr-images').append('<div class="col-row"><ul class="stream-portfolio cf"></ul></div>');

    $('.flickr-images ul').jflickrfeed({
        limit: 6,
        qstrings: {
            id: 'myflickrID', // enter Flickr ID            
            tags: '' // Displays images with selected tags (optional)
        },

        itemTemplate: '<li><a href="{{image_b}}" title="{{title}}" data-nivo-rel="nivoLightbox" data-lightbox-gallery="flickr-gallery"><img src="{{image_s}}" alt="{{title}}" /></a><span class="stream-portfolio-overlay"><i class="fa fa-search"></i></span></li>'

    }, function (data) {
        $('.flickr-images li a').nivoLightbox({
            effect: 'fade'
        });
    });

//SHARING FUNCTIONALITY - SHARRRE.JS

    $('#twitter').sharrre({
        share: {
            twitter: true
        },
        template: '<div class="box" href="#"><div class="share"><i class="fa fa-twitter"></i></div></div>',
        enableHover: false,
        enableTracking: true,
        buttons: {
            twitter: {
                via: 'your-twitter-username'
            }
        },
        click: function (api, options) {
            api.simulateClick();
            api.openPopup('twitter');
        }
    });

    $('#facebook').sharrre({
        share: {
            facebook: true
        },
        template: '<div class="box" href="#"><div class="share"><i class="fa fa-facebook"></i></div></div>',
        enableHover: false,
        enableTracking: true,
        click: function (api, options) {
            api.simulateClick();
            api.openPopup('facebook');
        }
    });

    $('#googleplus').sharrre({
        share: {
            googlePlus: true
        },
        template: '<div class="box" href="#"><div class="share"><i class="fa fa-google-plus"></i></div></div>',
        enableHover: false,
        enableTracking: true,
        urlCurl: 'php/sharrre.php',
        click: function (api, options) {
            api.simulateClick();
            api.openPopup('googlePlus');
        }
    });

    $('#pinterest').sharrre({
        share: {
            pinterest: true
        },
        buttons: {
          pinterest: { 
            media: $('#pinterest').attr('data-pin-img')
          }
        },
        template: '<div class="box" href="#"><div class="share"><i class="fa fa-pinterest"></i></div></div>',
        enableHover: false,
        enableTracking: true,        
        urlCurl: '',
        click: function (api, options) {
            api.simulateClick();
            api.openPopup('pinterest');
        }
    });

    $('#linked-in').sharrre({
        share: {
            linkedin: true
        },
        template: '<div class="box" href="#"><div class="share"><i class="fa fa-linkedin"></i></div></div>',
        enableHover: false,
        enableTracking: true,
        urlCurl: '',
        click: function (api, options) {
            api.simulateClick();
            api.openPopup('linkedin');
        }
    });

//SEARCH BOX

    $('#toggle-search').click(function (event) {
        event.stopPropagation();
        event.preventDefault();
        if ($(this).hasClass('search-open')) {
            $('.search-panel').slideDown(300);
            //$('#header-search-box').focus();
            $(this).removeClass('search-open').addClass('search-close');
        } else if ($(this).hasClass('search-close')) {
            $('.search-panel').slideUp(300);
            $(this).removeClass('search-close').addClass('search-open');
        }

    });

    $('body').click(function (evt) {

        if (evt.target.id == 'header-search-box')
            return;

        $('.search-panel').slideUp(300);
        $('#toggle-search').removeClass('search-close').addClass('search-open');

    });

//NAVIGATION

    $('nav ul').superfish({
        hoverClass: 'dropdown', // the class applied to hovered list items 
        pathClass: 'overideThisToUse', // the class you have applied to list items that lead to the current page 
        pathLevels: 1, // the number of levels of submenus that remain open or are restored using pathClass 
        delay: 300, // the delay in milliseconds that the mouse can remain outside a submenu without it closing
        animation: {
            opacity: 'show',
            height: 'show'
        }, // an object equivalent to first parameter of jQuery’s .animate() method 
        speed: 'fast', // speed of the animation. Equivalent to second parameter of jQuery’s .animate() method
        autoArrows: false, // if true, arrow mark-up generated automatically = cleaner source code at expense of initialisation performance 
        dropShadows: true
    });

//ADDING AN ARROW TO THE LINKS WITH THE DROPDOWN MENU

    var navLink = $('#main-navigation ul li ul li');
 
    navLink.each(function() {   
            
        if( $(this).find('ul').length ){
            var a = $(this).find('a').eq(0);

            $('<i class="fa fa-angle-right"></i>').appendTo(a);
        }
            
    });    

//SCROLL TO TOP TRIGGER

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scroll-top').fadeIn('slow');
        } else {
            $('.scroll-top').fadeOut('slow');
        }
    }); 

    $('.scroll-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('.content-slider').parent('.container-slider').hover(function() {        
        $(this).find('.flex-direction-nav').animate({
            opacity: '1'
        }, 200);
    },
    function() {
         $(this).find('.flex-direction-nav').animate({
            opacity: '0'
        }, 200);
    });

//LOCAL LINK FUNCTION   

    $('.local').click(function () {
        var ele = $(this);
        var location = $(ele).attr('href');

        $('html, body').animate({
            scrollTop: $(location).offset().top
        }, 1000);
    });

//INITIALIZES NIVO LIGHTBOX PLUGIN

    $('a[data-nivo-rel^="nivoLightbox"]').nivoLightbox({
        effect: 'fade'
    });

//INITIALIZES FLEXSLIDER CAROUSELS

    $('.carousel-container').flexslider({
        animation: 'slide',
        slideshow: false,
        animationLoop: false,
        controlNav: false,
        prevText: '<i class="fa fa-angle-left"></i>',
        nextText: '<i class="fa fa-angle-right"></i>',
        itemWidth: 234,
        itemMargin: 24
    });

    $('.carousel-full').parent('.col-row').css({marginRight : '0'});

//INITIALIZES FLEXSLIDER IMAGE GALLERIES

    $('.image-gallery').flexslider({
        animation: 'fade',
        animationLoop: false,
        controlNav: false,
        prevText: '<i class="fa fa-angle-left"></i>',
        nextText: '<i class="fa fa-angle-right"></i>',
    });

    $('.image-gallery-thumbs').flexslider({
        animation: 'fade',
        slideshow: false,
        animationLoop: false,
        directionNav: false,
        controlNav: 'thumbnails',
        prevText: '<i class="fa fa-angle-left"></i>',
        nextText: '<i class="fa fa-angle-right"></i>',
    });

//INITIALIZES FLEXSLIDER CONTENT SLIDER

    $('.content-slider').flexslider({
        animation: 'fade',
        animationLoop: false,
        controlNav: false,
        prevText: '<i class="fa fa-angle-left"></i>',
        nextText: '<i class="fa fa-angle-right"></i>',
    });

// vTICKER FOR ROTATING TWEETS

    // $(function () {
    //     $('.twitter-feed').vTicker('init', {
    //         speed: 400,
    //         pause: 5000,
    //         padding: 15
    //     });
    // });

//ACCORDIONS AND TABS

    $('.accordion').accordion({
        collapsible: true,
        heightStyle: 'content'
    });

    $('.tabs-top, .tabs-top-2').tabs({
        show: {
            effect: 'fadeIn',
            duration: 500
        }
    });

    $('.tabs-side, .tabs-side-2').tabs({
        show: {
            effect: 'fadeIn',
            duration: 500
        }
    }).addClass('ui-tabs-vertical ui-helper-clearfix');

    $('.tabs-side li').removeClass('ui-corner-top').addClass('ui-corner-left');

//CREATING RESPONSIVE NAVIGATION (DROPDOWN MENU)    

    $('<div class="responsive-nav" />').appendTo('#header');

    var $navigation = $('<select />');
    $('<option />', {
        'selected': 'selected',
        'value': '',
        'text': 'Меню'
    }).appendTo($navigation);

    $navigation.appendTo('.responsive-nav');

    $('#main-navigation ul li a').each(function () {

        var navUrl = $(this).attr('href');
        var navText = $(this).clone().children().remove().end().text();

        if ($(this).parents('li').length == 2) {
            navText = '- ' + navText;
        }
        if ($(this).parents('li').length == 3) {
            navText = '-- ' + navText;
        }
        if ($(this).parents('li').length > 3) {
            navText = '--- ' + navText;
        }

        $('<option />', {
            'value': navUrl,
            'text': navText
        }).appendTo($navigation)
    });

    field_id = '.responsive-nav select';

    $(field_id).change(function () {
        value = $(this).attr('value');
        window.location = value;
    });

//INITIALIZES THE PERSISTENT TOP NAVIGATION BAR ON SMALLER SCREENS

    $('.responsive-nav').waypoint('sticky', {
        stuckClass: 'stuck',
        offset: -150
    });



//NOTIFICATION BOXES

    $('.info-close, .remove-item').click(function () {

        var parent = $(this).parent();

        $(parent).slideUp({
            duration: 300
        });
        return false;

    });

//

    $('.remove-from-cart').click(function () {

        var parent = $(this).parent('tr');

        $(parent).hide();
        return false;

    });

//PRODUCT QUANTITY

     // This button will increment the value
    $('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });

   

// TOOLTIPS

    $('.ttip-top').tooltip({
        position: {
            my: 'center bottom-15',
            at: 'center top',
            using: function (position, feedback) {
                $(this).css(position);
                $('<div>')
                    .addClass('arrow')
                    .addClass(feedback.vertical)
                    .addClass(feedback.horizontal)
                    .appendTo(this);
            }
        }
    });

    $('.ttip-bottom').tooltip({
        position: {
            my: 'center bottom+40',
            at: 'center bottom',
            using: function (position, feedback) {
                $(this).css(position);
                $('<div>')
                    .addClass('arrow')
                    .addClass(feedback.vertical)
                    .addClass(feedback.horizontal)
                    .appendTo(this);
            }
        }
    });

// BLOG IMAGE HOVER

    $('.img-link img').hover(function () {
            $(this).stop().animate({
                opacity: '.7'
            }, 200);
        },
        function () {
            $(this).stop().animate({
                opacity: '1'
            }, 200);
        });


//ISOTOPE SETUP



    // filter items when filter link is clicked
    var $grid = $('#filterable');
    var $portfolio_filter = $('.filters li a');

    $portfolio_filter.click(function() {
        $portfolio_filter.removeClass('current');
        $(this).addClass('current');

        var filterValue = $(this).attr('data-filter');
        if (filterValue == '*') {
            $grid.isotope({
                //layoutMode: 'fitRows',
                layoutMode: 'masonry',
                masonry: {
                    isFitWidth: true
                },
                filter: ':nth-child(-n+8)',
            });
        } else {
            $grid.isotope({
                //layoutMode: 'fitRows',
                layoutMode: 'masonry',
                masonry: {
                    isFitWidth: true
                },
                filter: function () {
                    return $(this).is(filterValue) && $(this).index(filterValue) < 8;
                }
            });
        }
    });
    $grid.isotope({
        //layoutMode: 'fitRows',
        layoutMode: 'masonry',
        masonry: {
            isFitWidth: true
        },
        filter: ':nth-child(-n+8)',
    });


    // filter items when filter link is clicked
    var $grid2 = $('#filterable2');
    var $portfolio_filter2 = $('.filters2 li a');

    $portfolio_filter2.click(function() {
        $portfolio_filter2.removeClass('current');
        $(this).addClass('current');

        var filterValue = $(this).attr('data-filter');
        if (filterValue == '*') {
            $grid2.isotope({
                //layoutMode: 'fitRows',
                layoutMode: 'masonry',
                masonry: {
                    isFitWidth: true
                }
            });
        } else {
            $grid2.isotope({
                //layoutMode: 'fitRows',
                layoutMode: 'masonry',
                masonry: {
                    isFitWidth: true
                },
                filter: function () {
                    return $(this).is(filterValue);
                }
            });
        }
    });
    $grid2.isotope({
        layoutMode: 'masonry',
        masonry: {
            isFitWidth: true
        },
        //layoutMode: 'fitRows',
    });


//ISOTOPE - SHOP PRODUCTS

  /*  // cache container
    var $shop_container = $('#product-container');
    var $shop_filter = $('#shop-filters li a');
    // filter items when filter link is clicked

    $shop_filter.click(function () {
        $shop_filter.removeClass('current');
        $(this).addClass('current');
        var selector = $(this).attr('data-filter');

        $container.isotope({
            filter: selector
        });
        return false;
    });

    $(window).load(function () {
        $('#product-container').isotope({
            filter: '*',
            layoutMode: 'fitRows'

        });
    });*/


// CONTACT FORM 

    // $('#contact-form').ajaxForm({
    //     target: '#message-outcome',
    //     beforeSubmit: function () {
    //         $('#message-outcome').addClass('visible');
    //     },
    //     success: function () {
    //         $('#message-outcome').slideDown({
    //             duration: 500
    //         });
    //     }
    // });

    // $.getJSON('php/captcha.php', function (json) {
    //     $('.security-question').append(json)
    // });

//PRELOADER


    $(window).on('load', function() {
        $('#status').fadeOut('fast'); // will first fade out the loading animation
        $('#preloader').delay(250).fadeOut('slow', function() {
            $(this).addClass('none');
        }); // will fade out the white DIV that covers the website.
        $('body').delay(1000).css({'overflow':'visible', 'height': 'auto'});
    });      

//CONTENT ANIMATIONS    

    //ANIMATE ON SCROLL

    $('.no-touch .animated').waypoint(function () {

        var animation = $(this).attr('data-animation');
        var xposition = $(this).attr('data-xposition');
        var yposition = $(this).attr('data-yposition');
        var delay = $(this).attr('data-animation-delay');

        $(this).addClass(animation, function () {
            $(this).css({
                opacity: '1',
                marginLeft: xposition + 'px',
                marginTop: '-' + yposition + 'px',
                animationDelay: delay + 'ms'
            });
        });

    }, {
        offset: '85%',
        triggerOnce: true
    });

    $('.skillbar').waypoint(function () {
        $('.skillbar').each(function () {
            $(this).find('.skillbar-bar').animate({
                width: $(this).attr('data-percent')
            }, 2000);
        });
    }, {
        offset: '85%'
    });

//INITIALIZES COUNTER PLUGIN    

    $('.timer').waypoint(function () {
        $('.timer').countTo();
    }, {
        offset: '85%',
        triggerOnce: true
    });

//ANIMATE ON HOVER

    $('.animated-hover').each(function () {

        var el = $(this);
        var animation = el.attr('data-animation');

        el.hover(function () {
                el.addClass('animated ' + animation);
            },
            function () {
                setTimeout(function () {
                    el.removeClass('animated ' + animation); 
                }, 1500); 
            });

    });

//SHARE NETWORKS DROPDOWN

    $('.share-networks').hide();

    $('.share-btn').click(function () {

        if ($(this).is('.closed')) {
            $(this).removeClass('closed').addClass('opened').prev('.share-networks').slideDown(500);
            return false;
        } else {
            $(this).removeClass('opened').addClass('closed').prev('.share-networks').slideUp(500);
            return false;
        }

    });

    // $('#contact-form').ajaxForm({
    //     target: '#message-outcome',
    //     beforeSubmit: function () {
    //         $('#message-outcome').addClass('visible');
    //     },
    //     success: function () {
    //         $('#message-outcome').slideDown({
    //             duration: 500
    //         });
    //     }
    // });

    $(document).on('click', '.closemodal', function() {
        $('.nivo-lightbox-overlay').click();
    });

}); //END of jQuery

// $(document).ready(function() {

//      $('.bx_order_make').on('click', '#submit', function(){
//           $('#bx_order_make .check').each(function(){
//                var inputType;
//                inputType = $(this).attr('data-type');
//                var length = $(this).val().length;

//                if (inputType == 'email') {
//                     var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//                     if(pattern.test($(this).val() )){
//                          $(this).removeClass('err');
//                     }else{
//                          $(this).addClass('err');
//                     }
//                }else if(inputType == 'text'){
//                     if(length == 0){
//                          $(this).addClass('err');
//                     }else{
//                          $(this).removeClass('err');
//                     }
//                }else if(inputType == 'password'){
//                     var pass = $('#PASSWORD').val();
//                     var pass_con = $('#CONFIRM_PASSWORD').val();
//                     if(length > 5 && pass == pass_con){
//                          $(this).removeClass('err');
//                     }else{
//                          $(this).addClass('err');
//                     }
//                }
//           });

//           var err = 0;
//           $('#bx_order_make .check').each(function(){
//               if($(this).hasClass("err")){
//                    err = ++err;
//               }
//           });

//           if (err == 0) {
//                $('#bx_order_make').submit();
//           };
//      })


// });


