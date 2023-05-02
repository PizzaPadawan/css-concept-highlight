$(document).ready(readyNow);

function readyNow(){
    $("p").hide();
    $(".neat").on('click', neatShadow);
    $(".rad").on('click', radShadow);
    $(".totally").on('click', totallyShadow);
}

function neatShadow(){
    $(".neat").css("text-shadow", "2px 2px 10px indigo, -2px -2px 2px teal");
    $(".neatExplain").show();
}

function radShadow(){
    $(".rad").css("text-shadow", "-1px 1px black");
    $(".radExplain").show();
}

function totallyShadow(){
    $(".totally").css("text-shadow", "orangered 1px 0 10px");
    $(".totallyExplain").show();
}
