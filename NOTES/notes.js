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
