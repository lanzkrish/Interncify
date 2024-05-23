loadingstr=`<div class="wrapper-loader">
<div class="boxes">
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
</div>`

document.getElementById('loader').innerHTML=loadingstr;

$(window).on("load",function(){
    //$(".wrapper-loader").fadeOut("slow")
    // document.querySelectorAll(".wrapper-loader").style.display = "none"
    $(".wrapper-loader").css("display","none");
});