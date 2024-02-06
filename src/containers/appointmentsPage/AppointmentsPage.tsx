import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm.tsx";
import { TileList } from "../../components/tileList/TileList.tsx";
import { Contact } from "../../classes/contact.ts";

export const AppointmentsPage = ({
  appointments,
  contacts,
  addAppointments,
}) => {
  /*
  Define state variables for 
  appointment info
  */

  let currentDate = new Date();

  const [name, setName] = useState("");
  const [contact, setContact] = useState<Contact | undefined>(undefined);
  const [date, setDate] = useState(currentDate);
  const [time, setTime] = useState(
    `${currentDate.getHours()}:${currentDate.getMinutes()}`
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointments(`${name} with ${contact ? contact.name : "a friend"}`, contact, date, time);
    setName("");
    setContact(undefined);
    setDate(currentDate);
    setTime(`${currentDate.getHours()}:${currentDate.getMinutes()}`);
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
          name={name}
          setTitle={setName}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList entries={appointments} />
      </section>
    </div>
  );
};
