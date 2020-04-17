import React, { useState, useEffect, useContext, createContext } from "react";
// import queryString from "query-string";

// @ts-ignore
const authContext = createContext();

export function ProvideAuth({ children }: any) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = (): any => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState<any | null>(null);

  const signin = (email: string, password: string) => {
    return new Promise((resolve) => {
      const user = { name: 'user1' }
      setUser(user);
      resolve(user);
    });
  };

  const signup = (email: string, password: string) => {
    new Promise((resolve) => {
      setUser(user);
      resolve({ name: 'user1' })
    });
  };

  const signout = () => {
    // logout api, app
    setUser(null);
  };

  const sendPasswordResetEmail = (email: string) => {
    // promise
    return true
  };

  const confirmPasswordReset = (password: string, code: string) => {
    // promise
    return true
  };

  // Subscribe to user on mount
  useEffect(() => {
    // const unsubscribe = request(user => {
    //   if (user) {
    //     setUser(user);
    //   } else {
    //     setUser(false);
    //   }
    // });

    // Subscription unsubscribe function
    // return () => unsubscribe();
  }, []);

  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset
  };
}
