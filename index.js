// root file 

// require gets access to express library
const express = require('express'); 
// generates new express application
const app = express();

app.get('/', (req,res) =>{
    res.send({naz: "wright"});
}
);
// should not be changed lightly
// dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);

// host name 
// https://cryptic-plateau-14392.herokuapp.com/
// git repo deployment target 
// https://git.heroku.com/cryptic-plateau-14392.git

