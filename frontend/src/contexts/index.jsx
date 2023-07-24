import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [contextUsername, setContextUsername] = useState("");

  return (
    <UserContext.Provider value={{ contextUsername, setContextUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
