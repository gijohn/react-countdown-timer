import React, {Component} from 'react';
import './styles.css';

/**
 * TimerInputView component.
 * Renders the dropdowns to set the initial value for countdown timer.
 * Also it renders an input field to update the threshold value.
 *
 * @author Giftson John
 */
export default class TimerInputView extends Component {
    render () {
        const {hours, minutes, seconds, threshold, onDropDownChange, onThresholdChange} = this.props;
        const buildOptions = (start, end) => {
            const options = [];
            for(let i = start; i <= end; i++) {
                const value = i < 10 ? `0${i}` : i;
                options.push(<option key={value} value={value}>{value}</option>);
            }

            return options;
        };
        return (
            <div className={'flex pad-1r flex-col'}>
                <div className={'flex'}>
                    <div className={'flex label align-item-center'}>Set Timer</div>
                    <div className={'flex'}>
                        <div className={'flex flex-col'}>
                            <label htmlFor={'hoursDropDown'}>Hours</label>
                            <select id={'hoursDropDown'} className={'font-sz-30px'} value={hours} onChange={(event) => onDropDownChange(event, 'h')}>
                                {buildOptions(0, 23)}
                            </select>
                        </div>
                        <div className={'flex flex-col'}>
                            <label htmlFor={'minutesDropDown'} className={'mar-left-05r'}>Minutes</label>
                            <select id={'minutesDropDown'} className={'font-sz-30px mar-left-05r'} value={minutes} onChange={(event) => onDropDownChange(event, 'm')}>
                                {buildOptions(0, 59)}
                            </select>
                        </div>
                        <div className={'flex flex-col'}>
                            <label htmlFor={'secondsDropDown'} className={'mar-left-05r'}>Seconds</label>
                            <select id={'secondsDropDown'} className={'font-sz-30px mar-left-05r'} value={seconds} onChange={(event) => onDropDownChange(event, 's')}>
                                {buildOptions(0, 59)}
                            </select>
                        </div>
                    </div>
                </div>
                <div className={'flex mar-top-05r'}>
                    <div className={'flex label align-item-center flex-wrap-wrap'}>Set Threshold (in seconds)</div>
                    <div className={'flex'}>
                        <input type={'text'} className={'input-text'} onChange={onThresholdChange} value={threshold / 1000} />
                    </div>
                </div>
            </div>
        );
    }
}
