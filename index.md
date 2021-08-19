<html>
<head>
</head>
<body>
  <h1>You have <span id="clicks">0</span> clicks.</h1>
  <button type="button" onclick="addClicks(1)">Click me!</button>
  <button type="button" onclick="addMultiplier(1)">Buy click multiplier!</button>
  <script>
    
    
    
    var multiplier = 1;
     if (clicks => 15) {
    function addMultiplier(amount) {
      multiplier = multiplier + amount;
    
    }
    
  }  
    
    
    var clicks = 0;
    
    function addClicks(amount) {
      clicks = clicks + amount * multiplier;
      document.getElementById("clicks").innerHTML = clicks;
   }
    
  </script>
</body>
</html>
