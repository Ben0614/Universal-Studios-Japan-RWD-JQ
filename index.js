$(function () {
    // 輪播
    $('.usj-slick').slick({
        arrow: true,
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    // 可視區域範圍改變觸發
    $(window).resize(function () {
        headerHide()
    })

    // 螢幕滑動時觸發
    $(window).scroll(function () {
        headerHide()

    })

    // 桌機 螢幕滑動超過300 header隱藏 
    // header-wrap高度減少
    // 添加class
    function headerHide() {
        if ($(window).width() > 992) {
            if ($(window).scrollTop() > 300) {
                $('header').addClass('t70');
                $('.header-wrap').addClass('h70');
                $('.navbar .logo').slideDown(300)
            } else {
                $('header').removeClass('t70');
                $('.header-wrap').removeClass('h70');
                $('.navbar .logo').slideUp(300)
            }

            // 高度分開，預防header回來時上下跳動
            if ($(window).scrollTop() > 400) {
                $('.header-wrap').addClass('h70');
            } else {
                $('.header-wrap').removeClass('h70');
            }
        }

    }

    // 手機 點擊叫出搜索框
    $('.icon-mobile .search').on('click', function () {
        $('.small-search').addClass('left0');
        $('.small-search input').focus();
    })

    // 點擊x關閉搜索框
    $('.small-search .cross').on('click', function () {
        $('.small-search').removeClass('left0')
    })

    // header的語言選擇區
    // 點擊添加class
    $('.service div:nth-child(1)').on('click', function () {
        if ($(this).hasClass('border')) {
            $(this).removeClass('border');
            $('.service div ul').slideUp(200);
        } else {
            $(this).addClass('border');
            $('.service div ul').slideDown(200);
        }

    })

    // 大搜索框
    // 判斷開關，預設為關閉
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

    // 漢堡選單 點開啟選單條
    $('.ham').on('click', function () {
        $('header .ham-list').addClass('left0')
    })

    // 點x關閉選單條
    $('.ham-list .cross').on('click', function () {
        $('.ham-list').removeClass('left0')
    })

    // 點漢堡選單條裡的li就讓底下的單選紐圈選
    $('.ham-list .language li').on('click', function () {
        $(this).find('input').prop('checked', true)
    })

    // 桌機 購票區域
    // class改變底色和文字色
    // append和prepend改變icon
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

    // 手機 購票區域
    // class改變底色和文字色
    // append和prepend改變icon
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

    // pickup item右下角的翻頁按紐
    $('.pickup .read').on('click', function () {
        $(this).siblings('.back').show(300)
    })

    // pickup back右下角的返回按紐
    $('.pickup .return').on('click', function () {
        $(this).closest('.back').hide(300)
    })



})