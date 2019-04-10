import {createStore, combineReducers} from 'redux';
import {status, timerValue, laps, threshold} from '../reducers/index'

/**
 * Redux store to hold the values in common place for CountDownTimer component.
 * @param initialState {object} initial value to be applied in store.
 * @return {Store}
 *
 * @author Giftson John
 */
const timerStore = (initialState) => createStore(
    combineReducers({
        status,
        timerValue,
        laps,
        threshold
    }),
    initialState
);

export default timerStore;
