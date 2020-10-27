import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  // component did Mount connect to socket
  useEffect(() => {
    const data = queryString.parse();
    console.log(data);
    const ENDPOINT = "localhost:5000";
    let socket = io(ENDPOINT);
    console.log(socket);
    // setName(name);
    // setRoom(room);
  });
  return <div>Chat</div>;
};

export default Chat;
