import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function Login(props) {
  return (
    <div>
      <InputGroup >
            <FloatingLabel controlId="floatingInput" label="Nombre de Usuario" className="mb-3" >
                <Form.Control type="text" placeholder="Nombre de Usuario" />
            </FloatingLabel>
        </InputGroup>
        <InputGroup className="mb-3">
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" onChange={(e)=> props.setPasswd(e.target.value)}/>
            </FloatingLabel>
        </InputGroup>        
    </div>
  );
}

export default Login;