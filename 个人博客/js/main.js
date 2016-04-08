$(document).ready(function(){
//    nav-li hover e
    var num;
    $('.nav-main>li[id]').hover(function () {
        var Obj = $(this).attr('id');
        num = Obj.substring(3, Obj.length);
        /*图标向上旋转*/
        //$("sp").attr("class", "hover-up");
        //$(this).children().removeClass().addClass('hover-up');
        $('#span-' + num).attr("class", "hover-up");
        /*下拉框出现*/
        
        $('#box-'+num).slideDown(300);
    },function(){
        /*图标向下旋转*/
        //$("sp").attr("class", "hover-down");
        //$(this).children().removeClass().addClass('hover-down');
        $('#span-' + num).attr("class", "hover-down");
        /*下拉框消失*/
        $('#box-'+num).hide();
    });
//    hidden-box hover e
    $('.hidden-box').hover(function(){
        /*保持图标向上*/
        //$("sp").attr("class", "hover-up");
        //$('#li-' + num).children().removeClass().addClass('hover-up');
        $('#span-' + num).attr("class", "hover-up");
        $(this).show();
    },function(){
        $(this).slideUp(200);
        //$("sp").attr("class", "hover-down");
        //$('#li-' + num).children().removeClass().addClass('hover-down');
        $('#span-' + num).attr("class", "hover-down");
    });
});
$(function () {
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 10) {
                $("#back-to-top").fadeIn(1500);
            }
            else {
                $("#back-to-top").fadeOut(1500);
            }
        });

        //当点击跳转链接后，回到页面顶部位置

        $("#back-to-top").click(function () {
            $('body,html').animate({ scrollTop: 0 }, 1000);
            return false;
        });
    });
});
