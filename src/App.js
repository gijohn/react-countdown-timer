import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountDownTimer from './components/countDownTimer';

/**
 * CountDown Timer App component.
 *
 * @author Giftson John
 */
export default class App extends Component {
  render() {
    return (
      <div className={'flex flex1 flex-col'}>
          <div className={'header flex align-item-center'}>
              <img src={logo} className="logo" width={50} alt="logo" />
              Countdown Timer
          </div>
          <div className={'flex flex1 flex-col'}>
              <CountDownTimer />
          </div>
      </div>
    );
  }
}
