
const swaggerJsDoc = require('swagger-jsdoc');
// change all text to config
const swaggerOption ={
    swaggerDefinition: {
      info:{
        version:"1.0.0",
        title:"poc Proj",
        description:"info",
        contact:{
          name:"Oriel"
        }
      }
    },
    //change to relativ path
    apis:["./api/*"]
  }
  const swaggerDocs = swaggerJsDoc(swaggerOption);
  module.exports = swaggerDocs; 
