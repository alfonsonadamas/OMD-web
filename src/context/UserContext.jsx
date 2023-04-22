import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";

export const UserContext = createContext();

const UserProvider = ({children}) =>{
    const [user, setUser] = useState(false);

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                const {email, password} = user;
                setUser({email, password})
            }else{
                setUser(null);
            }
        });
        return unsuscribe;  
    }, [])


    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;

export const useUserContext =  () => (useContext(UserContext))