
var fishTotal = 0;
var multiplier = 1;
var fishPerSecond = 1;

var uppgradeCostOneFish = 5; 
var uppgradeCostFiveFish = 10; 

window.setInterval(automaticFishing,600)


function goFish(){
    fishTotal ++;
    document.getElementById('fishCounter').innerText = fishTotal;
    


}

function automaticFishing(){
    
    // document.getElementById('water').click();
    fishTotal += multiplier;
    document.getElementById('fishCounter').innerText = fishTotal;
    getfps();
}

function uppgrade(){
    if(fishTotal > uppgradeCostOneFish){
        fishPerSecond += 1
        multiplierFormula(1);
        fishTotal = fishTotal - uppgradeCostOneFish;
        uppgradeCostOneFish += uppgradeCostOneFish;
    }
    document.getElementById('uppgradebtnDescription').innerText = "cost " + uppgradeCostOneFish + " + 1 Fish"
   
}

function uppgradePlusTen(){
    if(fishTotal > uppgradeCostFiveFish){
        fishPerSecond += 5
        multiplierFormula(5)
        fishTotal = fishTotal - uppgradeCostFiveFish;
        uppgradeCostFiveFish += uppgradeCostFiveFish;
        document.getElementById('uppgradebtnDescription2').innerText = "cost " + uppgradeCostFiveFish + " + 5 Fish"
    }
   
}

function getfps(){

    document.getElementById('fps').innerText = fishPerSecond
}

function multiplierFormula(input){
    multiplier = multiplier + input
}


