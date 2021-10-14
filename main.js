     var t = 1000;
     
     var something;

     var framerate = 100;
   
     var clicks = 10;
    
    var clickerCost = 150;
    
    var clickers = 0;
    
    var multiplier = 1;
    
    var multiplierCost = 100;

     function loadSave() {
     var savedGame = JSON.parse(localStorage.getItem("gameSave"))
     if (typeof savedGame.hasStarted !== "undefined") hasStarted = savedGame.hasStarted;
     	       if (typeof savedGame.clicks !== "undefined") clicks = savedGame.clicks;
	       if (typeof savedGame.multiplier !== "undefined") multiplier = savedGame.multiplier;
	       if (typeof savedGame.multiplierCost !== "undefined") multiplierCost = savedGame.multiplierCost;
	       if (typeof savedGame.clickers !== "undefined") clickers = savedGame.clickers;
	       if (typeof savedGame.clickerCost !== "undefined") clickerCost = savedGame.clickerCost;
	       if (typeof savedGame.clickerCost !== "undefined") t = savedGame.t;
              
     }

     
      document.getElementById("mult").innerHTML = multiplier;
      document.getElementById("multPrice").innerHTML = Math.round(multiplierCost);
      document.getElementById("clickers").innerHTML = clickers;
      document.getElementById("clickerPrice").innerHTML = Math.round(clickerCost);
      document.getElementById("clicks").innerHTML = Math.round(clicks);
     
     
   
 //click adder
function addClicks() {

 clicks = clicks + 1 * multiplier;
     
  }
 const hasStarted = true;

//upgrade menu
     
//multiplier



    function buyMult() {
          if (clicks >= multiplierCost) {
               
    clicks = clicks - multiplierCost;
     multiplierCost = multiplierCost * 1.5;
     multiplier = multiplier + 1; 
    document.getElementById("multPrice").innerHTML = Math.round(multiplierCost);
    document.getElementById("mult").innerHTML = multiplier
 
     
  }

}
//clicker



    function buyClicker() {
         if (clicks >= clickerCost) {
         
     clicks = clicks - clickerCost;
     clickerCost = clickerCost * 1.5;
     clickers = clickers + 1; 
     hasClickers = true;
     t = t - 0.5;
    document.getElementById("clickerPrice").innerHTML = Math.round(clickerCost);
    document.getElementById("clickers").innerHTML = clickers;
  
 
          
    
 
        
  }

}



     setInterval(updater, framerate);
     function updater() {
      document.getElementById("clicks").innerHTML = (convert(clicks));
      
  

   if (clickers >= 1) {
        setInterval(addClicks, t) 
   }

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    framerate = this.value;
  output.innerHTML = framerate;
  
}
     }
 var convert = clicks => {
	    if (clicks < 1e3) return clicks;
	    if (clicks >= 1e3 && clicks < 1e6) return +(clicks / 1e3).toFixed(1) + "K";
	    if (clicks >= 1e6 && clicks < 1e9) return +(clicks / 1e6).toFixed(1) + "M";
	    if (clicks >= 1e9 && clicks < 1e12) return +(clicks / 1e9).toFixed(1) + "B";
	    if (clicks >= 1e12 && clicks < 1e15) return +(clicks / 1e12).toFixed(1) + "T";
            if (clicks >= 1e15 && clicks < 1e18) return +(clicks / 1e15).toFixed(1) + "Qa";
            if (clicks >= 1e18 && clicks < 1e21) return +(clicks / 1e18).toFixed(1) + "Qi";
            if (clicks >= 1e21 && clicks < 1e24) return +(clicks / 1e21).toFixed(1) + "Sx";
            if (clicks >= 1e24 && clicks < 1e27) return +(clicks / 1e24).toFixed(1) + "Sp";
            if (clicks >= 1e27 && clicks < 1e30) return +(clicks / 1e27).toFixed(1) + "Oc";
            if (clicks >= 1e30 && clicks < 1e33) return +(clicks / 1e30).toFixed(1) + "No";
            if (clicks >= 1e31) return clicks.toExponential(2);
		};


function saveGame() {
   var gameSave = {
     clicks: clicks,
     clickers: clickers,
     clickerCost: clickerCost,
     multiplier: multiplier,
     multiplierCost: multiplierCost,
     t: t,
     hasStarted: hasStarted
   };
	localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

setInterval(function() {
saveGame();
}, 10000);

window.onLoad = function() {
loadSave();
}
