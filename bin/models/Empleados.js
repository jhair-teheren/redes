const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const EmpleadoSchema = new Schema({
  nombre1:String,
  nombre2:String,
  apellido1:String,
  apellido2:String,
  clientes:[
    {
      type: Schema.Types.ObjectId,
      ref: "clientes"
    }
  ]
});
var Empleado = mongoose.model("Empleado",EmpleadoSchema);
module.exports = Empleado;