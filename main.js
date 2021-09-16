     var hasClickers = false;

     var x = 0;

     var y = 0;

     var z = 0;
    
     var clicks = 0;
    
    var clickerCost = 150;
    
    var clickers = 0;
    
    var multiplier = 1;
    
    var multiplierCost = 100;

     
      document.getElementById("mult").innerHTML = multiplier;
     document.getElementById("clicks").innerHTML = Math.round(clicks);
     
     
   

function addClicks(amount) {

 clicks = clicks + amount * multiplier;
      var formattedClicks = clicks.toExponential(2);
      document.getElementById("clicks").innerHTML = formattedClicks;
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

function buyMult(amount) {

if (clicks >= multiplierCost) {


    var clicks = clicks - multiplierCost;
    var multiplierCost = multiplierCost * 1.5;
    var multiplier = multiplier + 1; 
    document.getElementById("multPrice").innerHTML = Math.round(multiplierCost);
    document.getElementById("multiplier").innerHTML = multiplier
    document.getElementById("clicks").innerHTML = Math.round(clicks);
     
  }

}

function buyClicker(amount) {

if (clicks >= clickerCost) {


    var clicks = clicks - clickerCost;
    var clickerCost = clickerCost * 1.5;
    var clickers = clickers + 1; 
    var hasClickers = true;
    var t = t - 0.5;
    document.getElementById("clickerCost").innerHTML = Math.round(clickerCost);
    document.getElementById("clickers").innerHTML = clickers;
    document.getElementById("clicks").innerHTML = Math.round(clicks);
 
          
    
 
        
  }

}


           // Timer
        var t = 1000;
 
        f1();
         
    
        function addClicks(){
         
             clicks = clicks + 1 * multiplier;
        }
         

        function f1() {
          if (hasClicker = true)
            addClicks();
            setTimeout(f1, t);
             document.getElementById("clicks").innerHTML = Math.round(clicks);
        }

    

 else {
 console.log("no")
  }
  

