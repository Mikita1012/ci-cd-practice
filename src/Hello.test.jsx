import { render, screen } from '@testing-library/react';
import Hello from './Hello';
import App from './App';

test('renders hello message', () => {
  render(<App />);
  const headingElement = screen.getByText(/Hello, CI\/CD Pipeline!/i);
  expect(headingElement).toBeInTheDocument();
});
