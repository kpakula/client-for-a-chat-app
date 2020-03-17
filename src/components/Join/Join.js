import "./Join.css";

import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import auth from "../../auth";

const Join = props => {
  const [name, setName] = useState("");
  const [isAuthenticated, setAuthenticated] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    if (name) {
      auth.login(() => {
        console.log("Login...");
        setAuthenticated(true);
      });
    }
  };

  const redirect = () => {
    return {
      pathname: "/chat",
      state: {
        room: "default",
        name: name
      }
    };
  };

  return (
    <div className="outer">
      <div className="inner">
        <h1 className="heading">Join</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              placeholder="name"
              className="inputField"
              type="text"
              onChange={event => setName(event.target.value)}
            />
          </div>

          <button className="joinBtn mt-20" type="submit">
            Sign in
          </button>
        </form>
      </div>

      {isAuthenticated && <Redirect to={redirect()} />}
    </div>
  );
};

export default Join;
