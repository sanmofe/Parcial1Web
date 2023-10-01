import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import CafeDetail from "./CafeDetail";
import { FormattedMessage } from "react-intl";

function CafesLista() {
    const [cafes, setCafes] = React.useState([]);

    const [cafe, setCafe] = React.useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/cafes")
            .then((res) => res.json())
            .then((data) => {
                setCafes(data);
            })
            .catch((err) => console.log(err));
    }, []);


		useEffect(() => {
			if (cafes.length > 0) {
					setCafe(cafes[0]);
			}
	}, [cafes]);

    const handleClick = (i) => {
        setCafe(cafes[i]);
				console.log(cafes[i]);
    };

    return (
        <div className="row">
            <div className="col">
                <Table style={{ width: "792px", marginLeft: "98px" }}>
                    <thead style={{backgroundColor:"#333A40"}}>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col"><FormattedMessage id="nombre"></FormattedMessage></th>
                            <th scope="col"><FormattedMessage id="tipo"></FormattedMessage></th>
                            <th scope="col"><FormattedMessage id="region"></FormattedMessage></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cafes.map((e, i) => (
                            <tr onClick={() => handleClick(i)} key={e.id}>
                                <th scope="row">{e.id}</th>
                                <td>{e.nombre}</td>
                                <td>{e.tipo}</td>
                                <td>{e.region}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <div className="col">
                <CafeDetail cafe={cafe}></CafeDetail>
            </div>
        </div>
    );
}
export default CafesLista;
