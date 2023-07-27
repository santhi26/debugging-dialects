import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RegistrationFormTeacher from './index.jsx';

describe('RegistrationFormTeacher', () => {
  it('renders the form fields', () => {
    render(<RegistrationFormTeacher />, { wrapper: MemoryRouter });

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/home language/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/qualifications/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/biography/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/image/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument();
  });

  it('updates state on input change', () => {
    render(<RegistrationFormTeacher />, { wrapper: MemoryRouter });

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

    const qualificationsInput = screen.getByLabelText(/qualifications/i);
    fireEvent.change(qualificationsInput, { target: { value: 'Test Qualifications' } });
    expect(qualificationsInput.value).toBe('Test Qualifications');

    const biographyInput = screen.getByLabelText(/biography/i);
    fireEvent.change(biographyInput, { target: { value: 'Test Biography' } });
    expect(biographyInput.value).toBe('Test Biography');

    const imageInput = screen.getByLabelText(/image/i);
    fireEvent.change(imageInput, { target: { value: 'test-image-url' } });
    expect(imageInput.value).toBe('test-image-url');

    const passwordInput = screen.getByLabelText(/password/i);
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    expect(passwordInput.value).toBe('testpassword');

    const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
    fireEvent.change(confirmPasswordInput, { target: { value: 'testpassword' } });
    expect(confirmPasswordInput.value).toBe('testpassword');
  });

  it('calls the registerAPI function on form submission', () => {
    render(<RegistrationFormTeacher />, { wrapper: MemoryRouter });

    const registerAPI = jest.fn();
    const handleSubmit = jest.spyOn(React, 'useState').mockReturnValue([registerAPI]);

    const form = screen.getByTestId('registration-form');
    fireEvent.submit(form);

    expect(registerAPI).toHaveBeenCalledTimes(1);
  });
});
