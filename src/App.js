import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Boton from "./components/Boton";
import {useState} from 'react'

import "./App.css";
function App() {
  //const clave = 252525;
  const [passwd, setPasswd] = useState("")


  return (
    <div className="App">
      <div className="content">
        <Card style={{ width: "25rem" }} className="card">
          <Card.Header className="text-center header"><h2>Iniciar Sesión</h2></Card.Header>
          <Card.Body>
            <Login password={passwd} setPasswd={setPasswd}/>
            {passwd==='252525' && <Boton />}  
            
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
