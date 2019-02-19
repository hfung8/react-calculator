import React from 'react';
import ReactDOM from 'react-dom';
var Buttons;

Buttons = () => {
  return (
    <div>
      <button className="num" value={1}></button>
      <button className="num" value={2}></button>
      <button className="num" value={3}></button>
      <button className="num" value={4}></button>
      <button className="num" value={5}></button>
      <button className="num" value={6}></button>
      <button className="num" value={7}></button>
      <button className="num" value={8}></button>
      <button className="num" value={9}></button>
      <button className="num" value={0}></button>
    </div>
    )
  }


ReactDOM.render(<Buttons />, document.getElementById("root"));

