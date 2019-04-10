import React, {Component} from 'react';
import {Provider} from 'react-redux';
import TimerContainer from './countDownTimerContainer';
import countDownStore from '../../store';

export default class Timer extends Component {
    render () {
        let initialValue={};

        if (sessionStorage.getItem('status')) {
            initialValue['status'] = sessionStorage.getItem('status');
        }

        if (sessionStorage.getItem('timerValue')) {
            initialValue['timerValue'] = parseInt(sessionStorage.getItem('timerValue'), 10);
        }

        if (sessionStorage.getItem('laps')) {
            initialValue['laps'] = JSON.parse(sessionStorage.getItem('laps'));
        }

        if (sessionStorage.getItem('threshold')) {
            initialValue['threshold'] = parseInt(sessionStorage.getItem('threshold'), 10);
        }

        const store = countDownStore(initialValue);
        return (
            <Provider store={store}>
                <TimerContainer />
            </Provider>
        );
    }
}