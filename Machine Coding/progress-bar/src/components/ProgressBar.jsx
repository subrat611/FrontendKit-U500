import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const ProgressBar = (props) => {
  const { progress } = props;
  const [startProgress, setStartProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartProgress(progress);
    }, 500);

    () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="prgress">
      <div
        className="progress-rate"
        // style={{ width: `${progress}%` }}
        // to add animation width is not applicable - performance issue (repaint the style again and again, it will give glitch effect)
        style={{ transform: `translateX(${startProgress - 100}%)` }}
        // for accessibility
        role="progressbar"
        aria-valuenow={startProgress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {startProgress}%
      </div>
    </div>
  );
};

export default ProgressBar;
