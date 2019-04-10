import React, {Component} from 'react';
import TimerView from './timerView';
import {STATUS_RUNNING} from "../../constants";

/**
 * TimerController Component.
 * Handles the business logic for Timer Component.
 *
 * @author Giftson John
 */
export default class TimerController extends Component {
    constructor (props) {
        super(props);

        this.timerTick = this.timerTick.bind(this);
        this.checkAndStartTimer = this.checkAndStartTimer.bind(this);

        this.intervalHandle = null;
    }

    /**
     * React lifecyle method overridden to start / stop the timer based on the status.
     */
    componentDidMount () {
        const {status} = this.props;
        this.checkAndStartTimer(status);
    }

    /**
     * React lifecyle method overridden to start / stop the timer based on the status.
     */
    componentDidUpdate (prevProps) {
        const {status} = this.props;
        this.checkAndStartTimer(status, prevProps.status);
    }

    /**
     * React lifecycle method is overridden to clear the interval handle when component is about to be destroyed.
     */
    componentWillUnmount () {
        if (this.intervalHandle !== null) {
            clearInterval(this.intervalHandle);
            this.intervalHandle = null;
        }
    }

    /**
     * Sets the interval when the status is changed to Running.
     * Clears the interval when the status is changed to not Running.
     * @param currentStatus {string} current active status
     * @param previousStatus {string} previous status.
     */
    checkAndStartTimer (currentStatus, previousStatus) {
        if (currentStatus === STATUS_RUNNING && previousStatus !== STATUS_RUNNING) {
            this.intervalHandle = setInterval(this.timerTick, 10);
        } else if (currentStatus !== STATUS_RUNNING && this.intervalHandle !== null) {
            clearInterval(this.intervalHandle);
            this.intervalHandle = null;
        }
    }

    /**
     * Helper method which will be invoked by setInterval function on every 10 milliseconds.
     * It calls the updateRemainingTime dispatch function to update the remaining time.
     */
    timerTick () {
        const {timerValue, updateRemainingTime} = this.props;

        updateRemainingTime(timerValue - 10);
    }

    /**
     * Renders the TimerView component
     * @return {*}
     */
    render () {
        return (
            <TimerView {...this.props} />
        );
    }
}