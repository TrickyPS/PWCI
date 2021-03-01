
$(document).ready(function(){

    
    $(".form1").hide();

    $("body").on("click",".navbar-toggler",function(){
        $(".navbar").addClass("abierto");
        if($(".navbar-collapse").hasClass("show")){
            $(".navbar").removeClass("abierto");
        }
    });

    $(window).on("scroll", function () {
        if($(this).scrollTop()>250){
            $(".navbar").addClass("transicion");
            $(".form1").show();
            $(".navbar-nav").removeClass("ml-auto");
        }
        else{
            $(".navbar").removeClass("transicion");
            $(".form1").hide();
            $(".navbar-nav").addClass("ml-auto");
        }
    });
});