import './Counter.css'
import {Message} from "../Message/Message";
import {useDispatch, useSelector} from "react-redux";
/*import {decrement, increment} from "../../actions/counterActions";*/
import {RootState} from "../../reducers/rootReducer";
import {decrement, increment, incrementAsync} from "../../slices/counterSlice";
import {AppDispatch} from "../../store/store";



export function Counter() {
    // 3) Import and use the useReducer hook

    /* const [state, dispatch] = useReducer(   // 6) Define the state and dispatch function using useReducer
         counterSlice, {
             count: 0, // Initial count value
             error: null // Initial error state
         }
     );
 */

    const dispatch = useDispatch<AppDispatch>();  // to refer the action (to get dispatch function from Redux store)

    /*const count = useSelector((state: CounterState) => state.count); // Access the counter state from Redux store

    const error = useSelector((state: CounterState) => state.error); // Access the error state from Redux store*/

    useSelector((state: RootState) => state.counter); // Access the counter state from Redux store{
    const {count, error} = useSelector((state: RootState) => state.counter); // Destructure count and error from the counter state


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
            <h2>Count: {count}</h2>
            {error && <p className="error">{error}</p>} {/* Display error message if exists */}
            {/*<h2>Count: {count}</h2>*/}

            <div>
                <button className="button" onClick={() => dispatch(increment())}>+</button>
                <button className="button" onClick={() => dispatch(decrement())}>-</button>
                <button className="button" onClick={() => dispatch(incrementAsync(1))}>Async Add 1</button>

            </div>
            <Message/>
        </div>
    );
}