const server = require("./api/server.js");
require("dotenv").config();

const PORT = process.env.PORT || 8888;
server.listen(PORT, () => {
  console.log(`\n === SERVER LISTENING ON PORT ${PORT} ==== \n`);
});
