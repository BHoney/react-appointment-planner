import React, { useMemo } from "react";
import { ContactPicker } from "../contactPicker/ContactPicker.tsx";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const contactNames = useMemo(() => {
    return contacts.map((c: { name: string }) => c.name);
  }, [contact]);

  console.log(contactNames);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Contact">Contact: </label>
          <ContactPicker
            contacts={contactNames}
            onChange={(e) => setContact(e.target.value)}
            value={contact}
          />
        </div>
        <div>
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            min={getTodayString()}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="time">Time: </label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">Submit Appointment</button>
        </div>
      </form>
    </>
  );
};
