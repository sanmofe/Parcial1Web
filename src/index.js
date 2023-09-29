import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Navbar } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import CafesLista from './cafes/CafesLista';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import Login from './formulario/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar>
      <Navbar.Brand href="#home">El aroma mágico</Navbar.Brand>
    </Navbar>
    <img src="https://previews.123rf.com/images/stepanpopov/stepanpopov1604/stepanpopov160400001/55067072-coffee-beans-spilling-out-of-burlap-bag-close-up.jpg" 
    style={{width: "1244px", height: "323px", marginLeft:"98px"}} />
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/cafes" element={<CafesLista />} />
       </Routes>
     </BrowserRouter>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
