const express = require('express');
const path = require('path');
const os = require('os');

const app = express();

app.get('/', (req, res) => {
  text = os.hostname+"<br>"
        +process.env.APP_VERSION+"<br>"
  
  int = os.networkInterfaces()['eth0']
  for (var el in int){
    adress = int[el]
    if(adress.family == 'IPv4'){
      text += adress.address+"<br>"
    }
  }

  res.send(text)

});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
