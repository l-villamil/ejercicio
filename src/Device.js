import React from "react";

const Device =(props) =>{
    return (
        <tr>
        <th scope="row">{props.counter}</th>
        <td>{props.device.id}</td>
        <td>{props.device.name}</td>
        <td>{props.device.desired.value}</td>



        </tr>
    )
}
export default Device