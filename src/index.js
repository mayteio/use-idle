/* eslint-disable semi */
/* eslint-disable quotes */
import { useState, useEffect } from "react";
import createActivityDetector from "activity-detector";

export function useIdle(options) {
  const [isIdle, setIsIdle] = useState(false);
  useEffect(() => {
    const activityDetector = createActivityDetector(options);
    activityDetector.on("idle", () => setIsIdle(true));
    activityDetector.on("active", () => setIsIdle(false));
    return () => activityDetector.stop();
  }, []);

  return isIdle;
}
