import './Counter.css'
import {useReducer} from "react";
import {Message} from "../Message/Message";
import {CounterReducer} from "../../reducers/counterReducer";


export function Counter() {
    // 3) Import and use the useReducer hook

    const [state, dispatch] = useReducer(   // 6) Define the state and dispatch function using useReducer
        CounterReducer, {
            count: 0, // Initial count value
            error: null // Initial error state
        }
    );

    /*const [count,setCount] = useState(0);*/

    /*useEffect(() => {
        alert("componentDidMount:" + "Component has been mounted!" + "Props:" + props.data);

        return () => {
            alert("componentWillUnmount:" + "Component is being removed!")
        }
    }, []);//Run only once

    useEffect(() => {
        alert("componentDidUpdate:" + "component has been updated");

    }, [count]);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);

    }

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    }*/
    return (
        <div className="counter">
            <h1>This is the Counter App!(Functional Component)</h1>
            <br/>
            <h2>Count: {state.count}</h2>
            {state.error && <p className="error">{state.error}</p>} {/* Display error message if exists */}
            {/*<h2>Count: {count}</h2>*/}

            <div>
                <button className="button" onClick={() => dispatch({type: 'increment'})}>+</button>
                <button className="button" onClick={() => dispatch({type: 'decrement'})}>-</button>
            </div>
            <Message/>
        </div>
    );
}