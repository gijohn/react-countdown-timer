import React, {Component} from 'react';
import TimerControlView from './timerControlView';
import {STATUS_RUNNING} from "../../constants";

/**
 * TimerControlController Component.
 * Handles the business logic for the TimerControl component.
 *
 * @author Giftson John
 */
export default class TimerControlController extends Component {
    constructor (props) {
        super (props);

        this.handleStartButtonClick = this.handleStartButtonClick.bind(this);
        this.handlePauseButtonClick = this.handlePauseButtonClick.bind(this);
        this.handleStopButtonClick = this.handleStopButtonClick.bind(this);
        this.handleResumeButtonClick = this.handleResumeButtonClick.bind(this);
        this.handleLapButtonClick = this.handleLapButtonClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.setRef = this.setRef.bind(this);

        this.containerDOM = null;
    }

    /**
     * React lifecyle method overridden to set the focus to the DOM to handle keypress event.
     */
    componentDidMount () {
        this.setFocus();
    }

    /**
     * React lifecyle method overridden to set the focus to the DOM to handle keypress event.
     */
    componentDidUpdate () {
        this.setFocus();
    }

    /**
     * Utility function used to set the focus on container DOM.
     */
    setFocus () {
        this.containerDOM && this.containerDOM.focus();
    }

    /**
     * Handler function for ref.
     * @param domElement {HTMLElement} target element where ref is applied.
     */
    setRef (domElement) {
        this.containerDOM = domElement;
    }

    /**
     * Handler function for start timer button click.
     * it invokes startTimer dispatch function
     */
    handleStartButtonClick () {
        const {startTimer, timerValue} = this.props;

        startTimer(timerValue);
    }

    /**
     * Handler function for pause timer button click.
     * it invokes pauseTimer dispatch function.
     */
    handlePauseButtonClick () {
        this.props.pauseTimer();
    }

    /**
     * Handler function for stop timer button click.
     * it invokes stopTimer dispatch function.
     */
    handleStopButtonClick () {
        const {stopTimer, timerValue} = this.props;
        stopTimer(timerValue);
    }

    /**
     * Handler function for Resume timer button click
     */
    handleResumeButtonClick () {
        this.props.resumeTimer();
    }

    /**
     * Handler function for Lap timer button click.
     * It invokes lapTimer dispatch function.
     */
    handleLapButtonClick () {
        const {lapTimer, timerValue} = this.props;

        lapTimer(timerValue);
    }

    /**
     * Handler function for key press event.
     * Only 2 keys are supported. It works only when timer is in running state.
     * - Space bar - Adds Lap.
     * - Backspace - Merges current lap to previous lap.
     * @param event
     */
    handleKeyDown (event) {
        if (this.props.status === STATUS_RUNNING) {
            const keyCode = event.keyCode;

            if (keyCode === 32) {
                const {lapTimer, timerValue} = this.props;
                lapTimer(timerValue);
            } else if (keyCode === 8) {
                this.props.mergeLastLap();
            }
        }
    }

    /**
     * Renders the TimerControlView
     * @return {*}
     */
    render () {
        const {status, timerValue} = this.props;
        return (
            <TimerControlView
                status={status}
                timerValue={timerValue}
                onStartButtonClick={this.handleStartButtonClick}
                onStopButtonClick={this.handleStopButtonClick}
                onPauseButtonClick={this.handlePauseButtonClick}
                onResumeButtonClick={this.handleResumeButtonClick}
                onLapButtonClick={this.handleLapButtonClick}
                onKeyDown={this.handleKeyDown}
                setRef={this.setRef}
            />
        );
    }
}