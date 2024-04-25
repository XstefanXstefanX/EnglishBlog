import React from "react";
import { useState } from "react";
import PageName from "./PageName";

const Login = () => {
  const [nameValue, setNameValue] = useState("");
  const [surnameValue, setSurnameValue] = useState("");
  const handleName = (event) => {
    setNameValue(event.target.value);
  };
  const handleSurname = (event) => {
    setSurnameValue(event.target.value);
  };
  const handleWork = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <PageName name="Login" />
      <div className="login-container">
        <form className="login">
          <label>
            Nume:
            <input type="text" value={nameValue} onChange={handleName} />
          </label>
          <label>
            Prenume:{" "}
            <input type="text" value={surnameValue} onChange={handleSurname} />
          </label>
          <label>
            Your Work:
            <input type="text" />
          </label>
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
