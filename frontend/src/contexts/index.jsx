import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [contextUsername, setContextUsername] = useState("");
  const [messages, setMessages] = useState("");
  const [users, setUsers] = useState("")

  return (
    <UserContext.Provider value={{ contextUsername, setContextUsername, messages, setMessages, users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
