import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Test link link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Test link/i);
  expect(linkElement).toBeInTheDocument();
});
