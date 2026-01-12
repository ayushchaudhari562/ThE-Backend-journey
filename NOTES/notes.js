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
// ===================================================

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
