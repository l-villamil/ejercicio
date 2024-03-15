import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Room from "./Room";
import Device from "./Device";
const { useEffect, useState } = require("react");

function Detalle() {
    const params = useParams();
    const [detalle, setDetalle] = useState([]);
    const [habitacionSeleccionada, setHabitacionSeleccionada] = useState(null);
    const [dispositivos, setDispositivos] = useState([]);

    const handleClickHabitacion = (habitacion) => {
        setHabitacionSeleccionada(habitacion);
        setDispositivos(habitacion.devices);
    };

    useEffect(() => {
        const URL = "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
        fetch(URL).then(data => data.json()).then(data => {
            setDetalle(data);
        });
    }, []);

    let home = null;
    const findDetailById = (homeId) => {
        home = detalle.filter(item => item.homeId === homeId);
        return home;
    };

    home = findDetailById(params.espacioId);

    if (home === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <hr />
            {home.length === 0 ? (
                <div>Cargando...</div>
            ) : (
                <>
                    <Row>
                        {home.map((room) => (
                            <Col key={room.id}> 
                                <Room room={room} onClick={() => handleClickHabitacion(room)} />
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">ID</th>
                                    <th scope="col">Device</th>
                                    <th scope="col">Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dispositivos.map((device, index) => (
                                    <Device key={index} device={device} />
                                ))}
                            </tbody>
                        </table>
                    </Row>
                </>
            )}
        </div>
    );
}

export default Detalle;
