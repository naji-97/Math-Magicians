import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
 test('renders Navbar component', () => {
  render(<BrowserRouter> 
  <Navbar />
</BrowserRouter>);
  const linkElements = screen.getAllByTestId(/navbar-link-.*/);
  expect(linkElements).toHaveLength(4);
});


  test('contains the correct links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const homeLink = screen.getByRole('link', { name: 'Home' });
    
    const calculatorLink = screen.getByRole('link', { name: 'Calculator' });
    const quoteLink = screen.getByRole('link', { name: 'Quote' });
    expect(homeLink.getAttribute('href')).toBe('/');
    expect(calculatorLink.getAttribute('href')).toBe('/calculator');
    expect(quoteLink.getAttribute('href')).toBe('/quote');
  });
});
