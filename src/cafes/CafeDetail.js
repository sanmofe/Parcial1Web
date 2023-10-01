import { Card } from "react-bootstrap";
import { FormattedDate, FormattedMessage } from "react-intl";
import { useEffect } from "react";
import React from "react";

const CafeDetail = (props) => {
    const [cafe, setCafe] = React.useState(null); 

    useEffect(() => {
        if (props.cafe) {
            fetch("http://localhost:3001/cafes/" + props.cafe.id)
                .then((res) => res.json())
                .then((data) => {
                    setCafe(data);
                })
                .catch((err) => console.log(err));
        }
    }, [props.cafe]);

    if (!cafe) {
        return null;
    }

    return (
        <Card
            style={{
                width: "18rem",
                backgroundColor: "#E0BBBB",
                textAlign: "center",
            }}
        >
            <b style={{ fontSize: "18px", textAlign: "center" }}>
                {cafe.nombre}
            </b>
            <FormattedDate
                value={cafe.fecha_cultivo}
                year="numeric"
                month="long"
                day="numeric"
                weekday="long"
            />
            <img
                src={cafe.imagen}
                style={{ width: "116px", height: "150px", marginLeft: "30%" }}
                alt="Cafe"
            ></img>
            <FormattedMessage id="notas"></FormattedMessage>
            <br></br>
            <p>{cafe.notas}</p>

            <b>
                <FormattedMessage id="altura"></FormattedMessage> {cafe.altura + " "}
                <FormattedMessage id="msnm"></FormattedMessage>
            </b>
        </Card>
    );
};

export default CafeDetail;
