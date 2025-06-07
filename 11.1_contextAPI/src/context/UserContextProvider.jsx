import React, { useState } from "react";
import { createContext, useContext } from "react";

export const UserContext = createContext();
export function userContext() {
  const user = useContext(UserContext);
  return user;
}

function UserContextProvider({ children }) {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
