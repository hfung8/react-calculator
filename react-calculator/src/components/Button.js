import React from 'react';
import Col from 'react-bootstrap/Col';

const Button = props => {
return (
  <div>
    <Col md={4} className="no-gutter">
    <button className="num">{props.number}</button>
    </Col>
  </div>
)
}

export default Button;