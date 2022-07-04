//user:jhair_tf
//password:fjPbWayiRSd3rME2
const mongoose =require("mongoose")


//intetentemos conectarnos
try{
  //se intente conectar con los datos de conexion
  mongoose.connect("mongodb+srv://jhair_tf:fjPbWayiRSd3rME2@cluster0.njsqve8.mongodb.net/?retryWrites=true&w=majority",
         { useNewUrlParser: true }    
  );
  //en caso de conectarnos se muestra este mensaje
  console.log("connected databases");
} catch(e){
  //en caso de fallar se muestra el error
  console.error(e)
}