secrets = Math.floor(Math.random() *4) + 2;
function again(){
    stopConfetti();
    $('#number').val("");
    $("#number").attr("readonly", false);
    $("#nodisplay, .canyou").show();
    $('#ready, #displayblock, .hello, #display, #submit').hide();
    secrets = Math.floor(Math.random() *4) + 2;
}

function displayFunction(){
    document.getElementById('displayblock').style.animationIterationCount = secrets;
    $('#ready, #displayblock').show();
    $('#whyno, #nodisplay, .canyou').hide();
    setTimeout(() => $("#ready").hide(), 1500);
    setTimeout(function(){
        $("#display").css("display", "flex");
        $("#submit").show();
    }, (2000 + (1000 * secrets)));
}

function myFunction(){
    var secret = secrets * 2;
    var guess = $('#number').val();
    $(".hello").hide();
    $("#number").attr("readonly", true);
    if(guess == ""){
        $('#number').css("border-bottom", "2px solid red"); 
        $('#none').show();
    }else if(secret < guess){
        $('#number').css("border-bottom", "2px solid red"); 
        $('#high').show();
    }
    else if(secret > guess){
        $('#number').css("border-bottom", "2px solid red"); 
        $('#low').show();
    }else{
        $('#number').css("border-bottom", "2px solid green"); 
        startConfetti();
        $('#right').show();
    }
};

function yourFunction(){
    $('#number').val("");
    $(".hello").hide();
    $('#number').css("border-bottom", "2px solid #04009A"); 
    $("#number").attr("readonly", false);
};

function noFunction(){
    $('#whyno').show();
}