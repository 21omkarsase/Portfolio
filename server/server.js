const app = require("./app");
const connectDatabase = require("./db");

require("dotenv").config({ path: "server/config/.env" });

connectDatabase();

const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
