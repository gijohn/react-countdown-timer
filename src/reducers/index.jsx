import {
    STATUS_STOPPED, STATUS_RUNNING, STATUS_PAUSED,
    START_COUNTDOWN_TIMER, STOP_COUNTDOWN_TIMER, PAUSE_COUNTDOWN_TIMER, RESUME_COUNTDOWN_TIMER, INITIALIZE_TIMER,
    SET_TIMER_VALUE, LAP_COUNTDOWN_TIMER, MERGE_LAST_LAP, UPDATE_THRESHOLD
} from "../constants";

/**
 * Reducers for CountDownTimer store.
 *
 * @author Giftson John
 */

/**
 * Utility function to update session storage
 * @param key {string} name of the field.
 * @param value {string} value of the field
 */
const updatSessionStorage = (key, value) => {
    sessionStorage.setItem(key, value);
};

/**
 * Utility function to clear the session storage field
 * @param key {string} name of the field to be removed.
 */
const clearSessionStorage = (key) => {
    sessionStorage.removeItem(key);
};

/**
 * Reducer to assess the current status of countdown timer.
 * @param currentState {string} current status of countdown timer.
 * @param action {object} action to be performed on store.
 * @return {string} new status based on action.
 */
export const status = (currentState = STATUS_STOPPED, action) => {
    switch (action.type) {
        case START_COUNTDOWN_TIMER:
        case RESUME_COUNTDOWN_TIMER:
            updatSessionStorage('status', STATUS_RUNNING);
            return STATUS_RUNNING;
        case STOP_COUNTDOWN_TIMER:
            clearSessionStorage('status');
            clearSessionStorage('laps');
            clearSessionStorage('timerValue');
            return STATUS_STOPPED;
        case PAUSE_COUNTDOWN_TIMER:
            updatSessionStorage('status', STATUS_PAUSED);
            return STATUS_PAUSED;
        default:
            return currentState;
    }
};

/**
 * Reducer to assess the current time value of countdown timer.
 * @param currentState {number} current value of countdown timer.
 * @param action {object} action to be performed on store.
 * @return {number} updated value for the countdown timer.
 */
export const timerValue = (currentState = 0, action) => {
    switch (action.type) {
        case INITIALIZE_TIMER:
        case SET_TIMER_VALUE:
            updatSessionStorage('timerValue', action.value);
            return action.value;
        case STOP_COUNTDOWN_TIMER:
            return 0;
        default:
            return currentState;
    }
};

/**
 * Reducer to assess the laps in the countdown timer.
 * @param currentState {Array} current laps in store.
 * @param action {Object} action to be performed on store.
 * @return {Array} updated laps
 */
export const laps = (currentState = [], action) => {
    let laps;

    switch (action.type) {
        case START_COUNTDOWN_TIMER:
            laps = [];
            laps.push({startTime: action.value});
            updatSessionStorage('laps', JSON.stringify(laps));
            return laps;
        case LAP_COUNTDOWN_TIMER:
            laps = currentState.slice();
            laps[laps.length - 1].endTime = action.value;
            laps.push({startTime: action.value});
            updatSessionStorage('laps', JSON.stringify(laps));
            return laps;
        case STOP_COUNTDOWN_TIMER:
            laps = currentState.slice();
            laps[laps.length - 1].endTime = action.value;
            updatSessionStorage('laps', JSON.stringify(laps));
            return laps;
        case MERGE_LAST_LAP:
            if (currentState.length > 1) {
                laps = currentState.slice();
                laps.splice(laps.length - 1, 1);
                delete laps[laps.length - 1].endTime;
                updatSessionStorage('laps', JSON.stringify(laps));
                return laps;
            } else {
                return currentState;
            }
        default:
            return currentState;
    }
};

/**
 * Reducer to assess the threshold value in store.
 * @param currentState {number} current threshold value in store
 * @param action {Object} action to be performed on store.
 * @return {number} updated threshold value.
 */
export const threshold = (currentState = 5000, action) => {
    switch (action.type) {
        case UPDATE_THRESHOLD:
            updatSessionStorage('threshold', action.value);
            return action.value;
        default:
            return currentState;
    }
};