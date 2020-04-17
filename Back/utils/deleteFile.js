const fs = require("fs");
var deleteFileRecursive = function(path) {
  if (fs.existsSync(path)) {
    try {
      fs.unlinkSync(path);
      //file removed
    } catch (err) {
      console.error(err);
    }
  }
};

module.exports = deleteFileRecursive;
