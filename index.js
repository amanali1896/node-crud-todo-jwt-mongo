import express from 'express'; 
import routes from './src/routes/taskRoutes';
import jsonwebtoken from 'jsonwebtoken';
import user from './src/models/userModel';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


const app = express();   
        
const PORT = 8080;   
//  connection for mongoose 
mongoose.Promise = global.Promise; //means we will wait for a result
                                    //similar to javascript promises
mongoose.connect('mongodb://localhost/ToDodb', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

// setup for bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

// setup for JWT
app.use((req, res, next) => { // verifying the authenticity of the user. 
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
       jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', (err, decode) => {
           if (err) req.user = undefined;
           req.user = decode;
           next();
       }); 
    } else {
        req.user = undefined;
        next();
    }
});


routes(app);

app.get('/', (req, res) =>
    res.send('server is now running') 
);

app.listen(PORT, () =>
console.log('application is now running')
);
