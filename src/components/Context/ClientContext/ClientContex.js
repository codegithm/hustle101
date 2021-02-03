import React,{ createContext, useState } from 'react';

export const ClientContext = createContext();

export const ClientProvider = (props) =>{
    const [client, setClient] = useState()
    return(
        <ClientContext.Provider value={[client,setClient]}>
            {props.children}
        </ClientContext.Provider>
    )
}