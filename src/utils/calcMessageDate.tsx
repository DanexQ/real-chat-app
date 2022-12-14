import { Timestamp as TimeType } from "firebase/firestore";
import Timestamp from "react-timestamp";

export const calcMessageDate = (timestamp: TimeType) => {
  const currentDate = new Date();
  const time = currentDate.getTime() - timestamp.toDate().getTime();
  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
  };
  const optionsDate: Intl.DateTimeFormatOptions = {
    month: "numeric",
    day: "numeric",
    year: "2-digit",
  };
  // const chatDate =

  if (time <= 1000) return "Now";
  if (time > 86400000)
    return new Intl.DateTimeFormat("en-US", optionsDate).format(
      timestamp.toDate()
    );

  return new Intl.DateTimeFormat("en-US", optionsTime).format(
    timestamp.toDate()
  );
};
