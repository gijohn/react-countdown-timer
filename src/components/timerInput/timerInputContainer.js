import {connect} from 'react-redux';
import TimerInputController from './timerInputController';

/**
 * Connected component with redux store for <TimerInput />
 *
 * @author Giftson John
 */

/**
 * Creates a map for redux store state and binds as props to <TimerInputController /> component.
 * props mapped
 *   - timerValue - Current value of countdown timer.
 *   - threshold - Current threshold value set on store.
 *
 * @param state {object} current state of store
 * @return {{status: string}}
 */

const mapStateToProps = (state) => {
    return {
        timerValue: state.timerValue,
        threshold: state.threshold
    };
};

export default connect(mapStateToProps)(TimerInputController);