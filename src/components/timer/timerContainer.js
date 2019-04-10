import {connect} from 'react-redux';
import TimerController from './timerController';

/**
 * Connected component with redux store for <Timer />
 *
 * @author Giftson John
 */

/**
 * Creates a map for redux store state and binds as props to <TimerController /> component.
 * props mapped
 *   - status - Current status of countdown timer.
 *   - timerValue - Current value of countdown timer.
 *   - lapStartTime - Current lap start time.
 *   - threshold - Current threshold value set on store.
 *   - isTimerGoingNegative - flag to show the timer is counting below 00:00:00.000
 *
 * @param state {object} current state of store
 * @return {{status: string}}
 */
const mapStateToProps = (state) => {
    return {
        status: state.status,
        timerValue: state.timerValue,
        lapStartTime: state.laps && state.laps.length && state.laps[state.laps.length - 1].startTime,
        threshold: state.threshold,
        isTimerGoingNegative: state.timerValue < 0
    };
}

export default connect(mapStateToProps)(TimerController);
