/* CREANDO LA CONEXION A LA BASE DE DATOS */

const mongoose = require("mongoose")

const conexion = async() => {

  try {

    await mongoose.connect("mongodb://localhost:27017/mi_blog")

    console.log("Conectado correctamente a la base de datos mi_blog");
        
  } catch (error) {
    console.log(error)
    throw new Error("No se ha podido conectar a la base de datos")
  }
}

module.exports ={
  conexion
}




/* //?  RESUMEN:

>>>> //! CREANDO LA BASE DATOS:
       Antes de cualquier cosa debemos crear nuestra DB, donde utilizaremos mongoose, para conctarnos ella
       1.- Arrancar la DB:
          .- Irnos a la direccion donde esta instalada nuestra DB, en mi caso. "/c/Program Files/MongoDB/Server/5.0/bin"
          .- Ejecutamos el mongod.exe y lo dejamos en un segundo plano. recuerda si tienes otras versiones Mongo, debes 
             especificar la rita luego del flag --dbpath, ejemplo: 'mongod.exe --dbpath c:/data/db', ya que si no o haces se crea un conflicto 
          .- Asi dejamos el demonio (Servicio de Mongo corriendo)
          .- Luego me dirijo a mi clinte visual de Mongo, que es Mongo Compass para abrilo y trabjar de manera visual y me conecto con la url
             por default que esta: mongodb://localhost:27017 ; en caso que se genere algun error en la conexion por tener versiones mas actulizadas
             cambia el localHost, quedando asi: mongoose.connect("mongodb://127.0.0.1:27017/blog"); 
          .- En este caso vamos a crear un Api rest para un blog
          .- Nos  poscionamos en la parte superrior izq y le deamos nueva DataBase, le coloamos el nombre (mi_blog) y antes de guardalo debes darles
             un nombre a la coleccion (base de datos === Coleciones (mas de un documento) );
       2.- Organizmos nuestras carpetas y archivos, que estaran comunicandos entre si, de la siguiente manera:
          
          .- database/connection.js (Estara la configuracion de la conexion a la base de datos)

>>>> //! LA CONEXION A LA BASE DE DATOS 

=> Linea 3: Accedemos a node_modules (con require) y obetemos las dependencias de "mongoose" y se la asignamos a la variable declarada
            que esta sera ahora un objeto con muchas propiedades y funciones
           
=> Linea 5: Declaramos nuestro metodo o funcion como guste llamarlo, para nuestras conexion y tendra un particularidad, que sera
            declarada de manera asincrona, por si demora un poco la conexion a la base de datos (buenas practicas), para asi envolverlo 
            dentro de un trycatach y manejar los posible errores que me puede arrojar.
            
=> Linea 9: Si por alguna razon no se conecta o genera algun warning, no deberia pasar, pero si sucede, le debes pasar como
            segundo para metro un objeto con los siguientes valores. //!NO ES OBLIGATORIO
            {
              useNewUrlParser: true,
              useUnifiedTopology: true,
              useCreateIndex: true
            }

            Ok en esta misma linea en la base de dato esta todo, ya que al metodo .connect(), nativo de mongoose, se le pasa la url por defecto que 
            visualizamos en el cliente Compass, tambien puedes verlo en la consola de MongoDB, no olvidar que al final de la url, se le debe pasar el nombre de la DB creada, en este caso "mi_blog"

=> Linea 19: debemos dejar disponible en nuestro proyecto la conexion.

=> Extras: En el try, va la conexion en si y el catch, el manejo de errores

=>
=>
=>
=>
=>



>> //! FLUJO DE LA CONFIGURACION E INFORMACION PARA LA CREACION DE LA API Y DB

1.- Creamos nuestra DB
2.- Creamos nuestra conexion a la DB (importamos nuestra conexion en nuestro index.js (app principal), para a)
4.- Creamos el servidor de node, para escuchar las peticiones (request), rutas, entre otras cosas.
5.- Ante todo debemos tener una Arquitectura del proyecto (como debe estar organizado):
            .- Modelos: Es un molde para crear nuevos de objetos, y es el enlace a la DB, y atraves de sus metodos nos estaremos comunicando con su Db, es el que interectura directamente con los datos y con la base datos y este sera no mas que un archivo .js (mas bien una clase) dentro de un carpeta modelos. Y debera definirse con la primerea letra mayuscula (por convencion)

            .- Controladores: son las que manejan la logicas y las acciones de nuestras app, es el que recibe la peticiones (request), procesarla aplicar algun tipo de logica, armara el modelo y ya este (el modelo) se encargara de la base de datos, cuando hablamos de acciones, son los endpoint (rutas de mi app). Nos es mas que otro archivo .js que esta dentro de una carpeta de nombre controladores
            
            .- rutas: no es mas que otro archivo .js dentro de una carpeta rutas, donde estaran definidas todas nuestras rutas, haremos uso de los middlewere de los modulos que hemos instalado 

6.- Creamos nuestros modelo, para poder interactuar con la DB, recuerda que el modelo estara interactuando en todo momento con la Db, por lo tanto debe tener claro y definido la estructura de tu coleccion de documentos.

7.- Nos vamos a la creacion de nuestro contralador

*/
