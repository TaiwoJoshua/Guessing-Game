function myFunction(){
    var secret = 8;
    var guess = document.getElementById('number').value;

        if(secret < guess){
            document.getElementById('number').style.borderColor =  "red"; 
            document.getElementById('high').style.display =  "block";
        }
        else if(secret > guess){
            document.getElementById('number').style.borderColor =  "red"; 
            document.getElementById('low').style.display =  "block";
        } else{
        document.getElementById('number').style.borderColor =  "green";
        document.getElementById('right').style.display =  "block"; 
        }
    };

function yourFunction(){
    location.reload();
};

function displayFunction(){
    document.getElementById('nodisplay').style.display = "none";
    document.getElementById('displayblock').style.display = "block";
    document.getElementById('ready').style.display = "block";
    setTimeout(() => ready.remove(), 1500);
    
}
function noFunction(){
    document.getElementById('whyno').style.display = "block";
}