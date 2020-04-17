var admZip = require("adm-zip");

function zipImages(photos) {
  return new Promise(function(resolve, reject) {
    var zipName = "photos.zip";

    try {
      var zipper = new admZip();
      for (var i in photos) zipper.addFile(photos[i].name, photos[i].data);
      zipper.writeZip(zipName);
      resolve(zipName);
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = zipImages;
