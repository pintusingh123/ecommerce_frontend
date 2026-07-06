import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/")
      .then((response) => response.json())
      .then((data) =>
        setMessage(data.response || "No message received"),
      )
      .catch((error) => console.error("error fetching message:", error));
  }, []);

  return (
    <>
      <h1>Message from backend</h1>
      <p>{message}</p>
    </>
  );
}

export default App;
