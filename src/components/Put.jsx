import React from "react";
import { useState } from "react";
import axios from "axios";
export default function Put() {
  const [text, setText] = useState("");
  const [id, setId] = useState("");
  const [data, setData] = useState([]);
  const textHandler = () => {
    axios
      .put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        title: `${text}`,
      })
      .then((res) => setData(res.data));
  };
  console.log(data);
  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="text"
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        value={id}
        placeholder="id"
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={textHandler}>write text for put</button>
    </div>
  );
}
