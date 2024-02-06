import React, {useState} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root.js";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage.tsx";
import { ContactsPage } from "./containers/contactsPage/ContactsPage.tsx";
import { Contact } from "./classes/contact.ts";
import { Appointment } from "./classes/appointment.ts";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  console.log("Initalized");

  const [contacts, setContacts] = useState<Contact[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([])

  /*
  Implement functions to add data to
  contacts and appointments
  */
  function addContact(_name, _phoneNumber, _email)
  {
    console.log(`New Contact: ${_name}`);
    const newContact: Contact = {name: _name, phoneNumber: _phoneNumber, email: _email};
    setContacts((prev) => [...prev, newContact]);
  }

  function addAppointment(_name, _contact, _date, _time)
  {
    const appointment: Appointment ={name: _name, contact: _contact, date: _date, time: _time}
    setAppointments((prev) => [...prev, appointment]);
  }



  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage addNewContact={addContact} contacts={contacts}/> }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} addAppointments={addAppointment} contacts={contacts}/>  }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
