const swaggerAutogen =require('swagger-autogen')({openapi:'3.1.0'});

const doc ={
    info: {
        version:"1.0.0",
        title: "Lumina",
        description: "Tech Solutions"
    },

    servers: [
        {
            url: 'http://localhost:3000'
        }
    ],
};

const outputFile ='./swagger-output.json';
const endpointsFile = ['./index.js'];

swaggerAutogen(outputFile,endpointsFile, doc).then(() => {
    require('./');
});