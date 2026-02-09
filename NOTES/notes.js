// lect 1 and 2 ,3;


/* Frontend (Browser)
HTML + CSS + JS
        ↓
Backend (Node.js)
Business Logic + APIs
        ↓
Database
MongoDB / MySQL / PostgreSQL
*/

/* why we use NODE ?

    - Same JS for frontend + backend

    - Very fast (non-blocking)
    - Good for real-time apps (games, chat, APIs)
    */

/* modules in NodeJS    

    module in Node.js is a reusable block of code stored in a file.

    to export : module.export = " object  "
    module.export = {
        fun1;
        fun2;
        fun3;
    }*/

    // to get or import: 
    const math = require("./current file name");
    const {fun1,fun2} = require("./from where you export");
    console.log(call);

    // there are also many why to import and export module;

// ===============================
// FILE HANDLING IN NODE.JS
// ===============================

/*
File handling means:
- creating files
- reading files
- writing files
- updating files
- deleting files

Node.js uses the built-in `fs` module for file handling.
*/

// ===============================
//  IMPORT fs MODULE
// ===============================

const fs = require("fs");

/*
fs = file system
No installation needed (core module)
*/

// ===============================
//  READ FILE (Synchronous)
// ===============================

/*
Blocks the execution until file is read
NOT recommended for large apps
*/

const data = fs.readFileSync("test.txt", "utf-8");
console.log(data);


// ===============================
//  READ FILE (Asynchronous)
// ===============================

/*
Non-blocking
Recommended way
*/

fs.readFile("test.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

// ===============================
// WRITE FILE (Overwrite)
// ===============================

/*
Creates file if not exists
Overwrites if file already exists
*/

fs.writeFile("test.txt", "Hello Node.js", (err) => {
  if (err) console.log(err);
  else console.log("File written successfully");
});

// ===============================
// APPEND FILE (Add Data)
// ===============================

/*
Adds data without removing old content
*/

fs.appendFile("test.txt", "\nNew line added", (err) => {
  if (err) console.log(err);
  else console.log("Data appended");
});


// ===============================
//  DELETE FILE
// ===============================

fs.unlink("test.txt", (err) => {
  if (err) console.log(err);
  else console.log("File deleted");
});


// ===============================
// RENAME FILE
// ===============================

fs.rename("old.txt", "new.txt", (err) => {
  if (err) console.log(err);
  else console.log("File renamed");
});

// ===============================
// CHECK FILE EXISTS
// ===============================

if (fs.existsSync("data.txt")) {
  console.log("File exists");
} else {
  console.log("File not found");
}

// ===============================
// CREATE FOLDER
// ===============================

fs.mkdir("myFolder", (err) => {
  if (err) console.log(err);
  else console.log("Folder created");
});


// ===============================
// DELETE FOLDER
// ===============================

fs.rmdir("myFolder", (err) => {
  if (err) console.log(err);
  else console.log("Folder deleted");
});

// ===============================
// ADVANCED: fs.promises (Modern Way)
// ===============================

/*
Uses async / await
Cleaner code
Preferred in real projects
*/

const fsPromises = require("fs/promises");

async function readFileData() {
  try {
    const data = await fsPromises.readFile("test.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

readFileData();


// ===============================
//  STREAMS (Large Files)
// ===============================

/*
Used for very large files
Memory efficient
*/

const readStream = fs.createReadStream("bigfile.txt", "utf-8");

readStream.on("data", (chunk) => {
  console.log(chunk);
});


// ======================================
// HOW NODE.JS WORKS (INTERNAL WORKING)
// ======================================

/*
Node.js is a JavaScript runtime that works on:
- Event-driven
- Non-blocking I/O
- Single-threaded architecture

Core idea:
 Do not wait
 Handle multiple tasks efficiently
*/

// ======================================
// V8 ENGINE
// ======================================

/*
- Converts JavaScript → Machine Code
- Very fast execution
- Same engine used by Chrome
*/

    // SINGLE-THREADED MODEL

    /*
        Node.js uses only ONE main thread.

        But still handles:
        - Multiple users
        - Multiple requests

        HOW?
        → Using Event Loop + async operations
        */

        // ======================================
//  NON-BLOCKING I/O
// ======================================

        /*
        Blocking:
        Task waits until completed 

        Non-blocking:
        Task is sent to background
        Main thread continues execution 
        */
// ======================================
//  HOW A REQUEST IS HANDLED
// ======================================

        /*
        1. Client sends request
        2. Node.js receives it
        3. If task is:
          - Fast → execute immediately
          - Slow → send to background (thread pool)
        4. When done → callback added to queue
        5. Event Loop executes callback
        */
// ======================================
// THREAD POOL
// ======================================

      /*
      Used for heavy tasks:
      - File system
      - Crypto
      - Compression
      - DNS

      Managed by libuv
      Default size = 4 threads
      */
// ======================================
// EVENT LOOP PHASES (IMPORTANT)
// ======================================

    /*
    1. Timers (setTimeout, setInterval)
    2. I/O callbacks
    3. Poll phase
    4. Check (setImmediate)
    5. Close callbacks
    */


// ======================================
// WHY NODE.JS IS FAST
// ======================================

      /*
      - Non-blocking I/O
      - Event-driven architecture
      - V8 Engine
      - Efficient Event Loop
      */


// ======================================
// WHEN NODE.JS IS BEST
// ======================================

      /*
      ✔ Real-time apps
      ✔ APIs
      ✔ Chat apps
      ✔ Games
      ✔ Streaming apps
      */




      // ===================================================
// BUILDING HTTP SERVER IN NODE.JS
// ===================================================

            /*
            HTTP Server:
            - Listens for client requests
            - Sends response back
            - Used for APIs, backend services
            */

// ===================================================
// IMPORT HTTP MODULE
// ===================================================

const http = require("http");

/*
http is a core module
No installation required
*/

// ===================================================
// CREATE SERVER
// ===================================================

const server = http.createServer((req, res) => {

  /*
  req  -> request from client
  res  -> response to client
  */

  res.end("Hello from Node.js server");
});


// ===================================================
//  START SERVER (LISTEN ON PORT)
// ===================================================

      server.listen(3000, () => {
        console.log("Server running on port 3000");
      });

      /*
      Server URL:
      http://localhost:3000
*/
// ===================================================
// REQUEST OBJECT (req)
// ===================================================

      /*
      req.url     -> route path
      req.method  -> HTTP method
      req.headers -> request info
      */

// ===================================================
// RESPONSE OBJECT (res)
// ===================================================

    /*
    res.write()      -> send data
    res.end()        -> end response
    res.setHeader()  -> set headers
    res.statusCode   -> HTTP status
    */
// =============
// BASIC ROUTING
// ===================================================

    const server = http.createServer((req, res) => {

      if (req.url === "/" && req.method === "GET") {
        res.end("Home Page");
      } 
      else if (req.url === "/about") {
        res.end("About Page");
      } 
      else {
        res.statusCode = 404;
        res.end("Page Not Found");
      }
    });


    // ===================================================
// SEND JSON RESPONSE (API)
// ===================================================

      const data = {
        status: "success",
        message: "API working"
      };

      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
      

// ===================
// HANDLE POST REQUEST
// ================================

      if (req.method === "POST") {
        let body = "";

        req.on("data", (chunk) => {
          body += chunk;
        });

        req.on("end", () => {
          console.log(body);
          res.end("Data received");
        });
      }
// ===================================================
// LIMITATION OF HTTP MODULE
// ===================================================

/*
- Manual routing
- No middleware
- Hard to scale

Solution:
→ Use Express.js
*/


/*
Node.js HTTP server is built using the http module
and works on event-driven, non-blocking architecture.
*/

// ===================================================
// HANDLING URL IN NODE.JS
// ===================================================

/*
URL handling means:
- Reading route path
- Reading query parameters
- Sending response based on URL

Handled using:
1. req.url
2. url module
*/


// ===================================================
// 1. BASIC URL HANDLING USING req.url
// ===================================================

const http = require("http");

const server = http.createServer((req, res) => {

  /*
  req.url contains:
  - pathname
  - query string

  Examples:
  /about
  /user?id=10
  */

  if (req.url === "/") {
    res.end("Home Page");
  }
  else if (req.url === "/about") {
    res.end("About Page");
  }
  else {
    res.statusCode = 404;
    res.end("Page Not Found");
  }
});

server.listen(3000);


// ===================================================
// 2. PROBLEM WITH req.url DIRECT COMPARISON
// ================================

/*
If URL has query parameters:

URL -> /user?id=10

req.url === "/user"        false
req.url === "/user?id=10" true

Direct comparison fails when query exists
*/


// ===================================================
// 3. IMPORT url MODULE
// ===================================================

const url = require("url");

/*
url is a core Node.js module
Used to parse URL properly
*/


// ===================================================
// 4. PARSE URL
// ===================================================

const parsedUrl = url.parse(req.url, true);

/*
true:
- converts query string into object
*/


// ===================================================
// 5. ACCESS PATHNAME
// ===================================================

parsedUrl.pathname;

/*
Example:
URL -> /product?id=5
pathname -> /product
*/


// ===================================================
// 7. COMPLETE URL HANDLING EXAMPLE
// ===================================================

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (path === "/") {
    res.end("Home Page");
  }
  else if (path === "/user") {
    res.end(`User ID: ${query.id}`);
  }
  else {
    res.statusCode = 404;
    res.end("Route Not Found");
  }
});

server.listen(3000);


// ===================================================
// 8. MULTIPLE QUERY PARAMETERS
// ===================================================

/*
URL:
http://localhost:3000/search?q=node&page=2

query.q    -> "node"
query.page -> "2"
*/


// ===================================================
// 9. PATHNAME VS QUERY
// ===================================================

/*
pathname:
- route path
- decides which page/API to serve

query:
- extra data sent in URL
- used for filtering, searching, paging
*/


// ===================================================
// 10. NODE.JS VS EXPRESS URL HANDLING
// ===================================================

/*
Node.js:
- Manual URL parsing
- More boilerplate

Express:
- Automatic routing
- req.params
- req.query
*/


// =========================
// NODE.JS — HTTP METHODS 
// ===================================================

// Import the built-in HTTP module
const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {

    // req.method gives the HTTP method of the request
    // Example values: "GET", "POST", "PUT", "PATCH", "DELETE"
    const method = req.method;

    // req.url gives the route requested by client
    // Example: "/", "/users", "/login"
    const url = req.url;

    // -------------------------------------------------
    // GET METHOD
    // Used to READ or FETCH data
    // Does not change anything on the server
    // -------------------------------------------------

    if (method === "GET" && url === "/") {
        // Client wants the home page
        res.end("Home Page");
    }

    else if (method === "GET" && url === "/users") {
        // Client wants all users
        res.end("List of users");
    }

    // -------------------------------------------------
    // POST METHOD
    // Used to SEND data and CREATE something
    // Example: signup, login, form submission
    // -------------------------------------------------

    else if (method === "POST" && url === "/users") {
        // Client is sending data to create a new user
        res.end("User created");
    }

    // -------------------------------------------------
    // PUT METHOD
    // Used to REPLACE existing data
    // Full data is sent to update
    // -------------------------------------------------

    else if (method === "PUT" && url === "/users") {
        // Client wants to replace user data
        res.end("User replaced");
    }

    // -------------------------------------------------
    // PATCH METHOD
    // Used to UPDATE part of the data
    // Only small changes are sent
    // -------------------------------------------------

    else if (method === "PATCH" && url === "/users") {
        // Client wants to update some fields of user
        res.end("User updated");
    }

    // -------------------------------------------------
    // DELETE METHOD
    // Used to REMOVE data
    // -------------------------------------------------

    else if (method === "DELETE" && url === "/users") {
        // Client wants to delete a user
        res.end("User deleted");
    }

    // -------------------------------------------------
    // INVALID ROUTE OR METHOD
    // -------------------------------------------------

    else {
        // If no route matches, send 404 error
        res.statusCode = 404;
        res.end("Route Not Found");
    }
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log("Server running on port 3000");
});

// for revision 
// req.method  → What action?
// req.url     → On which resource?



// ===================================================
// EXPRESS.JS — GETTING STARTED
// ===================================================

// Express is a web framework built on top of Node.js
// It makes handling routes, requests, and responses easy

// First install Express using:
// npm install express

// ---------------------------------------------------
// Import Express
// ---------------------------------------------------
const express = require("express");

// Create an Express application
const app=express();

// ---------------------------------------------------
// app is now your server
// It replaces http.createServer()
// ---------------------------------------------------


// ---------------------------------------------------
// BASIC ROUTE
// ---------------------------------------------------

// app.get() handles GET requests
// "/" is the URL path
// req = request, res = response
app.get("/", (req, res) => {
    // When someone opens http://localhost:3000/
    // this message is sent
    res.send("Welcome to Express");
});

// ---------------------------------------------------
// START SERVER
// ---------------------------------------------------

// app.listen() starts the Express server
// 3000 is the port number
app.listen(3000, () => {
    console.log("Express server running on port 3000");
});

// What Express Does

// Without Express, you write:

// http.createServer((req, res) => { ... })


// With Express:

// app.get("/", (req, res) => { ... })


// Express handles:

// Routing

// HTTP methods

// Request parsing

// Responses

// Middlewares


////////////////////////
/* Handling in express*/
////////////////////////

// GET request
app.get("/users", (req, res) => {
    res.send("All users");
});

// POST request
app.post("/users", (req, res) => {
    res.send("User created");
});

// PUT request
app.put("/users", (req, res) => {
    res.send("User replaced");
});

// PATCH request
app.patch("/users", (req, res) => {
    res.send("User updated");
});

// DELETE request
app.delete("/users", (req, res) => {
    res.send("User deleted");
});


// Express replaces this

// Node.js way:

// if(req.method === "GET" && req.url === "/users") { }


// Express way:

// app.get("/users", handler)

// Sending Response in Express
// res.send("Hello")        // send text
// res.json({name:"A"})    // send JSON
// res.status(404).send("Not found")   // set status code


// ===================================================
// VERSIONING IN NODE.JS
// ===================================================

/*
Versioning means:
- Managing different versions of Node.js
- Managing versions of packages
- Managing API versions

Used to keep projects stable and compatible
*/
// ===================================================
// 1. NODE.JS VERSION
// ===================================================

/*
Node.js itself has versions:
Example:
v18.17.0
v20.10.0

Format:
MAJOR.MINOR.PATCH
*/
// ===================================================
// 2. MEANING OF VERSION NUMBERS
// ===================================================

/*
MAJOR:
- Breaking changes

MINOR:
- New features (backward compatible)

PATCH:
- Bug fixes
*/
// ===================================================
// 3. CHECK NODE VERSION
// ===================================================

/*
Command:
node -v
*/
// ===================================================
// 4. WHY NODE VERSION MATTERS
// ===================================================

/*
Different Node versions support:
- Different JS features
- Different APIs
- Different performance

Project built on Node 18
may break on Node 12
*/
// ===================================================
// 5. MANAGING NODE VERSIONS
// ===================================================

/*
Use nvm (Node Version Manager)

Allows:
- Install multiple Node versions
- Switch between them
*/
// ===================================================
// 6. PACKAGE VERSIONING (npm)
// ===================================================

/*
Each library has version
Example:
express@4.18.2

Stored in package.json
*/
// ===================================================
// 7. SEMANTIC VERSIONING
// ===================================================

/*
Format:
MAJOR.MINOR.PATCH

Example:
4.18.2
4 -> major
18 -> minor
2 -> patch
*/
// ===================================================
// 8. VERSION RANGE SYMBOLS
// ===================================================

/*
^1.2.3  -> update minor & patch
~1.2.3  -> update patch only
1.2.3   -> fixed version
*/
// ===================================================
// 9. PACKAGE-LOCK.JSON
// ===================================================

/*
Locks exact versions
Prevents different installs
on different machines
*/
// ===================================================
// 10. API VERSIONING
// ===================================================

/*
Used when backend changes

Example:
GET /api/v1/users
GET /api/v2/users
*/
// ===================================================
// WHY API VERSIONING IS IMPORTANT
// ===================================================

/*
Old clients keep working
New features added safely
No breaking changes
*/
// ===================================================
// ONE-LINE SUMMARY
// ===================================================

/*
Versioning in Node.js controls
Node version, package versions,
and API versions to keep apps stable.
*/






// ===================================================
// WHAT IS A REST API
// ===================================================

/*
REST API:
REST = Representational State Transfer
API  = Application Programming Interface

A REST API is a way for two systems
(frontend and backend) to communicate
using HTTP requests.
*/
 
// ====================
// WHY REST API IS USED
// ====================
/*
- Frontend and backend are separated
- Mobile, web, and other clients can use same backend
- Data can be exchanged easily in JSON format
*/
 
// ==================
// HOW REST API WORKS
// =============

/*
Client (Browser / App) sends request
Server (Node.js) processes it
Server sends response

Request → Server → Response
*/
 
// ===================================================
// HTTP METHODS USED IN REST
// ===================================================

/*
GET    -> read data
POST   -> create data
PUT    -> update data
DELETE -> delete data
*/
 
// ===================================================
// EXAMPLE OF REST API ENDPOINTS
// ===================================================

/*
GET    /users      -> get all users
GET    /users/5    -> get user with id 5
POST   /users      -> create new user
PUT    /users/5    -> update user 5
DELETE /users/5    -> delete user 5
*/
 
// ===================================================
// REST API USES JSON
// ===================================================

/*
Data is sent in JSON format

Example:
{
  "id": 5,
  "name": "Ayush",
  "age": 20
}
*/
 
// ===================================================
// PROPERTIES OF REST API
// ===================================================

/*
- Stateless
- Client and server are independent
- Uses standard HTTP methods
- Uses URLs to identify resources
*/

// ===================================================
// WHERE REST API IS USED
// ===================================================

/*
- Web apps
- Mobile apps
- Games
- Dashboards
- Any frontend-backend communication
*/
 
// ===================================================
// ONE-LINE SUMMARY
// ===================================================

/*
A REST API lets frontend and backend
communicate using HTTP requests and JSON.
*/






// ===================================================
// BUILDING REST API USING NODE.JS AND EXPRESS.JS
// ===================================================

/*
REST API allows frontend and backend
to communicate using HTTP and JSON
Express.js is a Node.js framework
used to build APIs easily
*/

// ===================================================
// 1. INSTALL EXPRESS
// ===================================================

/*
Command:
npm init -y
npm install express
*/

// ===================================================
// 2. IMPORT EXPRESS AND CREATE APP
// ===================================================

const express = require("express");
const app = express();

/*
app is the main server object
*/

// ===================================================
// 3. MIDDLEWARE TO READ JSON
// ===================================================

app.use(express.json());

/*
Allows API to accept JSON data
from client
*/

// ===================================================
// 4. CREATE SIMPLE GET API
// ===================================================

app.get("/", (req, res) => {
  res.send("API is running");
});

// ===================================================
// 5. CREATE DATA (POST)
// ===================================================

let users = [];

app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.json({ message: "User added", user });
});

