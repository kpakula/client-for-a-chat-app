import React from "react";
import auth from "../auth";

function TestChat(props) {
  return (
    <div>
      <button
        onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default TestChat;
