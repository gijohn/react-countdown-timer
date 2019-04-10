import React, {Component} from 'react';
import {convertMStoTime, padZeros} from "../../utils/index";
import './styles.css';
import {STATUS_STOPPED} from "../../constants";

/**
 * LapView Component.
 * It renders the Lap information.
 * While the status is stopped, it displays each and every lap's start time, end time, duration and threshold execeeded.
 * While the status is not stopped, it displays the on-going lap's start time.
 *
 * @author Giftson John
 */
export default class LapView extends Component {
    render () {
        const {laps, status, threshold} = this.props;

        if (laps) {
            if (status === STATUS_STOPPED) {
                return (
                    <div className={'flex flex-col laps-container'}>
                        <div className={'lap-header'}>Laps</div>
                        {laps.map((lap, i) => <LapResult key={lap.startTime} lap={lap} threshold={threshold} index={i + 1} />)}
                    </div>
                );
            } else if (laps.length > 1) {
                return (
                    <div className={'flex flex-col laps-container'}>
                        <div className={'lap-header'}>Laps</div>
                        {laps.slice(1).reverse().map((lap, i) => <div className={'laps'}
                                                                      key={lap.startTime}>{laps.length - i - 1}. {formatLap(lap.startTime)}</div>)}
                    </div>
                )
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
}

/**
 * Utility function to format the time in hh:mm:ss.ms format.
 * @param lapTime {number} time in milliseconds
 * @return {string} formatted string.
 */
const formatLap = (lapTime) => {
    const isNegative = lapTime < 0;
    const timeObj = convertMStoTime(Math.abs(lapTime));

    return `${isNegative ? '(-)' : ''}${padZeros(timeObj.hours, 2)}:${padZeros(timeObj.minutes, 2)}:${padZeros(timeObj.seconds, 2)}.${padZeros(timeObj.milliSeconds, 3)}`;
};

/**
 * Component to display the lap times in readable format
 * @param props {object} props of component
 * @return {*}
 * @constructor
 */
const LapResult = (props) => {
    const {lap, threshold, index} = props;
    return (
        <div className={'flex laps lap-container'}>
            <div className={'flex lap-index'}>{index}</div>
            <div className={'flex flex-col'}>
                <div className={'flex'}>
                   <div className={'lap-label'}>Start Time</div>
                    <div>{formatLap(lap.startTime)}</div>
                </div>
                <div className={'flex'}>
                    <div className={'lap-label'}>End Time</div>
                    <div>{formatLap(lap.endTime)}</div>
                </div>
                <div className={'flex'}>
                    <div className={'lap-label'}>Duration</div>
                    <div>{formatLap(lap.startTime - lap.endTime)}</div>
                </div>
                <div className={'flex'}>
                    <div className={'lap-label'}>Threshold Exceeded</div>
                    <div>{lap.startTime - lap.endTime > threshold ? 'Yes' : 'No'}</div>
                </div>
            </div>
        </div>
    );
};