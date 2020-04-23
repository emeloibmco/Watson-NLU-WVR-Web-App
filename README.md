# Watson-NLU-WVR-Web-App
Una aplicación desarrollada a partir de una arquitectura de microservicios, haciendo uso de servicios de IBM Cloud, como Natural Language Understanding, Watson Knowledge Studio y Watson Visual Recognition.

![](https://user-images.githubusercontent.com/25871322/79778717-d11f1280-82fe-11ea-9b6b-ffcb6d34c64e.png)

## Indice
1. [Arquitectura](#Arquitectura)
2. [Funcionamiento](#Funcionamiento)
   - [NLU](#NLU)
   - [VR](#VR)
3. [Desarrollo](#Desarrollo)
4. [Aplicacion](#Aplicación)
5. [Autores](#Autores)

## Arquitectura
La arquitectura de la aplicación se puede apreciar a continuación

![](https://user-images.githubusercontent.com/25871322/79778536-7ab1d400-82fe-11ea-8e09-5c471265d5c3.png)

## Funcionamiento
La aplicación esta conformada por 2 componentes importantes, un componente de análisis de texto ([NLU](#NLU)) y uno de análisis de imágenes ([VR](#VR)).

### NLU
![](https://user-images.githubusercontent.com/25871322/79774792-e5f8a780-82f8-11ea-8361-9b9bdc99fd3d.png)

A traves del servicio de NLU, el usuario puede ingresar un texto que describa el accidente de su vehiculo, a partir de esta descripción Natural Language Understanding extraerá ciertas intenciones y relaciones que determine dentro del texto a partir de un modelo que se crea en Watson Knowledge Studio. 

![](https://user-images.githubusercontent.com/25871322/79779774-856d6880-8300-11ea-8037-e953c4928c58.png)

### VR
![](https://user-images.githubusercontent.com/25871322/79778363-3d4d4680-82fe-11ea-9c8d-a869ac4d6427.png)

A traves del servicio de VR, el usuario puede ingresar varias imágenes del accidente de su vehiculo, a partir de estas imágenes Watson Visual Recognition puede determinar el tipo de daño dentro de 4 categorías (Abolladura, Rayón, Vidrío Roto y Retrovisor Roto) por medio de un clasificador de imágenes, y determinar la marca entre 5 marcas (Volkswagen, Chevrolet, Ford, Mazda y Renault) por medio de detección de objetos al detectar el logo de la marca en el vehículo.

![](https://user-images.githubusercontent.com/25871322/79780863-345e7400-8302-11ea-951b-14708a12c903.png)

## Desarrollo
Para ver el apartado del FrontEnd desarrollado en Angular 9 y los servicios de IBM Cloud usados, se puede dirigir al [readme](https://github.com/emeloibmco/Watson-NLU-WVR-Web-App/tree/master/Front/README.md) del FrontEnd. 

Para verl el apartado del BackEnd desarrollado en Node.Js, se puede observar en el [readme](https://github.com/emeloibmco/Watson-NLU-WVR-Web-App/tree/master/Back/README.md) del BackEnd.

## Aplicación
La aplicación se encuentra actualmente desplegada desde IBM Cloud Foundry y se puede acceder a ella a través del siguiente enlace:
https://ibmcrashapp.mybluemix.net/

## Autores
*Equipo IBM Cloud Tech sales Colombia.*



