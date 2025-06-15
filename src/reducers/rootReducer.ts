import {combineReducers} from "redux";
import counterReducer from "../slices/counterSlice";

export const rootReducer = combineReducers({
    // Add your reducers here

    counter: counterReducer
    // TODO - ADD MORE REDUCERS AS NEEDED


});

// Export the root reducer
export type RootState = ReturnType<typeof rootReducer> // This is the type of the state object