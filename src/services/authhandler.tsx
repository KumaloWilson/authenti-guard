import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "./firebaseauth";


export function RequireToken({ children }) {
    // Option 2: Function for Initial State (assuming auth.currentUser is available)
    const [user, setUser] = React.useState(() => {
        // Check localStorage first for a persisted user object
        try {
            const persistedUser = localStorage.getItem("user");
            return persistedUser ? JSON.parse(persistedUser) : null;
        } catch (error) {
            console.error("Error retrieving persisted user:", error);
            return null;
        }
    });

    const location = useLocation();

    React.useEffect(() => {
        // Listen for auth state changes and update user state
        const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
            setUser(firebaseUser);

            // Persist user state to localStorage on update for seamless experience
            if (firebaseUser) {
                localStorage.setItem("user", JSON.stringify(firebaseUser));
            } else {
                localStorage.removeItem("user"); // Clear persisted user on logout
            }
        });

        return () => unsubscribe();
    }, []);

    // Handle both unauthenticated and unverified email scenarios
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    if (!user.emailVerified) {
        return <Navigate to="/verify-email" state={{ from: location }} />;
    }

    return <>{children}</>;
}
