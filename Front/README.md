# IBM Crash Application
Una aplicación desarrollada a partir de una arquitectura de microservicios, haciendo uso de servicios de IBM Cloud, como Natural Language Understanding, Watson Knowledge Studio y Watson Visual Recognition.

![](https://user-images.githubusercontent.com/25871322/79778717-d11f1280-82fe-11ea-9b6b-ffcb6d34c64e.png)

## Introducción
Este apartado tratará acerca del FrontEnd desarrollado en Angular 9 y los servicios de IBM Cloud usados, para un acercamiento al BackEnd, se puede observar en el [readme](https://github.com/emeloibmco/Watson-NLU-WVR-Web-App/tree/master/Back/README.md) del BackEnd.

## Indice
1. [Introducción](#Introducción)
2. [Arquitectura](#Arquitectura)
3. [Funcionamiento](#Funcionamiento)
   - [NLU](#NLU)
   - [VR](#VR)
4. [Conexión](#Conexión)
5. [Servicios](#Servicios)
   - [Natural Language Understanding Service](#Natural-Language-Understanding-Service)
   - [Watson Knowledge Studio Service](#Watson-Knowledge-Studio-Service)
   - [Watson Visual Recognition Service](#Watson-Visual-Recognition-Service)
6. [Aplicacion](#Aplicacion)
7. [Referencias](#Referencias)
8. [Autores](#Autores)

## Arquitectura
La arquitectura de la aplicación se puede apreciar a continuación

![](https://user-images.githubusercontent.com/25871322/79778536-7ab1d400-82fe-11ea-8e09-5c471265d5c3.png)

## Funcionamiento
Al realizar el front en Angular, es necesario entender que la aplicación estará conformada por componentes, para este caso se realizan 4 componentes, de los cuales 2 tendrán la lógica de funcionamiento y conexión con el back, [NLU](#NLU) y [VR](#VR).

### NLU
Este componente contiene los elementos visuales necesarios para que el usuario interactue con el servicio de Natural Language Understanding, como un cuadro de texto y un conjunto de cards por medio del cual se muestra los resultados recibidos desde el servicio.

![](https://user-images.githubusercontent.com/25871322/79774792-e5f8a780-82f8-11ea-8361-9b9bdc99fd3d.png)

A traves del servicio de NLU, el usuario puede ingresar un texto que describa el accidente de su vehiculo, a partir de esta descripción Natural Language Understanding extraerá ciertas intenciones y relaciones que determine dentro del texto a partir de un modelo que se crea en Watson Knowledge Studio. 

![](https://user-images.githubusercontent.com/25871322/79779774-856d6880-8300-11ea-8037-e953c4928c58.png)

La configuración del Natural Language Understanding y el Watson Knowledge Studio se encuentra en [Natural Language Undestanding Service](#Natural-Language-Undestanding-Service) y [Watson Knowledge Studio Service](#Watson-Knowledge-Studio-Service) respectivamente.

### VR
Al igual que el componente de NLU, este contiene los elementos visuales necesarios para que el usuario interactue con el servicio de Visual Recognition como un cuadro de drag'n drop y un conjunto de cards por medio del cual se muestra los resultados recibidos desde el servicio.

![](https://user-images.githubusercontent.com/25871322/79778363-3d4d4680-82fe-11ea-9c8d-a869ac4d6427.png)

A traves del servicio de VR, el usuario puede ingresar varias imágenes del accidente de su vehiculo, a partir de estas imágenes Watson Visual Recognition puede determinar el tipo de daño dentro de 4 categorías (Abolladura, Rayón, Vidrío Roto y Retrovisor Roto) por medio de un clasificador de imágenes, y determinar la marca entre 5 marcas (Volkswagen, Chevrolet, Ford, Mazda y Renault) por medio de detección de objetos al detectar el logo de la marca en el vehículo.

![](https://user-images.githubusercontent.com/25871322/79780863-345e7400-8302-11ea-951b-14708a12c903.png)

La configuración del Watson Visual Recognition se encuentra en [Watson Visual Recognition Service](#Watson-Visual-Recognition-Service).

## Conexión
Al interior de los anteriores componente se realiza una comunicación con el back a partir de un llamado POST a la URL en la cual se encuentre desplegado el back, esto se puede determinar en el archivo [nlu.component.ts](https://github.com/emeloibmco/Watson-NLU-WVR-Web-App/blob/master/Front/src/app/components/nlu/nlu.component.ts) para el caso de NLU o en [vr.component.ts](https://github.com/emeloibmco/Watson-NLU-WVR-Web-App/blob/master/Front/src/app/components/vr/vr.component.ts) para el caso del VR.

```javascript
	URL = "dirección del BackEnd"
```

## Servicios
Como ya se había descrito, la aplicación cuenta con 3 servicios de IBM Cloud: Natural Language Understanding, Watson Knowledge Studio y Watson Visual Recognition.

### Natural Language Understanding Service

### Watson Knowledge Studio Service

### Watson Visual Recognition Service

## Aplicación
La aplicación se encuentra actualmente desplegada desde IBM Cloud Foundry y se puede acceder a ella a través del siguiente enlace:
https://ibmcrashapp.mybluemix.net/

## Referencias

## Autores
*Equipo IBM Cloud Tech sales Colombia.*


