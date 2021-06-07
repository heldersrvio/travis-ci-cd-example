import { render, screen } from '@testing-library/react';
import App from './App';

test('renders example', () => {
  render(<App />);
  const linkElement = screen.getByText(/example/i);
  expect(linkElement).toBeInTheDocument();
});
