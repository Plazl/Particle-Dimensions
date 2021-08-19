<html>
<head>
</head>
<body>
  <h1>You have <span id="clicks">0</span> clicks.</h1>
  <button type="button" onclick="addClicks(1)">Click me!</button>
  <button type="button" onclick="addAutoClicker(1)">Buy an autoclicker!<span id+clickerCost>150</span></button>
  <h2>You have <span id=clickers>0</span> clickers.</h2>
  <script>

     var clicks = 0;
    
    var clickerCost = 150;
    
    var clickers = 0;
    
    function buyClickers(amount) {
      if (clicks >= clickerCost) {
       clicks = clicks - clickerCost;
       clickers = clickers + 1
      
    
      document.getElementById("clicks").innerHTML = clicks;
      document.getElementById("clickerCost").innerHTML = clickerCost;
      document.getElementById("clickers").innerHTML = clickers;
    }
 
 }
    
    function addClicks(amount) {
      clicks = clicks + amount;
      document.getElementById("clicks").innerHTML = clicks;
   }
    
    setInterval(function() {
     clicks = clicks + clickers
     document.getElementById("clicks").innerHTML = clicks;
    }, 1000)  //1000ms is 1 second
 </script>
</body>
</html>
