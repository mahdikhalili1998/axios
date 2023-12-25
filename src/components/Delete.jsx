import axios from "axios";
import React, { useState } from "react";

function Delete() {
  const [id, setId] = useState("");
  const [data, setData] = useState([]);
  const DeletedHandler = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => setData(res.data));
  };

  return (
    <div>
      <input
        type="text"
        value={id}
        placeholder="deleted"
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={DeletedHandler}>deleted</button>
    </div>
  );
}

export default Delete;
