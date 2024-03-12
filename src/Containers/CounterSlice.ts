import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CounterState {
    value: string;
}

const initialState: CounterState = {
    value: '0'
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        appendDigit: (state, action: PayloadAction<string>) => {
            if (state.value === "0") {
                state.value = action.payload;
            } else {
                state.value += action.payload;
            }
        },
        operatorEvaluation: (state, action: PayloadAction<string>) => {
            state.value += action.payload;
        },
        solution: (state) => {
            try {
                state.value = eval(state.value).toString();
            } catch (error) {
                state.value = "Error";
            }
        },
        clear: (state) => {
            state.value = "0";
        },
        onDelete: (state) => {
            state.value = state.value.slice(0, -1); // Удалить последний символ
        }
    }
});

export const counterReducer = counterSlice.reducer;
export const {appendDigit, operatorEvaluation, solution, clear, onDelete} = counterSlice.actions;