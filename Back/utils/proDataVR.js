/**
 *
 * @param {JSON} ansJson - respuesta del watson VR en JSON
 */
function processData(ansJson) {
  return new Promise(function(resolve, reject) {
    var print = [];
    try {
      for (var item of ansJson.images) {
        var name = item.image;
        var rspJson = {};
        //Regular expression to remove file extension
        var rename = name.substr(name.lastIndexOf("/") + 1) || name;
        rspJson.image = rename;
        var vlrAnt = "",
          scrAnt = 0;
        for (var cls of item.classifiers[0].classes) {
          var vlr = cls.class;
          var score = (parseFloat(cls.score) * 100).toFixed(2);

          if (score >= scrAnt) {
            delete rspJson[vlrAnt];
            vlrAnt = vlr;
            scrAnt = score;
            rspJson[vlr] = score;
          }
          // if (score < 19) {
          //   delete rspJson[vlr];
          //   rspJson.daño = "ninguno";
          // }
        }
        for (const key in rspJson) {
          if (rspJson[key] < 19) {
            delete rspJson[key];
            rspJson.Ninguno = "100";
          }
        }

        print.push(rspJson);
      }
      resolve(print);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = processData;
