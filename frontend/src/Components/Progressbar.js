import React, { useState, useEffect } from 'react';

const ProgressBar = ({ futureDate }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date();
      const timeDiff = futureDate.getTime() - today.getTime();
      const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      const totalDays = Math.ceil((futureDate - today) / (1000 * 60 * 60 * 24));
      const percentage = ((totalDays - daysRemaining) / totalDays) * 100;
      setProgress(percentage);
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, [futureDate]);

  return (
    <div className="progress mt-3">
      <div className="progress-bar bg-success" role="progressbar" style={{ width: `${progress}%` }}>
        {`${progress.toFixed(2)}%`}
      </div>
    </div>
  );
};

export default ProgressBar;
