$(function () {

    $('.usj-slick').slick({
        arrow: true,
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $(window).resize(function () {
        headerHide()
    })

    $(window).scroll(function () {
        headerHide()

    })

    function headerHide() {
        if ($(window).width() > 992) {
            if ($(window).scrollTop() > 300) {
                $('header').addClass('t70');
                $('.header-wrap').addClass('h70');
                $('.navbar .logo').slideDown(150)
            } else {
                $('header').removeClass('t70');
                $('.header-wrap').removeClass('h70');
                $('.navbar .logo').slideUp(150)
            }
        }
    }

    $('.icon-mobile .search').on('click',function(){
        $('.small-search').addClass('left0');
         $('.small-search input').focus();
    })

    $('.small-search .cross').on('click',function(){
        $('.small-search').removeClass('left0')
    })

    $('.service div:nth-child(1)').on('click', function () {
        if ($(this).hasClass('border')) {
            $(this).removeClass('border');
            $('.service div ul').slideUp(200);
        } else {
            $(this).addClass('border');
            $('.service div ul').slideDown(200);
        }

    })

    let searchOpened = false;
    $('.icon-computer .search').on('click', function () {
        searchOpened = !searchOpened;
        if (searchOpened == true) {
            $('.big-search').addClass('flex').slideDown(200);
            $('.big-search input').focus();
        } else {
            $('.big-search').slideUp(200);
            $('.big-search input').blur();
        }
    })

    $('.navbar .left a').on('click', function () {

        // 如果點擊的a的父層有class bgClick 就關閉
        // 反之則打開
        if ($(this).closest('div').hasClass('bgClick') == true) {
            $(this).closest('div').removeClass('bgClick')
            $(this).siblings('.list').stop().slideUp(200);
        } else {
            $(this).closest('div').addClass('bgClick')
            $(this).siblings('.list').stop().slideDown(200);
            $(this).closest('div').siblings('div').removeClass('bgClick')
            $(this).closest('div').siblings('div').children('.list').stop().slideUp(200);
        }

    })

    $('.ham').on('click', function () {
        $('header .ham-list').addClass('left0')
    })

    $('.ham-list .cross').on('click', function () {
        $('.ham-list').removeClass('left0')
    })

    $('.ham-list .language li').on('click', function () {
        $(this).find('input').prop('checked', true)
    })

    $('.navbar .buy-ticket a').on('click', function () {
        if ($(this).hasClass('bgClick fontColor') == true) {
            $(this).removeClass('bgClick fontColor')
            $(this).siblings('.list').stop().slideUp(200);
            $(this).text('チケットを探す・購入する')
            $(this).append('<i class="fas fa-angle-double-down" style="font-size:25px"></i>')

        } else {
            $(this).addClass('bgClick fontColor')
            $(this).siblings('.list').stop().slideDown(200);
            $(this).text('閉じる')
            $(this).append('<i class="fas fa-angle-double-up" style="font-size:25px"></i>')
        }
    })

    $('.buy-ticket-mobile a').on('click', function () {
        if ($(this).hasClass('bgClick fontColor') == true) {
            $(this).removeClass('bgClick fontColor')
            $(this).siblings('.list').stop().slideUp(200);
            $(this).text('チケットを探す・購入する')
            $(this).append('<i class="fas fa-angle-double-down" style="font-size:25px"></i>')
            $(this).prepend('<i class="fas fa-angle-double-down" style="font-size:25px"></i>')

        } else {
            $(this).addClass('bgClick fontColor')
            $(this).siblings('.list').stop().slideDown(200);
            $(this).text('閉じる')
            $(this).append('<i class="fas fa-angle-double-up" style="font-size:25px"></i>')
            $(this).prepend('<i class="fas fa-angle-double-up" style="font-size:25px"></i>')
        }
    })

    $('.pickup .read').on('click', function () {
        $(this).siblings('.back').show(300)
    })

    $('.pickup .return').on('click', function () {
        $(this).closest('.back').hide(300)
    })







})