# API Backend que utiliza llamadas al API de Watson Visual Recognition y Natural Language Understanding

## Guía

1. Clonar el repositorio y ubicarnos en la carpeta Back
2. Modificar el archivo params.json de acuerdo su servicio IBM Watson
   : En el archivo se encuentran los parámetros tanto de Visual Recognition imageClassifier como Natural Language Understanding

   <p align="center">
    <img src="https://raw.githubusercontent.com/emeloibmco/Watson-NLU-WVR-Web-App/master/Back/.github/params.png" height="130">
   </p>

3. Modificar los parámetros de IBM Watson VR object detection
   : Archivo watsonVR4.js ubicado en la carpeta utls.

    <p align="center">
    <img src="https://raw.githubusercontent.com/emeloibmco/Watson-NLU-WVR-Web-App/master/Back/.github/watsonVR4.png" height="130">
    </p>

4. Instalar paquetes npm
   : `npm install`
5. Ejecutar prueba local
   : `npm start`
