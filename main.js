     var hasClickers = false;

     var x = 0;

     var y = 0;

     var z = 0;
    
     var clicks = 10;
    
    var clickerCost = 150;
    
    var clickers = 0;
    
    var multiplier = 1;
    
    var multiplierCost = 100;

     

     
      document.getElementById("mult").innerHTML = multiplier;
     document.getElementById("clicks").innerHTML = Math.round(clicks);
     
     
   
 //click adder
function addClicks(amount) {

 clicks = clicks + amount * multiplier;
     
  }
//upgrade menu
     
//multiplier


if (clicks >= multiplierCost) {
    function buyMult() {

    var clicks = clicks - multiplierCost;
    var multiplierCost = multiplierCost * 1.5;
    var multiplier = multiplier + 1; 
    document.getElementById("multPrice").innerHTML = Math.round(multiplierCost);
    document.getElementById("multiplier").innerHTML = multiplier
 
     
  }

}
//clicker


if (clicks >= clickerCost) {
    function buyClicker() {

    var clicks = clicks - clickerCost;
    var clickerCost = clickerCost * 1.5;
    var clickers = clickers + 1; 
    var hasClickers = true;
    var t = t - 0.5;
    document.getElementById("clickerCost").innerHTML = Math.round(clickerCost);
    document.getElementById("clickers").innerHTML = clickers;
  
 
          
    
 
        
  }

}



     setInterval(updater, 100);
     function updater() {
      document.getElementById("clicks").innerHTML = clicks;
     }
  
   