// ===================================================
// 6. READ DATA (GET)
// ===================================================

app.get("/users", (req, res) => {
  res.json(users);
});

// ===================================================
// 7. READ SINGLE USER
// ===================================================

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find(u => u.id == id);
  res.json(user);
});

// ===================================================
// 8. UPDATE USER (PUT)
// ===================================================

app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const newData = req.body;

  users = users.map(u =>
    u.id == id ? newData : u
  );

  res.json({ message: "User updated" });
});

// ===================================================
// 9. DELETE USER
// ===================================================

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  users = users.filter(u => u.id != id);
  res.json({ message: "User deleted" });
});

// ===================================================
// 10. START SERVER
// ===================================================

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// ===================================================
// ONE-LINE SUMMARY
// ===================================================

/*
Express makes building REST APIs
easy by providing routing and middleware
on top of Node.js
*/



// ===================================================
// POSTMAN FOR REST API
// ===================================================

/*
Postman is a tool used to:
- Test REST APIs
- Send HTTP requests
- View server responses

It is used instead of browser
for testing backend APIs
*/

// ===================================================
// WHY POSTMAN IS USED
// ===================================================

/*
Browser only supports GET requests easily
Postman supports:
GET
POST
PUT
DELETE
PATCH
*/

// ===================================================
// HOW POSTMAN WORKS
// ===================================================

/*
Postman acts like a client

Postman -> sends request -> Node.js API
Node.js -> sends response -> Postman
*/

// ===================================================
// STEPS TO TEST REST API USING POSTMAN
// ===================================================

/*
1. Open Postman
2. Select HTTP method (GET, POST, etc)
3. Enter URL
   Example:
   http://localhost:3000/users
4. Click Send
5. See response from server
*/

// ===================================================
// TESTING GET REQUEST
// ===================================================

/*
Method: GET
URL: http://localhost:3000/users

Returns:
All users from API
*/

// ===================================================
// TESTING POST REQUEST
// ===================================================

/*
Method: POST
URL: http://localhost:3000/users

Body -> raw -> JSON
Example:
{
  "id": 1,
  "name": "Ayush"
}

Click Send
User will be added
*/

// ===================================================
// TESTING PUT REQUEST
// ===================================================

/*
Method: PUT
URL: http://localhost:3000/users/1

Body -> raw -> JSON
Example:
{
  "id": 1,
  "name": "Ayush Updated"
}
*/

// ===================================================
// TESTING DELETE REQUEST
// ===================================================

/*
Method: DELETE
URL: http://localhost:3000/users/1
*/

// ===================================================
// RESPONSE IN POSTMAN
// ===================================================

/*
Postman shows:
- Status code
- JSON response
- Error messages
*/

// ===================================================
// WHY POSTMAN IS IMPORTANT
// ===================================================

/*
- Test API without frontend
- Debug backend
- Check request and response
- Learn REST APIs
*/

// ===================================================
// ONE-LINE SUMMARY
// ===================================================

/*
Postman is a tool used to test
and debug REST APIs by sending HTTP requests.
*/


// ===================================================
// EXPRESS MIDDLEWARE
// ===================================================

/*
Middleware is a function that runs
between request and response.

Flow:
Request -> Middleware -> Route -> Response
*/

// ===================================================
// WHY MIDDLEWARE IS USED
// ===================================================

/*
- To read request body
- To check authentication
- To log requests
- To handle errors
- To modify request or response
*/

// ===================================================
// BASIC MIDDLEWARE STRUCTURE
// ===================================================

/*
(req, res, next) => {
  // code
  next();
}
*/

// ===================================================
// EXAMPLE: CUSTOM MIDDLEWARE
// ===================================================

const express = require("express");
const app = express();

const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

app.use(logger);

// ===================================================
// BUILT-IN MIDDLEWARE
// ===================================================

/*
express.json()      -> reads JSON body
express.urlencoded -> reads form data
*/

app.use(express.json());

// ===================================================
// ROUTE EXAMPLE
// ===================================================

app.get("/", (req, res) => {
  res.send("Home Page");
});

// ===================================================
// MIDDLEWARE FOR SPECIFIC ROUTE
// ===================================================

const auth = (req, res, next) => {
  const isLoggedIn = true;
  if (isLoggedIn) {
    next();
  } else {
    res.send("Access Denied");
  }
};

app.get("/dashboard", auth, (req, res) => {
  res.send("Welcome to Dashboard");
});

// ===================================================
// ERROR HANDLING MIDDLEWARE
// ===================================================

app.use((err, req, res, next) => {
  res.status(500).send("Server Error");
});

// ===================================================
// START SERVER
// ===================================================

app.listen(3000, () => {
  console.log("Server running");
});

// ===================================================
// ONE-LINE SUMMARY
// ===================================================

/*
Middleware controls the flow of request
before it reaches the final route.
*/



// ===================================================
// HTTP HEADERS
// ===================================================

/*
HTTP headers are extra information sent
with every request and response.

They tell:
- What type of data is being sent
- Who is sending the request
- How to process the data
*/

const headers = {
  "Content-Type": "application/json",
  "Authorization": "Bearer token",
  "Accept": "application/json"
};

/*
Content-Type  -> data format (JSON, HTML, etc)
Authorization -> login token
Accept        -> response format
*/


// ===================================================
// HTTP STATUS CODES
// ===================================================

/*
Status codes tell what happened
after a request was sent.
*/

const statusCodes = {
  200: "Success",
  201: "Created",
  400: "Bad Request",
  401: "Unauthorized",
  404: "Not Found",
  500: "Server Error"
};

/*
Frontend reads status code
to know if API worked or failed.
*/


// ===================================================
// MONGODB BASICS
// ===================================================

/*
MongoDB is a NoSQL database.
It stores data in JSON-like format.

//Mongos connection;


Structure:
Database -> Collection -> Document
*/

const user = {
  name: "Ayush",
  age: 20,
  email: "test@gmail.com"
};

/*
Each object like this is a document.
*/


// ===================================================
// CONNECTING NODE.JS WITH MONGODB
// ===================================================

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/myapp");

/*
This connects Node.js
to the MongoDB database.
*/


// ===================================================
// MONGOOSE SCHEMA AND MODEL
// ===================================================

const userSchema = new mongoose.Schema({
  name:
  {
    type: String,
    required: true
  } ,
  age: Number,
  email: String
});

const User = mongoose.model("User", userSchema);

/*
Schema defines data structure.
Model is used to read and write data.
*/


// ===================================================
// MVC ARCHITECTURE
// ===================================================

/*
MVC means:

Model      -> database logic
View       -> frontend UI
Controller -> backend logic

Used to keep code clean and organized.
*/

// ===================================================
// URL SHORTENER CONCEPT
// ===================================================

/*
Long URL:
https://example.com/product/12345

Short URL:
https://short.ly/ab12

Database:
ab12 -> original long URL
*/

// ===================================================
// URL SHORTENER FLOW
// ===================================================

/*
1. User sends long URL
2. Server generates short code
3. Stores it in MongoDB
4. Returns short link
5. When short link is opened
   server redirects to original URL
*/




// ===================================================
// MVC PATTERN (Model-View-Controller)
// ===================================================

/*
MVC is an architectural pattern that separates application into 3 parts:
- Model: Data and business logic
- View: User interface and presentation
- Controller: Handles requests and connects Model & View
*/

// FOLDER STRUCTURE
/*
project/
├── models/          # Database schemas and data logic
├── views/           # Templates (EJS, Pug, Handlebars)
├── controllers/     # Request handling logic
├── routes/          # URL routing
└── app.js          # Main application file
*/

// MODEL (models/User.js)
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);
module.exports = User;

// CONTROLLER (controllers/userController.js)
const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.render('users', { users });
};

exports.createUser = async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.redirect('/users');
};

// ROUTES (routes/userRoutes.js)
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);

module.exports = router;

// MAIN APP (app.js)
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(userRoutes);

app.listen(3000);

/*
MVC BENEFITS:
- Separation of concerns
- Code is organized and maintainable
- Easy to test individual components
- Multiple developers can work simultaneously
*/

// ===================================================
// URL SHORTENER (Using Express & MongoDB)
// ===================================================

const express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');

// URL Schema (Model)
const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, unique: true },
  clicks: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

const URL = mongoose.model('URL', urlSchema);

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/urlshortener');

// Shorten URL endpoint
app.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;
  
  // Check if URL already exists
  let url = await URL.findOne({ originalUrl });
  
  if (url) {
    return res.json(url);
  }
  
  // Create short URL
  const shortUrl = shortid.generate();
  
  url = new URL({
    originalUrl,
    shortUrl
  });
  
  await url.save();
  res.json(url);
});

// Redirect to original URL
app.get('/:shortUrl', async (req, res) => {
  const { shortUrl } = req.params;
  
  const url = await URL.findOne({ shortUrl });
  
  if (!url) {
    return res.status(404).json({ error: 'URL not found' });
  }
  
  // Increment click count
  url.clicks++;
  await url.save();
  
  // Redirect to original URL
  res.redirect(url.originalUrl);
});

// Get analytics
app.get('/analytics/:shortUrl', async (req, res) => {
  const url = await URL.findOne({ shortUrl: req.params.shortUrl });
  
  if (!url) {
    return res.status(404).json({ error: 'URL not found' });
  }
  
  res.json({
    originalUrl: url.originalUrl,
    shortUrl: url.shortUrl,
    clicks: url.clicks,
    createdAt: url.createdAt
  });
});

app.listen(3000);

/*
URL SHORTENER KEY CONCEPTS:
- shortid: Generates unique short IDs
- MongoDB stores mapping between short and original URLs
- Track clicks/analytics
- Redirect using res.redirect()
*/

// ===================================================
// SERVER SIDE RENDERING (SSR) with EJS
// ===================================================

const express = require('express');
const app = express();

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Sample data
const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
  { id: 3, name: 'Tablet', price: 300 }
];

// Render EJS template
app.get('/products', (req, res) => {
  res.render('products', { 
    title: 'Product List',
    products: products,
    user: { name: 'John' }
  });
});

// Dynamic route
app.get('/product/:id', (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  res.render('product-detail', { product });
});

/*
EJS TEMPLATE (views/products.ejs):
<!DOCTYPE html>
<html>
<head>
  <title><%= title %></title>
</head>
<body>
  <h1>Welcome, <%= user.name %></h1>
  <ul>
    <% products.forEach(product => { %>
      <li>
        <%= product.name %> - $<%= product.price %>
      </li>
    <% }); %>
  </ul>
</body>
</html>
*/

/*
EJS SYNTAX:
<%= value %>        - Output escaped value
<%- value %>        - Output unescaped HTML
<% code %>          - Execute JavaScript code
<%- include('partial') %> - Include partial template

SSR BENEFITS:
- Better SEO (search engines can crawl content)
- Faster initial page load
- Works without JavaScript
- Good for content-heavy sites
*/

// ===================================================
// AUTHENTICATION FROM SCRATCH
// ===================================================

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

const app = express();
app.use(express.json());

const SECRET_KEY = 'your-secret-key-here';

