import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import Cafe from "./Cafe";

function CafesLista() {

    const [cafes, setCafes] = React.useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/cafes")
        .then((res) => res.json())
        .then((data) => {
            setCafes(data);
        })
        .catch((err) => console.log(err));
    }, []);

  return (
    <Table style={{width:"792px", marginLeft:"98px"}}>
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Tipo</th>
          <th scope="col">Región</th>
        </tr>
      </thead>
      <tbody>
          {cafes.map((e, i) => (
            <Cafe key={i} datos={e} />
          ))}
        </tbody>
    </Table>
  );
}
export default CafesLista;
