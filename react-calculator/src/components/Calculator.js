import React from 'react';
import Button from "./Button";
import { Row, Container,InputGroup, FormControl} from 'react-bootstrap';

const Calculator = () => {
  return (
    <div>
      <Container className="container" fluid={true}>
        <Row noGutters={true}>
        <InputGroup className="input">
          <FormControl>
          </FormControl>
        </InputGroup>
        </Row>
        <Row noGutters={true}>
        <Button number = {1} />
        <Button number = {2} />
        <Button number = {3} />
        <Button number = {"+"} />
        </Row>
        <Row noGutters={true}>
        <Button number = {4} />
        <Button number = {5} />
        <Button number = {6} />
        <Button number = {"-"} />
        </Row>
        <Row noGutters={true}>
        <Button number = {7} />
        <Button number = {8} />
        <Button number = {9} />
        <Button number = {"*"} />
        </Row>
        <Row noGutters={true}>
        <Button number = {0} />
        <Button number = {"="} />
        <Button number = {"C"} />
        <Button number = {"/"} />
        </Row>
        </Container>
        
    </div>
  )
}

export default Calculator;
