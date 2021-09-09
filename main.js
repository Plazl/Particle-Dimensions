     var x = 0;

     var y = 0;

     var z = 0;
     
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
      document.getElementById("clicks").innerHTML = clicks;
  }
     function upgradeMenu() {
  var x = document.getElementById("main");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
           var y = document.getElementById("main1");
  if (y.style.display === "none") {
    y.style.display = "block";     
  } else {
    y.style.display = "none";

  }
          var z = document.getElementById("upgradestab");
  if (z.style.display === "block") {
    z.style.display = "none";
  } else {
    z.style.display = "block";

  }  
}

function buyMult {

if (clicks >= clickerCost) {


    var clicks = clicks - clickerCost;
    var clickers = clickers + 1; 
    document.getElementById("clickerCost").innerHTML = Math.round(clickerCost);
    document.getElementById("clickers").innerHTML = clickers;
  }

}

