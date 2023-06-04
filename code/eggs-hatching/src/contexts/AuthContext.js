import React, { useContext, useEffect , useState} from 'react'
import { auth, firestore } from '../firebase'


const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  async function signup(fullname, email, password){
    // return auth.createUserWithEmailAndPassword(email, password)
    try{
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      console.log(user);
      //await createUserDocument(user, { displayName });
      const userRef = firestore.doc(`users/${user.uid}`);
      const snapshot = await userRef.get();
      if (!snapshot.exists) {
    
        try {
          await userRef.set({
            fullname,
            email,
            createdAt: new Date(),
          });
        } catch (error) {
          console.log('Error in creating user', error);
        }
      }
    }catch (error){
      console.log("error", error);
    }
  }

  function login(email, password){
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)  
      setLoading(false)
        
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword
  }

  return (
    <AuthContext.Provider value = {value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
