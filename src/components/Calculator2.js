import React, { useState } from 'react';
import Button from "./Button";
import { Row, Container,InputGroup} from 'react-bootstrap';

function Calculator() {

  const [current, setCurrent] = useState(0);
  const [operator, setOperator] = useState('');
  const [total, setTotal] = useState(0);

//   constructor (props){
//     super(props);
//     this.state = { current: 0, operator: '', total: 0};
//     this.handleType = this.handleType.bind(this);
//     this.calculate = this.calculate.bind(this);
//     this.handleAction = this.handleAction.bind(this);
//     this.getResult = this.getResult.bind(this);
//     this.clearResult = this.clearResult.bind(this);
//   }

    function calculate(sign, number) {
    if (sign === "-"){
      console.log(total);
      console.log(parseInt(total - number));
      return parseInt(total - number);
    } else if (sign === "+"){
      return parseInt(total + number);
    } else if (sign === "*"){
      return parseInt(total * number);
    } else if (sign === "/"){
      return parseInt(total / number);
    }
  }

  function handleType(e){
    const value = e.target.textContent;
    setCurrent(value);
  console.log(current);
}

  function handleAction(e) {
    console.log("hello again");
    const operator = e.target.textContent;
    console.log(operator);
    this.setState((prevState) => {
      return {
        total : prevState.current,
        operator: operator,
        current:0
      }
    });
  }


  function getResult() {
    console.log("hello");
    this.setState({current: this.calculate(this.state.operator, this.state.current)});
    console.log(this.state.current)
  }

  function clearResult() {
    this.setState({current : 0})
  }

  return (
    <div>
      <Container className="container" fluid={true}>
        <Row noGutters={true}>
        <InputGroup>
          <InputGroup.Text className="input">{current}</InputGroup.Text>
        </InputGroup>
        </Row>
        <Row noGutters={true}>
        <Button number = {1} onclick = {handleType}/>
        <Button number = {2} onclick = {handleType}/>
        <Button number = {3} onclick = {handleType}/>
        <Button number = {"+"} onclick = {handleAction}/>
        </Row>
        <Row noGutters={true}>
        <Button number = {4} onclick = {handleType}/>
        <Button number = {5} onclick = {handleType}/>
        <Button number = {6} onclick = {handleType}/>
        <Button number = {"-"} onclick = {handleAction}/>
        </Row>
        <Row noGutters={true}>
        <Button number = {7} onclick = {handleType}/>
        <Button number = {8} onclick = {handleType}/>
        <Button number = {9} onclick = {handleType}/>
        <Button number = {"*"} onclick = {handleAction}/>
        </Row>
        <Row noGutters={true}>
        <Button number = {0} onclick = {handleType}/>
        <Button number = {"="} onclick = {getResult}/>
        <Button number = {"C"} onclick = {clearResult}/>
        <Button number = {"/"} onclick = {handleAction}/>
        </Row>
        </Container>
        
    </div>
  )
}

export default Calculator;
