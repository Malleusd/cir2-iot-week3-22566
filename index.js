const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => { 
    return res.status(200).json({ msg:"Hello World!!" })
});

app.get('/about',(req,res) => {
    return res.status(200).json({msg:"About page"})
}) ;

app.get('/admin',(req, res) =>{
    return res.status(200).json({msg: "Admin page"})
});

app.listen(port, () => {
    console.log(`Server runing at http://localhost:${port}`)
});
