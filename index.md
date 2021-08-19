<html>
<head>
</head>
<body>
  <h1>You have <span id="clicks">0</span> clicks.</h1>
  <button type="button" onclick="addClicks(1)">Click me!</button>
  <script>

     var clicks = 0;
    function addClicks(amount) {
      clicks = clicks + amount;
      document.getElementById("clicks").innerHTML = clicks;
   }
  </script>
</body>
</html>
