const { 
    inquirerMenu, 
    pausa, 
    leerInput
} = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

console.clear();

const main = async() =>{
    
    const busquedas = new Busquedas();
    let opt;

    do{
        opt = await inquirerMenu();

        switch(opt){
            case 1:
            //mostrar mensaje
            const lugar = await leerInput('Ciudad: ');
            await busquedas.ciudad(lugar);
            //buscar lugar
            //seleccionar lugar
            //datos de clima
            //resultados
            console.log('\nInfo de la ciudad'.green);
            console.log('Ciudad:', );
            console.log('Latitud:', );
            console.log('Longitud:', );
            console.log('Temperatura:', );
            console.log('Minima:', );
            console.log('MAxima:', );
            break;
        }

        if(opt !== 0) await pausa();

    }while( opt !== 0);
}

main();