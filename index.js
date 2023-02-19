const app = require("express")();

app.get("/", (req,res)=>{
    res.send("success!");
    value=100;
});

app.listen(8000, ()=>{
    console.log("app is live in 8000");
})