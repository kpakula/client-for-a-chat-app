import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../../auth"
import "./Join.css";

const Join = (props) => {
  const [name, setName] = useState("");
  // const [room, setRoom] = useState("");


  return (
    <div className="outer">
      <div className="inner">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="name"
            className="inputField"
            type="text"
            onChange={event => setName(event.target.value)}
          />
        </div>
        {/* <div>
          <input
            placeholder="room"
            className="inputField mt-20"
            type="text"
            onChange={event => setRoom(event.target.value)}
          />
        </div> */}
        {/* <Link
          onClick={event => (!name ? event.preventDefault() : null)}
          to={{
            pathname: "/chat",
            state: {
              room: 'default',
              name: name
            }
          }}
        >
          <button className="joinBtn mt-20" type="submit">Sign in</button>
        </Link> */}

        <button onClick={() => {
            auth.login(() => {
              props.history.push("/chat")
            })
        }}>Test Login</button>
      </div>
    </div>
  );
};

export default Join;
