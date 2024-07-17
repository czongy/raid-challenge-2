import { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

function UserProvider({children}) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedLogin = localStorage.getItem('Login');
    return savedLogin ? JSON.parse(savedLogin) : false;
  });

  const [isOwner, setIsOwner] = useState(() => {
    const savedOwner = localStorage.getItem('Owner');
    return savedOwner ? JSON.parse(savedOwner) : false;
  });

  useEffect(() => {
    localStorage.setItem('Login', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem('Owner', JSON.stringify(isOwner));
  }, [isOwner]);

  function handleLogin(e) {
    e.preventDefault();
    setIsLoggedIn(true);
  }

  function handleLogout(e) {
    e.preventDefault();
    setIsLoggedIn(false);
    setIsOwner(false);
    window.location.href = '/';
  }

  function handleOwner(e) {
    e.preventDefault();
    setIsOwner(true);
  }

  return (
    <UserContext.Provider value={{ isLoggedIn, isOwner, handleLogin, handleLogout, handleOwner }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };