import React, { useState, useEffect } from "react";

const CountdownTimer = ({ hours = 14, minutes = 55, seconds = 15 }) => {
  const calculateTotalSeconds = (h, m, s) => h * 3600 + m * 60 + s;

  const [timeLeft, setTimeLeft] = useState(
    calculateTotalSeconds(hours, minutes, seconds)
  );

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const hoursLeft = Math.floor(timeLeft / 3600);
  const minutesLeft = Math.floor((timeLeft % 3600) / 60);
  const secondsLeft = timeLeft % 60;

  return (
    <div className="pt-4">
      <div className="flex space-x-4">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-pink-500 rounded-md flex items-center justify-center text-white text-3xl font-medium">
            {hoursLeft}
          </div>
          <div className="text-sm text-gray-600 mt-1">годин</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-pink-500 rounded-md flex items-center justify-center text-white text-3xl font-medium">
            {minutesLeft}
          </div>
          <div className="text-sm text-gray-600 mt-1">хвилин</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-pink-500 rounded-md flex items-center justify-center text-white text-3xl font-medium">
            {secondsLeft}
          </div>
          <div className="text-sm text-gray-600 mt-1">секунд</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;