// SIGNUP (Register)
app.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    // Create user
    const user = new User({
      username,
      email,
      password: hashedPassword
    });
    
    await user.save();
    
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// LOGIN
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      SECRET_KEY,
      { expiresIn: '24h' }
    );
    
    res.json({ 
      message: 'Login successful',
      token,
      user: { username: user.username, email: user.email }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
  
  if (!token) {
    return res.status(401).json({ error: 'Access denied' });
  }
  
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Protected route
app.get('/profile', authenticateToken, async (req, res) => {
  const user = await User.findById(req.user.userId).select('-password');
  res.json(user);
});

/*
AUTHENTICATION FLOW:
1. SIGNUP: Hash password with bcrypt → Save to DB
2. LOGIN: Compare password → Generate JWT token
3. PROTECTED ROUTES: Verify JWT token → Grant access

SECURITY BEST PRACTICES:
- Never store plain text passwords
- Use bcrypt with salt rounds (10-12)
- Store JWT secret in environment variables
- Use HTTPS in production
- Implement token expiration
- Consider refresh tokens for better security
*/

// ===================================================
// JWT AUTHENTICATION (JSON Web Token)
// ===================================================

const jwt = require('jsonwebtoken');

// Creating a JWT
const payload = {
  userId: '12345',
  email: 'user@example.com',
  role: 'admin'
};

const SECRET = 'my-super-secret-key';

// Sign token (create)
const token = jwt.sign(payload, SECRET, {
  expiresIn: '1h'  // Token expires in 1 hour
});

console.log(token);
// Output: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

// Verify token
try {
  const decoded = jwt.verify(token, SECRET);
  console.log(decoded);
  // Output: { userId: '12345', email: 'user@example.com', role: 'admin', iat: ..., exp: ... }
} catch (error) {
  console.log('Invalid token');
}

// JWT Middleware Example
const verifyToken = (req, res, next) => {
  // Get token from header
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;  // Attach user info to request
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
};

// Using the middleware
app.get('/dashboard', verifyToken, (req, res) => {
  res.json({ 
    message: 'Welcome to dashboard',
    user: req.user 
  });
});

/*
JWT STRUCTURE (3 parts separated by dots):
1. HEADER: Algorithm and token type
2. PAYLOAD: Data (claims)
3. SIGNATURE: Encrypted with secret key

JWT vs SESSIONS:
JWT:
- Stateless (no server-side storage)
- Scalable for microservices
- Can't be invalidated before expiry
- Larger size

Sessions:
- Stateful (stored on server)
- Can be invalidated anytime
- Smaller cookie size
- Requires session store
*/

// ===================================================
// COOKIES IN NODE.JS
// ===================================================

const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

// Set a cookie
app.get('/set-cookie', (req, res) => {
  // Basic cookie
  res.cookie('username', 'JohnDoe');
  
  // Cookie with options
  res.cookie('sessionId', '12345', {
    maxAge: 900000,     // Expires in 15 minutes (in milliseconds)
    httpOnly: true,     // Not accessible via JavaScript (XSS protection)
    secure: true,       // Only sent over HTTPS
    sameSite: 'strict'  // CSRF protection
  });
  
  res.send('Cookies set!');
});

// Read cookies
app.get('/get-cookie', (req, res) => {
  const username = req.cookies.username;
  const sessionId = req.cookies.sessionId;
  
  res.json({ username, sessionId });
});

// Delete cookie
app.get('/delete-cookie', (req, res) => {
  res.clearCookie('username');
  res.send('Cookie deleted!');
});

// Signed cookies (more secure)
app.use(cookieParser('my-secret-key'));

app.get('/set-signed-cookie', (req, res) => {
  res.cookie('userId', '789', { signed: true });
  res.send('Signed cookie set!');
});

app.get('/get-signed-cookie', (req, res) => {
  const userId = req.signedCookies.userId;
  res.json({ userId });
});

/*
COOKIE OPTIONS:
- maxAge: Expiry time in milliseconds
- expires: Expiry date
- httpOnly: Prevents JavaScript access (security)
- secure: Only HTTPS (production)
- sameSite: 'strict', 'lax', or 'none' (CSRF protection)
- domain: Which domain can access
- path: Which path can access

COOKIES vs LOCAL STORAGE:
Cookies:
- Sent with every HTTP request
- 4KB limit per cookie
- Can set expiry
- More secure (httpOnly, secure flags)

Local Storage:
- Not sent with requests
- 5-10MB limit
- Persistent until cleared
- Accessible via JavaScript
*/

// ===================================================
// AUTHORIZATION (Role-Based Access Control)
// ===================================================

// User model with roles
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: { 
    type: String, 
    enum: ['user', 'admin', 'moderator'],
    default: 'user' 
  }
});

// Authorization middleware
const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Not authenticated' });
    }
    
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ 
        error: 'You do not have permission to access this resource' 
      });
    }
    
    next();
  };
};

// Protected routes with different access levels
app.get('/users', 
  authenticateToken,              // First authenticate
  authorize('admin', 'moderator'), // Then authorize
  async (req, res) => {
    const users = await User.find();
    res.json(users);
  }
);

app.delete('/users/:id', 
  authenticateToken,
  authorize('admin'),  // Only admins can delete
  async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  }
);

app.get('/profile', 
  authenticateToken,
  authorize('user', 'admin', 'moderator'),  // All authenticated users
  (req, res) => {
    res.json({ message: 'Your profile' });
  }
);

/*
AUTHENTICATION vs AUTHORIZATION:

AUTHENTICATION: 
- "Who are you?" 
- Verifying identity (login)
- JWT, sessions, OAuth

AUTHORIZATION:
- "What can you do?"
- Verifying permissions (access control)
- Role-based, permission-based

COMMON ROLES:
- User: Basic access
- Admin: Full access
- Moderator: Moderate content
- Guest: Limited/read-only access
*/

// ===================================================
// DISCORD BOT IN NODE.JS
// ===================================================

const { Client, GatewayIntentBits } = require('discord.js');

// Create client with intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Bot ready event
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// Message event
client.on('messageCreate', async (message) => {
  // Ignore bot messages
  if (message.author.bot) return;
  
  // Ping command
  if (message.content === '!ping') {
    message.reply('Pong!');
  }
  
  // Server info command
  if (message.content === '!serverinfo') {
    message.channel.send(`Server name: ${message.guild.name}
Total members: ${message.guild.memberCount}`);
  }
  
  // User info command
  if (message.content === '!userinfo') {
    message.reply(`Your username: ${message.author.username}
Your ID: ${message.author.id}
Account created: ${message.author.createdAt}`);
  }
  
  // Kick member (admin only)
  if (message.content.startsWith('!kick')) {
    if (!message.member.permissions.has('KickMembers')) {
      return message.reply('You don\'t have permission!');
    }
    
    const member = message.mentions.members.first();
    if (member) {
      await member.kick();
      message.channel.send(`${member.user.tag} has been kicked!`);
    }
  }
  
  // Embed message
  if (message.content === '!embed') {
    const embed = {
      color: 0x0099ff,
      title: 'Sample Embed',
      description: 'This is an embedded message',
      fields: [
        { name: 'Field 1', value: 'Value 1', inline: true },
        { name: 'Field 2', value: 'Value 2', inline: true }
      ],
      timestamp: new Date()
    };
    
    message.channel.send({ embeds: [embed] });
  }
});

// Login with bot token
client.login('YOUR_BOT_TOKEN_HERE');

/*
DISCORD BOT SETUP:
1. Go to Discord Developer Portal
2. Create new application
3. Go to Bot section → Add Bot
4. Copy token
5. Enable Message Content Intent
6. Invite bot using OAuth2 URL

COMMON BOT FEATURES:
- Message commands
- Slash commands
- Moderation (kick, ban, mute)
- Music player
- Games and fun commands
- Auto-moderation
- Welcome messages
- Logging

INTENTS (Permissions):
- Guilds: Server info
- GuildMessages: Read messages
- MessageContent: Access message content
- GuildMembers: Member info
*/

// ===================================================
// COMPLETE AUTHENTICATION EXAMPLE
// ===================================================

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());

// Database connection
mongoose.connect('mongodb://localhost:27017/authapp');

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

const User = mongoose.model('User', userSchema);

const JWT_SECRET = process.env.JWT_SECRET || 'secret-key';

// Register
app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User({
      username,
      email,
      password: hashedPassword
    });
    
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    // Set token in cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });
    
    res.json({ 
      message: 'Login successful',
      user: { username: user.username, email: user.email }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Logout
app.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out successfully' });
});

// Auth middleware
const authenticate = (req, res, next) => {
  const token = req.cookies.token;
  
  if (!token) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ error: 'Invalid token' });
  }
};

// Protected route
app.get('/dashboard', authenticate, (req, res) => {
  res.json({ message: 'Welcome to dashboard', userId: req.user.userId });
});

// Admin-only route
app.get('/admin', authenticate, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' });
  }
  res.json({ message: 'Admin panel' });
});

app.listen(3000, () => console.log('Server running on port 3000'));

/*
FULL STACK AUTHENTICATION CHECKLIST:
✓ Password hashing (bcrypt)
✓ JWT token generation
✓ Token stored in httpOnly cookie
✓ Authentication middleware
✓ Role-based authorization
✓ Secure cookie options
✓ Token expiration
✓ Logout functionality
✓ Error handling

PRODUCTION CONSIDERATIONS:
- Use environment variables for secrets
- Implement rate limiting
- Add email verification
- Use refresh tokens
- Implement password reset
- Add 2FA (two-factor authentication)
- Log authentication attempts
- Use HTTPS only
*/


///////////////// 31 jan 2026?????//////////


// multer:primarily used for uploading files
import express from "express";
import multer from "multer";

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    }
});

const upload = multer({ storage });

app.get("/", (req, res) => {
    res.send(`
    <form action="/uploads" method="POST" enctype="multipart/form-data">
      <input type="file" name="myFile" />
      <button type="submit">Upload file</button>
    </form>
  `);
});

app.post("/uploads", upload.single("myFile"), (req, res) => {
    res.send({
        message: "file uploaded",
        info: req.file
    });
});

app.listen(9000, () => {
    console.log("Server running on 9000");
});
///project 
//discord bot ,url shorten,blogging website;




// ╔══════════════════════════════════════════════════════════════════════════╗
// ║                                                                          ║
// ║   TOPIC 1: NODEJS BLOGGING APP – PROJECT SETUP                           ║
// ║                                                                          ║
// ╚══════════════════════════════════════════════════════════════════════════╝

/*
========================================
1.1 — WHAT ARE WE BUILDING?
========================================

A full-stack, server-side rendered blogging platform where:
  - Users can register and login
  - Authenticated users can create, edit, delete blog posts
  - Anyone can read published blogs
  - Blog posts support tags, drafts, and rich text

TECH STACK:
┌──────────────┬──────────────────────────────────────────────┐
│ Technology   │ Role                                         │
├──────────────┼──────────────────────────────────────────────┤
│ Node.js      │ Server-side JavaScript runtime               │
│ Express.js   │ Web application framework                    │
│ MongoDB      │ NoSQL database for storing data              │
│ Mongoose     │ ODM (Object Data Modeling) for MongoDB       │
│ EJS          │ Templating engine for server-side rendering  │
│ Passport.js  │ Authentication middleware                    │
│ bcryptjs     │ Password hashing library                     │
│ dotenv       │ Environment variable management              │
│ express-     │ Session management for login persistence     │
│   session    │                                              │
└──────────────┴──────────────────────────────────────────────┘


========================================
1.2 — PROJECT STRUCTURE (MVC PATTERN)
========================================

blog-app/
│
├── 📂 config/                    ← CONFIGURATION LAYER
│   ├── db.js                     // MongoDB connection logic
│   └── passport.js               // Passport authentication strategies
│
├── 📂 controllers/               ← BUSINESS LOGIC LAYER
│   ├── authController.js         // Register, Login, Logout logic
│   └── blogController.js         // CRUD operations for blogs
│
├── 📂 middleware/                ← CUSTOM MIDDLEWARE
│   ├── authMiddleware.js         // Route protection (ensureAuth)
│   └── errorMiddleware.js        // Global error handler
│
├── 📂 models/                    ← DATA LAYER (Mongoose Schemas)
│   ├── User.js                   // User schema + password hashing
│   └── Blog.js                   // Blog schema + validations
│
├── 📂 routes/                    ← ROUTING LAYER
│   ├── authRoutes.js             // /auth/* routes
│   └── blogRoutes.js             // /blogs/* routes
│
├── 📂 views/                     ← PRESENTATION LAYER (EJS Templates)
│   ├── 📂 partials/
│   │   ├── header.ejs            // Common header + navbar
│   │   ├── footer.ejs            // Common footer + scripts
│   │   └── alerts.ejs            // Flash message display
│   ├── 📂 auth/
│   │   ├── login.ejs             // Login form page
│   │   └── register.ejs          // Registration form page
│   ├── 📂 blogs/
│   │   ├── index.ejs             // All blogs listing page
│   │   ├── show.ejs              // Single blog detail page
│   │   ├── new.ejs               // Create blog form
│   │   └── edit.ejs              // Edit blog form
│   ├── home.ejs                  // Landing page
│   └── 404.ejs                   // Not found page
│
├── 📂 public/                    ← STATIC ASSETS
│   ├── 📂 css/
│   │   └── style.css
│   ├── 📂 js/
│   │   └── main.js
│   └── 📂 images/
│
├── 📄 app.js                     ← APPLICATION ENTRY POINT
├── 📄 package.json               ← Dependencies & scripts
├── 📄 .env                       ← Environment variables (SECRET)
├── 📄 .gitignore                 ← Files to ignore in git
└── 📄 README.md                  ← Project documentation


========================================
1.3 — WHY MVC ARCHITECTURE?
========================================

┌─────────────────────────────────────────────────────────────────┐
│                     MVC ARCHITECTURE                             │
│                                                                  │
│    ┌──────────┐     ┌──────────────┐     ┌──────────┐           │
│    │          │     │              │     │          │           │
│    │  MODEL   │◄────│  CONTROLLER  │────►│   VIEW   │           │
│    │  (Data)  │     │   (Logic)    │     │   (UI)   │           │
│    └──────────┘     └──────────────┘     └──────────┘           │
│         │                  ▲                  │                  │
│         ▼                  │                  ▼                  │
│    ┌─────────┐        ┌────┴────┐        ┌────────┐            │
│    │ MongoDB │        │ Express │        │  HTML   │            │
│    │ Schemas │        │ Routes  │        │  (EJS)  │            │
│    │ Queries │        │Handlers │        │ Output  │            │
│    └─────────┘        └─────────┘        └────────┘            │
└─────────────────────────────────────────────────────────────────┘

BENEFITS:
┌────────────────────────┬──────────────────────────────────────────┐
│ Benefit                │ Explanation                              │
├────────────────────────┼──────────────────────────────────────────┤
│ Separation of Concerns │ Each layer has ONE job only              │
│ Easy Debugging         │ Bug in UI? → View. Bug in data? → Model │
│ Scalability            │ Add features without restructuring      │
│ Team Collaboration     │ Frontend/Backend devs work in parallel  │
│ Reusability            │ Models reused across controllers        │
│ Testability            │ Unit test each layer independently      │
│ Industry Standard      │ Same pattern in Django, Rails, Laravel  │
└────────────────────────┴──────────────────────────────────────────┘


========================================
1.4 — INITIAL SETUP COMMANDS
========================================
*/

// STEP 1: Create project directory
// mkdir blog-app && cd blog-app

