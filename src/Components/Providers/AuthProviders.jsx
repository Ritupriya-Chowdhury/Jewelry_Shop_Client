import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut,updateProfile } from "firebase/auth";
import {app} from '../Firebase/firebase.config'


export const AuthContext = createContext({});
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);



    // create user using email password

    const createUser = (email, password) => {


        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
    // sign in with user email password

    const signIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    //sign in with google

    const GoogleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {

        return signInWithPopup(auth, GoogleProvider);

    }

    //sign out logged account

    const SignOut = () => {
        return signOut(auth);
    }


    // observed user auth state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false);
            // if (currentUser) {
            //     const loggedUser = {
            //         email: currentUser.email
            //     }

            //     fetch('https://manga-anime-shop-server.vercel.app/jwt', {
            //         method: 'POST',
            //         headers: {
            //             'content-types': 'application/json'
            //         },
            //         body: JSON.stringify(loggedUser)
            //     })
            //         .then(res => res.json())
            //         .then(data => {
            //             console.log(data)
            //             localStorage.setItem('manga-token', data.token);
            //         })

            // }
            // else{
            //     localStorage.removeItem('manga-token');
            // }
        });

        return () => {
            return unSubscribe();
        }
    }, [])


    //send auth information 
    const authInfo = {
        auth,
        user,
        createUser,
        loader,
        signIn,
        signInWithGoogle,
        SignOut,
        updateUserProfile

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;