$(function () {

    //カルーセル
    $('.carousel').slick ({
    autoplay: true,
    dots: true,
    fade: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,

    });

    //ナビゲーションボタンのホバー
    $('.menu').on('mouseover',function () {
        $(this).animate({
            opacity: 0.5
        },100);
    });

    $('.menu').on('mouseout',function () {
        $(this).animate({
            opacity: 1.0
        },100);
    });

    //スクロールしたときの処理
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('#topBtn').css('display','inline');
        } else {
            $('#topBtn').css('display','none');
        }
    });
 
    //Topに戻るを押したとき
    $('#topBtn').on('click', function () {
        $(this).css('display','none');
    });

    //ページ内リンクをクリックしたときのスクロール
    $('a[href^="#"]').on('click', function () {
        const href = $(this).attr("href");
        const target = $(href == "#" || href == "" ? 'html' : href);
        const position = target.offset().top;
        const speed = 500;

        $("html,body").animate({scrollTop:position}, speed,"swing");
        return false;
    });

    //フェードインさせる
    $(window).on('scroll',function () {
        $('section').each(function() {
            const position = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const wH = $(window).height();
            if (scroll > position - wH + 100) {
                $(this).addClass('scroll');
            } 
            
        });
    
    });

    //モーダル
    $('#umi').on('click',function () {
        const sRc = $(this).attr("src");
        const aLt = $(this).attr("alt");
        $('#umiModal').attr({
            src: sRc,
            alt: aLt,
        });
        $('.modal').fadeIn();
    });

    //モーダルの閉じるボタン
    $('#close').on('click',function() {
        $('.modal').fadeOut();
    });

});

