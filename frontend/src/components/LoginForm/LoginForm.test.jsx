import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the form with username and password inputs', () => {
    render(<LoginForm />);

    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it('updates the state on input change', () => {
    render(<LoginForm />);

    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);

    userEvent.type(usernameInput, 'testuser');
    userEvent.type(passwordInput, 'testpassword');

    expect(usernameInput.value).toBe('testuser');
    expect(passwordInput.value).toBe('testpassword');
  });

  it('submits the form on button click', () => {
    const mockSubmit = jest.fn();
    render(<LoginForm handleSubmit={mockSubmit} />);

    const loginButton = screen.getByRole('button', { name: /login/i });

    userEvent.click(loginButton);

    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });

  it('calls the loginAPI function on form submit', () => {
    const mockLoginAPI = jest.fn();
    render(<LoginForm loginAPI={mockLoginAPI} />);

    const form = screen.getByTestId('login-form');

    fireEvent.submit(form);

    expect(mockLoginAPI).toHaveBeenCalledTimes(1);
  });
});
