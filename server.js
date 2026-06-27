require('dns').setServers(['8.8.8.8', '8.8.4.4']);
const dotenv = require('dotenv')
const express = require('express');
const mongoose = require('mongoose');
const app = express();
dotenv.config();

console.log('PORT:', process.env.PORT);      
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;
const router = require('./routes/reviewRoutes');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());
app.use('/reviews', router);
app.use( (req,res)=> {
    res.status(404).json({error: `Route ${req.method} ${req.originalUrl} not found`});
});
app.use(errorHandler); 

mongoose.connect(MONGODB_URI)
    .then(() => app.listen(PORT, () => console.log(`Database connected and sever launched in port ${PORT}`)))
    .catch((error) => console.log("Connection failed, ", error));


