const fs = require("fs");

const VisualRecognitionV3 = require("ibm-watson/visual-recognition/v3");
const { IamAuthenticator } = require("ibm-watson/auth");

/**
 *
 * @param {JSON} params - parametros de la api
 * @param {string} zipName - Zip de imagenes
 */

function callVisualRecognition(params, zipName) {
  return new Promise(function(resolve, reject) {
    if (zipName !== null) {
      console.log("Analyzing images...");
      const visualRecognition = new VisualRecognitionV3({
        version: params.vr_version,
        authenticator: new IamAuthenticator({
          apikey: params.vr_api_key
        }),
        url: params.vr_url
      });

      const classifyParams = {
        imagesFile: fs.createReadStream("./" + zipName),
        classifierIds: params.vr_model_id,
        threshold: 0.0
      };

      visualRecognition
        .classify(classifyParams)
        .then(response => {
          const classifiedImages = response.result;
          // console.log(
          //   "\nResultado:\n" + JSON.stringify(classifiedImages, null, 2)
          // );
          resolve(classifiedImages);
        })
        .catch(err => {
          console.log("error:", err);
          reject(err);
        });
    } else {
      console.log("Null Zip File");
    }
  });
}
module.exports = callVisualRecognition;
