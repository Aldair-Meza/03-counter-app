import React from 'react';
import { shallow } from 'enzyme';
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import CounterApp from '../CounterApp';
import { Simulate } from 'react-dom/test-utils';

describe('pruebas a <CounterApp /> ', () => {

    let wrapper = shallow (<CounterApp value={10}/>);

    beforeEach(() => {

        wrapper = shallow (<CounterApp value={10}/>);

    });
    
    test('Debe mostrar <CounterApp /> correctamente ', () => {
         
        
        const wrapper= shallow(<CounterApp value={10}/>)

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe mostrar el valor por defecto de 100', () => {
        
        const wrapper = shallow (<CounterApp value={100}/>)

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('100')

    })
    
    test('Debe incrementar con el boton +1', () => {
        
        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        
        expect(counterText).toBe('11');
    })

    test('Debe disminuir con el boton -1', () => {
        
        wrapper.find('button').at(2).simulate('click');
        
        const counterText = wrapper.find('h2').text().trim();
        
        expect(counterText).toBe('9');
    })
    
    test('Debe volver a valor inicial con el boton Reset', () => {
        
        const wrapper = shallow (<CounterApp value={105}/>)

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
  
        expect(counterText).toBe('105');
        
    })
  
    
})
