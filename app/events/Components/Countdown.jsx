/* Countdown component by Teo Hong Rui Freddy*/

import React, { useEffect, useState } from 'react';
import styles  from './Countdown.module.css';


const CountdownTimer = ({ startDate, endDate }) => {
  const calculateTimeLeft = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const now = new Date();

    if (now < start) {
      return { days: 0, hours: 0, minutes: 0, seconds: Math.floor((start - now) / 1000) };
    } else if (now < end) {
      const difference = end - now;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className={styles.Countdown}>
      <span>{timeLeft.days} d {timeLeft.hours} h {timeLeft.minutes} m {timeLeft.seconds}s</span>
    </div>
  );
};

export default CountdownTimer;