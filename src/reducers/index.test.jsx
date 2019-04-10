import {status, threshold, timerValue, laps} from './index';
import {
    INITIALIZE_TIMER, LAP_COUNTDOWN_TIMER, MERGE_LAST_LAP,
    PAUSE_COUNTDOWN_TIMER, RESUME_COUNTDOWN_TIMER, SET_TIMER_VALUE, START_COUNTDOWN_TIMER, STATUS_PAUSED,
    STATUS_RUNNING, STATUS_STOPPED,
    STOP_COUNTDOWN_TIMER, UPDATE_THRESHOLD
} from "../constants";

describe('Reducer tests', () => {
    beforeAll(() => {
        global.sessionStorage = {};
        global.sessionStorage.setItem = jest.fn();
        global.sessionStorage.removeItem = jest.fn();
    });

    describe('status reducer tests', () => {
        it('should return started on start action', () => {
            const expected = STATUS_RUNNING;
            const actual = status(undefined, {type: START_COUNTDOWN_TIMER, value: 1234});

            expect(actual).toEqual(expected);
        });

        it('should return stopped on stop action', () => {
            const expected = STATUS_STOPPED;
            const actual = status(undefined, {type: STOP_COUNTDOWN_TIMER, value: 1234});

            expect(actual).toEqual(expected);
        });

        it('should return paused on pause action', () => {
            const expected = STATUS_PAUSED;
            const actual = status(undefined, {type: PAUSE_COUNTDOWN_TIMER});

            expect(actual).toEqual(expected);
        });

        it('should return started on resume action', () => {
            const expected = STATUS_RUNNING;
            const actual = status(STATUS_PAUSED, {type: RESUME_COUNTDOWN_TIMER});

            expect(actual).toEqual(expected);
        });

        it('should return default status on no action', () => {
            const expected = STATUS_STOPPED;
            const actual = status(undefined, {type: 'invalid'});

            expect(actual).toEqual(expected);
        });
    });

    describe('timerValue reducer tests', () => {
        it('should return valid time on initialize timer action', () => {
            const expected = 123456;
            const actual = timerValue(0, {type: INITIALIZE_TIMER, value: 123456});

            expect(actual).toEqual(expected);
        });

        it('should return valid time on set timer action', () => {
            const expected = 123456;
            const actual = timerValue(0, {type: SET_TIMER_VALUE, value: 123456});

            expect(actual).toEqual(expected);
        });

        it('should return default time on invalid  action', () => {
            const expected = 0;
            const actual = timerValue(undefined, {type: 'Not a valid action'});

            expect(actual).toEqual(expected);
        });
    });

    describe('laps reducer test', () => {
        it('should return valid laps on start timer action', () => {
            const expected = [{startTime: 1234}];
            const actual = laps(undefined, {type: START_COUNTDOWN_TIMER, value: 1234});

            expect(actual).toEqual(expected);
        });

        it('should return valid laps on lap timer action', () => {
            const expected = [{startTime: 1234, endTime: 4567}, {startTime: 4567}];
            const actual = laps([{startTime: 1234}], {type: LAP_COUNTDOWN_TIMER, value: 4567});

            expect(actual).toEqual(expected);
        });

        it('should return valid laps on stop timer action', () => {
            const expected = [{startTime: 1234, endTime: 4567}];
            const actual = laps([{startTime: 1234}], {type: STOP_COUNTDOWN_TIMER, value: 4567});

            expect(actual).toEqual(expected);
        });

        it('should return valid laps on merge lap action', () => {
            const expected = [{startTime: 1234}];
            const actual = laps([{startTime: 1234, endTime: 4567}, {startTime: 4567}], {type: MERGE_LAST_LAP});

            expect(actual).toEqual(expected);
        });

        it('should return default laps on invalid action', () => {
            const expected = [];
            const actual = laps(undefined, {type: 'invalid'});

            expect(actual).toEqual(expected);
        });
    });

    describe('threshold reducer test', () => {
        it('should return valid value on update threshold action', () => {
            const expected = 15000;
            const actual = threshold(undefined, {type: UPDATE_THRESHOLD, value: 15000});

            expect(actual).toEqual(expected);
        });

        it('should return default value on invalid action', () => {
            const expected = 5000;
            const actual = threshold(undefined, {type: 'invalid'});

            expect(actual).toEqual(expected);
        });
    });
});