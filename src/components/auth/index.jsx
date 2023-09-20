import { createContext, useContext } from "react";
// creating store 

const initialState = {auth:false}

const authContext = createContext(initialState);

export function AuthProvider({children}){
    return <authContext.Provider value={initialState}>{children}</authContext.Provider>
}
export default function AuthConsumer(){
    return useContext(authContext)
}