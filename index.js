
var fishTotal = 0;
var multiplier = 1;

window.setInterval(automaticFishing,1000)

function goFish(){
    fishTotal++;
    document.getElementById('fishCounter').innerText = fishTotal;
    document.getElementById('pointsPopUp').classList.toggle("show");
    
    


}

function automaticFishing(){
    
    // document.getElementById('water').click();
    fishTotal++;
    document.getElementById('fishCounter').innerText = fishTotal;

}

function popUpFunction(){
    var popup = document.getElementById('pointsPopUp');
    popup.classList.toggle("show");
    
}
