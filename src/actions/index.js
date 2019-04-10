import {
    LAP_COUNTDOWN_TIMER, PAUSE_COUNTDOWN_TIMER, RESUME_COUNTDOWN_TIMER, START_COUNTDOWN_TIMER,
    STOP_COUNTDOWN_TIMER, INITIALIZE_TIMER, SET_TIMER_VALUE, MERGE_LAST_LAP, UPDATE_THRESHOLD
} from "../constants";

/**
 * Action creator to start the countdown timer
 * @param currentTime {number} current value on the counter.
 * @return {{type: string, value: number}}
 */
export const startCountdown = (currentTime) => {
    return {type: START_COUNTDOWN_TIMER, value: currentTime}
};

/**
 * Action creator to stop the countdown timer
 * @param currentTime {number} current value on the counter.
 * @return {{type: string, value: number}}
 */
export const stopCountdown = (currentTime) => {
    return {type: STOP_COUNTDOWN_TIMER, value: currentTime}
};

/**
 * Action creator to pause the countdown timer.
 * @return {{type: string}}
 */
export const pauseCountdown = () => {
    return {type: PAUSE_COUNTDOWN_TIMER};
};

/**
 * Action creator to resume the countdown timer.
 * @return {{type: string}}
 */
export const resumeCountdown = () => {
    return {type: RESUME_COUNTDOWN_TIMER};
};

/**
 * Action creator to create lap on the countdown timer.
 * @param currentTime {number} current value on the counter
 * @return {{type: string, value: number}}
 */
export const lapCountdown = (currentTime) =>  {
    return {type: LAP_COUNTDOWN_TIMER, value: currentTime};
};

/**
 * Action creator to cancel the last lap and merge the value with the previous lap.
 * @return {{typeL string}}
 */
export const mergeLastLap = () => {
    return {type: MERGE_LAST_LAP}
};

/**
 * Action creator to initialize the countdown timer
 * @param totalMilliSeconds {number} initial value set on the start.
 * @return {{type: string, value: number}}
 */
export const initializeTimer = (totalMilliSeconds) => {
    return {type: INITIALIZE_TIMER, value: totalMilliSeconds};
};

/**
 * Action creator to update the remaining time on the counter.
 * @param totalMilliSeconds {number} remaining time available to count down.
 * @return {{type: string, value: number}}
 */
export const updateReminingTime = (totalMilliSeconds) => {
    return {type: SET_TIMER_VALUE, value: totalMilliSeconds};
};

/**
 * Action creator to update the threshold value to the store.
 * @param seconds {number} threshold value in seconds
 * @return {{type: string, value: number}}
 */
export const updateThreshold = (seconds) => {
    return {type: UPDATE_THRESHOLD, value: seconds};
};