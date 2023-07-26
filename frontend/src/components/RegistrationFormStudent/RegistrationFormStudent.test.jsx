import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RegistrationFormStudent from './index.jsx';

describe('RegistrationFormStudent', () => {
  it('renders the form fields', () => {
    render(<RegistrationFormStudent />, { wrapper: MemoryRouter });

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/home language/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument();
  });

  it('updates state on input change', () => {
    render(<RegistrationFormStudent />, { wrapper: MemoryRouter });

    const usernameInput = screen.getByLabelText(/username/i);
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    expect(usernameInput.value).toBe('testuser');

    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput.value).toBe('test@example.com');

    const fullNameInput = screen.getByLabelText(/full name/i);
    fireEvent.change(fullNameInput, { target: { value: 'Test User' } });
    expect(fullNameInput.value).toBe('Test User');

    const homeLanguageInput = screen.getByLabelText(/home language/i);
    fireEvent.change(homeLanguageInput, { target: { value: 'English' } });
    expect(homeLanguageInput.value).toBe('English');

    const passwordInput = screen.getByLabelText(/password/i);
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    expect(passwordInput.value).toBe('testpassword');

    const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
    fireEvent.change(confirmPasswordInput, { target: { value: 'testpassword' } });
    expect(confirmPasswordInput.value).toBe('testpassword');
  });

  it('calls the registerAPI function on form submission', () => {
    render(<RegistrationFormStudent />, { wrapper: MemoryRouter });

    const registerAPI = jest.fn();
    const handleSubmit = jest.spyOn(React, 'useState').mockReturnValue([registerAPI]);

    const form = screen.getByTestId('registration-form');
    fireEvent.submit(form);

    expect(registerAPI).toHaveBeenCalledTimes(1);
  });
});
