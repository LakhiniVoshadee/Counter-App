export interface  CounterState {    // 1) Define the state object
    count: number,   // Current count value
    error: string | null   // Error handling
}

interface CounterActions { // 2) Define the actions that can be performed
    type: 'increment' | 'decrement';   // Action types
}

//This is the central part of the logic

export function CounterReducer(state: CounterState, action: CounterActions): CounterState {    // 4) Create a reducer function
    const {type} = action;
    switch (type) {
        case 'increment': {
            const newCount = state.count + 1;
            const hasError = newCount > 5;   // Check if count exceeds 5
            return {
                ...state,
                count: hasError ? state.count : newCount,
                error: hasError ? "Maximum Value Reached!" : null   // If count exceeds 5, set error message
            };
        }
        // Increment count
        case 'decrement': {
            const newCount = state.count - 1;
            const hasError = newCount < 0;   // Check if count is less than 5
            return {
                ...state,
                count: hasError ? state.count : newCount,   // If count is less than 5, do not decrement
                error: hasError ? "Minimum Value Reached!" : null   // If count is less than 5, set error message
            };
        }
        default:
            return state;    // Return current state if action is not recognized
    }
}
