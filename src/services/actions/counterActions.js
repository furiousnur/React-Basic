import { DECREMENT, INCREMENT, RESET } from "../constant/counterConstants";

export const incrementCounter = () => {
    return {
        type: INCREMENT,
    };
};

export const resetCounter = () => {
    return {
        type: RESET,
    };
};

export const decrementCounter = () => {
    return {
        type: DECREMENT,
    };
};