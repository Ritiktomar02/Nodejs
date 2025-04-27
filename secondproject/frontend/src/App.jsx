import React, { useEffect, useState } from "react";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      fetch('/jokes')
        .then((res) => res.json())
        .then((res) => setJokes(res))
        .catch((err) => console.error('Error fetching jokes:', err));
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Hello</h1>
      <p>Jokes: {jokes.length}</p>

      {jokes?.map((data, index) => (
        <div key={index}>
          <p>{data.title}</p>
          <p>{data.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
