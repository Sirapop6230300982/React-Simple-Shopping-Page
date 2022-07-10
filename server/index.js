const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const e = require("express");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "house",
});

app.get("/book", (req, res) => {
  db.query("SELECT * FROM book", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/book", (req, res) => {
  const telephone = req.body.telephone;
  const firstname = req.body.firstname;
  const surname = req.body.surname;
  const address = req.body.address;
  const email = req.body.email;
  const theorderlist = req.body.theorderlist;
  const theprice = req.body.theprice;

  db.query(
    "INSERT INTO book (tel, fname, sname, address, email, orderlist, prices) VALUES(?,?,?,?,?,?,?)",
    [telephone, firstname, surname, address, email, theorderlist, theprice],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(
          telephone +
            firstname +
            surname +
            address +
            email +
            theorderlist +
            theprice
        );
        res.send("Value Inserted");
      }
    }
  );
});

app.listen("3001", () => {
  console.log("Server is running on port 3001");
});
