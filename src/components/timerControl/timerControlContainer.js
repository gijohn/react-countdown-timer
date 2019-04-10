import {connect} from 'react-redux';
import TimerControlController from './timerControlController';

/**
 * Connected component with redux store for <TimerControl />
 *
 * @author Giftson John
 */

/**
 * Creates a map for redux store state and binds as props to <TimerControlController /> component.
 * props mapped
 *   - status - Current status of countdown timer.
 *   - timerValue - Current value of countdown timer.
 *
 * @param state {object} current state of store
 * @return {{status: string}}
 */

const mapStateToProps = (state) => {
    return {
        status: state.status,
        timerValue: state.timerValue
    };
}

export default connect(mapStateToProps)(TimerControlController);
