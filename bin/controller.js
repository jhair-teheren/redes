const Empleado = require("./models/Empleados");

//crear un empleado
const postEmpleado = (empleado, res)=>{
    Empleado.create(empleado, (err, e)=>{
      if(err) throw err
      res.send(e)
    })
}
const getEmpleados = (res)=>{
   Empleado.find({}, (err, e)=>{
     if(err) throw err
      res.send(e)
    })
}
const getEmpleadosPorId = (id, res)=>{
    Empleado.find({_id:id}, (err, e)=>{
      if(err) throw err
      res.send(e)
    }) 
}
const updateEmpleadoPorId = (id, empleado, res)=>{
    Empleado.findByIdAndUpdate({_id:id}, empleado,(err, e)=>{
      if(err) throw err
      res.send(e)
    })
}
const deleteEmpleados = (id, res)=>{
    Empleado.findByIdAndDelete({_id:id}, (err, e)=>{
      if(err) throw err
      res.send(e)
    })  
}

module.exports ={
  postEmpleado,
  getEmpleados,
  getEmpleadosPorId,
  updateEmpleadoPorId,
  deleteEmpleados
}