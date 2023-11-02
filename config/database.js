import { connect } from "mongoose";

connect(process.env.LINK)
.then(()=>console.log("Base de datos conectada"))
.catch(()=>console.log("Error al conectar con el servidor"))