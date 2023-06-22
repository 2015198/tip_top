import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const StateContext = createContext({
  currentUser: {},
  userToken: null,
  setCurrentUser: () => { },
  setUserToken: () => { },
});


export const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  });
  const [userToken, setUserToken] = useState('1234');
  // const [userToken, _setUserToken] = useState(localStorage.getItem('TOKEN') || '');
  // const [toast, setToast] = useState({message: '', show: false})

  // const setUserToken = (token) => {
  //   if (token) {
  //     localStorage.setItem('TOKEN', token)
  //   } else {
  //     localStorage.removeItem('TOKEN')
  //   }
  //   _setUserToken(token);
  // }

  const showToast = (message) => {
    setToast({ message, show: true })
    setTimeout(() => {
      setToast({ message: '', show: false })
    }, 5000)
  }

  return (
    <StateContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        userToken,
        setUserToken,
        // surveys,
        // questionTypes,
        // toast,
        // showToast
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);