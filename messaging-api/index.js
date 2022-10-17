const server = require("./src/server/server.js");

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Messaging api running on port ${PORT}`);
});

server.on("error", (err) => {
  console.error(`There was an error running the server: ${err}`);
});

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
  });
});
