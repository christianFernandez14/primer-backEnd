const { conexion } = require("./basedatos/conexion")
const express = require("express")
const cors = require("cors")

console.log("App de NODE Arriba ");

conexion();

const app = express()
const puerto = 3900

app.use(cors())

app.use(express.json())

/* RUTAS */

app.get("/", (request, response) =>{

  return response.status(200).send(`
    <h1>Empezando a crear un API Rest con Node </h1>
  `)
})




app.listen(puerto, () => {
  console.log(`Servidor corriendo el puerto ${puerto}`);

})


/*  //? RESUMEN:


>>>> //! CONEXION A LA BASE DE DATOS

=> Linea 1: Importamos la configuracion del conexion

=> Liena 3: Enviamos mensaje alternativo, para separar 

=> Liena 5: Nos conectamos

>>>> NO olvisar levantar el nodemon para que exita el escucha.

>>>> //! CREACION DEL SERVIDOR NODE

=> linea 2: Es necesario esta dependencia para la creacion del servidor

=> linea 3: Midleware, para manejar el request y el response

=> linea 9: Por convencion se suele llamar app a la variable que lle va la ejecucion de express
            Nos va a permitir invocar a metodos, para crear rutas, para escuchar las peticiones.

=> linea 10: Aprocehamos de declarar el puerto que utlizaremos un poco mas abajo en la creacion del servidor 

=> liena 11: Debemos aseguranos de que nuestro intermediario (middleware), para este caso el cors(), haga su trabajo, es decir
            que se ejecue en medio de una solicitud de un cliente (request) y la respuesta que va de regreso (response), y si o si
            debe estar antes de la configuraciones de las rutas, y debe estar como parametro al metodo .use()

=> linea 13: Me permite convertir a json, lo que me pasan por el body, es decir cuando usan un metod POST y asi poder tranajarlo
           tambien usamos el metodo .use() y se le pasa como parametro express.json(), van estar siempre parseados lo que pase por el body

=> linea 18: Comezamos con la creacion de rutas, estas que estan aca abajo fueron las primeras y dejamos las uliles en el codigo:
             su estrutura basica es el nombre del app, seguido por el metodo HTTp (get, post, delete, put) se le pasa dos paramentros
             el 1ro es el nombre de la ruta como string y el segundo es una callback donde se le pasa los parametros de request y response,
             dentro de la callback iria un return con los distintos status (100, 200, 300, 400, 500), segun sea el caso esta evaluando y para 
             mostrar el mensaje los puedes hacer con el metodo .send() >>> devuelve muchas lienas inclusive ijectas HTML y el .json() >>>
             mas usado para que retorne el json. vemos lo ejemplos 😁
             
           app.get("/probando", (request, response) => {

            =>//! Caso 1: con .send(), enviamos Html
              return response.status(200).send(`
                <div>
                  <h1>Esta es la ruta probando </h1>
                  <p>Creando Api Rest con Node</p>
                  <ul>
                    <li>Master en React</li>
                    <li>Master en Angular</li>
                  <ul>
                </div>
              `) 
            =>//! Caso 2: con .send(), enviamos json
              return response.status(200).send({
                  curso: "Master en React" ,
                  autor: "Christian Fernandez",
                  url: "christian.com"
                })
              
            =>//! Caso 3: con .json(), somos estricto en el json y hasta podemos enviar coleccion de docuementos
              return response.status(200).json([{
                curso: "Master en React",
                autor: "Christian Fernandez",
                url: "christian.com"
              },
              {
                curso: "Master en Angular",
                autor: "Santiago Fernandez",
                url: "santiago.com"
              }
              ])
            })


=> linea 16: Como podras ver aca ya esta arriba el servidor, donde en su metodo .listen(), me permite manejar dos parametros, el primero
             el puerto declarado en la L10 y somo segundo parametro el una callBack donde manerajaremos varios mensajes             

*/