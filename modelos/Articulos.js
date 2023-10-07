const { Schema, model } = require("mongoose")

const ArticuloSchema = Schema({
  tiutlo: {
    type: String,
    required: true
  },
  contenido: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now
  },
  imagen: {
    type: String,
    default: "dafault.png"
  }
});


module.exports = model("Articulo", ArticuloSchema, "articulos")


/* //?  RESUMEN:

Aca estara representado el modelo de mi coleccion de documentos, donde podremos, crear, obtener, borar y actulizar datos, en fin interectual con esos elementos 

=> Linea 1: Schema es un objeto que permite definir mi Schema de trabajo, muy intuito el nombre y model, es metodo que me permite asignarle 
             un nombre al modelo, por ejemplo, modelo coche, modelo usuario .... etc y estos dos objetos vienes de la dependencia Mongoose

=> Linea 3: Defino como estara estructurado mi colleccion, es decir sus campos y datos del documentos, y esto nos llevara a cada document u obejeto 
            como quieras llmarlo, para asi tener collecciones de documentos, para resfrescar un poco; para MondoDb, un campo es el nombre de la propiedad (key), el dato del documento es su valor (value) y documento sera cada ArticuloSchema (como lo definimos en este .js), para luego teners colecciones de Articulos.

            otro datos de interes, es como definmos los datos de cada campo, podemos hacerlo simple o a traves de objeto tambien, donde tranajeremos 
            propiedades como required (que si o si debe enviar ese dato) y default, en caso que no nos llegue nada por esos campos

=> Linea 23: Como veras exponemos nustro modelo de manera distinta, ya que aca entra en juego nuestro metodo model, donde el el primer parametro
             es el nombre del modelo (en este caso Articulo), el segundo es el esquema va utilizar, le pasamos ArtiucloSchema y el tercer
             parametro es opcional, ya que esta referiendose al nombre de la coleccion que le dimos cuando creamos nuestras DB

>>> Con estaestructra ya tenemos conectado nuetro modelo a  nuestra base de dato y hacer todos los metodos que pueda recibir por el cliente
            
*/