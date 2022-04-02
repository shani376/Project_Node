const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./app/routs/user.route')
const lossesRouter=require('./app/routs/losses.route')
const findesRouter=require('./app/routs/findes.route')
const categoryRouter=require('./app/routs/category.route')
const mongoose  = require('mongoose');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use('/users', userRouter);
app.use('/losses',lossesRouter);
app.use('/findes',findesRouter);
app.use('/category',categoryRouter);
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const connectDB = () => {
    mongoose.connect(`mongodb://localhost:27017/OurSiteDataBase`, connectionParams)
        .then(() => {
            console.log('MongoDB Connection Succeeded.');
        })
        .catch((error) => {
            console.log('Error in DB connection: ' + error)
        });
}

connectDB();
app.listen(5000, function() {
    console.log('listening on 5000')
})
