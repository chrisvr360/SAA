// server.js
const { createServer } = require("http");
const next = require("next");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev, dir: "." });
const handle = app.getRequestHandler();

console.log( Starting Next.js app in ${dev ? "development" : "production"} mode...);
console.log( Using PORT=${port});

app.prepare()
  .then(() => {
    createServer((req, res) => {
      handle(req, res);
    }).listen(port, () => {
      console.log( Server ready at http://localhost:${port});
    });
  })
  .catch((err) => {
    console.error(" Error during app.prepare()", err);
    process.exit(1);
});