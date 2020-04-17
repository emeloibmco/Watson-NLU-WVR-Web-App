const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const callVisualRecognition = require("./utils/watsonVR");
const callVisualRecognitionV4 = require("./utils/watsonVR4");
const deleteFileRecursive = require("./utils/deleteFile");
const callNLUnderstanding = require("./utils/watsonNL");
const zipImages = require("./utils/zipImages");
const proDataVR = require("./utils/proDataVR");
const proDataNL = require("./utils/proDataNL");
const fileUpload = require("express-fileupload");
const par = require("./params.json");
const cors = require("cors");

server.use(bodyParser.json());
server.use(cors());

// enable files upload
server.use(
  fileUpload({
    createParentPath: true
  })
);

server.post("/upload-photos", async (req, res) => {
  var arrayPhotos = req.files.photos;

  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "No files uploaded"
      });
    } else {
      if (Object.prototype.toString.call(arrayPhotos) === "[object Array]") {
        var rspns = "";

        await zipImages(arrayPhotos).then(async zipName => {
          await callVisualRecognition(par, zipName).then(ansJson => {
            proDataVR(ansJson, par, zipName).then((ans, err) => {
              if (err) res.status(200).json(err);
              else rspns = ans;
            });
            console.log("Done images!");
          });

          await callVisualRecognitionV4(par, zipName).then(v4json => {
            var arrMarcas = [];
            for (const item of v4json.images) {
              console.log(JSON.stringify(item, null, 2));

              if (
                Object.prototype.toString.call(item.objects.collections) !==
                "[object Array]"
              ) {
                var jsobj = {};
                jsobj[item.source.filename] = "No se distingue";
                arrMarcas.push(jsobj);
              } else if (
                item.objects.collections[0].objects[0].object != "honda" ||
                item.objects.collections[0].objects[0].object != "hyundai"
              ) {
                var jsobj = {};
                jsobj[item.source.filename] =
                  item.objects.collections[0].objects[0].object;
                console.log(jsobj);

                arrMarcas.push(jsobj);
              }
            }

            rspns.push(arrMarcas);
            console.log("Done Marcas!");
          });
          console.log("fin");
        });

        deleteFileRecursive("./photos.zip");
        res.status(200).json(rspns);
      } else {
        post = "Error";
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

server.post("/upload-text", async (req, res) => {
  const inputText = req.body.text;

  try {
    if (!inputText) {
      res.send({
        status: false,
        message: "No text uploaded"
      });
    } else {
      await callNLUnderstanding(par, inputText).then(ans =>
        proDataNL(ans).then(finalRes => res.json(finalRes))
      );
      console.log("\nDone!");
    }
  } catch (err) {
    res.status(500).json({ message: "No se pudo analizar el texto ingresado" });
  }
});

var cfenv = require("cfenv");
var appEnv = cfenv.getAppEnv();

server.listen(appEnv.port, "0.0.0.0", () => {
  console.log("Running at " + appEnv.url);
});

module.exports = server;
