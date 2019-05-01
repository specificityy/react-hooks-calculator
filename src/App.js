import React from 'react';
import logo from './logo.png';
import './App.css';

function Digit({ children, className = '' }) {
  return <button className={`digit ${className}`}>{children}</button>;
}

function Operand({ children }) {
  return <button className="operand">{children}</button>;
}

function FunctionKey({ children, className = '' }) {
  return <button className={`function-key ${className}`}>{children}</button>;
}

function Display({ children }) {
  return <div className="display">{children}</div>;
}

function App() {
  return (
    <div className="calculator">
      <img src={logo} alt="logo" width="200" />
      <Display>0.00</Display>

      <div className="keys">
        <FunctionKey className="two-columns">AC</FunctionKey>
        <FunctionKey>±</FunctionKey>
        <Operand>÷</Operand>

        <Digit>7</Digit>
        <Digit>8</Digit>
        <Digit>9</Digit>
        <Operand>×</Operand>

        <Digit>4</Digit>
        <Digit>5</Digit>
        <Digit>6</Digit>
        <Operand>-</Operand>

        <Digit>1</Digit>
        <Digit>2</Digit>
        <Digit>3</Digit>
        <Operand>+</Operand>

        <Digit className="two-columns">0</Digit>
        <Digit>.</Digit>
        <Operand>=</Operand>
      </div>
    </div>
  );
}

export default App;
