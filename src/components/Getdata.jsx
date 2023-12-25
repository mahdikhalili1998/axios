import axios from "axios";
import React, { useEffect, useState } from "react";

function Getdata() {
  const [get, setGet] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => setGet(res.data));
  }, []);
  const getHandler = () => {
  
  };
  return (
    <div>
      <button onClick={getHandler}>get and show data</button>
    </div>
  );
}

export default Getdata;
