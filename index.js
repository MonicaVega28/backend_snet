import express from "express";
import connection from "./database/connection.js";

// Mensaje de bienvenida para verificar que ejecute bien la API de Node
console.log("API Node en ejecucion");

// Conexion a la base de BD
connection();

// Crear el servidor de Node
const app = express();
const puerto = process.env.PORT || 3900;

//Otras configuraciones



// Configurar el Servidor para escuchar las peticiones HTTP
app.listen(puerto, () => {
   console.log("Servidor de Node ejecutandose en el puerto", puerto);
});

export default app;