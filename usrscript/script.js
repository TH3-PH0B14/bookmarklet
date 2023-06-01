javascript:(function() {
    var htmlpop = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Usr.Script</title>
          <link rel="stylesheet" href="https://raw.githubusercontent.com/TH3-PH0B14/bookmarklet/main/usrscript/style.css">
          <!-- put the github style sheet -->
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
  
