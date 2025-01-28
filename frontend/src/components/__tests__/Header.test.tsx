import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

import Header from '../Header';

test('renders logo', () => {
  render(<Header />);
  const logo = screen.getByText(/DocGen/i);
  expect(logo).toBeInTheDocument();
});