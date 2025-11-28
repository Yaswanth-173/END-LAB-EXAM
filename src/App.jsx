import React, { useCallback, useState } from "react";
import EventCard from "./EventCard";

export default function App() {
  const [count, setCount] = useState(0);

  // useCallback to memoize event handlers
  const handleBookEvent = useCallback((eventName) => {
    console.log("Booking event:", eventName);
    setCount((c) => c + 1);
  }, []);

  console.log("App re-rendered");

  return (
    <div style={{ padding: 20 }}>
      <h1>Event Booking Portal</h1>
      <p>Total bookings: {count}</p>

      <EventCard name="Tech Conference" onBook={handleBookEvent} />
      <EventCard name="Music Festival" onBook={handleBookEvent} />
      <EventCard name="Art Workshop" onBook={handleBookEvent} />
    </div>
  );
}