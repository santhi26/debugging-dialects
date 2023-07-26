import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { UserContext } from '../../contexts';

describe('Header', () => {
  test('renders default navigation when user is not logged in', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: /home/i });
    const loginLink = screen.getByRole('link', { name: /login/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });

    expect(homeLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });

  test('renders teacher navigation when user is logged in as teacher', () => {
    render(
      <MemoryRouter>
        <UserContext.Provider value={{ contextUsername: 'teacher@example.com', role: 'teacher' }}>
          <Header />
        </UserContext.Provider>
      </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: /home/i });
    const chatLink = screen.getByRole('link', { name: /chat/i });
    const profileLink = screen.getByRole('link', { name: /profile/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });

    expect(homeLink).toBeInTheDocument();
    expect(chatLink).toBeInTheDocument();
    expect(profileLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });

  test('renders student navigation when user is logged in as student', () => {
    render(
      <MemoryRouter>
        <UserContext.Provider value={{ contextUsername: 'student@example.com', role: 'student' }}>
          <Header />
        </UserContext.Provider>
      </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: /home/i });
    const chatLink = screen.getByRole('link', { name: /chat/i });
    const flashcardsLink = screen.getByRole('link', { name: /flashcards/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });

    expect(homeLink).toBeInTheDocument();
    expect(chatLink).toBeInTheDocument();
    expect(flashcardsLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });
});