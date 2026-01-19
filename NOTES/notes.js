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
      res.end(JSON.stringify(data));\\

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
const app = express();

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
 
// ===================================================
// WHY REST API IS USED
// ===================================================

/*
- Frontend and backend are separated
- Mobile, web, and other clients can use same backend
- Data can be exchanged easily in JSON format
*/
 
// ===================================================
// HOW REST API WORKS
// ===================================================

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


