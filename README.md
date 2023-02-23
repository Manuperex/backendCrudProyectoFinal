# Backend Con Express y mongoDB.

<h2>Descripcion:</h2>
<p> Es un CRUD creado con Express para el servidor, base de datos no relacional con mongoDB y se uso mongoose como ODM en el codigo.
    para instalarlo es: 
    <li> npm install express
    <li> npm install mongoose
<p> Se instalo nodemon como herramienta para reiniciar automáticamente la aplicación cuando se detectan cambios en los archivos del directorio.
  Para instalarlo utilice y la -D es para que este instalado en las devDependencias:
  <li> npm install -D nodemon
 <p> Se instalo dotenv como herramienta para poder usar las variables de entorno, se instalo en devDependencias para poder usarlo en el deploy tambien.
  Para instalarlo se instalo en devDependencias para poder usarlo en el deploy tambien:
  <li> npm install --save-dev dotenv
 <p> Se instalo la heramienta cors para detener los errores de CORS.
    Para instalarlo se uso:
    <li> npm i cors
  <p> Se creo un archivo .env para poder guardar las variables de entorno del link de la base de datos y el port de la app.
<h2> Explicacion de carpetas:</h2>

![image](https://user-images.githubusercontent.com/104181677/220959345-9baa90ef-d746-4a16-b1c3-46e465133cc8.png)

<p>
<li>Se creo index.js para iniciar el servidor y crear el endpoint principal.
<li>Se creo la carpeta V1 y a su vez de creo dentro la carpeta Routes, donde esta el .js que manejara la ruta de esa version(V1).
<li>Si despues se creara otra version, se crearia otra carpeta por ejemplo V2 y ahi irian las rutas nuevas y no interumpir el flujo con las tutas de la V1.
<li>Routes.js se conecta extrajendo por medio de un require de la carpeta controllers que dentro contiene el archivo .js que tiene la logica del negocio y la lojica de cada uno de los endpoints del CRUD.
<li>Los endpoints es un CRUD normal, get, post, patch y delete, con la funcionalidad de dos get, es cual se una el .get('/') para traer la data entera y el .get('/:_id') para traer solo un docuemento con el id.
<li>La carpeta database se una para almacenar dos archivos, el connection.js que sirve para hacer la coneccion exitosa con la base de datos por medio de mongoose y el archivo workout.js que en este caso sirve para crear el Schema de la coleccion de la base de datos y los parametros de como se van a traer y usar esos datos.


<h2> Connectar con mongoDB:</h2> 

![image](https://user-images.githubusercontent.com/104181677/220973707-a8a7892f-3df3-4004-8e60-870235da552e.png)

<p>En Esta imagen podemos observar la manera que se conecta con mongoDB por medio de mongoose, y se usa en vez de una url en mongoose.connect(DB_URI) se una variable de entorno para mayor seguridad, en esa variable al declararla en el archivo .env debemos colocarlo asi:
<li> DB_URI = // informacion del link para la base de datos.
<p> Como se uso mongoDB Atlas debemos copiar el link que nos dan cuando la queremos conectar con una aplicacion, y sustituir los valores que estan entre <> por los nuestros. Este es el link de ejemplo:
mongodb+srv://<TuNombreDeUsuario>:<password>@cluster1.oah05yc.mongodb.net/<nombreDeLaBaseDeDatos>?retryWrites=true&w=majority

<h2>Deploy:</h2> 

<p> Para hacer el deploy use la pagina web render.com, donde siguiendo los pasos para crear un Web Service conectamos la base de datos con nuestro repositorio en GitHub y le damos como variables de entorno las que tenemos en el archivo .env para que pueda correr la aplicacion.

![image](https://user-images.githubusercontent.com/104181677/220977004-d045e46d-12a3-4177-b529-ac383db378f2.png)

<h2>Pruebas:</h2> 

<p> La aplicacion se testeo en insomnio, probando cada uno de los endpoints y funcionan correctamente.

![image](https://user-images.githubusercontent.com/104181677/220977437-819b8ae6-8eb5-49b4-b587-f862cea92eb6.png)

<h1>Este proyecto fue creado por Manuel Perez en el curso Programacion Web Full Stack en Educamas.</h1>

