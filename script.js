// // // const http = require("http");

// // // const data = {
// // //     status: "success",
// // //     message: "API working",
// // //     Name: "Ayush Chaudhari"

// // // };


// // // const server = http.createServer(function(req,res)
// // // {
// // //     if(req.url ==="/" && req.method === "GET")
// // //     {
// // //         res.end("Home Page");

// // //     }
// // //     else if (req.url ===("/about"))
// // //     {
// // //         res.end("Its about page");
// // //     }
// // //     else if( req.url === "/data")
// // //     {
// // //         res.setHeader("Content-Type","application/json");
// // //         res.end(JSON.stringify(data));
// // //     }
// // //     else {
// // //         res.statusCode = 404;
// // //         res.end("Page not found");
// // //     }
// // // });


// // // server.listen(5000, function()
// // // {
// // //     console.log("Server is running");
// // // });

// const http = require("http");
// const url = require("url");


// const server = http.createServer((req,res)=> {
//     const parsedUrl = url.parse(req.url,true);

//     const path = parseUrl.pathname;
//     const query = parsedUrl.quesry;
//       if (path === "/") {
//     res.end("Home Page");
//   }
//   else if (path === "/user") {
//     res.end(`User ID: ${query.id}`);
//   }
//   else {
//     res.statusCode = 404;
//     res.end("Route Not Found");
//   }

// })

// // // server.listen(5000, function()
// // // {
// // //     console.log("Server is running");
// // // });

// // const http = require("http");
// // const url = require("url");

// // const server = http.createServer((req, res) => {
// //   const parsedUrl = url.parse(req.url, true);

// //   const path = parsedUrl.pathname;
// //   const query = parsedUrl.query;

// //   if (path === "/") {
// //     res.end("Home Page");
// //   } 
// //   else if (path === "/user") {
// //     res.end(`User ID: ${query.id}`);
// //   } 
// //   else {
// //     res.statusCode = 404;
// //     res.end("Route Not Found");
// //   }
// // });

// // server.listen(5000, function () {
// //   console.log("Server is running");
// // });

// const express = require("express");
// const app = express();

// app.get("/",(req,res) => {
//     res.send("Welcome to Express");
// });
// app.get("/users", (req, res) => {
//     res.send("All users");
// });

// // POST request
// app.post("/users", (req, res) => {
//     res.send("User created");
// });

// // PUT request
// app.put("/users", (req, res) => {
//     res.send("User replaced");
// });

// // PATCH request
// app.patch("/users", (req, res) => {
//     res.send("User updated");
// });

// // DELETE request
// app.delete("/users", (req, res) => {
//     res.send("User deleted");
// });


// app.listen(5000, () => {
//     console.log("Express server running on port 3000");
// });

///*  */


// const express = require("express");
// const app = express();

// app.listen(PORT,()=> console.log("server start"))






// mongoose.connect("localhost:27017");
// const mongoose = require("mongoose");
// const userSchema = new mongoose({
//     firstName: {
//         type: String,
//         required: true,
//     },

// })

// const express = require("express");
// const mongoose = require("mongoose");


// const app = express();



// mongoose.connect('mongodb://localhost:27017/lemon');


// const UserSchema = mongoose.Schema({
//     name: String,
//     age: Number
// });

// const UserModel = mongoose.model("users",UserSchema);
// app.get("/user",(req,res)=>{
//     res.json(UserModel.find({}).then(function(users){
//         res.json(users);
//     })).catch(function(err)
// {
//     console.log(err);
// })
// });
// app.listen(5000, ()=> {
//     console.log("Server is Running");
// });
const path = require("path");
app.set("view engine", "ejs");
app.set('views',path.resolve("./views"));
