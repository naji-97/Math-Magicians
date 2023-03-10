import React, { useState } from 'react';
import './styles/Calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  function handleClick(buttonName) {
    const newState = calculate(state, buttonName);
    setState(newState);
  }

  return (
    <div className="calculator">
      <div data-testid="display" className="display">{state.next || state.total || '0'}</div>
      <div className="button-row">
        <button
          type="button"
          className="button-clear"
          onClick={() => handleClick('AC')}
          data-testid="button-AC"
        >
          AC
        </button>
        <button
          type="button"
          className="button-sign"
          onClick={() => handleClick('+/-')}
          data-testid="button-+/-"
        >
          +/-
        </button>
        <button
          type="button"
          className="button-percent"
          onClick={() => handleClick('%')}
          data-testid="button-%"
        >
          %
        </button>
        <button
          type="button"
          className="button-operator"
          onClick={() => handleClick('÷')}
          data-testid="button-÷"
        >
          ÷
        </button>
      </div>
      <div className="button-row">
        <button
          type="button"
          className="button-number"
          onClick={() => handleClick('7')}
          data-testid="button-7"
        >
          7
        </button>
        <button
          type="button"
          className="button-number"
          onClick={() => handleClick('8')}
          data-testid="button-8"
        >
          8
        </button>
        <button
          type="button"
          className="button-number"
          onClick={() => handleClick('9')}
          data-testid="button-9"
        >
          9
        </button>
        <button
          type="button"
          className="button-operator"
          onClick={() => handleClick('x')}
          data-testid="button-x"
        >
          x
        </button>
      </div>
      <div className="button-row">
        <button
          type="button"
          className="button-number"
          onClick={() => handleClick('4')}
          data-testid="button-4"
        >
          4
        </button>
        <button
          type="button"
          className="button-number"
          onClick={() => handleClick('5')}
          data-testid="button-5"
        >
          5
        </button>
        <button
          type="button"
          className="button-number"
          onClick={() => handleClick('6')}
          data-testid="button-6"
        >
          6
        </button>
        <button
          type="button"
          className="button-operator"
          onClick={() => handleClick('-')}
          data-testid="button--"
        >
          -
        </button>
      </div>
      <div className="button-row">
        <button
          type="button"
          className="button-number"
          onClick={() => handleClick('1')}
          data-testid="button-1"
        >
          1
        </button>
        <button
          type="button"
          className="button-number"
          onClick={() => handleClick('2')}
          data-testid="button-2"
        >
          2
        </button>
        <button
          type="button"
          className="button-number"
          onClick={() => handleClick('3')}
          data-testid="button-3"
        >
          3
        </button>
        <button
          type="button"
          className="button-operator"
          onClick={() => handleClick('+')}
          data-testid="button-+"
        >
          +
        </button>
      </div>
      <div className="button-row">
        <button
          type="button"
          className="button-number button-zero"
          onClick={() => handleClick('0')}
        >
          0
        </button>
        <button
          type="button"
          className="button-number"
          onClick={() => handleClick('.')}
        >
          .
        </button>
        <button
          type="button"
          className="button-operator"
          onClick={() => handleClick('=')}
          data-testid="button-="
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
