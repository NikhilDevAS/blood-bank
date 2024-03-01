const { createContext, useState, useEffect } = require('react');

export const Context = createContext();

export default function ContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('userInfo')) {
      setUser(JSON.parse(localStorage.getItem('userInfo')));
    }
  }, []);

  const authUser = (data) => {
    localStorage.setItem(
      'userInfo',
      JSON.stringify({
        ...data,
      })
    );
    setUser(data);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userInfo');
  };

  return (
    <Context.Provider
      value={{
        authUser,
        user,
        logout,
      }}
    >
      {children}
    </Context.Provider>
  );
}
