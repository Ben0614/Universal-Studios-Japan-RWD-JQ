window.addEventListener('scroll', () => {
    headerHide()
})

// 桌機 螢幕滑動超過300 header隱藏 
// header-wrap高度減少
// 添加class
function headerHide() {
    const header = document.querySelector('header')
    const navbar_logo = document.querySelector('.navbar .logo')
    const header_wrap = document.querySelector('.header-wrap')
    if (window.innerWidth > 992) {
        if (document.documentElement.scrollTop > 300) {
            header.classList.add('t70')
            navbar_logo.classList.add('show')
        } else {
            header.classList.remove('t70')
            navbar_logo.classList.remove('show')
        }

        if (document.documentElement.scrollTop > 400) {
            header_wrap.classList.add('h70')
        } else {
            header_wrap.classList.remove('h70')
        }
    }
}

const searchIcon_mobile = document.querySelector('.icon-mobile .search')
const search_mobile = document.querySelector('.small-search')
const searchInput_mobile = document.querySelector('.small-search input')
const searchCross_mobile = document.querySelector('.small-search .cross')

// 手機 點擊叫出搜索框
searchIcon_mobile.addEventListener('click', () => {
    search_mobile.classList.add('left0')
    searchInput_mobile.focus()
})
// 手機 關閉搜索框
searchCross_mobile.addEventListener('click', () => {
    search_mobile.classList.remove('left0')
})

const languageChange = document.querySelector('.service div:nth-child(1)')
const languageList = document.querySelector('.service div ul')

// header的語言選擇區
// 點擊添加class
languageChange.addEventListener('click', function () {
    if (this.classList.contains('border')) {
        this.classList.remove('border')
        languageList.style.height = 0
    } else {
        this.classList.add('border')
        languageList.style.height = languageList.scrollHeight + 'px'
    }
})

// 防止冒泡 否則點擊選單也會觸發父層的click
const option = document.querySelector('.service div:nth-child(1) .l-option')

option.addEventListener('click', (e) => {
    e.stopPropagation();
})

// 大搜索框
// 判斷開關，預設為關閉
let searchOpened = false;

const searchIcon_computer = document.querySelector('.icon-computer .search')
const search_computer = document.querySelector('header .big-search')
const searchInput_computer = document.querySelector('header .big-search input')

searchIcon_computer.addEventListener('click', () => {
    searchOpened = !searchOpened;
    if (searchOpened) {
        search_computer.classList.add('flex')
        search_computer.style.height = search_computer.scrollHeight + 'px'
        searchInput_computer.focus()
    } else {
        search_computer.style.height = 0
        searchInput_computer.blur()
    }
})

// 去除兄弟元素的背景色
function siblingsColor(item) {
    var p = item.parentNode.children;
    for(var i = 0 ; i < p.length;i++){
        if(p[i] !== item) {
            p[i].classList.remove('bgClick')
        }
    }
}

// 關閉兄弟list
function siblingsList(item) {
    var p = item.parentNode.children;
    for(var i = 0 ; i < p.length;i++){
        if(p[i] !== item) {
            p[i].lastElementChild.style.height = 0
        }
    }
}

const navabar_link = document.querySelectorAll('.navbar .left div a')

// navbar 左側背景色和下拉顯示
navabar_link.forEach((link) => {
    link.addEventListener('click', function () {
        if (this.parentNode.classList.contains('bgClick')) {
            this.parentNode.classList.remove('bgClick')
            this.nextElementSibling.style.height = 0
        } else {
            this.parentNode.classList.add('bgClick')
             this.nextElementSibling.style.height = this.nextElementSibling.scrollHeight + 'px'
             siblingsColor(this.parentNode)
             siblingsList(this.parentNode);
        }
    })
})

const ham = document.querySelector('.ham')
const ham_list = document.querySelector('header .ham-list')
const ham_list_cross = document.querySelector('.ham-list .cross')

