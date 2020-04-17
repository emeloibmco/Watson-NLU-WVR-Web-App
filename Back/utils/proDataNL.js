// Processing Json result of Watson Natural Language Understanding process

function proDataNL(resultNL) {
  return new Promise(function(resolve, reject) {
    try {
      var relations = resultNL.relations;
      var entities = resultNL.entities;

      //console.log("RELATIONS: \n\n" + JSON.stringify(relations, null, 2));
      //console.log("ENTITIES: \n\n" + JSON.stringify(entities, null, 2));

      for (var item of entities) {
        item.type = item.type[0] + item.type.slice(1).toLowerCase();
        item.text = item.text[0].toUpperCase() + item.text.slice(1);

        // Eliminar propiedades de un objeto
        delete item.disambiguation;
        delete item.count;
        delete item.confidence;
      }

      // Eliminar objetos duplicados dentro de un array
      const resJson = [
        ...new Map(entities.map(item => [item.text, item])).values()
      ];

      resolve(resJson);
    } catch (error) {
      reject(error);
    }

    // var print2 = [];s
    // for (var i in relations) {
    //   print2.push(
    //     JSON.stringify(relations[i].arguments[0].entities[0].text) +
    //       " (" +
    //       JSON.stringify(relations[i].arguments[0].entities[0].type) +
    //       ") >> " +
    //       JSON.stringify(relations[i].type) +
    //       " >> " +
    //       JSON.stringify(relations[i].arguments[1].entities[0].text) +
    //       " (" +
    //       JSON.stringify(relations[i].arguments[1].entities[0].type) +
    //       ")"
    //   );
    // }
    // print2.sort();
    // console.log(print2);
  });
}

module.exports = proDataNL;
