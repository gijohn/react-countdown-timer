import React, {Component} from 'react';
import TimerInput from '../timerInput';
import TimerControl from '../timerControl';
import Timer from '../timer';
import Lap from '../lap';
import {STATUS_STOPPED} from "../../constants";
import './styles.css';

/**
 * CountDownTimer view component.
 * Renders <TimerInput /> component when on stopped status.
 * Renders <Timer /> component when not on stopped status.
 * Renders <TimerControl /> component and <Lap /> component
 *
 * @author Giftson John
 */
export default class CountDownTimerView extends Component {
    render () {
        const {status} = this.props;

        return (
            <div className={'flex flex1 justify-content-ce align-item-center'}>
                <div className={'flex flex-col timer-container'}>
                    {status === STATUS_STOPPED ? <TimerInput {...this.props} /> : <Timer {...this.props} />}
                    <TimerControl {...this.props} />
                    <Lap />
                </div>
            </div>
        );
    }
};