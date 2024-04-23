const axios = require('axios');

class Busquedas{

    historial = ['Buenos Aires', 'Madrid', 'Miami'];

    constructor(){
        // leer DB si existe
    }

    async ciudad (lugar = ''){

        try{
            //PETICION HTTP
            //console.log('ciudad', lugar);
            const resp = await axios.get('https://reqres.in/api/users?page=2')
            console.log(resp.data);

            return[];

        }catch(error){
            return[];
        }
    }

}

module.exports = Busquedas;