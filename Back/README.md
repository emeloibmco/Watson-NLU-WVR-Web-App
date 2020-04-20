# API Backend que utiliza llamadas al API de Watson Visual Recognition y Natural Language Understanding

## Tabla de contenido 📑

1. [¿Cómo funciona?](##¿Cómo-funciona?-🤔)
2. [Guia](##guía)
3. [Manejando el JSON resultante](##manejando-el-json-resultante)

---

## ¿Cómo funciona? 🤔

Las rutas del API Backend se encuentran en el archivo server.js.

![rutas](https://raw.githubusercontent.com/emeloibmco/Watson-NLU-WVR-Web-App/master/Back/.github/server.png)

Los llamados al API de VR, NLU y VR4 se encuentran organizados, por módulos, en la carpeta utils. También se ubican archivos de utilidades para el manejo del JSON resultante

![utils](https://raw.githubusercontent.com/emeloibmco/Watson-NLU-WVR-Web-App/master/Back/.github/utils.png)

En cada ruta se ejecuta el respectivo módulo, excepto en el análisis de imagen, ya que este utiliza dos versiones de IBM VR, VR y VR4.

**Visual Recognition**

![VR](https://raw.githubusercontent.com/emeloibmco/Watson-NLU-WVR-Web-App/master/Back/.github/callVR.png)

**Visual Recognition V4**

![VR4](https://raw.githubusercontent.com/emeloibmco/Watson-NLU-WVR-Web-App/master/Back/.github/callVR4.png)

**_Nota_**: El VR4 utiliza la función object classifier para identificar marcas de automóviles

**Natural Language Understanding**

![NLU](https://raw.githubusercontent.com/emeloibmco/Watson-NLU-WVR-Web-App/master/Back/.github/callNLU.png)

---

## Guía

1. **Clonar el repositorio y ubicarnos en la carpeta Back**
2. **Modificar el archivo params.json de acuerdo su servicio IBM Watson**<br/>
   En el archivo se encuentran los parámetros tanto de Visual Recognition imageClassifier como Natural Language Understanding

   ![params](https://raw.githubusercontent.com/emeloibmco/Watson-NLU-WVR-Web-App/master/Back/.github/params.png)

3. **Modificar los parámetros de IBM Watson VR object detection**<br/> Archivo watsonVR4.js ubicado en la carpeta utls.

   ![watsonVR4](https://raw.githubusercontent.com/emeloibmco/Watson-NLU-WVR-Web-App/master/Back/.github/watsonVR4.png)

4. Instalar paquetes npm `npm install`
5. Ejecutar localmente `npm start`

## Manejando el JSON resultante
