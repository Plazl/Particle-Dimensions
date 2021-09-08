
     
     var interval = 1000;

     var clicks = 0;
    
    var clickerCost = 150;
    
    var clickers = 0;
    
    var multiplier = 1;
    
    var multiplierCost = 100;

  function load() {
    clicks = JSON.parse(localStorage.getItem('clicks'));
    multiplier = JSON.parse(localStorage.getItem('multiplier'));
    clickers = JSON.parse(localStorage.getItem('clickers'));
    clickerCost = JSON.parse(localStorage.getItem('clickerCost'));
    multiplierCost = JSON.parse(localStorage.getItem('multiplierCost'));
     document.getElementById("multiplierCost").innerHTML = Math.round(multiplierCost);
      document.getElementById("mult").innerHTML = multiplier;
     document.getElementById("clicks").innerHTML = Math.round(clicks);
     document.getElementById("clickerCost").innerHTML = Math.round(clickerCost);
     document.getElementById("clickers").innerHTML = clickers;
     
     
   }

function addClicks(ammount) {

 clicks = clicks + ammount * multiplier
      document.getElementById("clickers").innerHTML = clickers;
  }
     
