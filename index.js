const express = require("express");
const mongo = require('./shared/connect');
const bookRouter = require("./Router/bookRouter");



const app = express();


app.use(express.json());
mongo.connect();

app.use('/book', bookRouter);

const port = process.env.PORT || 3000
app.listen(port, function(){

    console.log("Server started successfully");

});

// app.set('port', (process.env.PORT || 3005));
// app.listen(app.get('port'), function() {
//     console.log('Server started on port '+app.get('port'));
// });