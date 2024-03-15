import { Card } from "react-bootstrap"
const { useEffect, useState } = require("react");

function Room (props) {
    const [image, setImage] = useState("https://dummyimage.com/10x10.png")
    return (
<Card style={{ width: "18rem", height: "24rem" }} className="mb-3" onClick={props.onClick}>
        
        <Card.Body>
          <Card.Title>
                {props.room.name}
          </Card.Title>
        </Card.Body>
        <Card.Img
          style={{ height: "14rem" }}
          variant="top"
          src={image}
          alt={props.room.name}
        />
      </Card>
)
}
export default Room