// 漢堡選單 點開啟選單條
ham.addEventListener('click', () => {
    ham_list.classList.add('left0')
})
// 點x關閉選單條
ham_list_cross.addEventListener('click', () => {
    ham_list.classList.remove('left0')
})


const buy_ticket = document.querySelector('.navbar .buy-ticket a')
// 桌機 購票區域
// class改變底色和文字色
// append和prepend改變icon

buy_ticket.addEventListener('click', function () {
    if (this.classList.contains('bgClick')) {
        if (this.classList.contains('fontColor')) {
            this.classList.remove('bgClick');
            this.classList.remove('fontColor');
            this.innerHTML = `チケットを探す・購入する <i class="fas fa-angle-double-down" style="font-size:25px"></i>`;
            this.nextElementSibling.style.height = 0;
        }
    } else {
        this.classList.add('bgClick');
        this.classList.add('fontColor');
        this.innerHTML = `閉じる <i class="fas fa-angle-double-up" style="font-size:25px"></i>`;
        this.nextElementSibling.style.height = this.nextElementSibling.scrollHeight + 'px';
    }
})

const buy_ticket_mobile = document.querySelector('.buy-ticket-mobile a')
// 手機 購票區域
// class改變底色和文字色
// append和prepend改變icon

buy_ticket_mobile.addEventListener('click', function () {
    if (this.classList.contains('bgClick')) {
        if (this.classList.contains('fontColor')) {
            this.classList.remove('bgClick');
            this.classList.remove('fontColor');
            this.innerHTML = `<i class="fas fa-angle-double-down" style="font-size:25px"></i> チケットを探す・購入する <i class="fas fa-angle-double-down" style="font-size:25px"></i>`;
            this.nextElementSibling.style.height = 0;
        }
    } else {
        this.classList.add('bgClick');
        this.classList.add('fontColor');
        this.innerHTML = `<i class="fas fa-angle-double-up" style="font-size:25px"></i> 閉じる <i class="fas fa-angle-double-up" style="font-size:25px"></i>`;
        this.nextElementSibling.style.height = this.nextElementSibling.scrollHeight + 'px';
    }
})

const card_read = document.querySelectorAll('.pickup .read')
const card_return = document.querySelectorAll('.pickup .return')

// 活動卡片顯示
card_read.forEach((card)=>{
    card.addEventListener('click',function(){
        this.nextElementSibling.style.top = 0
        this.nextElementSibling.style.left = 0
    })
})

