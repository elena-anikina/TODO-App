import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";

import "./time.css";

const Time = () => {
  const theMoment = new Date();
  const [created, setCreated] = useState(
    formatDistanceToNow(theMoment, { includeSeconds: true })
  );

  const tick = () =>
    setCreated(formatDistanceToNow(theMoment, { includeSeconds: true }));

  useState(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return <span className="created">created {created} ago</span>;
};

export default Time;
