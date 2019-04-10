import {connect} from 'react-redux';
import {
    lapCountdown, pauseCountdown, resumeCountdown, startCountdown, stopCountdown, initializeTimer,
    updateReminingTime, mergeLastLap, updateThreshold
} from "../../actions";
import CountDownTimerView from './countDownTimerView';

/**
 * Connected component with redux store for <CountDownTimer />
 *
 * @author Giftson John
 */

/**
 * Creates a map for redux store state and binds as props to <CountDownTimerView /> component.
 * props mapped
 *   - status - Current status of countdown timer.
 *
 * @param state {object} current state of store
 * @return {{status: string}}
 */
const mapStateToProps = (state) => {
    return {
        status: state.status
    };
}

/**
 * Creates a map for redux store dispatch method and binds as props to <CountDownTimerView /> component.
 * dispatch methods mapped
 *   - startTimer - Start the countdown timer.
 *   - stopTimer - Stops the countdown timer.
 *   - pauseTimer - Pauses the countdown timer.
 *   - resumeTimer - Resumes the paused countdown timer.
 *   - lapTimer - Adds lap to the coundown timer.
 *   - mergeLastLap - Merges the current lap to previous lap.
 *   - initializeTimer - Initialise the countdown timer with time.
 *   - updateReminingTime - Updates the remaining time available.
 *   - updateThreshold - Updates the threshold value to store.
 * @param dispatch {function} dispatch method reference of store.
 * @return props mapped to dispatch method.
 */
const mapDispatchToProps = (dispatch) => {
    return {
        startTimer: (currentTime) => dispatch(startCountdown(currentTime)),
        stopTimer: (currentTime) => dispatch(stopCountdown(currentTime)),
        pauseTimer: () => dispatch(pauseCountdown()),
        resumeTimer: () => dispatch(resumeCountdown()),
        lapTimer: (currentTime) => dispatch(lapCountdown(currentTime)),
        mergeLastLap: () => dispatch(mergeLastLap()),
        initializeTimer: (totalMilliSeconds) => dispatch(initializeTimer(totalMilliSeconds)),
        updateRemainingTime: (totalMilliSeconds) => dispatch(updateReminingTime(totalMilliSeconds)),
        updateThreshold: (seconds) => dispatch(updateThreshold(seconds))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountDownTimerView);
