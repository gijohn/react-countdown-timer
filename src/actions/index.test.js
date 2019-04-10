import {startCountdown, stopCountdown, updateThreshold, initializeTimer, lapCountdown,
    mergeLastLap, pauseCountdown, resumeCountdown, updateReminingTime} from './index';
import {
    INITIALIZE_TIMER, LAP_COUNTDOWN_TIMER, MERGE_LAST_LAP, PAUSE_COUNTDOWN_TIMER, RESUME_COUNTDOWN_TIMER,
    START_COUNTDOWN_TIMER,
    STOP_COUNTDOWN_TIMER,
    UPDATE_THRESHOLD, SET_TIMER_VALUE
} from "../constants";

describe('Action Creator tests', () => {
    it('should startCountdown return valid action', () => {
        const expected = {type: START_COUNTDOWN_TIMER, value: 123};
        const actual = startCountdown(123);

        expect(actual).toEqual(expected);
    })

    it('should stopCountdown return valid action', () => {
        const expected = {type: STOP_COUNTDOWN_TIMER, value: 123};
        const actual = stopCountdown(123);

        expect(actual).toEqual(expected);
    });

    it('should updateThreshold return valid action', () => {
        const expected = {type: UPDATE_THRESHOLD, value: 5000};
        const actual = updateThreshold(5000);

        expect(actual).toEqual(expected);
    });

    it('should initializeTimer return valid actions', () => {
        const expected = {type: INITIALIZE_TIMER, value: 123456};
        const actual = initializeTimer(123456);

        expect(actual).toEqual(expected);
    });

    it('should lapCountdown return valid action', () => {
        const expected = {type: LAP_COUNTDOWN_TIMER, value: 300};
        const actual = lapCountdown(300);

        expect(actual).toEqual(expected);
    });

    it('should mergeLastLap return valid action', () => {
        const expected = {type: MERGE_LAST_LAP};
        const actual = mergeLastLap();

        expect(actual).toEqual(expected);
    });

    it('should pauseCountDown return valid action', () => {
        const expected = {type: PAUSE_COUNTDOWN_TIMER};
        const actual = pauseCountdown();

        expect(actual).toEqual(expected);
    });

    it('should resumeCountdown return valid action', () => {
        const expected = {type: RESUME_COUNTDOWN_TIMER};
        const actual = resumeCountdown();

        expect(actual).toEqual(expected);
    });

    it('should updateRemainingTime return valid action', () => {
        const expected = {type: SET_TIMER_VALUE, value: 4000};
        const actual = updateReminingTime(4000);

        expect(actual).toEqual(expected);
    });
});