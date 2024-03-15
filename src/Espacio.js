import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const { useEffect, useState } = require("react");




function Espacio (props){
    const [image, setImage] = useState("https://dummyimage.com/10x10.png")
    return (
<Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
        <Card.Img
          style={{ height: "14rem" }}
          variant="top"
          src={image}
          alt={props.espacio.type}
        />
        <Card.Body>
          <Card.Title>
          <Link to={"espacios/"+props.espacio.id}>
                {props.espacio.name}
            </Link>
            
          </Card.Title>
          <Card.Text>{props.espacio.address}</Card.Text>
        </Card.Body>
      </Card>
)


}

export default Espacio