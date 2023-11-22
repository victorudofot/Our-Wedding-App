/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const CountDown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("Feb 17, 2024 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      distance < 0
        ? clearInterval(interval.current)
        : (setTimerDays(days),
          setTimerHours(hours),
          setTimerMinutes(minutes),
          setTimerSeconds(seconds),
          setTimerSeconds(seconds));
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <section className=" w-[100%] mx-auto bg-sky-950 font-openSans p-5">
      <div>
        <div className=" text-center text-white">
          <span className="">
            <FaRegCalendarAlt className="mx-auto text-2xl" />
          </span>
          <h2 className="text-[90%] font-pacifico pt-2 pb-2">
            Let's Countdown to our special day
          </h2>
        </div>
        <div className="flex justify-evenly items-center text-white border border-solid border-white rounded-md w-[100%] md:w-[50%] mx-auto">
          <section className="px-2">
            <p className="ml-2 text-[90%] font-pacifico">{timerDays}</p>
            <p>
              <small className="text-[80%] font-playfair">Days</small>
            </p>
          </section>
          <span>:</span>
          <section className="px-2">
            <p className="ml-4 text-[90%] font-pacifico">{timerHours}</p>
            <p>
              <small className="text-[80%] font-playfair">Hours</small>
            </p>
          </section>
          <span>:</span>
          <section className="px-2">
            <p className="ml-7 text-[90%] font-pacifico">{timerMinutes}</p>
            <p>
              <small className="text-[80%] font-playfair">Minutes</small>
            </p>
          </section>
          <span>:</span>
          <section className="px-2">
            <p className="ml-6 text-[90%] font-pacifico">{timerSeconds}</p>
            <p>
              <small className="text-[80%] font-playfair">Seconds</small>
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default CountDown;
