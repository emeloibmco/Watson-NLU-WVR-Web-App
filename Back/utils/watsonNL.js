const NaturalLanguageUnderstandingV1 = require("ibm-watson/natural-language-understanding/v1");
const { IamAuthenticator } = require("ibm-watson/auth");

function callNLUnderstanding(params, text) {
  return new Promise(function(resolve, reject) {
    
    if (params.nl_api_key !== "") {
      console.log("Text uploaded\nAnalyzing text...");
      const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
        version: params.nl_version,
        authenticator: new IamAuthenticator({
          apikey: params.nl_api_key
        }),
        url: params.nl_url
      });

      const analyzeParams = {
        text: text,
        features: {
          entities: {
            model: params.nl_model_id
          },
          relations: {
            model: params.nl_model_id
          }
        }
      };

      naturalLanguageUnderstanding
        .analyze(analyzeParams)
        .then(analysisResults => {
          resolve(analysisResults.result);
        })
        .catch(err => {
          console.log("error:", err);
          reject(err);
        });
    } else {
      console.log("Null NL Api key");
    }
  });
}

module.exports = callNLUnderstanding;
