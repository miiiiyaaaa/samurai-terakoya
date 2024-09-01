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
        if ($(window).scrollTop()) {
            $('#topBtn').css('display','inline');
        }
    });

    //Topに戻るを押したとき
    $('#topBtn').on('click', function () {
        $(this).css('display','none');
    });

});

