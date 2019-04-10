import React from 'react';
import configureMockStore from 'redux-mock-store'
import {STATUS_PAUSED, STATUS_RUNNING, STATUS_STOPPED} from "../../constants";
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import CountDownTimer from './countDownTimerContainer';

const mockStore = configureMockStore();

describe('<CountDownTimer /> tests', () => {
    it('snapshot test on stopped state', () => {
        const store = mockStore({
            threshold: 5000,
            timerValue: 12345678,
            status: STATUS_STOPPED
        });

        const component = renderer.create(
            <Provider store={store}>
                <CountDownTimer />
            </Provider>
        );

        expect(component.toJSON()).toMatchSnapshot();
    });

    it('snapshot test on stopped state with laps', () => {
        const store = mockStore({
            threshold: 5000,
            timerValue: 12345678,
            status: STATUS_STOPPED,
            laps: [
                {
                    startTime: 4000,
                    endTime: 3000
                },
                {
                    startTime: 3000,
                    endTime: 2000
                }
            ]
        });

        const component = renderer.create(
            <Provider store={store}>
                <CountDownTimer />
            </Provider>
        );

        expect(component.toJSON()).toMatchSnapshot();
    });

    it('snapshot test on running state', () => {
        const store = mockStore({
            threshold: 5000,
            timerValue: 12345678,
            status: STATUS_RUNNING
        });

        const component = renderer.create(
            <Provider store={store}>
                <CountDownTimer />
            </Provider>
        );

        expect(component.toJSON()).toMatchSnapshot();
    });

    it('snapshot test on running state with laps', () => {
        const store = mockStore({
            threshold: 5000,
            timerValue: 12345678,
            status: STATUS_RUNNING,
            laps: [
                {
                    startTime: 4000,
                    endTime: 3000
                },
                {
                    startTime: 3000,
                    endTime: 2000
                },
                {
                    startTime: 2000
                }
            ]
        });

        const component = renderer.create(
            <Provider store={store}>
                <CountDownTimer />
            </Provider>
        );

        expect(component.toJSON()).toMatchSnapshot();
    });

    it('snapshot test on paused state', () => {
        const store = mockStore({
            threshold: 5000,
            timerValue: 12345678,
            status: STATUS_PAUSED
        });

        const component = renderer.create(
            <Provider store={store}>
                <CountDownTimer />
            </Provider>
        );

        expect(component.toJSON()).toMatchSnapshot();
    });

    it('snapshot test on paused state with laps', () => {
        const store = mockStore({
            threshold: 5000,
            timerValue: 12345678,
            status: STATUS_PAUSED,
            laps: [
                {
                    startTime: 4000,
                    endTime: 3000
                },
                {
                    startTime: 3000,
                    endTime: 2000
                },
                {
                    startTime: 2000
                }
            ]
        });

        const component = renderer.create(
            <Provider store={store}>
                <CountDownTimer />
            </Provider>
        );

        expect(component.toJSON()).toMatchSnapshot();
    });
});