import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm.tsx";
import { TileList } from "../../components/tileList/TileList.tsx";

import { Contact } from "../../classes/contact.ts";

export const ContactsPage = ({contacts, addNewContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicateContact, setDuplicateContact] = useState(false);
  
  useEffect(()=> {
    setDuplicateContact(contacts.includes(name));
  }, [name, contacts])

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if(!duplicateContact){
      console.log("Adding new contact");
      addNewContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
      setDuplicateContact(false);
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} setEmail={setEmail} email={email} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList entries={contacts}/>
      </section>
    </div>
  );
};
