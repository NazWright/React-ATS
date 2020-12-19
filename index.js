// root file 

// require gets access to express library
const express = require('express'); 
// generates new express application
const app = express();

app.get('/', (req,res) =>{
    res.send({hi: "there"});
}
);
// should not be changed lightly
// dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);

