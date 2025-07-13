
const express = require("express");
const app = express();
app.use(express.json());

const userRoutes = require("./routes/userRoutes");

app.use("/usuarios",userRoutes)

app.listen(3000, ()=>{
    console.log("Servidor corriendo en http://localhost:3000");
})

