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

