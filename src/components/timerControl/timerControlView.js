import React, {Component} from 'react';
import {STATUS_PAUSED, STATUS_RUNNING, STATUS_STOPPED} from "../../constants";
import './styles.css';

/**
 * TimerControlView component.
 * It renders the buttons for CountDownTimer component.
 * Start Timer button will be rendered only on Stopped status.
 * Stop Timer and Lap buttons whill be rendered when not on Stopped Status.
 * Pause timer button will be displayed on Running status.
 * Resume timer button will be displayed on Paused status.
 * Lap timer button will be enabled only on Running status.
 *
 * @author Giftson John
 */
export default class TimerControlView extends Component {
    render () {
        const {onStartButtonClick, onStopButtonClick, onPauseButtonClick, onResumeButtonClick, onLapButtonClick, onKeyDown, status, setRef} = this.props;

        return (
            <div className={'flex flex1 justify-content-ce control-container'} tabIndex={0} onKeyDown={onKeyDown} ref={setRef}>
                {status === STATUS_STOPPED && <input tabIndex={-1} type={'button'} id={'btnStartTimer'} className={'button'} onClick={onStartButtonClick} value={'Start'} /> }
                {status !== STATUS_STOPPED && <input tabIndex={-1} type={'button'} id={'btnStopTimer'} className={'button'} onClick={onStopButtonClick} value={'Stop'} /> }
                {status === STATUS_RUNNING && <input tabIndex={-1} type={'button'} id={'btnPauseTimer'} className={'button'} onClick={onPauseButtonClick} value={'Pause'} /> }
                {status === STATUS_PAUSED && <input tabIndex={-1} type={'button'} id={'btnResumeTimer'} className={'button'} onClick={onResumeButtonClick} value={'Resume'} /> }
                {status !== STATUS_STOPPED && <input tabIndex={-1} type={'button'} id={'btnLapTimer'} className={'button'} onClick={onLapButtonClick} value={'Lap'} disabled={status !== STATUS_RUNNING} /> }
            </div>
        )
    }
}
