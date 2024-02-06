import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name: </label>
          <input type="text" value={name.value} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Phone: </label>
          <input
            type="text"
            value={phone.value}
            pattern="^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Email: </label>
          <input
            type="text"
            pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
            value={email.value}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input type="submit" value="Add Contact"/>
      </form>{" "}
    </>
  );
};
