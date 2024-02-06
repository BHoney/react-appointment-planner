import React from "react";

export const ContactPicker = ({contacts, value, onChange}) => {

  const selectElements = contacts.map((c) => <option value={value} onChange={onChange}>{c}</option>)

  return (
    <>
      <select name="contacts" id="contact-select">
      <option value={""} key={-1}>No Contact Selected</option>
        {selectElements}
      </select>
    </>
  );
};
