import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';

describe('Home component', () => {
  it('renders correctly', () => {
    const { container } = render(<Home />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
