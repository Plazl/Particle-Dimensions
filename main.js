 var game = {t: 1000,
     
      framerate: 100,
   
      clicks: 10,
    
     clickerCost: 150,
    
     clickers: 0,
    
     multiplier: 1,
    
     multiplierCost: 100}

     function loadSave() {
     var savedGame = JSON.parse(localStorage.getItem("gameSave"))
     if (typeof savedGame.hasStarted !== "undefined") {
     	       if (typeof savedGame.clicks !== "undefined") game.clicks = savedGame.clicks;
	       if (typeof savedGame.multiplier !== "undefined") game.multiplier = savedGame.multiplier;
	       if (typeof savedGame.multiplierCost !== "undefined") game.multiplierCost = savedGame.multiplierCost;
	       if (typeof savedGame.clickers !== "undefined") game.clickers = savedGame.clickers;
	       if (typeof savedGame.clickerCost !== "undefined") game.clickerCost = savedGame.clickerCost;
	       if (typeof savedGame.clickerCost !== "undefined") game.t = savedGame.t;
        }
              
     }

     
      document.getElementById("mult").innerHTML = game.multiplier;
      document.getElementById("multPrice").innerHTML = Math.round(game.multiplierCost);
      document.getElementById("clickers").innerHTML = game.clickers;
      document.getElementById("clickerPrice").innerHTML = Math.round(game.clickerCost);
      document.getElementById("clicks").innerHTML = Math.round(game.clicks);
     
     
   
 //click adder
function addClicks() {

 game.clicks = game.clicks + 1 * game.multiplier;
     
  }
 const hasStarted = true;

//upgrade menu
     
//multiplier



    function buyMult() {
          if (game.clicks >= game.multiplierCost) {
               
    game.clicks = game.clicks - game.multiplierCost;
     game.multiplierCost = game.multiplierCost * 1.5;
     game.multiplier = game.multiplier + 1; 
    document.getElementById("multPrice").innerHTML = Math.round(game.multiplierCost);
    document.getElementById("mult").innerHTML = game.multiplier
 
     
  }

}
//clicker



    function buyClicker() {
         if (game.clicks >= game.clickerCost) {
         
     game.clicks = game.clicks - game.clickerCost;
     game.clickerCost = game.clickerCost * 1.5;
     game.clickers = game.clickers + 1; 
     game.t = game.t - 0.5;
    document.getElementById("clickerPrice").innerHTML = Math.round(game.clickerCost);
    document.getElementById("clickers").innerHTML = game.clickers;
  
 
          
    
 
        
  }

}



     setInterval(updater, framerate);
     function updater() {
      document.getElementById("clicks").innerHTML = (convert(game.clicks));
      
  

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
 var game.convert = game.clicks => {
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
     clicks: game.clicks,
     clickers: game.clickers,
     clickerCost: game.clickerCost,
     multiplier: game.multiplier,
     multiplierCost: game.multiplierCost,
     t: game.t,
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
