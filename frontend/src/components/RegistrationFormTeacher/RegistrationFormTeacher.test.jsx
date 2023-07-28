// import React from 'react';
// import { render, screen, fireEvent, cleanup} from '@testing-library/react';
// import { describe, it, expect, beforeEach, afterEach} from 'vitest';
// import { waitFor } from '@testing-library/dom';
// import { MemoryRouter } from 'react-router-dom';
// import RegistrationFormTeacher from '.';
// import matchers from '@testing-library/jest-dom/matchers';
// expect.extend(matchers);

// describe('RegistrationFormTeacher Component', () => {
//   afterEach(cleanup);

//   it('should fill in form fields and submit registration', async () => {
//     const testUsername = 'testuser';
//     const testEmail = 'testuser@example.com';
//     const testFullName = 'Test User';
//     const testHomeLanguage = 'English';
//     const testQualifications = 'B.Sc. in Computer Science';
//     const testBiography = 'A passionate teacher with years of experience.';
//     const testImage = 'https://example.com/image.jpg';
//     const testPassword = 'testpassword';

//     render(
//       <MemoryRouter> {/* Wrap the component in MemoryRouter */}
//         <RegistrationFormTeacher />
//       </MemoryRouter>
//     );

//     const usernameInput = screen.getByLabelText('Username');
//     const emailInput = screen.getByLabelText('Email');
//     const fullNameInput = screen.getByLabelText('Full Name');
//     const homeLanguageInput = screen.getByLabelText('Home Language');
//     const qualificationsTextarea = screen.getByLabelText('Qualifications');
//     const biographyTextarea = screen.getByLabelText('Biography');
//     const imageInput = screen.getByLabelText('Image URL');
//     const passwordInput = screen.getByLabelText('Password');
//     const confirmPasswordInput = screen.getByLabelText('Confirm Password');
//     const submitButton = screen.getByRole('button', { name: 'Register' });

//     fireEvent.change(usernameInput, { target: { value: testUsername } });
//     fireEvent.change(emailInput, { target: { value: testEmail } });
//     fireEvent.change(fullNameInput, { target: { value: testFullName } });
//     fireEvent.change(homeLanguageInput, { target: { value: testHomeLanguage } });
//     fireEvent.change(qualificationsTextarea, { target: { value: testQualifications } });
//     fireEvent.change(biographyTextarea, { target: { value: testBiography } });
//     fireEvent.change(imageInput, { target: { value: testImage } });
//     fireEvent.change(passwordInput, { target: { value: testPassword } });
//     fireEvent.change(confirmPasswordInput, { target: { value: testPassword } });

//     fireEvent.click(submitButton);

//     // Wait for the API call to complete
//     await waitFor(() => {
//       expect(screen.getByText('Successfully registered!')).toBeInTheDocument();
//     });
//   });
// });
