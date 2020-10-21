const express = require('express');
const app = express();
const router = express.Router()
const bodyParser = require('body-parser');
const validator = require('validatorjs');
const config = require('./static/config');


// routes
const isAliveRouter = require('./routes/is-alive-route');
const TrashBinApi = require('./api/trash-bin-api')
const trashBinRouter = require('./routes/trash-bin-route');
const routes = require('./routes/routes');

// config
const PORT =  3000

// utils
const Client = require('./utils/client');
const RedisClient  =require("./utils/redis-client")


initServer()
uncaughtErrorHandler()

 app.listen(config.servicePort,()=>{
    console.log(`app listening on port ${config.servicePort}`)
 })

 function initServer (){
    // init
     const client = new Client(config.clientSettings.baseSettings);
     const redisClient = new RedisClient(config.redisClientSettings);
     const trashbinApi = new TrashBinApi( client);

    app.use(bodyParser.json());
    app.use('/api',routes(router, isAliveRouter(router),
    trashBinRouter(router,redisClient,trashbinApi,config.clientSettings.urlEnding)));
}

function uncaughtErrorHandler (){
    process.on('uncaughtException', (err) => {
        console.log(err)
    })
}