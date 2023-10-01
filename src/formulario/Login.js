import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card, Container } from "react-bootstrap";
import "./login.css"
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";

function Login() {

    const navigate = useNavigate();

  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const [validationStates, setValidationStates] = useState({emailState: true, passwordState: true});

  const handleEmailChange = (event) => {
    setFormValues({ ...formValues, email: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setFormValues({ ...formValues, password: event.target.value });
  };

  const clickSubmit = () => {
    const credenciales = {
        login: formValues.email,
        password: formValues.password,
        };
    fetch("http://localhost:3001/login", {
        method: "POST",
        body: JSON.stringify(credenciales),
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.status === "error"){
                setValidationStates({ ...validationStates, passwordState: false });
                setValidationStates({ ...validationStates, emailState: false });
            }else{
                setValidationStates({ ...validationStates, passwordState: true });
                setValidationStates({ ...validationStates, emailState: true });
                navigate("/cafes");
            }
            
        })
        .catch((err) => console.log(err));
    }

  

  return (
    <Card style={{width: "881px", marginLeft: "18%", marginTop:"15px"}}>
    <Form>
      <Form.Group className="mb-6" controlId="formBasicEmail">
        <Form.Label><FormattedMessage id="nombreUsuario"></FormattedMessage></Form.Label>
        <Form.Control
          type="email"
          isInvalid={!validationStates.emailState}
          onChange={handleEmailChange}
          value={formValues.email}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><FormattedMessage id="contrasena"></FormattedMessage></Form.Label>
        <Form.Control
          type="password"
          onChange={handlePasswordChange}
          value={formValues.password}
          isInvalid={!validationStates.emailState}
        />
      </Form.Group>
      { !validationStates.emailState && <Form.Text className="text-muted">Error de autenticación, revise sus credenciales</Form.Text>}
      <Container>
      <Button variant="primary" onClick={clickSubmit}>
        <FormattedMessage id="ingresar"></FormattedMessage>
      </Button>
      <Button variant="danger" >
        <FormattedMessage id="cancelar"></FormattedMessage>
      </Button>
      </Container>
    </Form>
    </Card>
  );
}
export default Login;
