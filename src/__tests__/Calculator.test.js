import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Calculator from '../components/Calculator';

describe('Calculator component', () => {
  test('displays "0" initially', () => {
    render(<Calculator />);
    const display = screen.getByTestId('display', {
      ignore: ['comment', 'script', 'style'],
    });
    expect(display).toHaveTextContent('0');
  });

  test('updates display when numbers are clicked', () => {
    render(<Calculator />);
    const button7 = screen.getByTestId('button-7', { name: '7' });
    const button8 = screen.getByTestId('button-8', { name: '8' });
    const button9 = screen.getByTestId('button-9', { name: '9' });
    fireEvent.click(button7);
    fireEvent.click(button8);
    fireEvent.click(button9);
    const display = screen.getByTestId('display', {
      ignore: ['comment', 'script', 'style'],
    });
    expect(display).toHaveTextContent('789');
  });

  test('updates display when an operator is clicked', () => {
    render(<Calculator />);
    const button7 = screen.getByText('7');
    const button8 = screen.getByText('8');
    const buttonPlus = screen.getByText('+');

    fireEvent.click(button7);
    fireEvent.click(buttonPlus);
    fireEvent.click(button8);

    const display = screen.getByTestId('display');
    expect(display).toHaveTextContent('8');
  });

  test('calculates the correct result when equals is clicked', () => {
    render(<Calculator />);
    const button7 = screen.getByTestId('button-7', { name: '7' });
    const button8 = screen.getByTestId('button-8', { name: '8' });
    const buttonPlus = screen.getByTestId('button-+', { name: '+' });
    const buttonEquals = screen.getByTestId('button-=', { name: '=' });

    fireEvent.click(button7);
    fireEvent.click(buttonPlus);
    fireEvent.click(button8);
    fireEvent.click(buttonEquals);
    const display = screen.getByTestId('display', {
      ignore: ['comment', 'script', 'style'],
    });
    expect(display).toHaveTextContent('15');
  });
});