// 活動卡片隱藏
card_return.forEach((card)=>{
    card.addEventListener('click',function(){
        this.parentNode.style.top = '-100%'
        this.parentNode.style.left = '-100%'
    })
})


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
    // $(window).resize(function () {
    //     headerHide()
    // })

    // 螢幕滑動時觸發
    // $(window).scroll(function () {
    //     headerHide()
    // })

    // 桌機 螢幕滑動超過300 header隱藏 
    // header-wrap高度減少
    // 添加class
    // function headerHide() {
    //     if ($(window).width() > 992) {
    //         if ($(window).scrollTop() > 300) {
    //             $('header').addClass('t70');
    //             $('.navbar .logo').slideDown(300)
    //         } else {
    //             $('header').removeClass('t70');
    //             $('.navbar .logo').slideUp(300)
    //         }

    //         // 高度分開，預防header回來時上下跳動
    //         if ($(window).scrollTop() > 400) {
    //             $('.header-wrap').addClass('h70');
    //         } else {
    //             $('.header-wrap').removeClass('h70');
    //         }
    //     }

    // }

    // 手機 點擊叫出搜索框
    // $('.icon-mobile .search').on('click', function () {
    //     $('.small-search').addClass('left0');
    //     $('.small-search input').focus();
    // })

    // 點擊x關閉搜索框
    // $('.small-search .cross').on('click', function () {
    //     $('.small-search').removeClass('left0')
    // })

    // header的語言選擇區
    // 點擊添加class
    // $('.service div:nth-child(1)').on('click', function () {
    //     if ($(this).hasClass('border')) {
    //         $(this).removeClass('border');
    //         $('.service div ul').slideUp(200);
    //     } else {
    //         $(this).addClass('border');
    //         $('.service div ul').slideDown(200);
    //     }
    // })

    // 防止冒泡 否則點擊選單也會觸發父層的click
    // $('.service div:nth-child(1) .l-option').on('click', function (e) {
    //     e.stopPropagation();
    // })

    // 大搜索框
    // 判斷開關，預設為關閉
    // let searchOpened = false;
    // $('.icon-computer .search').on('click', function () {
    //     searchOpened = !searchOpened;
    //     if (searchOpened == true) {
    //         $('.big-search').addClass('flex').slideDown(200);
    //         $('.big-search input').focus();
    //     } else {
    //         $('.big-search').slideUp(200);
    //         $('.big-search input').blur();
    //     }
    // })

    // $('.navbar .left a').on('click', function () {

    // 如果點擊的a的父層有class bgClick 就關閉
    // 反之則打開
    //     if ($(this).closest('div').hasClass('bgClick') == true) {
    //         $(this).closest('div').removeClass('bgClick')
    //         $(this).siblings('.list').stop().slideUp(200);
    //     } else {
    //         $(this).closest('div').addClass('bgClick')
    //         $(this).siblings('.list').stop().slideDown(200);
    //         $(this).closest('div').siblings('div').removeClass('bgClick')
    //         $(this).closest('div').siblings('div').children('.list').stop().slideUp(200);
    //     }

    // })

    // 漢堡選單 點開啟選單條
    // $('.ham').on('click', function () {
    //     $('header .ham-list').addClass('left0')
    // })

    // 點x關閉選單條
    // $('.ham-list .cross').on('click', function () {
    //     $('.ham-list').removeClass('left0')
    // })

    // 點漢堡選單條裡的li就讓底下的單選紐圈選
    // $('.ham-list .language li').on('click', function () {
    //     $(this).find('input').prop('checked', true)
    // })

    // 桌機 購票區域
    // class改變底色和文字色
    // append和prepend改變icon
    // $('.navbar .buy-ticket a').on('click', function () {
    //     if ($(this).hasClass('bgClick fontColor') == true) {
    //         $(this).removeClass('bgClick fontColor')
    //         $(this).siblings('.list').stop().slideUp(200);
    //         $(this).text('チケットを探す・購入する')
    //         $(this).append('<i class="fas fa-angle-double-down" style="font-size:25px"></i>')

    //     } else {
    //         $(this).addClass('bgClick fontColor')
    //         $(this).siblings('.list').stop().slideDown(200);
    //         $(this).text('閉じる')
    //         $(this).append('<i class="fas fa-angle-double-up" style="font-size:25px"></i>')
    //     }
    // })

    // 手機 購票區域
    // class改變底色和文字色
    // append和prepend改變icon
    // $('.buy-ticket-mobile a').on('click', function () {
    //     if ($(this).hasClass('bgClick fontColor') == true) {
    //         $(this).removeClass('bgClick fontColor')
    //         $(this).siblings('.list').stop().slideUp(200);
    //         $(this).text('チケットを探す・購入する')
    //         $(this).append('<i class="fas fa-angle-double-down" style="font-size:25px"></i>')
    //         $(this).prepend('<i class="fas fa-angle-double-down" style="font-size:25px"></i>')

    //     } else {
    //         $(this).addClass('bgClick fontColor')
    //         $(this).siblings('.list').stop().slideDown(200);
    //         $(this).text('閉じる')
    //         $(this).append('<i class="fas fa-angle-double-up" style="font-size:25px"></i>')
    //         $(this).prepend('<i class="fas fa-angle-double-up" style="font-size:25px"></i>')
    //     }
    // })

    // pickup item右下角的翻頁按紐
    // $('.pickup .read').on('click', function () {
    //     $(this).siblings('.back').show(300)
    // })

    // pickup back右下角的返回按紐
    // $('.pickup .return').on('click', function () {
    //     $(this).closest('.back').hide(300)
    // })



})