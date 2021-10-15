 var game = {t: 1000,
     
      framerate: 100,
   
      clicks: 10,
    
     clickerCost: 150,
    
     clickers: 0,
    
     multiplier: 1,
    
     multiplierCost: 100} 

     function loadSave() {
     var game = JSON.parse(localStorage.getItem("game"))
     if (typeof game.hasStarted !== "undefined") {
     	       if (typeof game.clicks !== "undefined") game.clicks = game.clicks;
	       if (typeof game.multiplier !== "undefined") game.multiplier = game.multiplier;
	       if (typeof game.multiplierCost !== "undefined") game.multiplierCost = game.multiplierCost;
	       if (typeof game.clickers !== "undefined") game.clickers = game.clickers;
	       if (typeof game.clickerCost !== "undefined") game.clickerCost = game.clickerCost;
	       if (typeof game.clickerCost !== "undefined") game.t = game.t;
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
var convert = game.clicks => {
	    if (game.clicks < 1e3) return game.clicks;
	    if (game.clicks >= 1e3 && game.clicks < 1e6) return +(game.clicks / 1e3).toFixed(1) + "K";
	    if (game.clicks >= 1e6 && game.clicks < 1e9) return +(game.clicks / 1e6).toFixed(1) + "M";
	    if (game.clicks >= 1e9 && game.clicks < 1e12) return +(game.clicks / 1e9).toFixed(1) + "B";
	    if (game.clicks >= 1e12 && game.clicks < 1e15) return +(game.clicks / 1e12).toFixed(1) + "T";
            if (game.clicks >= 1e15 && game.clicks < 1e18) return +(game.clicks / 1e15).toFixed(1) + "Qa";
            if (game.clicks >= 1e18 && game.clicks < 1e21) return +(game.clicks / 1e18).toFixed(1) + "Qi";
            if (game.clicks >= 1e21 && game.clicks < 1e24) return +(game.clicks / 1e21).toFixed(1) + "Sx";
            if (game.clicks >= 1e24 && game.clicks < 1e27) return +(game.clicks / 1e24).toFixed(1) + "Sp";
            if (game.clicks >= 1e27 && game.clicks < 1e30) return +(game.clicks / 1e27).toFixed(1) + "Oc";
            if (game.clicks >= 1e30 && game.clicks < 1e33) return +(game.clicks / 1e30).toFixed(1) + "No";
            if (game.clicks >= 1e31) return game.clicks.toExponential(2);
		};


function saveGame() {
	localStorage.setItem("game", JSON.stringify(game));
}

setInterval(function() {
saveGame();
}, 10000);

window.onLoad = function() {
loadSave();
}
