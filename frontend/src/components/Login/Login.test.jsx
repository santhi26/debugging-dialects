import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegistrationForm from './login';

describe('RegistrationForm', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the form with email and password inputs', () => {
    render(<RegistrationForm />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /register/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('updates the state on input change', () => {
    render(<RegistrationForm />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    userEvent.type(emailInput, 'test@example.com');
    userEvent.type(passwordInput, 'testPassword');

    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('testPassword');
  });

  it('submits the form on button click', () => {
    const mockSubmit = jest.fn();
    render(<RegistrationForm onSubmit={mockSubmit} />);

    const submitButton = screen.getByRole('button', { name: /register/i });

    userEvent.click(submitButton);

    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });
});