/*----------返回頂部----------*/
$(function () {
    $(".showintro").scroll(function () {
        if ($(this).scrollTop() > 5) {
            $('#backtotop').stop().animate({ bottom: "20px" });
        }
        else {
            $('#backtotop').stop().animate({ bottom: "-65px" });
        }
    }).scroll();
    $('#backtotop').click(function () { $('.showintro').animate({ scrollTop: $('.showintro').offset().top }, 800); });
});

/*----------介紹頁面----------*/
$(document).ready(function () {
    $('.showintro').hide();
    $('.closeBtn1').click(function (event) {
        $('.showintro').fadeOut();
    });
    $('.closeBtn2').click(function (event) {
        $('.showintro').fadeOut();
    });
    for (var i = 1; i <= 4; i++) {
        var mydiv = $('.search_content' + i);
        var myimg = document.getElementsByTagName("img");
        $(myimg[i]).attr('src', 'assets/im/A' + i + '.jpg');
        $(mydiv).click(function (event) {
            var divclass = $(this).attr('id')
            var url = '.' + divclass + ' img';
            var bg = $(url).attr('src');
            $('.INTRO img').attr('src', bg);
            $('.showintro').fadeIn();
        });
    }
    $(function () {
        $('#backtotop').click(function () { $('html,body').animate({ scrollTop: '0'.offset().top }, 800); });
    });
});

// $("#AAA").click(function () {
//     document.getElementById("singin").style.display = "none";
//     document.getElementById("singout").style.display = "block";

// });

function change1() {
    document.getElementById("singin").style.display = "none";
    document.getElementById("singout").style.display = "block";
}
function change2() {
    document.getElementById("singin").style.display = "block";
    document.getElementById("singout").style.display = "none";
}