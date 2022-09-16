import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [title, setTitle] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api");
      setTitle(response.data);
      console.log(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {typeof title === "undefined" ? (
        <p>Loading...</p>
      ) : (
        <h1>{title.message}</h1>
      )}
    </div>
  );
};

export default App;
