import {React} from 'react';
import {describe, it, expect, beforeEach, afterEach} from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // MemoryRouter for testing routing components
import App from './App';

describe('App', () => {
  it('renders home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Assuming Pages.homePage component has a unique identifier
    const homePageElement = screen.getByTestId('home-page');

    // Assert that the home page is rendered
    expect(homePageElement).toBeInTheDocument();
  });

  it('renders login page', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    );

    // Assuming Pages.login component has a unique identifier
    const loginPageElement = screen.getByTestId('login-page');

    // Assert that the login page is rendered
    expect(loginPageElement).toBeInTheDocument();
  });

  // Add more test cases for other routes and components if needed...
});
  