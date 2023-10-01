import React from "react";
import ReactDOM from "react-dom/client";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import CafesLista from "./cafes/CafesLista";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import Login from "./formulario/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormattedMessage, IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <IntlProvider locale={navigator.language} messages= {navigator.language.startsWith("es")?localeEsMessages:localeEnMessages}>
        <React.StrictMode>
            <Navbar>
                <Navbar.Brand
                    href="#home"
                    style={{ fontFamily: "Indie Flower", marginLeft: "98px" }}
                >
                    El aroma mágico
                </Navbar.Brand>
            </Navbar>
            <img
                src="https://0201.nccdn.net/1_2/000/000/138/986/banner-cafe%CC%81.jpg#RDAMDAID35806719"
                style={{ width: "1244px", height: "323px", marginLeft: "98px" }}
            />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cafes" element={<CafesLista />} />
                </Routes>
            </BrowserRouter>
            <footer style={{textAlign:"center", marginTop:"10vh"}}>
                <Container>
                    <Row>
                        <Col>
                        <FormattedMessage id="contacto"></FormattedMessage>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </React.StrictMode>
    </IntlProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
