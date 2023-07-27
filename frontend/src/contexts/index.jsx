import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [contextUsername, setContextUsername] = useState("");
  const [messages, setMessages] = useState([{sender_username:"", recipient_username:"", date_sent:"", message:""}]);
  const [users, setUsers] = useState([{username:"", user_id:"", role:"student", is_online:false}]);
  const [userID, setUserID] = useState("")
  const [role, setRole] = useState("")
  const [level, setLevel] = useState("")
  const [rating, setRating] = useState("")

  return (
    <UserContext.Provider value={{ contextUsername, setContextUsername, messages, setMessages, users, setUsers, userID, setUserID, role, setRole, level, setLevel, rating, setRating }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
