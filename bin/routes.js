const controller = require("./controller");

module.exports = (app)=>{
  app.get("/", (req, res)=>{
    res.send('pagina principal')
  })
  //traer todos los empleados
  app.get("/empleados", (req, res)=>{
     controller.getEmpleados(res)
  })
  //crear un empleado
  app.post("/empleados",(req, res)=>{
    let empleado = req.body
    controller.postEmpleado(empleado, res)
  })
  
  //traer un empleado por su id
  app.get("/empleados/:id",(req, res)=>{
       let id = req.params.id
       controller.getEmpleadosPorId(id, res)
  })
  
  // modificar un empleado
  app.put("/empleados/:id",(req, res)=>{
    let id = req.params.id;
    let empleado = req.body
    controller.updateEmpleadoPorId(id, empleado, res)
  })
  
  //eliminar un empleado
  app.delete("/empleados/:id",(req, res)=>{
      let id = req.params.id
      controller.deleteEmpleados(id, res)
  })
  
}