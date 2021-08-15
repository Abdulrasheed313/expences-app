import React ,{ createContext, useReducer } from "react";
import TranstionReducer from './transReducer'


let intialtranstions = [
    {amount: 500,desc: "cash"},
    {amount: -40,desc: "Bool"},
    {amount: -200,desc: "Camera"}


]

 export const TranstionContext = createContext(intialtranstions);
 
 export const TranstionProvider = ({children})=>{
    let [state,dispatch] = useReducer(TranstionReducer,intialtranstions)
    function addTranstion (transObj){
        dispatch({
            type:"ADD TRANSACTION",
            payload:{
                amount: transObj.amount,
                desc: transObj.desc
            },
        })
    }
    return(
        <TranstionContext.Provider value={{
            transtions: state,
            addTranstion
        }}>
          {children}
        </TranstionContext.Provider>
    )
}