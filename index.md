<html>
<head>
   <h2>You have <span id="clicks">0</span> clicks.</h2>
  <h3>You have <span id=clickers>0</span> clickers.</h3>
  <h4>You get <span id=mult>1</span> clicks per click.</h4>
   <style>
      
      h2 {
         position: center;    
      }
    
      .button1 {
               position: absolute;
   left: 50%;
   top: 50%; 
      background-color: #04AA6D;
  border: none;
  color: white;
  padding: 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
    border-radius: 100%;  
      }
      
       .button2 { 
      background-color: #04AA6D;
  border: none;
  color: white;
  padding: 14px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;

      }
      
        .button3 {
      background-color: #04AA6D;
  border: none;
  color: white;
  padding: 14px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  
      }
      
            .button4 { 
      background-color: #04AA6D;
  border: none;
  color: white;
  padding: 14px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  
      }
      
         #update { 
      background-color: #04AA6D;
  border: none;
  color: white;
  padding: 14px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 14px;
  margin: 4px 2px;
  
      }
       
      
   </style>
</head>
  <script>
     
     var hasStarted = false
     
     var interval = 1000;

     var clicks = 0;
    
    var clickerCost = 150;
    
    var clickers = 0;
    
    var multiplier = 1;
    
    var multiplierCost = 100
     
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
     var hasStarted  = true
     if (multiplierCost = 0)
         {
         var multiplierCost = 100
         document.getElementById("multiplierCost").innerHTML = Math.round(multiplierCost);
     }
     if (clickerCost = 0)
         {
          var clickerCost = 150
          document.getElementById("clickerCost").innerHTML = Math.round(clickerCost);
     }
      if (multiplier = 0)
          {
           var multiplier = 1
           document.getElementById("mult").innerHTML = multiplier;
     
     }
     
   }
     
  
     
               if (Number.isFinite(clicks))
     {
    function buyClickers(amount) {
      if (clicks >= clickerCost) {
       clicks = clicks - clickerCost;
       clickers = clickers + 1
       clickerCost = clickerCost * 1.05;
       interval = interval - 1;
      
    
      document.getElementById("clicks").innerHTML = Math.round(clicks);
      document.getElementById("clickerCost").innerHTML = Math.round(clickerCost);
      document.getElementById("clickers").innerHTML = clickers;
    }
 
 }
    
     function buyMultiplier(amount) {
      if (clicks >= multiplierCost) {
       clicks = clicks - multiplierCost;
       multiplier = multiplier + 1
       multiplierCost = multiplierCost * 1.05;
    
      document.getElementById("clicks").innerHTML = Math.round(clicks);
      document.getElementById("multiplierCost").innerHTML = Math.round(multiplierCost);
      document.getElementById("mult").innerHTML = multiplier;
      
    
    }
  }  
    
    function addClicks(amount) {
      clicks = clicks + amount * multiplier;
      document.getElementById("clicks").innerHTML = Math.round(clicks);
   }
    
  
   
     (function loop() {
       clicks = clicks + clickers * multiplier;
     document.getElementById("clicks").innerHTML = Math.round(clicks);
     //1000ms is 1 second
  setTimeout(loop, interval);
})();
     }
 </script>
   <body onload="load()" onbeforeUnLoad="return unLoadStuff">
      <button type="button" onclick="addClicks(1)" class="button button1">Click me!</button>
      <button type="button" onclick="buyClickers(1)" class="button button2">Buy an autoclicker for <span id="clickerCost">150</span> clicks</button>
      <button type="button" onclick="buyMultiplier(1)" class="button button3">Buy a click multiplier for <span id="multiplierCost">100</span> clicks</button>

   </body>
   
   <body>
       <button type="button" class="button button4">Save</button>
      <a id="update">Press this if game wont update</a>
      <script>

   
        while (hasStarted = true) {
         
               document.getElementById("multiplierCost").innerHTML = Math.round(multiplierCost);
      document.getElementById("mult").innerHTML = multiplier;
     document.getElementById("clicks").innerHTML = Math.round(clicks);
     document.getElementById("clickerCost").innerHTML = Math.round(clickerCost);
     document.getElementById("clickers").innerHTML = clickers;
      document.getElementById("update").style.display = "none";
          localStorage.setItem('clicks', JSON.stringify(clicks));
            localStorage.setItem('multiplier', JSON.stringify(multiplier));
            localStorage.setItem('clickers', JSON.stringify(clickers));
            localStorage.setItem('clickerCost', JSON.stringify(clickerCost));
            localStorage.setItem('multiplierCost', JSON.stringify(multiplierCost));
         }
         function unLoadStuff {
            localStorage.setItem('clicks', JSON.stringify(clicks));
            localStorage.setItem('multiplier', JSON.stringify(multiplier));
            localStorage.setItem('clickers', JSON.stringify(clickers));
            localStorage.setItem('clickerCost', JSON.stringify(clickerCost));
            localStorage.setItem('multiplierCost', JSON.stringify(multiplierCost));
         }
           
       
      </script>
   </body>
</html>
