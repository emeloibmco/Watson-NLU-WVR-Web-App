function processData(ansJson) {
  return new Promise(function(resolve, reject) {
    var print = [];
    try {
      for (var item of ansJson.objects) {
        var obj = item.object;
        var rspJson = {};

        rspJson.object = obj;

        print.push(rspJson);
      }
      resolve(print);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = processData;
