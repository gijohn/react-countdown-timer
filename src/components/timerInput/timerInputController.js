import React, {Component} from 'react';
import TimerInputView from './timerInputView';
import {convertMStoTime, convertTimeToMS} from "../../utils/index";

/**
 * TimerInputController Component.
 * Handles business logic for TimerInput component.
 *
 * @author Giftson John
 */
export default class TimerInputController extends Component {
    constructor (props) {
        super(props);

        this.dropDownChangeHandler = this.dropDownChangeHandler.bind(this);
        this.handleThresholdChange = this.handleThresholdChange.bind(this);
    }

    /**
     * Change handler for hours, minutes and seconds dropdowns.
     * Update the time and set the data back to redux store.
     *
     * @param event {Event} object triggered by the element.
     * @param unit {string} unit of measures. it will be one of 'h', 'm' and 's'
     */
    dropDownChangeHandler(event, unit) {
        const value = parseInt(event.target.value, 10);
        const {timerValue, initializeTimer} = this.props;

        const timeObject = convertMStoTime(timerValue);

        switch (unit) {
            case 'h':
                timeObject.hours = value;
                break;
            case 'm':
                timeObject.minutes = value;
                break;
            case 's':
                timeObject.seconds = value;
                break;
            default:
                break;
        }

        initializeTimer(convertTimeToMS(timeObject.hours, timeObject.minutes, timeObject.seconds));
    }

    /**
     * Change handler for threshold text input.
     * @param event {Event} object of input element.
     */
    handleThresholdChange (event) {
        const value = parseInt(event.target.value, 10);

        if (value && !isNaN(value)) {
            this.props.updateThreshold(value * 1000);
        }
    }

    /**
     * Renders TimerInputView component.
     * @return {*}
     */
    render () {
        const {timerValue, threshold} = this.props;
        const timeSplit = convertMStoTime(timerValue);

        const formatValue = (value) => value < 10 ? `0${value}` : value;

        return (
            <TimerInputView
                hours={formatValue(timeSplit.hours)}
                minutes={formatValue(timeSplit.minutes)}
                seconds={formatValue(timeSplit.seconds)}
                threshold={threshold}
                onThresholdChange={this.handleThresholdChange}
                onDropDownChange={this.dropDownChangeHandler} />
        );
    }
}