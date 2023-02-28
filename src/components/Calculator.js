import React from 'react';
import './styles/Calculator.css';

function Calculator() {
  return (
    <div className="calculator-page">
      <div className="title">
        <h3>Math Magicians</h3>
        <h5>Let&apos;s do some math</h5>

      </div>
      <div className="calculator">
        <div className="display">0</div>
        <div className="button-row">
          <button type="button" className="button-clear">AC</button>
          <button type="button" className="button-sign">+/-</button>
          <button type="button" className="button-percent">%</button>
          <button type="button" className="button-operator">÷</button>
        </div>
        <div className="button-row">
          <button type="button" className="button-number">7</button>
          <button type="button" className="button-number">8</button>
          <button type="button" className="button-number">9</button>
          <button type="button" className="button-operator">×</button>
        </div>
        <div className="button-row">
          <button type="button" className="button-number">4</button>
          <button type="button" className="button-number">5</button>
          <button type="button" className="button-number">6</button>
          <button type="button" className="button-operator">-</button>
        </div>
        <div className="button-row">
          <button type="button" className="button-number">1</button>
          <button type="button" className="button-number">2</button>
          <button type="button" className="button-number">3</button>
          <button type="button" className="button-operator">+</button>
        </div>
        <div className="button-row">
          <button type="button" className="button-number button-zero">0</button>
          <button type="button" className="button-number">.</button>
          <button type="button" className="button-operator">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
