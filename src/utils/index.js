/**
 * Utility function to split the value in milliseconds to hours, minutes, seconds and milliseconds.
 * @param timeInMilliSeconds {number} time in milliseconds.
 * @return {{hours: number, minutes: number, seconds: number, milliSeconds: number}}
 */
export const convertMStoTime = (timeInMilliSeconds) => {
    const milliSeconds = Math.floor(timeInMilliSeconds % 1000);
    const seconds = Math.floor((timeInMilliSeconds / 1000) % 60);
    const minutes = Math.floor((timeInMilliSeconds / (1000 * 60)) % 60);
    const hours = Math.floor((timeInMilliSeconds / (1000 * 60 * 60)) % 24);

    return {hours, minutes, seconds, milliSeconds};
};

/**
 * Utility function to convert value in hours, minutes, seconds and milliseconds to milliseconds.
 * @param hours {number} hours value
 * @param minutes {number} minutes value
 * @param seconds {number} seconds value
 * @param milliSeconds {number} milliseconds value
 * @return {number} value in milliseconds.
 */
export const convertTimeToMS = (hours = 0, minutes = 0, seconds = 0, milliSeconds = 0) => {
    milliSeconds += (seconds * 1000) + (minutes * 60 * 1000) + (hours * 60 * 60 * 1000);

    return milliSeconds;
};

/**
 * Utility function to pad zeros on left side of number.
 * @param number {number} value to be padded.
 * @param numberOfDigits {number} number of digits to be padded.
 * @return {string} padded number string.
 */
export const padZeros = (number, numberOfDigits) => {
    let value = `${number}`;

    while (value.length < numberOfDigits) {
        value = `0${value}`;
    }

    return value;
};