// STEP 2: Initialize package.json
// npm init -y

// STEP 3: Install production dependencies
// npm install express mongoose ejs dotenv bcryptjs express-session
//          passport passport-local connect-flash method-override

// STEP 4: Install dev dependencies
// npm install nodemon --save-dev

/*
┌────────────────────┬──────────────────────────────────────────────┐
│ Package            │ Purpose                                      │
├────────────────────┼──────────────────────────────────────────────┤
│ express            │ Web server framework                         │
│ mongoose           │ MongoDB object modeling (ODM)                │
│ ejs                │ Embedded JavaScript templates                │
│ dotenv             │ Load .env variables into process.env         │
│ bcryptjs           │ Hash passwords (no native dependencies)      │
│ express-session    │ Server-side session storage                  │
│ passport           │ Authentication framework (500+ strategies)   │
│ passport-local     │ Username/password authentication strategy    │
│ connect-flash      │ Flash messages (success/error notifications) │
│ method-override    │ Support PUT/DELETE in HTML forms             │
│ nodemon (dev)      │ Auto-restart server on file changes          │
└────────────────────┴──────────────────────────────────────────────┘
*/

// STEP 5: Configure package.json scripts
/*
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  }
}
*/

/*
========================================
1.5 — ENVIRONMENT VARIABLES (.env)
========================================
*/

// .env file (NEVER commit this to git!)
/*
PORT=3000
MONGODB_URI=mongodb://localhost:27017/blogapp
SESSION_SECRET=your_super_secret_random_string_here_abc123xyz
NODE_ENV=development
*/

// .gitignore file
/*
node_modules/
.env
.DS_Store
*/

/*
========================================
1.6 — DATABASE CONNECTION (config/db.js)
========================================
*/

// config/db.js
const mongoose_setup = `
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);

        console.log('✅ MongoDB Connected: ' + conn.connection.host);

        // Handle connection events
        mongoose.connection.on('error', (err) => {
            console.error('❌ MongoDB Error:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.warn('⚠️  MongoDB Disconnected');
        });

    } catch (error) {
        console.error('❌ MongoDB Connection Failed:', error.message);
        process.exit(1);  // Exit with failure
    }
};

module.exports = connectDB;
`;

/*
CONNECTION FLOW:
================
  app.js starts
      │
      ▼
  connectDB() called
      │
      ▼
  mongoose.connect(URI)
      │
      ├── ✅ SUCCESS → Log host → App continues → Listens on PORT
      │
      └── ❌ FAILURE → Log error → process.exit(1) → App terminates
*/

/*
========================================
1.7 — MAIN APPLICATION FILE (app.js)
========================================
*/

const app_js_code = `
// ==========================================
// IMPORTS
// ==========================================
const express        = require('express');
const mongoose       = require('mongoose');
const session        = require('express-session');
const passport       = require('passport');
const flash          = require('connect-flash');
const methodOverride = require('method-override');
const path           = require('path');
const dotenv         = require('dotenv');

// Load environment variables FIRST
dotenv.config();

// Import configurations
const connectDB = require('./config/db');
require('./config/passport')(passport);

// Import routes
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');

// ==========================================
// INITIALIZE APP
// ==========================================
const app  = express();
const PORT = process.env.PORT || 3000;

// ==========================================
// CONNECT TO DATABASE
// ==========================================
connectDB();

// ==========================================
// MIDDLEWARE PIPELINE
// ==========================================
/*
  REQUEST FLOW THROUGH MIDDLEWARE:

  Client Request
      │
      ▼
  express.json()          → Parse JSON bodies
      │
      ▼
  express.urlencoded()    → Parse form data
      │
      ▼
  methodOverride()        → Support PUT/DELETE from forms
      │
      ▼
  express.static()        → Serve CSS, JS, images
      │
      ▼
  session()               → Create/read session
      │
      ▼
  passport.initialize()   → Initialize passport
      │
      ▼
  passport.session()      → Deserialize user from session
      │
      ▼
  flash()                 → Flash messages
      │
      ▼
  Global Variables        → Set res.locals
      │
      ▼
  ROUTE HANDLER           → Controller logic
      │
      ▼
  Response sent to client
*/

// Parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Method override for PUT/DELETE in HTML forms
// HTML forms only support GET and POST
// This allows: <form method="POST" action="/blogs/123?_method=DELETE">
app.use(methodOverride('_method'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Session configuration
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,              // Don't save session if unchanged
    saveUninitialized: false,   // Don't create session until something stored
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,  // 24 hours
        httpOnly: true,                 // Prevents client-side JS access
        secure: process.env.NODE_ENV === 'production'  // HTTPS only in prod
    }
}));

// Passport middleware (MUST be after session)
app.use(passport.initialize());
app.use(passport.session());

// Flash messages
app.use(flash());

// Global variables (accessible in ALL EJS templates)
app.use((req, res, next) => {
    res.locals.currentUser   = req.user || null;
    res.locals.success_msg   = req.flash('success');
    res.locals.error_msg     = req.flash('error');
    res.locals.passport_error = req.flash('error');  // Passport errors
    next();
});

// ==========================================
// VIEW ENGINE
// ==========================================
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ==========================================
// ROUTES
// ==========================================
app.get('/', (req, res) => {
    res.render('home', { title: 'Welcome to BlogApp' });
});

app.use('/auth', authRoutes);
app.use('/blogs', blogRoutes);

// 404 Handler (after all routes)
app.use((req, res) => {
    res.status(404).render('404', { title: 'Page Not Found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('500', {
        title: 'Server Error',
        error: process.env.NODE_ENV === 'development' ? err : {}
    });
});

// ==========================================
// START SERVER
// ==========================================
app.listen(PORT, () => {
    console.log('Server running on http://localhost:' + PORT);
    console.log('Environment:', process.env.NODE_ENV);
});

module.exports = app;
`;

/*
========================================
1.8 — UNDERSTANDING MIDDLEWARE ORDER
========================================

⚠️ CRITICAL: Middleware ORDER matters!

WRONG ORDER:
  passport.session() → session()     ← CRASH! Session doesn't exist yet

CORRECT ORDER:
  session() → passport.initialize() → passport.session()

RULE: Each middleware can depend on the ones ABOVE it.

┌────────────────────────────────────────────────────────────┐
│  MIDDLEWARE DEPENDENCY CHAIN                                │
│                                                             │
│  express.json()       → No dependencies                    │
│  express.urlencoded() → No dependencies                    │
│  express.static()     → No dependencies                    │
│  session()            → No dependencies                    │
│  passport.init()      → DEPENDS ON session()               │
│  passport.session()   → DEPENDS ON passport.init()         │
│  flash()              → DEPENDS ON session()               │
│  res.locals           → DEPENDS ON passport (for req.user) │
│  routes               → DEPENDS ON all above               │
└────────────────────────────────────────────────────────────┘


========================================
1.9 — METHOD OVERRIDE EXPLAINED
========================================

PROBLEM:
  HTML forms only support GET and POST methods.
  But RESTful APIs need PUT and DELETE.

SOLUTION: method-override middleware

HOW IT WORKS:

  <!-- HTML Form -->
  <form method="POST" action="/blogs/123?_method=PUT">
      <input type="text" name="title" value="Updated Title">
      <button type="submit">Update</button>
  </form>

  <!-- What the server receives: -->
  PUT /blogs/123
  Body: { title: "Updated Title" }

  <!-- For DELETE: -->
  <form method="POST" action="/blogs/123?_method=DELETE">
      <button type="submit">Delete</button>
  </form>

  <!-- What the server receives: -->
  DELETE /blogs/123


========================================
1.10 — PROJECT SETUP SUMMARY
========================================

┌──────────────────────────────────────────────────────────────┐
│  SETUP CHECKLIST                                              │
│                                                               │
│  ☑ 1. npm init -y                                            │
│  ☑ 2. Install all dependencies                               │
│  ☑ 3. Create folder structure (MVC)                          │
│  ☑ 4. Create .env with PORT, MONGODB_URI, SESSION_SECRET     │
│  ☑ 5. Create .gitignore (node_modules, .env)                 │
│  ☑ 6. Setup config/db.js (MongoDB connection)                │
│  ☑ 7. Setup app.js (middleware pipeline + routes)            │
│  ☑ 8. Configure view engine (EJS)                            │
│  ☑ 9. Configure static files directory                       │
│  ☑ 10. Add npm scripts (start, dev)                          │
│  ☑ 11. Test with: npm run dev                                │
│  ☑ 12. Verify MongoDB connection in terminal                 │
└──────────────────────────────────────────────────────────────┘
*/


// ╔══════════════════════════════════════════════════════════════════════════╗
// ║                                                                          ║
// ║   TOPIC 2: AUTHENTICATION IN NODEJS (BLOG APP)                           ║
// ║                                                                          ║
// ╚══════════════════════════════════════════════════════════════════════════╝

/*
========================================
2.1 — AUTHENTICATION vs AUTHORIZATION
========================================

┌─────────────────────────────────────────────────────────────────┐
│                                                                  │
│  AUTHENTICATION (AuthN)          AUTHORIZATION (AuthZ)          │
│  ═══════════════════            ═══════════════════             │
│                                                                  │
│  "WHO are you?"                 "WHAT can you do?"              │
│                                                                  │
│  ┌─────────────┐               ┌─────────────────┐             │
│  │  Login Form  │               │  Can this user   │             │
│  │  Email: ____ │               │  edit THIS blog? │             │
│  │  Pass:  ____ │               │                   │             │
│  │  [Submit]    │               │  Owner? → YES     │             │
│  └─────────────┘               │  Other? → NO      │             │
│                                 └─────────────────┘             │
│                                                                  │
│  Examples:                      Examples:                        │
│  - Login with email/password    - Only authors can edit blogs   │
│  - Login with Google            - Only admins can delete users  │
│  - Login with GitHub            - Only premium users see content│
│                                                                  │
│  Middleware: passport.js        Middleware: custom ensureAuth   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘


========================================
2.2 — HOW SESSIONS WORK
========================================

SESSION-BASED AUTHENTICATION FLOW:

  ┌──────────┐                    ┌──────────┐                ┌──────────┐
  │  CLIENT  │                    │  SERVER  │                │ DATABASE │
  │ (Browser)│                    │ (Express)│                │ (MongoDB)│
  └────┬─────┘                    └────┬─────┘                └────┬─────┘
       │                               │                           │
       │  1. POST /auth/login          │                           │
       │  { email, password }          │                           │
       │──────────────────────────────►│                           │
       │                               │  2. Find user by email    │
       │                               │─────────────────────────►│
       │                               │                           │
       │                               │  3. Return user document  │
       │                               │◄─────────────────────────│
       │                               │                           │
       │                               │  4. Compare password      │
       │                               │     bcrypt.compare()      │
       │                               │                           │
       │                               │  5. Create SESSION        │
       │                               │     Store user.id         │
       │                               │     in session store      │
       │                               │                           │
       │  6. Set-Cookie: session_id    │                           │
       │◄──────────────────────────────│                           │
       │                               │                           │
       │  7. GET /blogs (with cookie)  │                           │
       │──────────────────────────────►│                           │
       │                               │  8. Read session_id       │
       │                               │     from cookie           │
       │                               │                           │
       │                               │  9. Deserialize:          │
       │                               │     Find user by ID       │
       │                               │─────────────────────────►│
       │                               │                           │
       │                               │  10. Attach to req.user   │
       │                               │◄─────────────────────────│
       │                               │                           │
       │  11. HTML Response            │                           │
       │◄──────────────────────────────│                           │
       │                               │                           │


SESSION vs TOKEN (JWT) COMPARISON:
┌───────────────────┬─────────────────────┬──────────────────────┐
│ Feature           │ Session-Based       │ Token-Based (JWT)    │
├───────────────────┼─────────────────────┼──────────────────────┤
│ Storage           │ Server-side         │ Client-side          │
│ Scalability       │ Harder (sticky      │ Easier (stateless)   │
│                   │ sessions needed)    │                      │
│ Revocation        │ Easy (delete        │ Hard (wait for       │
│                   │ session)            │ expiry)              │
│ Best for          │ Server-rendered     │ APIs, SPAs,          │
│                   │ apps (EJS, Pug)     │ mobile apps          │
│ Security          │ CSRF risk           │ XSS risk             │
│ We use            │ ✅ THIS ONE          │                      │
└───────────────────┴─────────────────────┴──────────────────────┘


========================================
2.3 — USER MODEL (models/User.js)
========================================
*/

const user_model_code = `
const mongoose = require('mongoose');
const bcrypt   = require('bcryptjs');

// ==========================================
// SCHEMA DEFINITION
// ==========================================
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        trim: true,
        minlength: [3, 'Username must be at least 3 characters'],
        maxlength: [30, 'Username cannot exceed 30 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        match: [
            /^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/,
            'Please provide a valid email'
        ]
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters']
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
}, {
    timestamps: true   // Auto createdAt, updatedAt
});

// ==========================================
// PRE-SAVE HOOK: Hash password before saving
// ==========================================
/*
  WHY PRE-SAVE HOOK?
  → Automatically runs before every .save()
  → No need to hash manually in controllers
  → Single source of truth for password hashing

  WHY CHECK isModified?
  → On user update (e.g., change username), password
    would get re-hashed if we don't check
  → Only hash when password is new or changed
*/
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();

    const salt = await bcrypt.genSalt(12);      // 12 rounds (more secure)
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// ==========================================
// INSTANCE METHOD: Compare passwords
// ==========================================
/*
  USAGE: const isMatch = await user.comparePassword('inputPassword');

  HOW bcrypt.compare WORKS:
  1. Extract salt from stored hash
  2. Hash the input with same salt
  3. Compare the two hashes
  4. Return true/false
*/
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// ==========================================
// STATIC METHOD: Find by email
// ==========================================
userSchema.statics.findByEmail = function(email) {
    return this.findOne({ email: email.toLowerCase() });
};

module.exports = mongoose.model('User', userSchema);
`;

/*
PASSWORD SECURITY DEEP DIVE:
============================

Plain text:    "mypassword123"
                    │
                    ▼
bcrypt.genSalt(12)  → Generates random salt
                    │
                    ▼
Salt:          "$2a$12$LJ3m4ys3Gkl0TbKjYR8Ohe"
                    │
                    ▼
bcrypt.hash()  → Combines password + salt + hashes
                    │
                    ▼
Stored hash:   "$2a$12$LJ3m4ys3Gkl0TbKjYR8OheK8XjGqVU2sFzH4K8YJsNPt7.9olCfO"

ANATOMY OF A BCRYPT HASH:
$2a$12$LJ3m4ys3Gkl0TbKjYR8OheK8XjGqVU2sFzH4K8YJsNPt7.9olCfO
 │   │  │                      │
 │   │  └── Salt (22 chars)    └── Hash (31 chars)
 │   │
 │   └── Cost factor (12 rounds = 2^12 = 4096 iterations)
 │
 └── Algorithm identifier (2a = bcrypt)

COST FACTOR COMPARISON:
┌────────┬────────────────┬───────────────────┐
│ Rounds │ Time to Hash   │ Security Level    │
├────────┼────────────────┼───────────────────┤
│ 10     │ ~100ms         │ Good (minimum)    │
│ 12     │ ~300ms         │ Better ✅         │
│ 14     │ ~1 second      │ Strong            │
│ 16     │ ~4 seconds     │ Very strong       │
└────────┴────────────────┴───────────────────┘


========================================
2.4 — PASSPORT CONFIGURATION (config/passport.js)
========================================
*/

