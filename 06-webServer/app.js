const express = require('express')
const app = express()

// Servir contenido estatico
app.use( express.static('public') );

const port = 8080;


app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectica ruta');
})

// Te da el error 404 
app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html');
})

app.listen(port, () =>{
    console.log(`Server ok on http://localhost:${port}`);
})

