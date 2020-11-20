const path = require('path')
const express = require('express')

const app = express()

app.use("/",express.static('dist'))
app.use("/build",express.static('build'))

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(3333,()=>{
	console.log('listen')
})