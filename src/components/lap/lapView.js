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
        let {laps, status, threshold, timerValue, lastLapStartTime} = this.props;

        if (status !== STATUS_STOPPED) {
            laps = laps.slice().reverse();
        }

        return (
            <div className={'flex flex-col laps-container'}>
                <div className={'lap-header'}>Laps</div>
                <table>
                    <thead>
                    <tr>
                        <th>Lap#</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Elapsed Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        laps.map((lap, i) => {
                            const lapNumber = status === STATUS_STOPPED ? i + 1 : laps.length - i;
                            const startTime = lap.startTime;
                            const endTime = lap.endTime;
                            const elapsedTime = status === STATUS_STOPPED ? lap.endTime : (i === 0 ? timerValue : lap.endTime);
                            const lapsedTime = startTime - elapsedTime;

                                return (
                                    <tr className={`${lapsedTime > threshold ? 'bg-red' : ''}`}>
                                        {
                                                addTableRow(lapNumber, formatLap(startTime), endTime ? formatLap(elapsedTime) : '', formatLap(lapsedTime))
                                        }
                                    </tr>
                                );
                            }
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
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

const addTableRow = (...args) => args.map(value => <td>{value}</td>);

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