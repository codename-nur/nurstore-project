const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//koneksi database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "papilio",
    database: "nurstore"
});

db.connect(err => {
    if(err) throw err;
    console.log("Koneksi Berhasil");
});

//Get products

app.get("/products", (req,res) =>{
    db.query("SELECT * FROM products", (err,result)=>{
        if (err) return res.send(err);
        res.json(result);
    });
});

//Add products

app.post("/products",(req, res)=>{
    const {name, price, stock, image} = req.body;

    db.query(

        "INSERT INTO products(name, price, stock, image) VALUES (?,?,?,?)",
        [name, price, stock, image],
        (err) => {
            if(err) return res.send(err);
            res.send("Produk berhasil masuk");
        }
    );
});

app.listen(1507, () => console.log("Server jalan di port 1507"));