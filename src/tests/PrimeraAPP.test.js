import React from 'react';
import { shallow } from 'enzyme';
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import '@testing-library/jest-dom'

describe('pruebas en <PrimeraApp>/', () => {
    
    //test('debe de mostrar el mensaje "Hola soy Aldair" ', () => {
        
     //   const saludo = 'Hola soy Aldair';

      //  const {getByText} = render(  <PrimeraApp saludo={saludo} />)

      //  expect( getByText( saludo ) ).toBeInTheDocument();
 //   })

    test('Debe mostrar PrimeraApp correctamente', () => {
        
        const saludo = 'Hola soy Aldair';
        const wrapper= shallow(<PrimeraApp saludo={saludo}/>)

        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola soy Aldair';
        const subTitulo = 'Soy un subtitulo';
        const wrapper= shallow(
        <PrimeraApp
         saludo={saludo}
         subtitulo={subTitulo}/>)

        const textoParrafo = wrapper.find('p').text();
        
        expect(textoParrafo).toBe(subTitulo);

    })
    
    
    



})
