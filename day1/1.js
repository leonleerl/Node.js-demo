const fs = require("fs");

fs.readFile("./files/1.txt", "utf8", function (err, dataStr) {
  if (err) {
    return console.log("failed" + err.message);
  }
  console.log(dataStr);
});
