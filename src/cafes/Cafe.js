
const Cafe = (props) => {
    return(
        <tr>
            <th scope="row">{props.datos.id}</th>
            <td>{props.datos.nombre}</td>
            <td>{props.datos.tipo}</td>
            <td>{props.datos.region}</td>
        </tr>
    );
    }
export default Cafe;