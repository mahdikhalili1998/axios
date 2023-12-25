import axios from "axios";
import React, { useState } from "react";

function Post() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const textHandler = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: `${text}`,
      })
      .then((res) => setData(res.data));
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={textHandler}>write text for post</button>
    </div>
  );
}

export default Post;