const passport_config_code = `
const LocalStrategy = require('passport-local').Strategy;
const User          = require('../models/User');

module.exports = function(passport) {

    // ==========================================
    // STRATEGY: Local (Email + Password)
    // ==========================================
    /*
      Passport strategies define HOW authentication works.
      LocalStrategy = traditional email + password login.

      Other strategies available:
      - passport-google-oauth20 (Google login)
      - passport-github2 (GitHub login)
      - passport-facebook (Facebook login)
      - passport-jwt (JSON Web Token)
    */
    passport.use(new LocalStrategy(
        {
            usernameField: 'email',      // Map form field 'email' to username
            passwordField: 'password'     // Map form field 'password'
        },
        async (email, password, done) => {
            try {
                // Step 1: Find user by email
                const user = await User.findByEmail(email);

                if (!user) {
                    // null = no error, false = no user, message = reason
                    return done(null, false, {
                        message: 'No account found with that email'
                    });
                }

                // Step 2: Compare passwords
                const isMatch = await user.comparePassword(password);

                if (!isMatch) {
                    return done(null, false, {
                        message: 'Incorrect password'
                    });
                }

                // Step 3: Authentication successful
                return done(null, user);

            } catch (error) {
                return done(error);
            }
        }
    ));

    // ==========================================
    // SERIALIZE: Store user ID in session
    // ==========================================
    /*
      Called ONCE after successful login.
      Determines WHAT data to store in the session.
      We store only the user ID (minimal data = faster).
    */
    passport.serializeUser((user, done) => {
        done(null, user.id);  // Store user.id in session
    });

    // ==========================================
    // DESERIALIZE: Retrieve full user from session
    // ==========================================
    /*
      Called on EVERY subsequent request.
      Uses the stored ID to fetch the full user object.
      Attaches the user to req.user.
    */
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id).select('-password');
            // select('-password') excludes password from the object
            done(null, user);
        } catch (error) {
            done(error, null);
        }
    });
};
`;

/*
PASSPORT CALLBACK PATTERN: done(error, user, info)

  done(null, user)           → Success: user authenticated
  done(null, false, {msg})   → Failure: invalid credentials
  done(error)                → Error: server/database error

SERIALIZE/DESERIALIZE LIFECYCLE:

  LOGIN:
  ======
  User logs in successfully
       │
       ▼
  serializeUser(user, done)
       │
       ▼
  done(null, user.id)  → Store "user.id" in session
       │
       ▼
  Session: { passport: { user: "64a1b2c3..." } }
       │
       ▼
  Cookie sent to browser: connect.sid=s%3A...

  EVERY SUBSEQUENT REQUEST:
  =========================
  Browser sends cookie
       │
       ▼
  Session looked up by cookie
       │
       ▼
  deserializeUser(id, done)
       │
       ▼
  User.findById(id)  → Fetch full user from DB
       │
       ▼
  done(null, user)  → Attach to req.user
       │
       ▼
  Route handler can access req.user


========================================
2.5 — AUTH CONTROLLER (controllers/authController.js)
========================================
*/

const auth_controller_code = `
const User     = require('../models/User');
const passport = require('passport');

// ==========================================
// SHOW REGISTRATION FORM
// ==========================================
exports.showRegisterForm = (req, res) => {
    res.render('auth/register', { title: 'Register' });
};

// ==========================================
// HANDLE REGISTRATION
// ==========================================
exports.register = async (req, res) => {
    try {
        const { username, email, password, confirmPassword } = req.body;

        // ---- VALIDATION ----
        const errors = [];

        if (!username || !email || !password || !confirmPassword) {
            errors.push('All fields are required');
        }

        if (password !== confirmPassword) {
            errors.push('Passwords do not match');
        }

        if (password && password.length < 6) {
            errors.push('Password must be at least 6 characters');
        }

        // Check if user already exists
        const existingUser = await User.findOne({
            $or: [{ email }, { username }]
        });

        if (existingUser) {
            if (existingUser.email === email) {
                errors.push('Email already registered');
            }
            if (existingUser.username === username) {
                errors.push('Username already taken');
            }
        }

        // If errors, re-render form with error messages
        if (errors.length > 0) {
            return res.render('auth/register', {
                title: 'Register',
                errors,
                username,   // Preserve form data
                email       // so user doesn't re-type
            });
        }

        // ---- CREATE USER ----
        const newUser = new User({ username, email, password });
        await newUser.save();
        // Password is auto-hashed by pre-save hook!

        req.flash('success', 'Registration successful! Please login.');
        res.redirect('/auth/login');

    } catch (error) {
        console.error('Registration error:', error);
        req.flash('error', 'Something went wrong. Please try again.');
        res.redirect('/auth/register');
    }
};

// ==========================================
// SHOW LOGIN FORM
// ==========================================
exports.showLoginForm = (req, res) => {
    res.render('auth/login', { title: 'Login' });
};

// ==========================================
// HANDLE LOGIN
// ==========================================
/*
  passport.authenticate() is a middleware function.
  It calls the LocalStrategy we defined in config/passport.js.

  Options:
  - successRedirect: where to go after successful login
  - failureRedirect: where to go after failed login
  - failureFlash: show error message from strategy
*/
exports.login = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/blogs',
        failureRedirect: '/auth/login',
        failureFlash: true    // Uses the message from done(null, false, {message})
    })(req, res, next);
};

// ==========================================
// HANDLE LOGOUT
// ==========================================
exports.logout = (req, res, next) => {
    req.logout(function(err) {
        if (err) return next(err);
        req.flash('success', 'You have been logged out');
        res.redirect('/auth/login');
    });
};
`;

/*
========================================
2.6 — AUTH ROUTES (routes/authRoutes.js)
========================================
*/

const auth_routes_code = `
const express        = require('express');
const router         = express.Router();
const authController = require('../controllers/authController');

// Middleware: redirect if already logged in
const ensureGuest = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect('/blogs');
    }
    next();
};

// ==========================================
// AUTH ROUTES
// ==========================================
/*
  METHOD   URL               CONTROLLER             MIDDLEWARE
  ──────   ────────────────  ────────────────────    ──────────
  GET      /auth/register    showRegisterForm        ensureGuest
  POST     /auth/register    register                ensureGuest
  GET      /auth/login       showLoginForm           ensureGuest
  POST     /auth/login       login                   ensureGuest
  GET      /auth/logout      logout                  (none)
*/

router.get('/register',  ensureGuest, authController.showRegisterForm);
router.post('/register', ensureGuest, authController.register);
router.get('/login',     ensureGuest, authController.showLoginForm);
router.post('/login',    ensureGuest, authController.login);
router.get('/logout',    authController.logout);

module.exports = router;
`;

/*
========================================
2.7 — AUTH MIDDLEWARE (middleware/authMiddleware.js)
========================================
*/

const auth_middleware_code = `
// ==========================================
// PROTECT ROUTES: Must be logged in
// ==========================================
/*
  req.isAuthenticated() → Provided by Passport.js
  Returns true if user is logged in (session exists)
  Returns false otherwise
*/
exports.ensureAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();  // User is logged in → proceed to route
    }
    req.flash('error', 'Please login to access this page');
    res.redirect('/auth/login');
};

// ==========================================
// PROTECT ROUTES: Must NOT be logged in
// ==========================================
exports.ensureGuest = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect('/blogs');  // Already logged in → redirect
    }
    next();
};

// ==========================================
// AUTHORIZATION: Check resource ownership
// ==========================================
/*
  AUTHENTICATION = Are you logged in?
  AUTHORIZATION  = Are you ALLOWED to do this?

  Example: User A should NOT edit User B's blog post
*/
exports.ensureOwner = (model) => {
    return async (req, res, next) => {
        try {
            const resource = await model.findById(req.params.id);

            if (!resource) {
                req.flash('error', 'Resource not found');
                return res.redirect('/blogs');
            }

            // Compare the resource's author with logged-in user
            if (resource.author.toString() !== req.user._id.toString()) {
                req.flash('error', 'You are not authorized to do this');
                return res.redirect('/blogs');
            }

            // User owns this resource → proceed
            next();

        } catch (error) {
            console.error(error);
            res.redirect('/blogs');
        }
    };
};
`;

/*
MIDDLEWARE USAGE IN ROUTES:

  const { ensureAuth, ensureOwner } = require('../middleware/authMiddleware');
  const Blog = require('../models/Blog');

  // Anyone can view blogs
  router.get('/', blogController.getAllBlogs);

  // Must be logged in to create
  router.post('/', ensureAuth, blogController.createBlog);

  // Must be logged in AND must be the author to edit/delete
  router.put('/:id',    ensureAuth, ensureOwner(Blog), blogController.updateBlog);
  router.delete('/:id', ensureAuth, ensureOwner(Blog), blogController.deleteBlog);


========================================
2.8 — AUTH VIEWS (EJS Templates)
========================================

views/auth/register.ejs:
*/

const register_ejs = `
<%- include('../partials/header') %>

<div class="auth-container">
    <h1>Create Account</h1>

    <%# Display validation errors %>
    <% if (typeof errors !== 'undefined' && errors.length > 0) { %>
        <div class="alert alert-danger">
            <% errors.forEach(error => { %>
                <p><%= error %></p>
            <% }) %>
        </div>
    <% } %>

    <%# Display flash messages %>
    <% if (error_msg && error_msg.length > 0) { %>
        <div class="alert alert-danger">
            <% error_msg.forEach(msg => { %>
                <p><%= msg %></p>
            <% }) %>
        </div>
    <% } %>

    <form action="/auth/register" method="POST">
        <div class="form-group">
            <label for="username">Username</label>
            <input
                type="text"
                id="username"
                name="username"
                value="<%= typeof username !== 'undefined' ? username : '' %>"
                placeholder="Enter username"
                required
            >
        </div>

        <div class="form-group">
            <label for="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value="<%= typeof email !== 'undefined' ? email : '' %>"
                placeholder="Enter email"
                required
            >
        </div>

        <div class="form-group">
            <label for="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password (min 6 chars)"
                required
                minlength="6"
            >
        </div>

        <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm password"
                required
            >
        </div>

        <button type="submit" class="btn btn-primary">Register</button>
    </form>

    <p>Already have an account? <a href="/auth/login">Login here</a></p>
</div>

<%- include('../partials/footer') %>
`;

/*
views/auth/login.ejs:
*/

const login_ejs = `
<%- include('../partials/header') %>

<div class="auth-container">
    <h1>Login</h1>

    <%# Flash messages %>
    <% if (success_msg && success_msg.length > 0) { %>
        <div class="alert alert-success">
            <% success_msg.forEach(msg => { %>
                <p><%= msg %></p>
            <% }) %>
        </div>
    <% } %>

    <% if (error_msg && error_msg.length > 0) { %>
        <div class="alert alert-danger">
            <% error_msg.forEach(msg => { %>
                <p><%= msg %></p>
            <% }) %>
        </div>
    <% } %>

    <%# Passport error messages %>
    <% if (passport_error && passport_error.length > 0) { %>
        <div class="alert alert-danger">
            <% passport_error.forEach(msg => { %>
                <p><%= msg %></p>
            <% }) %>
        </div>
    <% } %>

    <form action="/auth/login" method="POST">
        <div class="form-group">
            <label for="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
            >
        </div>

        <div class="form-group">
            <label for="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
            >
        </div>

        <button type="submit" class="btn btn-primary">Login</button>
    </form>

    <p>Don't have an account? <a href="/auth/register">Register here</a></p>
</div>

<%- include('../partials/footer') %>
`;

/*
========================================
2.9 — COMPLETE AUTH FLOW DIAGRAM
========================================

┌─────────────────────────────────────────────────────────────────┐
│                   REGISTRATION FLOW                              │
│                                                                  │
│  User fills form → POST /auth/register                          │
│       │                                                          │
│       ▼                                                          │
│  authController.register()                                       │
│       │                                                          │
│       ├── Validate input (empty fields, password match)         │
│       │       │                                                  │
│       │       ├── Errors? → Re-render form with errors          │
│       │       │                                                  │
│       │       └── Valid? → Continue ▼                            │
│       │                                                          │
│       ├── Check if user exists (email/username)                 │
│       │       │                                                  │
│       │       ├── Exists? → Re-render with "already exists"     │
│       │       │                                                  │
│       │       └── New? → Continue ▼                              │
│       │                                                          │
│       ├── Create new User({ username, email, password })         │
│       │                                                          │
│       ├── user.save() triggers pre-save hook                     │
│       │       │                                                  │
│       │       └── bcrypt hashes password automatically           │
│       │                                                          │
│       ├── Flash success message                                  │
│       │                                                          │
│       └── Redirect to /auth/login                                │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                      LOGIN FLOW                                  │
│                                                                  │
│  User fills form → POST /auth/login                             │
│       │                                                          │
│       ▼                                                          │
│  passport.authenticate('local')                                  │
│       │                                                          │
│       ▼                                                          │
│  LocalStrategy callback executes:                                │
│       │                                                          │
│       ├── User.findByEmail(email)                                │
│       │       │                                                  │
│       │       ├── Not found → done(null, false, 'No account')   │
│       │       │                   │                              │
│       │       │                   └── failureRedirect → /login   │
│       │       │                                                  │
│       │       └── Found → Continue ▼                             │
│       │                                                          │
│       ├── user.comparePassword(password)                         │
│       │       │                                                  │
│       │       ├── No match → done(null, false, 'Wrong password')│
│       │       │                  │                               │
│       │       │                  └── failureRedirect → /login    │
│       │       │                                                  │
│       │       └── Match → done(null, user) ✅                    │
│       │                                                          │
│       ├── serializeUser(user) → Store user.id in session        │
│       │                                                          │
│       ├── Set session cookie in browser                          │
│       │                                                          │
│       └── successRedirect → /blogs                               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘


========================================
2.10 — AUTH SECURITY BEST PRACTICES
========================================

┌──────────────────────────────────────────────────────────────┐
│                SECURITY CHECKLIST                             │
│                                                               │
│  ✅ Hash passwords with bcrypt (12+ rounds)                  │
│  ✅ Use HTTPS in production (prevents packet sniffing)       │
│  ✅ Set httpOnly: true on cookies (prevents XSS access)     │
│  ✅ Set secure: true on cookies in production                │
│  ✅ Validate input on BOTH client and server                 │
│  ✅ Use parameterized queries (Mongoose handles this)        │
│  ✅ Implement rate limiting on login routes                  │
│  ✅ Use CSRF tokens for form submissions                     │
│  ✅ Don't expose user details in error messages              │
│     (say "Invalid credentials" not "Wrong password")         │
│  ✅ Store session secret in .env (not in code)               │
│  ✅ Use select('-password') when fetching users               │
│  ✅ Implement account lockout after N failed attempts        │
│                                                               │
│  ❌ NEVER store plain text passwords                         │
│  ❌ NEVER log passwords to console                           │
│  ❌ NEVER send passwords in URLs (query strings)             │
│  ❌ NEVER trust client-side validation alone                 │
│  ❌ NEVER commit .env or secrets to version control          │
└──────────────────────────────────────────────────────────────┘
*/


