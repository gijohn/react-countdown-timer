import {connect} from 'react-redux';
import LapView from './lapView';

/**
 * Connected component with redux store for <Lap />
 *
 * @author Giftson John
 */

/**
 * Creates a map for redux store state and binds as props to <LapView /> component.
 * props mapped
 *   - laps - Current laps updated on store.
 *   - status - Current status of countdown timer.
 *   - threshold - Current threshold value set on store.
 *
 * @param state {object} current state of store
 * @return {{status: string}}
 */
const mapStateToProps = (state) => {
    return {
        laps: state.laps,
        status: state.status,
        threshold: state.threshold
    };
}

export default connect(mapStateToProps)(LapView);
