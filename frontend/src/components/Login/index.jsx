import React, {useState} from 'react';

export default function login() {
    return (
      <div className="Form">
        <h1>login</h1>
        <div className="email">
          <label className="form_label" htmlFor="email">
            Email:
          </label>
          <input
            className="form_input"
            value={email}
            type="text"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="password">
          <label className="form_label" htmlFor="password">
            Password:
          </label>
          <input
            className="form_input"
            value={password}
            type="text"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="submit-button">
          <button type="submit" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
  
