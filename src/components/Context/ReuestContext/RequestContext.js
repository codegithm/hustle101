import React, { createContext, useState } from 'react'

export const RequestContext = createContext();

export const RequestProvider = (props) =>{
    const [request,setRequest] = useState([{
        title: "",
        description: "",
        price: "",
        time: ""
    }])
    return(
        <RequestContext.Provider value={[request,setRequest]}>
            {props.children}
        </RequestContext.Provider>
    )
}