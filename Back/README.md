# <div align=center> API Backend que utiliza llamadas al API de Watson Visual Recognition y Natural Language Understanding </div>

## 📑 Tabla de contenido

1. [TL;DR](#tldr)
2. [Arquitectura](#-arquitectura)
3. [¿Cómo funciona?](#-cómo-funciona)
4. [Manejando el JSON del API IBM Watson](#-manejando-el-JSON-del-API-IBM-Watson)
5. [Referencias y documentación útil](#referencias-y-documentación-util)

## TL;DR

1. **Clonar el repositorio y ubicarnos en la carpeta Back**

2. **Modificar el archivo params.json de acuerdo su servicio IBM Watson**<br/>
   En el archivo se encuentran los parámetros tanto de Visual Recognition imageClassifier como Natural Language Understanding

   ![params](https://raw.githubusercontent.com/emeloibmco/Watson-NLU-WVR-Web-App/master/Back/.github/params.png)

3. **Modificar los parámetros de IBM Watson VR object detection**<br/> Archivo watsonVR4.js ubicado en la carpeta utls.

   ![watsonVR4](https://raw.githubusercontent.com/emeloibmco/Watson-NLU-WVR-Web-App/master/Back/.github/watsonVR4.png)

4. Instalar paquetes npm `npm install` y ejecutar localmente `npm start`

5. Probar desde Postman las rutas `localhost:6001/upload-text` & `localhost:6001/upload-photos` definiendo el body de la siguiente manera:<br/>

   Para NLU:

   ![probar](https://raw.githubusercontent.com/emeloibmco/Watson-NLU-WVR-Web-App/master/Back/.github/probar.png)

   Para VR:

   ![probarVR](https://raw.githubusercontent.com/emeloibmco/Watson-NLU-WVR-Web-App/master/Back/.github/probarVR.png)

## 🏯 Arquitectura

![arquitectura](https://raw.githubusercontent.com/emeloibmco/Watson-NLU-WVR-Web-App/master/Back/.github/arquitectura1.png)

## 💡 ¿Cómo funciona?

Las rutas del API Backend se encuentran en el archivo server.js.

![rutas](https://raw.githubusercontent.com/emeloibmco/Watson-NLU-WVR-Web-App/master/Back/.github/server.png)

Los llamados al API de VR, NLU y VR4 se encuentran organizados, por módulos, en la carpeta utils. También se ubican archivos de utilidades para el manejo del JSON resultante

![utils](https://raw.githubusercontent.com/emeloibmco/Watson-NLU-WVR-Web-App/master/Back/.github/utils.png)

En cada ruta se ejecuta el respectivo módulo, excepto en el análisis de imagen, ya que este utiliza dos versiones de IBM VR, VR y VR4. Luego se envían los resultados obtenidos por el API a su respectivo modulo de procesamiento de datos y así enviar los datos necesarios al Frontend.

**Visual Recognition**

![VR](https://raw.githubusercontent.com/emeloibmco/Watson-NLU-WVR-Web-App/master/Back/.github/callVR.png)

**Visual Recognition V4**

![VR4](https://raw.githubusercontent.com/emeloibmco/Watson-NLU-WVR-Web-App/master/Back/.github/callVR4.png)

**_Nota_**: El VR4 utiliza la función object classifier para identificar marcas de automóviles

**Natural Language Understanding**

![NLU](https://raw.githubusercontent.com/emeloibmco/Watson-NLU-WVR-Web-App/master/Back/.github/callNLU.png)

## 🧾 Manejando el JSON del API IBM Watson

Cada llamada al API IBM Watson redirecciona los resultados al modulo de procesamiento de datos, proData, ubicados en la carpeta de utilidades utils.

Estos archivos se encarga de recorrer el JSON de IBM Watson, cambia de acuerdo al API que se este usando, VR o NLU, creando uno nuevo con los datos que se mostrarán en el Frontend.

**Respuesta de IBM Watson**

_Se eliminaron unos registros para una fácil visualización en este archivo_

```javascript
{
  usage: { text_units: 1, text_characters: 1411, features: 2 },
  relations: [
    {
      type: 'puntoDeImpacto',
      sentence: 'Mi vehículo pivotea en las ruedas delanteras y golpea con la parte trasera derecha a la altura del baúl, a uno de los peatones que yo venia pasando en ese momento, dejando a un lesionado de gravedad.',
      score: 0.954786,
      arguments: [Array]
    },
    {
      type: 'ubicadoEn',
      sentence: 'Mi vehículo pivotea en las ruedas delanteras y golpea con la parte trasera derecha a la altura del baúl, a uno de los peatones que yo venia pasando en ese momento, dejando a un lesionado de gravedad.',
      score: 0.990723,
      arguments: [Array]
    },
    {
      type: 'sufrioDe',
      sentence: 'Mi vehículo pivotea en las ruedas delanteras y golpea con la parte trasera derecha a la altura del baúl, a uno de los peatones que yo venia pasando en ese momento, dejando a un lesionado de gravedad.',
      score: 0.943332,
      arguments: [Array]
    }, ...
  ],
  language: 'es',
  entities: [
    {
      type: 'ESTRUCTURA',
      text: 'carretera',
      disambiguation: [Object],
      count: 1,
      confidence: 0.999773
    },
    {
      type: 'PERSONA',
      text: 'personas',
      disambiguation: [Object],
      count: 1,
      confidence: 0.999414
    },
    {
      type: 'MODELO',
      text: '2017',
      disambiguation: [Object],
      count: 1,
      confidence: 0.999266
    }, ...
  ]
}
```

**Luego de ejecutar proDataNL.js**

```javascript
[
  {
    type: "Estructura",
    text: "Carretera",
  },
  {
    type: "Persona",
    text: "Carriles",
  },
  {
    type: "Modelo",
    text: "2017",
  }, ...
];
```

## Referencias y documentación útil

- [Natural Language Understanding API docs](https://cloud.ibm.com/apidocs/natural-language-understanding/natural-language-understanding?code=node#introduction)
- [Visual Recognition V3 API docs](https://cloud.ibm.com/apidocs/visual-recognition/visual-recognition-v3)
- [Visual Recognition V4 API docs](https://cloud.ibm.com/apidocs/visual-recognition-v4)
- [Express Framework - NPM package](https://www.npmjs.com/package/express)
- [Express Framework - Official documentation](http://expressjs.com/en/4x/api.html)
- [JSON MDN Docs](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON)

## Autores y contribuidores 🙋‍♀️🙋‍♂️

![IBM Cloud](https://raw.githubusercontent.com/emeloibmco/Watson-NLU-WVR-Web-App/master/Back/.github/ibm_cloud.png) _Equipo IBM Cloud Tech sales Colombia._

[Contribuidores](https://github.com/emeloibmco/Watson-NLU-WVR-Web-App/graphs/contributors)
