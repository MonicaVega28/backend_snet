import jwt from 'jwt-simple';
import moment from 'moment';
import dotenv from 'dotenv';

//Cargar variables de entorno desde el archivo .env
dotenv.config();

//Clave secreta
const secret = 'SECRET_KEY_pRoJeCt_Social_Network';

// Generar token
const createToken = (user) => {
    const payload = {
      userId: user._id,
      name: user.name,  // quitar para el despliegue
      role: user.role,
      // Fecha de emisión
      iat: moment().unix(),
      exp: moment().add(30, 'days').unix()
    };
  
    // Devolver jwt_token codificado
    return jwt.encode(payload, secret);
  };
  
  export {
    secret,
    createToken
  }