secrets = Math.floor(Math.random() *4) +2;
function displayFunction(){
    document.getElementById('displayblock').style.animationIterationCount = secrets;
    document.getElementById('nodisplay').style.display = "none";
    document.getElementById('displayblock').style.display = "block";
    document.getElementById('ready').style.display = "block";
    document.getElementById('whyno').style.display = "none";
    setTimeout(() => ready.remove(), 1500);
    
}

function myFunction(){
    var secret = secrets * 2;
    var guess = document.getElementById('number').value;
        if(guess == ""){
            document.getElementById('number').style.borderColor =  "red"; 
            document.getElementById('none').style.display =  "block";
            document.getElementById('high').style.display =  "none";
            document.getElementById('low').style.display =  "none";
            document.getElementById('right').style.display =  "none";
        }else if(secret < guess){
            document.getElementById('number').style.borderColor =  "red"; 
            document.getElementById('high').style.display =  "block";
            document.getElementById('none').style.display =  "none";
            document.getElementById('low').style.display =  "none";
            document.getElementById('right').style.display =  "none";
        }
        else if(secret > guess){
            document.getElementById('number').style.borderColor =  "red"; 
            document.getElementById('low').style.display =  "block";
            document.getElementById('high').style.display =  "none";
            document.getElementById('none').style.display =  "none";
            document.getElementById('right').style.display =  "none";
        }else{
            document.getElementById('number').style.borderColor =  "green";
            document.getElementById('right').style.display =  "block"; 
            document.getElementById('high').style.display =  "none";
            document.getElementById('low').style.display =  "none";
            document.getElementById('none').style.display =  "none";
        }
    };

function yourFunction(){
    location.reload();
};

function noFunction(){
    document.getElementById('whyno').style.display = "block";
}