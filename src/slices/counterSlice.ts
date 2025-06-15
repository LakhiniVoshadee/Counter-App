import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export interface CounterState {    // 1) Define the state object
    count: number,   // Current count value
    error: string | null   // Error handling
}

const initialState: CounterState = { // Initial state
    count: 0,   // Initial count value
    error: null  // Initial error state
}

interface CounterActions { // 2) Define the actions that can be performed
    type: 'increment' | 'decrement';   // Action types
}

export const incrementAsync = createAsyncThunk('counter/incrementAsync', async (count: number) => {
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate an async operation
        return count;
    }
)

export const counterSlice = createSlice({   // slice name (counterSlice) and initial state
    name: 'counter',
    initialState, // 3) Set the initial state
    reducers: {
        increment: (state) => {   // Define the increment action
            const newCount = state.count + 1;
            const hasError = newCount > 5;   // Check if count exceeds 5
            if (hasError) {
                state.error = "Maximum Value Reached!"; // If count exceeds 5, set error message

            } else {
                state.count = newCount; // Update count if no error
                state.error = null; // Clear error if no error
            }
        },
        decrement: (state) => {   //  Define the decrement action
            const newCount = state.count - 1;
            const hasError = newCount < 0;   // Check if count is less than 0
            if (hasError) {
                state.error = "Minimum Value Reached!"; // If count is less than 0, set error message
            } else {
                state.count = newCount; // Update count if no error
                state.error = null; // Clear error if no error
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(incrementAsync.pending, () => {
            console.log("IncrementAsync is" + "still pending");

        }).addCase(incrementAsync.fulfilled, (state, action) => {
            state.count += action.payload; // Increment count by the value provided

        })

    }

});

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer; // Export the reducer

//This is the central part of the logic

/*export function counterSlice(state= initialState, action: CounterActions): CounterState {    // 4) Create a reducer function
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
}*/