// ╔══════════════════════════════════════════════════════════════════════════╗
// ║                                                                          ║
// ║   TOPIC 3: COMPLETE BLOG APP (NODEJS + MONGODB + EJS)                    ║
// ║                                                                          ║
// ╚══════════════════════════════════════════════════════════════════════════╝

// blog model from here

const blog_model_code = `
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        maxlength: [200, 'Title cannot exceed 200 characters']
    },
    slug: {
        type: String,
        unique: true
        // Auto-generated from title (see pre-save hook)
    },
    body: {
        type: String,
        required: [true, 'Blog content is required']
    },
    excerpt: {
        type: String,
        maxlength: [500, 'Excerpt cannot exceed 500 characters']
        // Auto-generated from body if not provided
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',                          // References User model
        required: true
    },
    tags: {
        type: [String],
        default: [],
        // Setter to clean up tags
        set: function(tags) {
            if (typeof tags === 'string') {
                return tags.split(',').map(t => t.trim().toLowerCase());
            }
            return tags.map(t => t.trim().toLowerCase());
        }
    },
    coverImage: {
        type: String,
        default: '/images/default-blog.jpg'
    },
    status: {
        type: String,
        enum: ['draft', 'published'],
        default: 'draft'
    },
    views: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true        // createdAt + updatedAt
});

// ==========================================
// INDEXES for faster queries
// ==========================================
blogSchema.index({ author: 1 });           // Fast lookup by author
blogSchema.index({ status: 1 });           // Fast lookup by status
blogSchema.index({ tags: 1 });             // Fast lookup by tags
blogSchema.index({ createdAt: -1 });       // Fast sort by date
blogSchema.index({                         // Text search index
    title: 'text',
    body: 'text'
});

// ==========================================
// PRE-SAVE: Generate slug and excerpt
// ==========================================
blogSchema.pre('save', function(next) {
    // Generate URL-friendly slug from title
    if (this.isModified('title')) {
        this.slug = this.title
            .toLowerCase()
            .replace(/[^a-zA-Z0-9]/g, '-')   // Replace non-alphanumeric
            .replace(/-+/g, '-')               // Replace multiple dashes
            .replace(/^-|-$/g, '');            // Remove leading/trailing dashes
    }

    // Auto-generate excerpt from body (first 150 chars)
    if (this.isModified('body') && !this.excerpt) {
        this.excerpt = this.body.substring(0, 150) + '...';
    }

    next();
});

// ==========================================
// VIRTUAL: Reading time calculation
// ==========================================
/*
  Virtuals are computed properties that are NOT stored in DB.
  Average reading speed: 200 words per minute
*/
blogSchema.virtual('readingTime').get(function() {
    const wordCount = this.body.split(/\\s+/).length;
    const minutes   = Math.ceil(wordCount / 200);
    return minutes + ' min read';
});

// Ensure virtuals are included in JSON/Object output
blogSchema.set('toJSON', { virtuals: true });
blogSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Blog', blogSchema);
`;

/*
BLOG DOCUMENT EXAMPLE (stored in MongoDB):
==========================================

{
    "_id": ObjectId("64a1b2c3d4e5f6a7b8c9d0e1"),
    "title": "Getting Started with Node.js",
    "slug": "getting-started-with-node-js",
    "body": "Node.js is an open-source, cross-platform...",
    "excerpt": "Node.js is an open-source, cross-platform...",
    "author": ObjectId("64a1b2c3d4e5f6a7b8c9d0e2"),
    "tags": ["nodejs", "javascript", "backend"],
    "coverImage": "/images/default-blog.jpg",
    "status": "published",
    "views": 42,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T14:45:00.000Z"
}

VIRTUAL (computed, NOT stored):
  readingTime: "5 min read"


========================================
3.2 — BLOG CONTROLLER (controllers/blogController.js)
========================================
*/

const blog_controller_code = `
const Blog = require('../models/Blog');

// ==========================================
// GET ALL BLOGS (with pagination & search)
// ==========================================
exports.getAllBlogs = async (req, res) => {
    try {
        // Pagination
        const page    = parseInt(req.query.page) || 1;
        const limit   = parseInt(req.query.limit) || 10;
        const skip    = (page - 1) * limit;

        // Search filter
        let filter = { status: 'published' };

        // Search by keyword
        if (req.query.search) {
            filter.$text = { $search: req.query.search };
        }

        // Filter by tag
        if (req.query.tag) {
            filter.tags = req.query.tag.toLowerCase();
        }

        // Execute query with population, sorting, pagination
        const blogs = await Blog.find(filter)
            .populate('author', 'username')    // Get author's username
            .sort({ createdAt: -1 })           // Newest first
            .skip(skip)                         // Pagination offset
            .limit(limit);                      // Pagination limit

        // Get total count for pagination
        const totalBlogs = await Blog.countDocuments(filter);
        const totalPages = Math.ceil(totalBlogs / limit);

        res.render('blogs/index', {
            title: 'All Blogs',
            blogs,
            currentPage: page,
            totalPages,
            search: req.query.search || '',
            tag: req.query.tag || ''
        });

    } catch (error) {
        console.error('Error fetching blogs:', error);
        req.flash('error', 'Failed to load blogs');
        res.redirect('/');
    }
};

// ==========================================
// GET SINGLE BLOG
// ==========================================
exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id)
            .populate('author', 'username email');

        if (!blog) {
            req.flash('error', 'Blog not found');
            return res.redirect('/blogs');
        }

        // Increment view count (don't await, fire and forget)
        Blog.findByIdAndUpdate(req.params.id, { $inc: { views: 1 } }).exec();

        // Check if current user is the author
        const isAuthor = req.user &&
            blog.author._id.toString() === req.user._id.toString();

        res.render('blogs/show', {
            title: blog.title,
            blog,
            isAuthor
        });

    } catch (error) {
        console.error('Error fetching blog:', error);
        req.flash('error', 'Blog not found');
        res.redirect('/blogs');
    }
};

// ==========================================
// SHOW CREATE FORM
// ==========================================
exports.showCreateForm = (req, res) => {
    res.render('blogs/new', { title: 'Create New Blog' });
};

// ==========================================
// CREATE BLOG
// ==========================================
exports.createBlog = async (req, res) => {
    try {
        const { title, body, tags, status, coverImage } = req.body;

        const newBlog = new Blog({
            title,
            body,
            tags,                      // Setter in schema handles parsing
            status: status || 'draft',
            coverImage: coverImage || undefined,
            author: req.user._id       // From passport session
        });

        const savedBlog = await newBlog.save();

        req.flash('success', 'Blog created successfully!');
        res.redirect('/blogs/' + savedBlog._id);

    } catch (error) {
        console.error('Error creating blog:', error);
        res.render('blogs/new', {
            title: 'Create New Blog',
            error: error.message,
            blog: req.body            // Preserve form data
        });
    }
};

// ==========================================
// SHOW EDIT FORM
// ==========================================
exports.showEditForm = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            req.flash('error', 'Blog not found');
            return res.redirect('/blogs');
        }

        // Authorization check
        if (blog.author.toString() !== req.user._id.toString()) {
            req.flash('error', 'Not authorized');
            return res.redirect('/blogs');
        }

        res.render('blogs/edit', {
            title: 'Edit Blog',
            blog
        });

    } catch (error) {
        console.error('Error:', error);
        res.redirect('/blogs');
    }
};

// ==========================================
// UPDATE BLOG
// ==========================================
exports.updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            req.flash('error', 'Blog not found');
            return res.redirect('/blogs');
        }

        // Authorization check
        if (blog.author.toString() !== req.user._id.toString()) {
            req.flash('error', 'Not authorized');
            return res.redirect('/blogs');
        }

        // Update fields
        const { title, body, tags, status, coverImage } = req.body;
        blog.title      = title;
        blog.body       = body;
        blog.tags       = tags;
        blog.status     = status;
        blog.coverImage = coverImage || blog.coverImage;

        await blog.save();    // Triggers pre-save hook (slug regeneration)

        req.flash('success', 'Blog updated successfully!');
        res.redirect('/blogs/' + blog._id);

    } catch (error) {
        console.error('Error updating blog:', error);
        req.flash('error', 'Failed to update blog');
        res.redirect('/blogs/' + req.params.id + '/edit');
    }
};

// ==========================================
// DELETE BLOG
// ==========================================
exports.deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            req.flash('error', 'Blog not found');
            return res.redirect('/blogs');
        }

        // Authorization check
        if (blog.author.toString() !== req.user._id.toString()) {
            req.flash('error', 'Not authorized');
            return res.redirect('/blogs');
        }

        await Blog.findByIdAndDelete(req.params.id);

        req.flash('success', 'Blog deleted successfully');
        res.redirect('/blogs');

    } catch (error) {
        console.error('Error deleting blog:', error);
        req.flash('error', 'Failed to delete blog');
        res.redirect('/blogs');
    }
};

// ==========================================
// GET USER'S BLOGS (Dashboard)
// ==========================================
exports.getUserBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ author: req.user._id })
            .sort({ createdAt: -1 });

        res.render('blogs/dashboard', {
            title: 'My Blogs',
            blogs
        });

    } catch (error) {
        console.error('Error:', error);
        res.redirect('/');
    }
};
`;

/*
========================================
3.3 — BLOG ROUTES (routes/blogRoutes.js)
========================================
*/

const blog_routes_code = `
const express        = require('express');
const router         = express.Router();
const blogController = require('../controllers/blogController');
const { ensureAuth } = require('../middleware/authMiddleware');

// ==========================================
// RESTful ROUTES
// ==========================================
/*
  ┌────────────────────────────────────────────────────────────────┐
  │  HTTP     URL                  ACTION         AUTH    OWNER   │
  │  METHOD                                       REQ?    REQ?   │
  ├────────────────────────────────────────────────────────────────┤
  │  GET      /blogs               List all       No      No     │
  │  GET      /blogs/dashboard     User's blogs   Yes     -      │
  │  GET      /blogs/new           Create form    Yes     -      │
  │  POST     /blogs               Create blog    Yes     -      │
  │  GET      /blogs/:id           Show one       No      No     │
  │  GET      /blogs/:id/edit      Edit form      Yes     Yes    │
  │  PUT      /blogs/:id           Update blog    Yes     Yes    │
  │  DELETE   /blogs/:id           Delete blog    Yes     Yes    │
  └────────────────────────────────────────────────────────────────┘

  ⚠️ ORDER MATTERS!
  /blogs/new MUST come BEFORE /blogs/:id
  Otherwise Express treats "new" as an :id parameter
*/

// Public routes
router.get('/',          blogController.getAllBlogs);

// Auth-required routes (place specific routes BEFORE parameterized ones)
router.get('/dashboard', ensureAuth, blogController.getUserBlogs);
router.get('/new',       ensureAuth, blogController.showCreateForm);
router.post('/',         ensureAuth, blogController.createBlog);

// Parameterized routes (MUST come after /new, /dashboard)
router.get('/:id',       blogController.getBlogById);
router.get('/:id/edit',  ensureAuth, blogController.showEditForm);
router.put('/:id',       ensureAuth, blogController.updateBlog);
router.delete('/:id',    ensureAuth, blogController.deleteBlog);

module.exports = router;
`;

/*
========================================
3.4 — EJS VIEWS
========================================

views/partials/header.ejs:
*/

const header_ejs = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= typeof title !== 'undefined' ? title + ' | BlogApp' : 'BlogApp' %></title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <a href="/" class="nav-brand">📝 BlogApp</a>

            <div class="nav-links">
                <a href="/blogs">All Blogs</a>

                <% if (currentUser) { %>
                    <a href="/blogs/dashboard">My Blogs</a>
                    <a href="/blogs/new">Write Blog</a>
                    <span class="nav-user">Hello, <%= currentUser.username %></span>
                    <a href="/auth/logout" class="btn btn-outline">Logout</a>
                <% } else { %>
                    <a href="/auth/login" class="btn btn-outline">Login</a>
                    <a href="/auth/register" class="btn btn-primary">Register</a>
                <% } %>
            </div>
        </div>
    </nav>

    <%# Flash Messages %>
    <div class="container">
        <% if (success_msg && success_msg.length > 0) { %>
            <div class="alert alert-success">
                <% success_msg.forEach(msg => { %>
                    <p><%= msg %></p>
                <% }) %>
            </div>
        <% } %>

        <% if (error_msg && error_msg.length > 0) { %>
            <div class="alert alert-danger">
                <% error_msg.forEach(msg => { %>
                    <p><%= msg %></p>
                <% }) %>
            </div>
        <% } %>
    </div>

    <main class="container">
`;

/*
views/partials/footer.ejs:
*/

const footer_ejs = `
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; <%= new Date().getFullYear() %> BlogApp. All rights reserved.</p>
        </div>
    </footer>

    <script src="/js/main.js"></script>
</body>
</html>
`;

/*
views/blogs/index.ejs:
*/

const blogs_index_ejs = `
<%- include('../partials/header') %>

<div class="blogs-page">
    <div class="page-header">
        <h1>All Blog Posts</h1>

        <%# Search Form %>
        <form action="/blogs" method="GET" class="search-form">
            <input
                type="text"
                name="search"
                placeholder="Search blogs..."
                value="<%= search %>"
            >
            <button type="submit">Search</button>
        </form>
    </div>

    <%# Blog Cards %>
    <% if (blogs.length > 0) { %>
        <div class="blog-grid">
            <% blogs.forEach(blog => { %>
                <article class="blog-card">
                    <img src="<%= blog.coverImage %>" alt="<%= blog.title %>" class="blog-cover">

                    <div class="blog-card-body">
                        <div class="blog-meta">
                            <span class="author">By <%= blog.author.username %></span>
                            <span class="date">
                                <%= blog.createdAt.toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                }) %>
                            </span>
                            <span class="reading-time"><%= blog.readingTime %></span>
                        </div>

                        <h2 class="blog-title">
                            <a href="/blogs/<%= blog._id %>"><%= blog.title %></a>
                        </h2>

                        <p class="blog-excerpt"><%= blog.excerpt %></p>

                        <div class="blog-tags">
                            <% blog.tags.forEach(tag => { %>
                                <a href="/blogs?tag=<%= tag %>" class="tag">#<%= tag %></a>
                            <% }) %>
                        </div>

                        <a href="/blogs/<%= blog._id %>" class="read-more">
                            Read More →
                        </a>
                    </div>
                </article>
            <% }) %>
        </div>

        <%# Pagination %>
        <div class="pagination">
            <% if (currentPage > 1) { %>
                <a href="/blogs?page=<%= currentPage - 1 %>" class="page-link">← Previous</a>
            <% } %>

            <% for (let i = 1; i <= totalPages; i++) { %>
                <a href="/blogs?page=<%= i %>"
                   class="page-link <%= i === currentPage ? 'active' : '' %>">
                    <%= i %>
                </a>
            <% } %>

            <% if (currentPage < totalPages) { %>
                <a href="/blogs?page=<%= currentPage + 1 %>" class="page-link">Next →</a>
            <% } %>
        </div>
    <% } else { %>
        <div class="empty-state">
            <h2>No blogs found</h2>
            <p>Be the first to share your thoughts!</p>
            <% if (currentUser) { %>
                <a href="/blogs/new" class="btn btn-primary">Write a Blog</a>
            <% } %>
        </div>
    <% } %>
