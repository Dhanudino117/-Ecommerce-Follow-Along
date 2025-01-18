const app = require("./app");
const connectDatabase = require("../Backend/Db/database");

process.on("uncaughtException", (err) => {
  console.error(`Error: ${err.message}`);
  console.log("shutting down the server due to uncaught exception");
  server.close(() => {
    process.exit(1);
  });
});

process.on("unhandledRejection", (reason, promise) => {
  console.error(`Unhandled Rejection: ${reason.message}`);
  console.log("shutting down the server due to unhandled rejection");
  server.close(() => {
    process.exit(1);
  });
});

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/config.env" });
}

connectDatabase()
  .then(() => {
    const server = app.listen(8000, () => {
      console.log(`server is running on http://localhost:${8000}`);
    });
  })
  .catch((err) => {
    console.error(`Error connecting to database: ${err.message}`);
    process.exit(1);
  });
