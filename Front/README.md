# FrontEnd
Este apartado tratará acerca del FrontEnd desarrollado en Angular 9 y los servicios de IBM Cloud usados, para un acercamiento al BackEnd, se puede dirigir al [readme](https://github.com/emeloibmco/Watson-NLU-WVR-Web-App/tree/master/Back/README.md) del BackEnd.

## Indice
1. [Arquitectura](#Arquitectura)
2. [Funcionamiento](#Funcionamiento)
   - [NLU](#NLU)
   - [VR](#VR)
3. [Conexión](#Conexión)
4. [Servicios](#Servicios)
   - [Natural Language Understanding Service](#Natural-Language-Understanding-Service)
   - [Watson Knowledge Studio Service](#Watson-Knowledge-Studio-Service)
   - [Watson Visual Recognition Service](#Watson-Visual-Recognition-Service)
5. [Despliegue](#Despliegue)
5. [Referencias](#Referencias)
6. [Autores](#Autores)

## Arquitectura
La arquitectura de la aplicación se puede apreciar a continuación

![](https://user-images.githubusercontent.com/25871322/79778536-7ab1d400-82fe-11ea-8e09-5c471265d5c3.png)

## Funcionamiento
Al realizar el front en Angular, es necesario entender que la aplicación estará conformada por componentes, para este caso se realizan 4 componentes, de los cuales 2 tendrán la lógica de funcionamiento y conexión con el back, [NLU](#NLU) y [VR](#VR).

### NLU
Este componente contiene los elementos visuales necesarios para que el usuario interactue con el servicio de Natural Language Understanding, como un cuadro de texto y un conjunto de cards por medio del cual se muestra los resultados recibidos desde el backend, y adquiridos a traves del servicio de NLU.

Al interior del componente además de la capa gráfica existe lógica de fondo que permite interactuar con el usuario y con el backend, esto se logra por medio de 2 funciones principales, una encargada de conectarse con el backend y otra encargada de procesar la información recibida desde el mismo. Estas funciones denominadas sendText() y JSONHandler() respectivamente, se pueden encontrar en el archivo [nlu.component.ts](https://github.com/emeloibmco/Watson-NLU-WVR-Web-App/blob/master/Front/src/app/components/nlu/nlu.component.ts)

La configuración del Natural Language Understanding y el Watson Knowledge Studio se encuentra en [Natural Language Undestanding Service](#Natural-Language-Undestanding-Service) y [Watson Knowledge Studio Service](#Watson-Knowledge-Studio-Service) respectivamente.

### VR
Al igual que el componente de NLU, este contiene los elementos visuales necesarios para que el usuario interactue con el servicio de Visual Recognition como un cuadro de drag'n drop y un conjunto de cards por medio del cual se muestra los resultados recibidos desde el servicio.

De igual forma, al interior del componente además de la capa gráfica existe lógica de fondo que permite interactuar con el usuario y con el backend, sin embargo, además de hacer uso de 2 funciones para la conexión y procesamiento de la información recibida, también se encuentran otras más encargadas del manejo de archivos, dado que el manejo de imágenes tiene un nivel de complejidad más alto al de manejar sólo texto, la lógica del componente se puede encontrar en el archivo [vr.component.ts](https://github.com/emeloibmco/Watson-NLU-WVR-Web-App/blob/master/Front/src/app/components/vr/vr.component.ts)

La configuración del Watson Visual Recognition se encuentra en [Watson Visual Recognition Service](#Watson-Visual-Recognition-Service).

## Conexión
Al interior de los anteriores componente se realiza una comunicación con el back a partir de un llamado POST a la URL en la cual se encuentre desplegado el back, esto se puede determinar en el archivo [nlu.component.ts](https://github.com/emeloibmco/Watson-NLU-WVR-Web-App/blob/master/Front/src/app/components/nlu/nlu.component.ts) para el caso de NLU o en [vr.component.ts](https://github.com/emeloibmco/Watson-NLU-WVR-Web-App/blob/master/Front/src/app/components/vr/vr.component.ts) para el caso del VR.

```javascript
	URL = "dirección del BackEnd"
```
Es importante cambiar esta URL por la del backend, la cual puede diferenciarse dependiendo de donde se haya desplegado.

## Servicios
Como ya se había descrito, la aplicación cuenta con 3 servicios de IBM Cloud: Natural Language Understanding, Watson Knowledge Studio y Watson Visual Recognition.

### Natural Language Understanding Service


### Watson Knowledge Studio Service


### Watson Visual Recognition Service

IBM Watson Visual Recognition es una herramienta que utiliza algoritmos de machine learning, permitiendo a los usuarios identificar automáticamente sujetos, objetos, contenidos en la imagen, organizar y clasificar dichas imágenes en categorías lógicas.
Este servicio es muy intuitivo, sus resultados son detallados y rápidos debido a que los modelos están ampliamnete entrenados.

### 1. Información Básicos: 📌
Watson ofrece los siguientes modelos con resultados precisos:

- Modelo General: clasificación predeterminada procedente de miles de clases.
- Modelo explícito: si una imagen resulta inadecuada para uso general.
- Modelo de alimentos: específico para imágenes de alimentos.

*También puede entrenar modelos personalizados para crear clases especializadas.*

Proceso de crear y utilizar Visual Recognition:
![20](https://user-images.githubusercontent.com/44415995/79902405-10209700-83d7-11ea-8529-0c4972a649d1.PNG)


### 2. Pre-Requisitos 📋

#### A).

Iniciar sesión en su cuenta IBM Cloud, si no tiene cuenta puede crear una. 

[CREAR CUENTA IBM CLOUD](https://cloud.ibm.com/registration)

#### B).

En la sección de catálogo busque  Visual Recognition y seleccione dicho servicio.

<img src="https://user-images.githubusercontent.com/56199403/79892028-769db900-83c7-11ea-8607-5cbdc9a7ccce.jpg" width="600">

#### C).

Para crear el servicio lo primero se realiza es seleccionar la región, para esta guía se seleccionó Dallas, posteriormente elija el plan que se acomode mejor a sus necesidades. Asignele un nombre a este servicio y por ultimo cree el servicio dando click al boton "create".


<img src="https://user-images.githubusercontent.com/56199403/79892286-f2980100-83c7-11ea-873f-e44f6d76e44f.jpg" width="700">




### 3. Visual Recongition por medio Watson Studio en IBM CLOUD 🚀
### Caso de uso:
Las empresas están resolviendo sus desafíos únicos mediante el uso de modelos personalizados para reconocer cualquier objeto, escena o atributo. Para este caso utilizaremos modelos personalizados para generar automáticamente estimaciones de los costos de reparación basados en imágenes de daños en el automóvil enviadas a medida.

#### Paso 1:
Seleccione el servicio de Visual Recognition, este se identifica con el siguiente icono <img src="https://user-images.githubusercontent.com/56199403/79884639-06893600-83bb-11ea-9d2e-381ac03c1d58.jpg" width="50">


#### Paso 2:
Posteriormente se debe dar clic en “Launch Watson Studio”, y en la nueva pestaña que se cargó seleccionamos el tipo de modelo que se desea utilizar, para esta guía se utilizó “Classify Images”.

<img src="https://user-images.githubusercontent.com/56199403/79890486-2f162d80-83c5-11ea-8011-261da082c822.jpg" width="600">

#### Paso 3:
Ahora procedemos a subir al modelo el set de imágenes positivas, las cuales proporcionarán ejemplos de imágenes reales de objetos para clasificar como miembros de esa clase.

![Image 2](https://user-images.githubusercontent.com/56199403/79903494-cb95fb00-83d8-11ea-8363-159200506f83.jpg ) 


*Nota: Hay que tener en cuenta que el número mínimo recomendado de imágenes para tener en los conjuntos de imágenes positivas antes de evaluar los resultados de la prueba es de 50 imágenes y los formatos que acepta el modelo son .jpeg, .png, o .zip* 💡

#### Paso 4:
Una vez cargado el set positivo, se selecciona la clase “Negative” e ingresamos el set de imágenes negativas, que son ejemplos de imágenes reales de objetos para NO ser clasificados como miembros de esa clase.

#### Paso 5:
Procedemos a entrenar seleccionando el siguiente botón  <img src="https://user-images.githubusercontent.com/56199403/79891459-a26c6f00-83c6-11ea-8cf5-c8d87b52adec.jpg" width="90">


#### Paso 6:
Una vez entrenado el modelo, seleccionamos la opción de "Test" y probamos el modelo

## Aplicación
La aplicación se encuentra actualmente desplegada desde IBM Cloud Foundry y se puede acceder a ella a través del siguiente enlace:
https://ibmcrashapp.mybluemix.net/

## Referencias
-[Watson-Visual Recognition](https://www.ibm.com/co-es/cloud/watson-visual-recognition)


## Autores
*Equipo IBM Cloud Tech sales Colombia.*


