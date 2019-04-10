import React, {Component} from 'react';
import {convertMStoTime, padZeros} from "../../utils/index";
import './styles.css';

/**
 * TimerView Component.
 * Renders the countdown timer element.
 *
 * @author Giftson John
 */
export default class TimerView extends Component {
    render () {
        const {timerValue, isTimerGoingNegative, lapStartTime, threshold} = this.props;
        const timeObj = convertMStoTime(Math.abs(timerValue));
        const {hours, minutes, seconds, milliSeconds} = timeObj;
        const thresholdExceeded = (lapStartTime !== undefined && ((lapStartTime - timerValue) > threshold)) || false;

        return (
            <div className={`flex font-sz-65px justify-content-ce pad-1r countdown-container ${thresholdExceeded ? 'threshold-exceeded' : ''}`}>
                <span className={'negativeIndicator'}>{isTimerGoingNegative && '-'}</span>{padZeros(hours,2)}:{padZeros(minutes,2)}:{padZeros(seconds,2)}.{padZeros(milliSeconds,3)}
            </div>
        );
    }
}
