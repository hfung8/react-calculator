import React from 'react';
// import ReactDOM from 'react-dom';
import Button from "./Button";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Calculator = () => {
  return (
    <div>
      <Container>
        <Row>
        <Col md={4}><Button number = {1} /></Col>
        <Col md={4}><Button number = {2} /></Col>
        <Col md={4}><Button number = {3} /></Col>
        </Row>
        {/* <Row>
        <Col><Button number = {4} /></Col>
        <Col><Button number = {5} /></Col>
        <Col><Button number = {6} /></Col>
        </Row>
        <Row>
        <Col><Button number = {7} /></Col>
        <Col><Button number = {8} /></Col>
        <Col><Button number = {9} /></Col>
        </Row> */}
      </Container>
    </div>
  )
}

export default Calculator;
// ReactDOM.render(<Buttons />, document.getElementById("root"));

