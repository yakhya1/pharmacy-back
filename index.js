const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routes/admins.router"));
app.use(require("./routes/users.router"));

mongoose.connect("mongodb+srv://gaitukaev777:IAKHia22@cluster0.xprg9jb.mongodb.net/pharmacy?retryWrites=true&w=majority")
.then(()=> console.log("MongoDB coonected"))
.catch(()=> console.log("ошибка при соединении с MongoDB"));


app.listen(4040, ()=> 
console.log("сервер запущен"));