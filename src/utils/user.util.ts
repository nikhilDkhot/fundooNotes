import jwt from 'jsonwebtoken';
import config from '../config/config.js'

 class Utils {

    public forgetUser = async (body) => {
        const token = await jwt.sign({email:body}, config.development.forget_secreat, { expiresIn: '1h' });
        return token;

      
    }

   public forgetUserVerify = async (token) => {
        const { email } : any = await jwt.verify(token, config.development.forget_secreat);
        return email;
    } 

}

export default Utils;