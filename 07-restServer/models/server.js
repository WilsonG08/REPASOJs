const express = require('express');
const cors = require('cors');

class Server{

    constructor(){
        this.app  = express();
        this.port = process.env.PORT;
        
        // Middleware
        this.middlewares();


        // Rutas de mi aplicacion

        this.routes();
    }

    middlewares(){

        // CORS
        this.app.use( cors());

        // Dirrectorio Publico
        this.app.use( express.static('public') )

    }

    routes(){
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'get API'
            });
        });
        this.app.put('/', (req, res) => {
            res.json({
                msg: 'put API'
            });
        });
        this.app.post('/', (req, res) => {
            res.status(201).json({
                msg: 'post API'
            });
        });
        this.app.delete('/', (req, res) => {
            res.json({
                msg: 'delete API'
            });
        });
    }

    listen(){
        this.app.listen( this.port, () =>{
            console.log('Servidor corriendo en el puerto', this.port);
        } )
    }


}

module.exports = Server;