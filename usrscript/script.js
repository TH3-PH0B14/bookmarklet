javascript:(function() {
    var htmlpop = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Usr.Script</title>
          <!-- put the github style sheet -->
          <style>
            * {
    margin: 0;
    padding: 0;
}

body {
    background-color: #222222;
}

.ascii-art-container {
    display: flex;
    font-weight: 1000;
    color: rgb(183, 43, 55);
    justify-content: center;
}  

.more-text-info {
    width: 100%;
    display: flex;
    justify-content: center;
    font-family: 'Courier New', Courier, monospace;
    color: rgb(206, 67, 77);
    margin-bottom: 20px;
}

.content-js-code{
    width: 100%;
    height: fit-content;
}

.text-js-fr{
    width: 100%;
    display: flex;
    justify-content: center;
}

#jsTextarea {
    width: 90%;
    height: 50vh;
    padding: 10px;
    max-width: 90%;
    resize: vertical;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: 2px solid grey;
    outline: none;
    color: rgb(198, 198, 198);
    background-color: #2b2b2b;
}

#errorBox-js{
    width: 90%;
    min-height: 50px;
    height: fit-content;
    padding: 10px;
    margin: 0 auto;
    margin-top: 10px;
    color: red;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 2px solid grey;
    outline: none;
    background-color: #2b2b2b;
}

.btn-js-code{
    width: 100%;
    display: flex;
    margin-top: 10px;
    justify-content: center;
    gap: 10px;
}

.btn-js-code button{
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    font-family: 'Courier New', Courier, monospace;
}
          </style>
      </head>
      <body>
          <div class="ascii-art-container">
              <pre>
    __  __          ____        _      __  
   / / / /__ ____  / __/_______(_)__  / /_ 
  / /_/ (_&lt;_/ __/ _\\ \\/ __/ __/ / _ \\/ __/ 
  \\____/___/_/ (_)___/\\__/_/ /_/ .__/\\__(_)
                              /_/          
              </pre>
          </div>    
          <div class="more-text-info">
              <h3>Usr.Script</h3>
          </div>  
            
          <div class="content-js-code">
      
              <div class="text-js-fr">
                  <textarea id="jsTextarea"></textarea>
              </div>
      
              <div class="btn-js-code">
                  <button onclick="executeCode()">Run</button>
                  <button onclick="clearCode()">Clear Console</button>
                  <button onclick="clearError()">Clear Errors</button>
              </div>
              <div id="errorBox-js">
              </div>
          </div>
      </body>
      </html>
    `;
    
    var popupWindow = window.open('', '_blank', 'width=400,height=700');
    popupWindow.document.write(htmlpop);
    
    popupWindow.executeCode = function() {
      var code = popupWindow.document.getElementById('jsTextarea').value;
      try {
        eval(code);
      } catch (error) {
        console.error(error);
        popupWindow.document.getElementById('errorBox-js').innerHTML += error + "<br>";
      }
    };
  
    popupWindow.clearCode = function() {
      popupWindow.document.getElementById('jsTextarea').value = '';
    };
  
    popupWindow.clearError = function() {
      popupWindow.document.getElementById('errorBox-js').innerHTML = '';
    };
  })();
  
