import React from 'react';
import Button from "./Button";
import { Row, Container,InputGroup} from 'react-bootstrap';

class Calculator extends React.Component {
  constructor (props){
    super(props);
    this.state = { current: 0, operator: '', total: 0};
    this.handleType = this.handleType.bind(this);
    this.calculate = this.calculate.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.getResult = this.getResult.bind(this);
    this.clearResult = this.clearResult.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.current !== prevProps.current){
      this.setState({current : this.state.current});
    }
  }

  calculate(sign, number){
    if (sign === "-"){
      console.log(this.state.total);
      console.log(parseInt(this.state.total - number));
      return parseInt(this.state.total - number);
    } else if (sign === "+"){
      return parseInt(this.state.total + number);
    } else if (sign === "*"){
      return parseInt(this.state.total * number);
    } else if (sign === "/"){
      return parseInt(this.state.total / number);
    }
  }

  handleAction = (e) => {
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
  handleType = (e) => {
    const value = e.target.textContent;
    console.log("This is the value", value);
    this.setState({current: value})
  console.log(this.state);
}

  getResult = () => {
    console.log("hello");
    this.setState({current: this.calculate(this.state.operator, this.state.current)});
    console.log(this.state.current)
  }

  clearResult = () => {
    this.setState({current : 0})
  }
  render(){
  return (
    <div>
      <Container className="container" fluid={true}>
        <Row noGutters={true}>
        <InputGroup>
          <InputGroup.Text className="input">{this.state.current}</InputGroup.Text>
        </InputGroup>
        </Row>
        <Row noGutters={true}>
        <Button number = {1} onclick = {this.handleType}/>
        <Button number = {2} onclick = {this.handleType}/>
        <Button number = {3} onclick = {this.handleType}/>
        <Button number = {"+"} onclick = {this.handleAction}/>
        </Row>
        <Row noGutters={true}>
        <Button number = {4} onclick = {this.handleType}/>
        <Button number = {5} onclick = {this.handleType}/>
        <Button number = {6} onclick = {this.handleType}/>
        <Button number = {"-"} onclick = {this.handleAction}/>
        </Row>
        <Row noGutters={true}>
        <Button number = {7} onclick = {this.handleType}/>
        <Button number = {8} onclick = {this.handleType}/>
        <Button number = {9} onclick = {this.handleType}/>
        <Button number = {"*"} onclick = {this.handleAction}/>
        </Row>
        <Row noGutters={true}>
        <Button number = {0} onclick = {this.handleType}/>
        <Button number = {"="} onclick = {this.getResult}/>
        <Button number = {"C"} onclick = {this.clearResult}/>
        <Button number = {"/"} onclick = {this.handleAction}/>
        </Row>
        </Container>
        
    </div>
  )
}
}

export default Calculator;
