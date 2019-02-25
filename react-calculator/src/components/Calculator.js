import React from 'react';
import Button from "./Button";
import { Row, Container} from 'react-bootstrap';

const Calculator = () => {
  return (
    <div>
      <Container fluid={true}>
        <Row noGutters={true}>
        <Button number = {1} />
        <Button number = {2} />
        <Button number = {3} />
        </Row>
        <Row noGutters={true}>
        <Button number = {4} />
        <Button number = {5} />
        <Button number = {6} />
        </Row>
        <Row noGutters={true}>
        <Button number = {7} />
        <Button number = {8} />
        <Button number = {9} />
        </Row>
        </Container>
    </div>
  )
}

export default Calculator;
