import {React} from 'react';
import {test} from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders the App component with Router', () => {
  render(
    <Router>
      <App />
    </Router>
  );

  // Add your test assertions here based on what you want to test in the App component
  // For example, you can check if certain elements are present in the rendered output
  const headerElement = screen.getByRole('heading', { name: /FluentPal/i });
  expect(headerElement).toBeInTheDocument();
});
