require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');


const port = 3000;
const app = express();
//para aceitar json;
app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", (err) => console.log(err));
db.once("open", () => {
  console.log("Database connected");
});



const subscribersRouters = require("./routes/subscribers")
app.use('/subscribers',subscribersRouters);



app.listen(port, async () => {
  console.log("Server rodando!!");
  console.log(`Servidor disponível na porta: ${port}`);
});
