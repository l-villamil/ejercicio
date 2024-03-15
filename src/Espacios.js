import { Col, Row } from "react-bootstrap";
import Espacio from "./Espacio.js"
const { useEffect, useState } = require("react");


function Espacios (){
    const [espacios,setEspacios]=useState([]);
    useEffect(()=>{
        const URL= "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
        fetch(URL).then(data=>data.json()).then(data=>{
            setEspacios(data);
        })
    },[]);
    return(
        <div className="container">
            <h1> My spaces</h1>
            <hr></hr>
            <Row>
                {espacios.map(espacio => <Col> <Espacio espacio={espacio}/></Col>)}
            </Row>
        </div>
    )

}


export default Espacios