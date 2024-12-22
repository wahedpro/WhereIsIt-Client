import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
export const authContext = createContext();

const AuthProvider = ({ children }) => {

    const googleAuthProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // this is for create a new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // this is for login user 
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };


    const LoginWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider);
    };

    const manageProfile = (name, images) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: images,
        });
    };

    const logoutUser = () => {
        return signOut(auth);
    };

    const authInfo = {
        user,
        setUser,
        createUser,
        loginUser,
        logoutUser,
        LoginWithGoogle,
        manageProfile,
        loading,
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#2ecc71]"></div>
            </div>
        );
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;