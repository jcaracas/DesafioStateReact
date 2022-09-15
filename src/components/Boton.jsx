import React from "react";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';


function Boton() {
    return (
        <InputGroup className="mb-3" style={{ justifyContent:'center' }}>
            <Button variant="primary" type="submit" >Login</Button>
        </InputGroup>
        
    );
}

export default Boton;