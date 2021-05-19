import { useEffect, useState } from 'react';


export function useAuth(authFirebase) {
    const [authentication, setAuthentication] = useState(null);

    const auth = authFirebase();
    const provider = new authFirebase.GoogleAuthProvider();

    console.log(auth);

    const logIn = () => auth.signInWithPopup(provider);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            console.log(user);
            if (user) {
                setAuthentication(user);
            } else {
                setAuthentication(null);
            }
        });
    }, [authentication]);

    const logOut = () => auth.signOut().catch(err => console.error());

    return {authentication, logIn, logOut};
}