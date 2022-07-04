const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const clientesSchema = new Schema({
  nombre:String,
  apellido:String,
  direccion:String,
  paquete:String,
  empleado:[
    {
      type: Schema.Types.ObjectId,
      ref: "empleado"
    }
  ]
});
var Clientes = mongoose.model("Clientes", ClientesSchema);
module.exports = Clientes;