</div>

<%- include('../partials/footer') %>
`;

/*
views/blogs/show.ejs:
*/

const blog_show_ejs = `
<%- include('../partials/header') %>

<article class="blog-detail">
    <header class="blog-header">
        <h1><%= blog.title %></h1>

        <div class="blog-meta">
            <span class="author">By <%= blog.author.username %></span>
            <span class="date"><%= blog.createdAt.toLocaleDateString() %></span>
            <span class="views"><%= blog.views %> views</span>
            <span class="reading-time"><%= blog.readingTime %></span>
        </div>

        <div class="blog-tags">
            <% blog.tags.forEach(tag => { %>
                <a href="/blogs?tag=<%= tag %>" class="tag">#<%= tag %></a>
            <% }) %>
        </div>
    </header>

    <% if (blog.coverImage) { %>
        <img src="<%= blog.coverImage %>" alt="<%= blog.title %>" class="blog-cover-full">
    <% } %>

    <div class="blog-body">
        <%- blog.body %>
        <%# Using <%- (unescaped) to render HTML in blog body %>
        <%# ⚠️ Make sure to sanitize input before saving! %>
    </div>

    <%# Show edit/delete buttons only for the author %>
    <% if (isAuthor) { %>
        <div class="blog-actions">
            <a href="/blogs/<%= blog._id %>/edit" class="btn btn-secondary">
                ✏️ Edit
            </a>

            <form action="/blogs/<%= blog._id %>?_method=DELETE"
                  method="POST"
                  class="inline-form"
                  onsubmit="return confirm('Are you sure you want to delete this blog?')">
                <button type="submit" class="btn btn-danger">
                    🗑️ Delete
                </button>
            </form>
        </div>
    <% } %>

    <a href="/blogs" class="back-link">← Back to all blogs</a>
</article>

<%- include('../partials/footer') %>
`;

/*
views/blogs/new.ejs:
*/

const blog_new_ejs = `
<%- include('../partials/header') %>

<div class="blog-form-container">
    <h1>Create New Blog Post</h1>

    <% if (typeof error !== 'undefined') { %>
        <div class="alert alert-danger">
            <p><%= error %></p>
        </div>
    <% } %>

    <form action="/blogs" method="POST" class="blog-form">
        <div class="form-group">
            <label for="title">Title *</label>
            <input
                type="text"
                id="title"
                name="title"
                value="<%= typeof blog !== 'undefined' ? blog.title : '' %>"
                placeholder="Enter blog title"
                required
                maxlength="200"
            >
        </div>

        <div class="form-group">
            <label for="body">Content *</label>
            <textarea
                id="body"
                name="body"
                rows="15"
                placeholder="Write your blog content here..."
                required
            ><%= typeof blog !== 'undefined' ? blog.body : '' %></textarea>
        </div>

        <div class="form-group">
            <label for="tags">Tags (comma-separated)</label>
            <input
                type="text"
                id="tags"
                name="tags"
                value="<%= typeof blog !== 'undefined' ? blog.tags : '' %>"
                placeholder="nodejs, javascript, webdev"
            >
        </div>

        <div class="form-group">
            <label for="coverImage">Cover Image URL</label>
            <input
                type="url"
                id="coverImage"
                name="coverImage"
                placeholder="https://example.com/image.jpg"
            >
        </div>

        <div class="form-group">
            <label for="status">Status</label>
            <select id="status" name="status">
                <option value="draft">Draft (save for later)</option>
                <option value="published">Published (visible to all)</option>
            </select>
        </div>

        <div class="form-actions">
            <button type="submit" class="btn btn-primary">Create Blog</button>
            <a href="/blogs" class="btn btn-outline">Cancel</a>
        </div>
    </form>
</div>

<%- include('../partials/footer') %>
`;

/*
ejs syntx

┌──────────────┬───────────────────────────────────────────────────┐
│ SYNTAX       │ PURPOSE & EXAMPLE                                 │
├──────────────┼───────────────────────────────────────────────────┤
│ <%= %>       │ Output ESCAPED value (SAFE, prevents XSS)        │
│              │ <%= user.name %>     →  John &lt;script&gt;      │
│              │ HTML entities are escaped automatically           │
├──────────────┼───────────────────────────────────────────────────┤
│ <%- %>       │ Output UNESCAPED/RAW HTML (⚠️ DANGEROUS)          │
│              │ <%- blog.body %>     →  <h1>Hello</h1>           │
│              │ Use ONLY with sanitized/trusted content           │
├──────────────┼───────────────────────────────────────────────────┤
│ <% %>        │ Execute JavaScript (no output)                    │
│              │ <% if (user) { %>                                 │
│              │     <p>Hello</p>                                  │
│              │ <% } %>                                           │
├──────────────┼───────────────────────────────────────────────────┤
│ <%- include  │ Include partial template                          │
│ ('path') %>  │ <%- include('partials/header') %>                 │
│              │ Path is relative to views directory               │
├──────────────┼───────────────────────────────────────────────────┤
│ <%# %>       │ Comment (NOT rendered in output HTML)             │
│              │ <%# This is invisible to the browser %>           │
├──────────────┼───────────────────────────────────────────────────┤
│ <%_ %>       │ Whitespace trimming (start)                       │
│ _%>          │ Removes preceding/trailing whitespace             │
└──────────────┴───────────────────────────────────────────────────┘


========================================
3.6 — MONGOOSE QUERIES CHEATSHEET
========================================

// ============ CREATE ============
const blog = new Blog({ title, body, author });
await blog.save();                              // Instance method
await Blog.create({ title, body, author });     // Static method

// ============ READ ============
await Blog.find();                              // All documents
await Blog.find({ status: 'published' });       // With filter
await Blog.findById(id);                        // By ObjectId
await Blog.findOne({ slug: 'my-blog' });        // First match
await Blog.countDocuments({ status: 'draft' }); // Count

// ============ UPDATE ============
await Blog.findByIdAndUpdate(id, { title: 'New' }, { new: true });
blog.title = 'New';
await blog.save();                              // Triggers hooks

// ============ DELETE ============
await Blog.findByIdAndDelete(id);
await Blog.deleteMany({ status: 'draft' });

// ============ ADVANCED ============
await Blog.find()
    .populate('author', 'username email')    // JOIN-like
    .sort({ createdAt: -1 })                  // Sort descending
    .skip(20)                                 // Pagination offset
    .limit(10)                                // Pagination limit
    .select('title body author')              // Select fields
    .lean();                                  // Return plain JS objects

// ============ TEXT SEARCH ============
await Blog.find({ $text: { $search: 'nodejs express' } });

// ============ COMPARISON ============
await Blog.find({ views: { $gte: 100 } });     // views >= 100
await Blog.find({ views: { $gt: 50, $lt: 200 } }); // 50 < views < 200

// ============ ARRAY OPERATIONS ============
await Blog.find({ tags: 'javascript' });        // Has this tag
await Blog.find({ tags: { $in: ['js', 'node'] } }); // Has any of these
await Blog.findByIdAndUpdate(id, {
    $push: { tags: 'newTag' }                   // Add to array
});


========================================
3.7 — COMPLETE REQUEST LIFECYCLE
========================================

  ┌─────────────────────────────────────────────────────────────┐
  │              FULL REQUEST → RESPONSE CYCLE                   │
  │                                                              │
  │  CLIENT: GET /blogs?page=2&tag=nodejs                       │
  │       │                                                      │
  │       ▼                                                      │
  │  EXPRESS RECEIVES REQUEST                                    │
  │       │                                                      │
  │       ▼                                                      │
  │  MIDDLEWARE PIPELINE:                                        │
  │  ┌─────────────────────────┐                                │
  │  │ 1. express.json()       │ → Parse body (none for GET)    │
  │  │ 2. express.urlencoded() │ → Parse form data              │
  │  │ 3. express.static()     │ → Not a static file, skip     │
  │  │ 4. session()            │ → Load session from cookie     │
  │  │ 5. passport.init()      │ → Initialize passport         │
  │  │ 6. passport.session()   │ → Deserialize user from       │
  │  │                         │   session (if logged in)       │
  │  │ 7. flash()              │ → Load flash messages          │
  │  │ 8. res.locals           │ → Set currentUser, messages    │
  │  └────────────┬────────────┘                                │
  │               ▼                                              │
  │  ROUTER MATCHES: GET /blogs                                  │
  │       │                                                      │
  │       ▼                                                      │
  │  blogController.getAllBlogs(req, res)                         │
  │       │                                                      │
  │       ├── Parse query params: page=2, tag=nodejs             │
  │       │                                                      │
  │       ├── Build filter: { status: 'published', tags: 'nodejs'}│
  │       │                                                      │
  │       ├── Blog.find(filter)                                  │
  │       │       │                                              │
  │       │       ▼                                              │
  │       │   MONGOOSE → MongoDB Query                           │
  │       │       │                                              │
  │       │       ▼                                              │
  │       │   MongoDB returns documents                          │
  │       │       │                                              │
  │       │       ▼                                              │
  │       │   .populate('author') → Fetches user data            │
  │       │   .sort({ createdAt: -1 })                           │
  │       │   .skip(10).limit(10)                                │
  │       │                                                      │
  │       ├── blogs = [blog1, blog2, ...]                        │
  │       │                                                      │
  │       ▼                                                      │
  │  res.render('blogs/index', { blogs, currentPage, ... })      │
  │       │                                                      │
  │       ▼                                                      │
  │  EJS ENGINE:                                                 │
  │  ┌────────────────────────────┐                              │
  │  │ 1. Load blogs/index.ejs   │                              │
  │  │ 2. Load partials          │                              │
  │  │ 3. Execute JS in <% %>    │                              │
  │  │ 4. Insert data in <%= %>  │                              │
  │  │ 5. Generate final HTML    │                              │
  │  └────────────┬───────────────┘                              │
  │               ▼                                              │
  │  HTML RESPONSE SENT TO CLIENT                                │
  │       │                                                      │
  │       ▼                                                      │
  │  BROWSER RENDERS HTML                                        │
  └─────────────────────────────────────────────────────────────┘
*/


// ╔══════════════════════════════════════════════════════════════════════════╗
// ║                                                                          ║
// ║   TOPIC 4: DEPLOY NODEJS APP ON AWS                                      ║
// ║                                                                          ║
// ╚══════════════════════════════════════════════════════════════════════════╝

/*
========================================
4.1 — AWS DEPLOYMENT OPTIONS OVERVIEW
========================================

┌──────────────────────────────────────────────────────────────────┐
│                AWS DEPLOYMENT OPTIONS                             │
├──────────────┬────────────┬──────────────┬───────────────────────┤
│ Service      │ Type       │ Complexity   │ Best For              │
├──────────────┼────────────┼──────────────┼───────────────────────┤
│ EC2          │ IaaS       │ ⭐⭐⭐        │ Full control, custom  │
│              │            │              │ server setup          │
├──────────────┼────────────┼──────────────┼───────────────────────┤
│ Elastic      │ PaaS       │ ⭐⭐          │ Quick deployment      │
│ Beanstalk    │            │              │ without managing infra│
├──────────────┼────────────┼──────────────┼───────────────────────┤
│ ECS/Fargate  │ Container  │ ⭐⭐⭐        │ Docker-based apps     │
│              │            │              │ microservices         │
├──────────────┼────────────┼──────────────┼───────────────────────┤
│ Lambda       │ Serverless │ ⭐⭐          │ APIs, event-driven    │
│              │            │              │ (not ideal for SSR)   │
├──────────────┼────────────┼──────────────┼───────────────────────┤
│ Lightsail    │ VPS        │ ⭐            │ Simple apps,          │
│              │            │              │ beginners             │
└──────────────┴────────────┴──────────────┴───────────────────────┘

We'll focus on EC2 (most common, most educational).


========================================
4.2 — DEPLOYMENT ARCHITECTURE
========================================

┌─────────────────────────────────────────────────────────────────┐
│                  PRODUCTION ARCHITECTURE                         │
│                                                                  │
│  Internet                                                        │
│     │                                                            │
│     ▼                                                            │
│  ┌──────────────────┐                                            │
│  │   Route 53       │  DNS (yourblog.com → EC2 IP)              │
│  │   (DNS Service)  │                                            │
│  └────────┬─────────┘                                            │
│           ▼                                                      │
│  ┌──────────────────┐                                            │
│  │   CloudFront     │  CDN (cache static assets globally)       │
│  │   (CDN/SSL)      │  + SSL/HTTPS termination                  │
│  └────────┬─────────┘                                            │
│           ▼                                                      │
│  ┌──────────────────┐                                            │
│  │   ALB / ELB      │  Load Balancer (distribute traffic)       │
│  │   (Load Balancer)│                                            │
│  └────────┬─────────┘                                            │
│           │                                                      │
│     ┌─────┴──────┐                                               │
│     ▼            ▼                                               │
│  ┌────────┐  ┌────────┐                                          │
│  │  EC2   │  │  EC2   │  Application Servers                     │
│  │ inst 1 │  │ inst 2 │  (Node.js + Express)                    │
│  └───┬────┘  └───┬────┘                                          │
│      │           │                                               │
│      └─────┬─────┘                                               │
│            ▼                                                      │
│  ┌──────────────────┐                                            │
│  │  MongoDB Atlas   │  Database (managed cloud DB)              │
│  │  (Database)      │                                            │
│  └──────────────────┘                                            │
│                                                                  │
│  ┌──────────────────┐                                            │
│  │      S3          │  Static file storage (uploads, images)    │
│  │  (File Storage)  │                                            │
│  └──────────────────┘                                            │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘


========================================
4.3 — EC2 DEPLOYMENT STEP BY STEP
========================================

STEP 1: LAUNCH EC2 INSTANCE
────────────────────────────

  AWS Console → EC2 → Launch Instance

  Settings:
  ┌────────────────────┬──────────────────────────────────────┐
  │ Setting            │ Value                                │
  ├────────────────────┼──────────────────────────────────────┤
  │ Name               │ blog-app-server                      │
  │ AMI                │ Amazon Linux 2023 / Ubuntu 22.04     │
  │ Instance Type      │ t2.micro (free tier)                 │
  │ Key Pair           │ Create new → download .pem file      │
  │ Security Group     │ Allow SSH(22), HTTP(80), HTTPS(443)  │
  │ Storage            │ 20 GB gp3                            │
  └────────────────────┴──────────────────────────────────────┘


STEP 2: CONNECT TO EC2 VIA SSH
───────────────────────────────
*/

// Terminal commands:
const ssh_commands = `
# Make key file read-only (required by SSH)
chmod 400 your-key.pem

# Connect to EC2
ssh -i "your-key.pem" ec2-user@<your-ec2-public-ip>
# For Ubuntu AMI:
ssh -i "your-key.pem" ubuntu@<your-ec2-public-ip>
`;

/*
STEP 3: SERVER SETUP (Install Dependencies)
────────────────────────────────────────────
*/

const server_setup = `
# ==========================================
# UPDATE SYSTEM PACKAGES
# ==========================================
sudo apt update && sudo apt upgrade -y      # Ubuntu
# OR
sudo yum update -y                          # Amazon Linux

