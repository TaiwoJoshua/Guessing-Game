function myFunction(){
    var secret = 8;
    var guess = document.getElementById('number').value;

        if(secret < guess){
            // alert(guess + ' is too high, try again');
            document.getElementById('number').style.borderColor =  "red"; 
            document.getElementById('high').style.display =  "block"; 
        }
        else if(secret > guess){
            // alert(guess + ' is too low, try again');
            document.getElementById('number').style.borderColor =  "red"; 
            document.getElementById('low').style.display =  "block";
        } else{
            // alert('You guessed right');
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
    
}
function noFunction(){
    document.getElementById('whyno').style.display = "block";
}