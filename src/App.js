import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
  });

  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (data.FirstName.length > 0 && data.LastName.length > 0) {
  //     setShow(true);
  //   } else {
  //     setShow(false);
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    // setShow(false);
  };
  return (
    <div>
      <h1>Full Name Display</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="FirstName" required>
          First Name :
        </label>
        <input
          type="text"
          name="FirstName"
          id="FirstName"
          value={data.FirstName}
          onChange={handleChange}
          required
        />
        <br />
        <label required htmlFor="LastName">
          Last Name :
        </label>
        <input
          type="text"
          name="LastName"
          id="LastName"
          value={data.LastName}
          required
          onChange={handleChange}
        />

        <br />
        <button type="submit">submit</button>
      </form>

      {show && data.FirstName.length > 0 && data.LastName.length > 0 ? (
        <p>{`Full Name: ${data.FirstName} ${data.LastName}`}</p>
      ) : (
        " "
      )}
    </div>
  );
}
