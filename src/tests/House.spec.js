"use strict"

import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-dom/test-utils";
import House from "../components/House";

describe(()=>{
    var result, props, card;

    beforeEach(()=>{
        props = {
            house: { houseId: "01", , address :"Direccion",alias:"alias",houseImage: "Imagen" }
        };
        result = TestUtils.renderIntoDocument(<House {...props}/>);
    });
// Verifica si el elemento Card de House se llega a insertar en el DOM
    it('Displays Card',()=>{
        expect(ReactDOM.findDOMNode(result).textContent).toContain('House')
    });
});