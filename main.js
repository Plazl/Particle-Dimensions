
     
     var interval = 1000;

     var clicks = 0;
    
    var clickerCost = 150;
    
    var clickers = 0;
    
    var multiplier = 1;
    
    var multiplierCost = 100;

     clicks = JSON.parse(localStorage.getItem('clicks'));;
      document.getElementById("mult").innerHTML = multiplier;
     document.getElementById("clicks").innerHTML = Math.round(clicks);
     
     
   

function addClicks(ammount) {

 clicks = clicks + ammount * multiplier
      document.getElementById("clickers").innerHTML = clicks;
  }
     
