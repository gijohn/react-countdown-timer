import {convertMStoTime, padZeros, convertTimeToMS} from './index';

describe('utilities tests', () => {
    it('should expect valid value while converting milliseconds to time object', () => {
        const expected = {hours: 3, minutes: 25, seconds: 56, milliSeconds: 789};
        const actual = convertMStoTime(12356789);

        expect(actual).toEqual(expected);
    });

    it('should expect valid value while converting time object to milliseconds', () => {
        const expected = 9161879;
        const actual = convertTimeToMS(2, 32, 41, 879);

        expect(actual).toEqual(expected);
    });

    it('should pad valid zeros to left', () => {
        expect(padZeros(34,5)).toEqual('00034');
        expect(padZeros(2,2)).toEqual('02');
        expect(padZeros(50, 2)).toEqual('50');
        expect(padZeros(1,7)).toEqual('0000001');
    });
});