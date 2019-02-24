import React from 'react';
import Button from "./Button";
import { Row, Container} from 'react-bootstrap';

// const rowstyle = {
//   height:'50px',
//   width:'50px'
// };


const Calculator = () => {
  return (
    <div>
      <Container fluid={true}>
        <Row noGutters={true}>
        <Button number = {1} />
        <Button number = {2} />
        <Button number = {3} />
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
