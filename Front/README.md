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

### Pre-Requisitos

#### A).

Iniciar sesión en su cuenta IBM Cloud, si no tiene cuenta puede crear una. 

[CREAR CUENTA IBM CLOUD](https://cloud.ibm.com/registration)

#### B).

En la sección de catálogo buscar Natural Language Understanding, Watson Knowledge Studio o Visual Recognition y seleccione dicho servicio.

#### C).

Para crear el servicio lo primero se realiza es seleccionar la región, para esta guía se seleccionó Dallas, posteriormente elija el plan que se acomode mejor a sus necesidades. Asignele un nombre a este servicio y por ultimo cree el servicio dando click al boton "create".

![](https://user-images.githubusercontent.com/25871322/80152041-97f5d500-8580-11ea-895e-3e4dd1b9e4f4.png)

### Natural Language Understanding Service

IBM Natural Language Understanding es un producto nativo de la nube que utiliza el aprendizaje profundo para extraer metadatos del texto, como entidades, palabras clave, categorías, sentimientos, emociones, relaciones y sintaxis.

### Configurar servicio en IBM CLOUD 🚀

Para el caso de la presente aplicación no es necesaria una configuración extra una vez se ha creado el servicio, puesto que el servicio de Natural Language Understanding sera atraves del cual se exponga el modelo realizado en Watson Knowledge Studio.


### Watson Knowledge Studio Service

Watson Knowledge Studio es una herramienta de Watson por medio de la cual se le enseña a Watson a traves de modelos personalizados que identifican entidades y relaciones exclusivas de su industria en texto no estructurado. Donde se pueden construir modelos en un entorno de colaboración diseñado para desarrolladores y expertos de dominio, sin necesidad de escribir código.

### Configurar servicio en IBM CLOUD 🚀

1.	Se crea en el workspace el proyecto, usando como base el lenguaje español. 







2.	El primer paso realizado en la elaboración del modelo es subir los archivos de texto que contienen los relatos escritos por los usuarios. 








3. Para definir las entidades, usamos las entidades que ya definimos (se descarga un archivo .json que contiene lo que necesitamos y luego se sube en el proyecto, este incluye las relation types).
 

4.	Lo que sigue es cargar los diccionarios en la pestaña diccionarios.

 

 

5.	Ya con esto lo que hicimos fue crear las anotaciones, en cada texto que ingresamos seleccionamos las palabras o las frases que se relacionan con las entidades. 

 
Cada vez que se sube un documento o conjunto de documentos, estos aparecerán sin anotaciones, entonces en las anotaciones totales señaladas con el circulo azul, aparecerá 0 / número de documentos.
Se presiona el texto annotate señalado en azul, se selecciona el documento a anotar y se accede a la siguiente pestaña.
 

Es importante hacer las anotaciones respectivas en las tres pestañas señaladas.
-	Mention: Subraya de color la palabra que asociaremos con las diferentes entidades que hemos creado tendrá un color para cada entidad, por ejemplo, tenemos la palabra motociclista asociada a la entidad persona señalada en color verde claro.
-	Relation: En esta pestaña definimos las relaciones que hay entre las entidades del texto, mediante el tipo de la relación y desde y hacia que parte del texto se dirige, por ejemplo, la frase “Accidente de tránsito” está relacionada con “cobró la vida” y “dejó a otra persona gravemente herida” ya que estos dos últimos son “RESULTADODE” el primero.
-	Coreference: Las correferencias se usan para mostrarle al modelo cuales palabras se refieren a un mismo algo, por ejemplo, “yo, Juan estoy feliz”, las palabras “yo” y “Juan” hacen referencia a la misma persona, esto es importante denotar a la hora de entrenar modelos, pero en este proyecto no se tuvieron en cuenta las correferencias.

Ya terminado este proceso tenemos los datos listos para que el modelo que nos brinda WKS sea entrenado.


6.	En performance hacemos la división del conjunto de prueba y entrenamiento, luego entrenamos el modelo.



 

En esta pestaña podemos ver el rendimiento de los últimos modelos y estadísticas, es de gran utilidad para tener en cuenta a la hora de mejorarlos.


Después de presionar el botón “Train and evaluate” aparecerá la siguiente pantalla donde podemos iniciar el entrenamiento o configurar los conjuntos(entrenamiento, prueba y validación).
 

7.	Ya con el modelo entrenado podemos hacer la prueba con un documento nuevo que no tenga anotaciones.
 
Ya teniendo el texto sin anotaciones vamos a la pestaña versión y damos en el botón Go to preanotation page.

 

Presionamos el botón Run pre-annotator y seleccionamos el modelo de machine learning.
 
Ahora seleccionamos el documento que queremos usar y corremos el modelo.
 

Esperamos el tiempo de ejecución del modelo y revisamos las anotaciones hechas por el mismo.

 
 

Como podemos ver las anotaciones y relaciones obtenidas por el modelo son bastante acertadas, a pesar de esto el modelo no es tan eficiente, esto se debe a la poca cantidad de textos con las que se entreno el modelo, además, las correferencias son muy importantes y deben ser tomadas en cuenta, sin embargo el proyecto fue exitoso y se demostró como analizar textos y obtener de ellos entidades para hacer análisis y segmentación efectiva.


### Watson Visual Recognition Service

IBM Watson Visual Recognition es una herramienta que utiliza algoritmos de machine learning, permitiendo a los usuarios identificar automáticamente sujetos, objetos, contenidos en la imagen, organizar y clasificar dichas imágenes en categorías lógicas.
Este servicio es muy intuitivo, sus resultados son detallados y rápidos debido a que los modelos están ampliamnete entrenados.

### Información Básica: 📌
Watson ofrece los siguientes modelos con resultados precisos:

- Modelo General: clasificación predeterminada procedente de miles de clases.
- Modelo explícito: si una imagen resulta inadecuada para uso general.
- Modelo de alimentos: específico para imágenes de alimentos.

*También puede entrenar modelos personalizados para crear clases especializadas.*

Proceso de crear y utilizar Visual Recognition:
![20](https://user-images.githubusercontent.com/44415995/79902405-10209700-83d7-11ea-8529-0c4972a649d1.PNG)

### Configurar servicio en IBM CLOUD 🚀

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


## Despliegue

La aplicación se encuentra actualmente desplegada desde IBM Cloud Foundry y se puede acceder a ella a través del siguiente enlace: https://ibmcrashapp.mybluemix.net/

## Referencias
-[Watson-Visual Recognition](https://www.ibm.com/co-es/cloud/watson-visual-recognition)

## Autores
*Equipo IBM Cloud Tech sales Colombia.*


