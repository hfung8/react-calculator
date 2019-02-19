// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import Calculator from "./components/Calculator";

// ReactDOM.render(<Calculator />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

import React from 'react';
import ReactDOM from 'react-dom';
var Buttons;
// var HandleClick; 
Buttons = ({handleClick}) => {
  return (
    <div>
      <button className="num" onClick={(e) => {handleClick(1)}}>1</button>
      <button className="num" onClick={(e) => {handleClick(2)}}>2</button>
      <button className="num" onClick={(e) => {handleClick(3)}}>3</button>
      <button className="num" onClick={(e) => {handleClick(4)}}>4</button>
      <button className="num" onClick={(e) => {handleClick(5)}}>5</button>
      <button className="num" onClick={(e) => {handleClick(6)}}>6</button>
      <button className="num" onClick={(e) => {handleClick(7)}}>7</button>
      <button className="num" onClick={(e) => {handleClick(8)}}>8</button>
      <button className="num" onClick={(e) => {handleClick(9)}}>9</button>
      <button className="num" onClick={(e) => {handleClick(0)}}>0</button>
    </div>
  )
}

// HandleClick = ({handleClick}) => {
//   return (
//     console.log(handleClick)
//   )
// }


ReactDOM.render(<Buttons handleClick={(num) => console.log(num)}/>, document.getElementById("root"));


serviceWorker.unregister();
