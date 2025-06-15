import React, {createContext} from "react";
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Provider} from "react-redux";
import {store} from "./store/store";

export const MessageContext =  createContext('');
function App(){
    const message = "Hello There!";
    return (


        //1) Wrap the App component with Provider

        <Provider store={store}>
            <MessageContext.Provider value={message}>
                <div className="app">
                    {/*  <h1>This is a Functional App Component!</h1>*/}
                    <Counter/>
                </div>
            </MessageContext.Provider>
        </Provider>
    );
}



export default App;