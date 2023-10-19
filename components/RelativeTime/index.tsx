import React from "react";
import { formatDistanceToNow } from "date-fns";

interface RelativeTimeProps {
  date: Date;
  className?: string;
}

const RelativeTime: React.FC<RelativeTimeProps> = ({ date, className }) => {
  const relativeTime = formatDistanceToNow(date, {
    addSuffix: true,
  });

  return (
    <span
      className={className}
      aria-label={relativeTime}
      title={relativeTime}
      aria-atomic="true"
      role="status"
    >
      {relativeTime}
    </span>
  );
};

export default RelativeTime;
