import jwt from 'jsonwebtoken';
import config from '../config/config.js'

 class Utils {

    public async tokenGen(id, secreat) {
        const token = await jwt.sign({ id: id }, secreat, { expiresIn: '1h' });
       // console.log(token);
        
        return token;
    }

    public async tokenVerify(body, secreat) {
        const data = await jwt.verify(body, secreat);
        console.log(data,"in util****")
        return data;
    }

}

export default Utils;