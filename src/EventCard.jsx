import React from "react";

export default function EventCard({ name, onBook }) {
  console.log(`Rendering <EventCard /> for: ${name}`);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 16,
        marginBottom: 10,
        borderRadius: 6,
      }}
    >
      <h3>{name}</h3>
      <button onClick={() => onBook(name)}>Book Event</button>
    </div>
  );
}