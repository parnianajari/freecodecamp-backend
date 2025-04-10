require("dotenv").config();
const bodyParser = require("body-parser");
let express = require("express");
let app = express();

// //**Meet the Node console**
// console.log("Hello world");

// //**Start a Working Express Server**
// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

// //**Serve an HTML File**
// app.get("/", (req, res) => {
//   res.sendFile(`${__dirname}/views/index.html`);
// });

// //**Serve Static Assets**
// app.use(express.static(__dirname + "/public"));

// //**Serve JSON on a Specific Route**
// app.get("/json", (req, res) => {
//   res.json({
//     message: "Hello json",
//   });
// });

// //**Use the .env File**
// app.get("/json", (req, res) => {
//   let message = "Hello json";

//   if (process.env.MESSAGE_STYLE === "uppercase") {
//     message = message.toUpperCase();
//   }

//   res.json({ message: message });
// });

// //**Implement a Root-Level Request Logger Middleware**
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.path} - ${req.ip}`);
//   next();
// });

// //**Chain Middleware to Create a Time Server**
// app.get(
//   "/now",
//   (req, res, next) => {
//     req.time = new Date().toString();
//     next();
//   },
//   (req, res) => {
//     res.json({ time: req.time });
//   }
// );

// //**Get Route Parameter Input from the Client**
// app.get("/:word/echo", (req, res) => {
//   const word = req.params.word;
//   res.json({ echo: word });
// });

// //**Get Query Parameter Input from the Client**
// app
//   .route("/name")
//   .get((req, res) => {
//     const firstName = req.query.first;
//     const lastName = req.query.last;
//     res.json({ name: `${firstName} ${lastName}` });
//   })
//   .post((req, res) => {
//     res.send("POST request received at /name");
//   });

// //**Use body-parser to Parse POST Requests**
// app.use(bodyParser.urlencoded({ extended: false }));

// app
//   .route("/name")
//   .get((req, res) => {
//     const firstName = req.query.first;
//     const lastName = req.query.last;
//     res.json({ name: `${firstName} ${lastName}` });
//   })
//   .post((req, res) => {
//     const firstName = req.body.first;
//     const lastName = req.body.last;
//     res.json({ name: `${firstName} ${lastName}` });
//   });

//   //**Get Data from POST Requests**
// app.use(bodyParser.urlencoded({ extended: false }));

// app.post("/name", (req, res) => {
//   const firstName = req.body.first;
//   const lastName = req.body.last;
//   res.json({ name: `${firstName} ${lastName}` });
// });

module.exports = app;
