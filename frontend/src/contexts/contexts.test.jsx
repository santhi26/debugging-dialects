import React, { useContext } from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { UserContext, UserProvider } from './context';

// A test component to consume the UserContext
const TestComponent = () => {
  const { contextUsername, setContextUsername, messages, setMessages, users, setUsers } = useContext(UserContext);

  return (
    <>
      <div data-testid="username">{contextUsername}</div>
      <div data-testid="messages">{messages}</div>
      <div data-testid="users">{users}</div>
    </>
  );
};

describe('UserProvider', () => {
  afterEach(() => {
    cleanup();
  });

  it('should provide default values to the UserContext', () => {
    const { getByTestId } = render(
      <UserProvider>
        <TestComponent />
      </UserProvider>
    );

    // Check if the default values are provided to the context
    expect(getByTestId('username')).toHaveTextContent('');
    expect(getByTestId('messages')).toHaveTextContent('');
    expect(getByTestId('users')).toHaveTextContent('');
  });

  it('should update the context values correctly', () => {
    const { getByTestId } = render(
      <UserProvider>
        <TestComponent />
      </UserProvider>
    );

    // Update the context values
    const contextUsername = 'testUser';
    const messages = 'Hello, this is a test message';
    const users = ['user1', 'user2', 'user3'];

    // Access the context setters and update the context values
    UserProvider.contextValue.setContextUsername(contextUsername);
    UserProvider.contextValue.setMessages(messages);
    UserProvider.contextValue.setUsers(users);

    // Check if the context values are updated correctly
    expect(getByTestId('username')).toHaveTextContent(contextUsername);
    expect(getByTestId('messages')).toHaveTextContent(messages);
    expect(getByTestId('users')).toHaveTextContent(JSON.stringify(users));
  });
});