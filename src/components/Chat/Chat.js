import './Chat.css';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';

import Bar from '../Bar/Bar.js';
import Input from '../Input/Input.js';
import Messages from '../Messages/Messages.js';

let socket;

const Chat = ( { location } ) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "localhost:5000";

  useEffect(() => {

    const { name, room } = location.state;
    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [location]);

  useEffect(() => {
    socket.on("message", message => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  const handleDisconnect = event => {
    socket.close();
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <Bar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
        <button onClick={handleDisconnect}>Disconnect</button>
        <Link to="/" className="btn btn-primary" onClick={handleDisconnect}>
          Disconnect
        </Link>
      </div>
    </div>
  );
};

export default Chat;
