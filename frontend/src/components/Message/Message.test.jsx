import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, beforeEach} from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);
import Message from './Message';

describe('Message Component', () => {
  const testMessage = {
    sender_username: 'JohnDoe',
    message: 'Hello, how are you?',
  };

  it('should render correctly with the provided message', () => {
    const { getByText } = render(<Message msg={testMessage} />);

  
    expect(getByText(`${testMessage.sender_username} - time`)).toBeInTheDocument();
    expect(getByText(testMessage.message)).toBeInTheDocument();
  });
});