# ==========================================
# INSTALL NODE.js (using NVM - recommended)
# ==========================================
# Install NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Reload shell
source ~/.bashrc

# Install latest LTS Node.js
nvm install --lts

# Verify
node --version     # v20.x.x
npm --version      # 10.x.x

# ==========================================
# INSTALL GIT
# ==========================================
sudo apt install git -y        # Ubuntu
# OR
sudo yum install git -y        # Amazon Linux

# Verify
git --version

# ==========================================
# INSTALL PM2 (Process Manager)
# ==========================================
npm install -g pm2

# ==========================================
# INSTALL NGINX (Reverse Proxy)
# ==========================================
sudo apt install nginx -y      # Ubuntu
# OR
sudo amazon-linux-extras install nginx1 -y  # Amazon Linux

sudo systemctl start nginx
sudo systemctl enable nginx     # Auto-start on boot
`;

/*
STEP 4: DEPLOY APPLICATION CODE
────────────────────────────────
*/

const deploy_code = `
# ==========================================
# CLONE YOUR REPOSITORY
# ==========================================
cd /home/ubuntu   # or /home/ec2-user
git clone https://github.com/yourusername/blog-app.git
cd blog-app

# ==========================================
# INSTALL DEPENDENCIES
# ==========================================
npm install --production       # Skip devDependencies

# ==========================================
# SETUP ENVIRONMENT VARIABLES
# ==========================================
nano .env
# Add the following:
# PORT=3000
# MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/blogapp
# SESSION_SECRET=your_production_secret_here
# NODE_ENV=production

# Save: Ctrl+X → Y → Enter

# ==========================================
# TEST APPLICATION
# ==========================================
node app.js
# Should see: Server running on port 3000
# Press Ctrl+C to stop
`;

/*
STEP 5: SETUP PM2 (Process Manager)
────────────────────────────────────

WHY PM2?
- Keeps your app running even after SSH disconnect
- Auto-restarts on crash
- Built-in log management
- Cluster mode for multi-core CPUs
- Zero-downtime reloads
*/

const pm2_setup = `
# ==========================================
# START APPLICATION WITH PM2
# ==========================================
cd /home/ubuntu/blog-app

# Start app
pm2 start app.js --name "blog-app"

# PM2 ESSENTIAL COMMANDS:
pm2 list                    # Show all running apps
pm2 logs blog-app           # View logs
pm2 restart blog-app        # Restart app
pm2 stop blog-app           # Stop app
pm2 delete blog-app         # Remove from PM2
pm2 monit                   # Real-time monitoring dashboard

# ==========================================
# AUTO-START PM2 ON SERVER REBOOT
# ==========================================
pm2 startup                 # Generates startup script
# Run the command it outputs (copy-paste)
pm2 save                    # Save current process list

# ==========================================
# PM2 WITH CLUSTER MODE (use all CPU cores)
# ==========================================
pm2 start app.js -i max --name "blog-app"
# -i max = spawn one process per CPU core
# -i 4   = spawn exactly 4 processes

# ==========================================
# ZERO-DOWNTIME RELOAD
# ==========================================
pm2 reload blog-app         # Gracefully reloads without dropping requests
`;

/*
STEP 6: CONFIGURE NGINX (Reverse Proxy)
────────────────────────────────────────

WHY NGINX REVERSE PROXY?
┌────────────────────────────────────────────────────────────┐
│                                                             │
│  Without Nginx:                                            │
│  Client → http://your-ip:3000                              │
│  (Users must type port number, no SSL, no caching)         │
│                                                             │
│  With Nginx:                                               │
│  Client → http://yourblog.com (port 80)                    │
│       │                                                     │
│       ▼                                                     │
│  Nginx (port 80/443) → proxy_pass → Node.js (port 3000)   │
│       │                                                     │
│       ├── Handles SSL/HTTPS                                 │
│       ├── Serves static files efficiently                   │
│       ├── Gzip compression                                  │
│       ├── Rate limiting                                     │
│       ├── Load balancing (multiple Node instances)          │
│       └── Security headers                                  │
│                                                             │
└────────────────────────────────────────────────────────────┘
*/

const nginx_config = `
# ==========================================
# CREATE NGINX CONFIG FILE
# ==========================================
sudo nano /etc/nginx/sites-available/blog-app

# ==========================================
# NGINX CONFIGURATION
# ==========================================
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    # OR use your EC2 public IP for testing:
    # server_name your-ec2-public-ip;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Gzip compression
    gzip on;
    gzip_types text/css application/javascript application/json;
    gzip_min_length 256;

    # Serve static files directly through Nginx (faster)
    location /css/ {
        alias /home/ubuntu/blog-app/public/css/;
        expires 30d;                    # Cache for 30 days
        add_header Cache-Control "public, immutable";
    }

    location /js/ {
        alias /home/ubuntu/blog-app/public/js/;
        expires 30d;
    }

    location /images/ {
        alias /home/ubuntu/blog-app/public/images/;
        expires 30d;
    }

    # Proxy all other requests to Node.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Error pages
    error_page 502 /502.html;
    location = /502.html {
        root /home/ubuntu/blog-app/public;
    }
}

# ==========================================
# ENABLE THE SITE
# ==========================================
# Create symlink
sudo ln -s /etc/nginx/sites-available/blog-app /etc/nginx/sites-enabled/

# Remove default site
sudo rm /etc/nginx/sites-enabled/default

# Test configuration
sudo nginx -t
# Should see: syntax is ok, test is successful

# Restart Nginx
sudo systemctl restart nginx
`;

/*
STEP 7: SETUP SSL/HTTPS (Let's Encrypt - FREE)
────────────────────────────────────────────────
*/

const ssl_setup = `
# ==========================================
# INSTALL CERTBOT (Let's Encrypt client)
# ==========================================
sudo apt install certbot python3-certbot-nginx -y

# ==========================================
# OBTAIN SSL CERTIFICATE
# ==========================================
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Follow prompts:
# 1. Enter email
# 2. Agree to terms
# 3. Choose redirect (option 2 - redirect HTTP to HTTPS)

# Certificate auto-renews. Test renewal:
sudo certbot renew --dry-run

# ==========================================
# VERIFY HTTPS
# ==========================================
# Visit: https://yourdomain.com
# Should see green lock icon 🔒
`;

/*
STEP 8: SETUP MONGODB ATLAS (Cloud Database)
─────────────────────────────────────────────

WHY ATLAS INSTEAD OF LOCAL MONGODB?
- Managed service (no maintenance)
- Automatic backups
- Built-in monitoring
- Free tier available (512MB)
- Global clusters

SETUP:
1. Go to mongodb.com/atlas
2. Create free cluster
3. Create database user (username/password)
4. Whitelist your EC2 IP (or 0.0.0.0/0 for all)
5. Get connection string:
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/blogapp

6. Update .env on EC2:
   MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/blogapp


========================================
4.4 — DEPLOYMENT AUTOMATION SCRIPT
========================================
*/

const deploy_script = `
#!/bin/bash
# deploy.sh - Run on EC2 to update application

echo "📦 Pulling latest code..."
cd /home/ubuntu/blog-app
git pull origin main

echo "📦 Installing dependencies..."
npm install --production

echo "🔄 Restarting application..."
pm2 reload blog-app

echo "✅ Deployment complete!"
echo "🌐 App running at: https://yourdomain.com"

# Usage: chmod +x deploy.sh && ./deploy.sh
`;

/*
========================================
4.5 — MONITORING & MAINTENANCE
========================================

┌──────────────────────────────────────────────────────────────┐
│                  MONITORING TOOLS                             │
├──────────────────┬───────────────────────────────────────────┤
│ Tool             │ Purpose                                   │
├──────────────────┼───────────────────────────────────────────┤
│ PM2 Monit        │ Real-time CPU/Memory monitoring           │
│ pm2 logs         │ Application logs                          │
│ CloudWatch       │ AWS metrics (CPU, network, disk)          │
│ MongoDB Atlas    │ Database metrics and alerts               │
│ UptimeRobot      │ External uptime monitoring (free)         │
│ Sentry           │ Error tracking and reporting              │
└──────────────────┴───────────────────────────────────────────┘

COMMON COMMANDS:
  pm2 monit                 # Dashboard
  pm2 logs --lines 100      # Last 100 log lines
  sudo tail -f /var/log/nginx/error.log    # Nginx errors
  df -h                     # Disk usage
  free -m                   # Memory usage
  top                       # CPU/process monitoring


========================================
4.6 — DEPLOYMENT CHECKLIST
========================================

┌──────────────────────────────────────────────────────────────┐
│  PRODUCTION DEPLOYMENT CHECKLIST                              │
│                                                               │
│  PRE-DEPLOYMENT:                                              │
│  ☑ Set NODE_ENV=production in .env                           │
│  ☑ Use MongoDB Atlas (not local MongoDB)                     │
│  ☑ Use strong SESSION_SECRET (random 64+ chars)              │
│  ☑ Remove all console.log (use proper logging)               │
│  ☑ Add error handling for all routes                         │
│  ☑ Set secure: true on session cookies                       │
│  ☑ Add rate limiting (express-rate-limit)                    │
│  ☑ Add helmet.js for security headers                        │
│                                                               │
│  SERVER SETUP:                                                │
│  ☑ Launch EC2 instance with security groups                  │
│  ☑ Install Node.js, Git, PM2, Nginx                         │
│  ☑ Clone repo and install dependencies                       │
│  ☑ Configure PM2 (cluster mode, startup)                     │
│  ☑ Configure Nginx reverse proxy                             │
│  ☑ Setup SSL with Certbot                                    │
│  ☑ Configure firewall (only 22, 80, 443 open)               │
│                                                               │
│  POST-DEPLOYMENT:                                             │
│  ☑ Verify all routes work                                    │
│  ☑ Test registration and login                               │
│  ☑ Test blog CRUD operations                                 │
│  ☑ Check SSL certificate                                     │
│  ☑ Setup monitoring (PM2, CloudWatch)                        │
│  ☑ Setup automatic certificate renewal                       │
│  ☑ Test deployment script                                    │
│  ☑ Setup daily database backups                              │
└──────────────────────────────────────────────────────────────┘
*/


// ╔══════════════════════════════════════════════════════════════════════════╗
// ║                                                                          ║
// ║   TOPIC 5: WEBSOCKETS IN NODEJS (SOCKET.IO)                              ║
// ║                                                                          ║
// ╚══════════════════════════════════════════════════════════════════════════╝

/*
========================================
5.1 — HTTP vs WEBSOCKETS
========================================

HTTP (Traditional):
┌──────────┐                    ┌──────────┐
│  CLIENT  │                    │  SERVER  │
└────┬─────┘                    └────┬─────┘
     │                               │
     │  1. Request: GET /messages     │
     │──────────────────────────────►│
     │                               │
     │  2. Response: [messages]       │
     │◄──────────────────────────────│
     │                               │
     │  CONNECTION CLOSED ✘          │
     │                               │
     │  3. Any new messages?         │
     │──────────────────────────────►│  (Must poll again!)
     │                               │
     │  4. Response: [no new]        │
     │◄──────────────────────────────│
     │                               │
     │  CONNECTION CLOSED ✘          │
     │                               │
     │  (...repeat every few seconds)│
     │                               │

PROBLEMS:
- Constant polling wastes bandwidth
- Latency (messages delayed until next poll)
- Server overhead (handling many requests)


WEBSOCKET (Real-time):
┌──────────┐                    ┌──────────┐
│  CLIENT  │                    │  SERVER  │
└────┬─────┘                    └────┬─────┘
     │                               │
     │  1. HTTP Upgrade Request       │
     │──────────────────────────────►│
     │                               │
     │  2. 101 Switching Protocols   │
     │◄──────────────────────────────│
     │                               │
     │  CONNECTION STAYS OPEN ✓      │
     │  ═══════════════════════      │
     │                               │
     │  3. Client sends message      │
     │──────────────────────────────►│
     │                               │
     │  4. Server pushes message     │
     │◄──────────────────────────────│
     │                               │
     │  5. Server pushes another     │
     │◄──────────────────────────────│
     │                               │
     │  6. Client sends message      │
     │──────────────────────────────►│
     │                               │
     │  (Full duplex - both ways     │
     │   simultaneously!)            │


COMPARISON TABLE:
┌──────────────────┬──────────────────┬──────────────────────┐
│ Feature          │ HTTP             │ WebSocket            │
├──────────────────┼──────────────────┼──────────────────────┤
│ Connection       │ Short-lived      │ Persistent           │
│ Direction        │ Unidirectional   │ Bidirectional        │
│ Initiation       │ Client only      │ Client OR Server     │
│ Overhead         │ Headers each req │ Minimal after handshk│
│ Real-time        │ Polling (fake)   │ True real-time       │
│ Protocol         │ HTTP/1.1, HTTP/2 │ ws:// or wss://      │
│ Use Cases        │ REST APIs, pages │ Chat, gaming, live   │
│                  │ static content   │ notifications, stocks│
└──────────────────┴──────────────────┴──────────────────────┘


========================================
5.2 — WHAT IS SOCKET.IO?
========================================

Socket.IO = WebSocket library with superpowers

┌─────────────────────────────────────────────────────────────┐
│                    SOCKET.IO FEATURES                        │
│                                                              │
│  ✅ Automatic reconnection                                   │
│  ✅ Fallback to HTTP long-polling (if WS not supported)     │
│  ✅ Rooms and namespaces (group communication)              │
│  ✅ Broadcasting (send to all/some clients)                 │
│  ✅ Acknowledgements (message delivery confirmation)        │
│  ✅ Binary streaming support                                │
│  ✅ Works with Express, Koa, etc.                           │
│  ✅ Client library auto-served                              │
│                                                              │
│  Socket.IO ≠ WebSocket                                       │
│  Socket.IO USES WebSocket + adds features on top            │
│  Socket.IO client can only connect to Socket.IO server      │
└─────────────────────────────────────────────────────────────┘


========================================
5.3 — INSTALLATION
========================================

npm install socket.io                 # Server-side
npm install socket.io-client          # Client-side (optional, auto-served)


========================================
5.4 — SERVER SETUP
========================================
*/

const socketio_server_code = `
// ==========================================
// BASIC SOCKET.IO SERVER
// ==========================================
const express = require('express');
const http    = require('http');
const { Server } = require('socket.io');
const path    = require('path');

const app    = express();
const server = http.createServer(app);  // Create HTTP server from Express
const io     = new Server(server);       // Attach Socket.IO to HTTP server

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ==========================================
// SOCKET.IO CONNECTION HANDLING
// ==========================================
/*
  Event Lifecycle:
  1. Client connects      → 'connection' event fires on server
  2. Client sends message  → Custom event fires
  3. Server broadcasts     → All clients receive
  4. Client disconnects    → 'disconnect' event fires
*/

io.on('connection', (socket) => {
    console.log('✅ User connected:', socket.id);

    // ---- RECEIVE message from client ----
    socket.on('chat message', (data) => {
        console.log('Message received:', data);

        // Broadcast to ALL connected clients 