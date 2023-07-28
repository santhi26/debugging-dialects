import { React } from 'react';
import {vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { UserContext, UserProvider } from '../../contexts/index';
import LoginForm from '.';
vi.mock("BrowserRouter", () => ({resolve:vi.fn()}))
describe("LoginForm component", () => {

    // const customRender = (ui) => {
    //     return render(
    //       <UserContext.Provider>
    //         {ui}
    //       </UserContext.Provider>
    //     );
    //   };
      
  beforeEach(() => {
    render(
      
        <UserContext>
          <LoginForm />
        </UserContext>
      
    );
  });

  

  it("Displays a heading with appropriate text",() => {
    
    const elem = screen.findByRole("heading")
    console.log(elem)
    expect(elem).toBeInTheDocument();
    expect(elem.textContent).toBe("FluentPal")
  });

  afterEach(() => {
    cleanup();
  });


});
