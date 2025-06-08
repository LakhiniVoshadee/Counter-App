import React, {createContext} from "react";
import './App.css';
import {Counter} from "./components/Counter/Counter";

export const MessageContext =  createContext('');
function App(){
    const message = "Hello There!";
    return (
        <MessageContext.Provider value={message}>
            <div className="app">
                {/*  <h1>This is a Functional App Component!</h1>*/}
                <Counter/>
            </div>
        </MessageContext.Provider>
    );
}



export default App;