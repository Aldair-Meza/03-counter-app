import { getSaludo } from "../../base/02-template-string"

describe('Pruebas en 02-template-string.js', () =>{

    test('getsaludo debe retornar hola Aldair', () => {
        
        const nombre = 'Aldair'

        const saludo = getSaludo(nombre );

        expect(saludo).toBe('Hola '+nombre);
    })
   
    test('get saludo debe retornar hola Aldo si no hay argumento nombre', () => {

 
        const saludo = getSaludo();
    
        
        expect(saludo).toBe('Hola Aldo')
        
    }) 
})

//get saludo debe retornar hola Aldo si no hay argumento nombre



