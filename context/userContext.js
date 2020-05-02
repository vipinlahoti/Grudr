import { useState, useEffect, createContext, useContext } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
import firebase from '@credentials/client';

export const UserContext = createContext()

export default ({ children }) => {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true) // Helpful, to update the UI accordingly.

  useEffect(() => {
    // firebase.initializeApp(clientCredentials);
    // Listen authenticated user
    const unsubscriber = firebase.auth().onAuthStateChanged(async user => {
      try {
        if (user) {
          // User is signed in.
          const { uid, displayName, email, photoURL } = user
          // You could also look for the user doc in your Firestore (if you have one):
          // const userDoc = await firebase.firestore().doc(`users/${uid}`).get()
          setUser({ uid, displayName, email, photoURL })
        } else setUser(null)
      } catch (error) {
        // Most probably a connection error. Handle appropiately.
        console.log('useContext error: ', error);
      } finally {
        setLoadingUser(false)
      }
    })

    // Unsubscribe auth listener on unmount
    return () => unsubscriber()
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser, loadingUser }}>
      {children}
    </UserContext.Provider>
  )
}

// Custom hook that shorhands the context!
export const useUser = () => useContext(UserContext)
