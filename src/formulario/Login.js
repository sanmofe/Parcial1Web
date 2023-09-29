import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card, Container } from "react-bootstrap";
import "./login.css"
import { useNavigate } from "react-router-dom";

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
                navigate("/cafes");
            }else{
                setValidationStates({ ...validationStates, passwordState: true });
                setValidationStates({ ...validationStates, emailState: true });
            }
            
        })
        .catch((err) => console.log(err));
    }

  

  return (
    <Card style={{width: "50vw"}}>
    <Form>
      <Form.Group className="mb-6" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          isInvalid={!validationStates.emailState}
          onChange={handleEmailChange}
          value={formValues.email}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={formValues.password}
          isInvalid={!validationStates.passwordState}
        />
      </Form.Group>
      { !validationStates.emailState && <Form.Text className="text-muted">Error de autenticación, revise sus credenciales</Form.Text>}
      <Container>
      <Button variant="primary" onClick={clickSubmit}>
        Submit
      </Button>
      <Button variant="danger" >
        Cancel
      </Button>
      </Container>
    </Form>
    </Card>
  );
}
export default Login;
