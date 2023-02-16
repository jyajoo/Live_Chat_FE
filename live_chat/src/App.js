import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    fetch("/hello")
      .then((respons) => {
        return respons.json();
      })
      .then(function (data) {
        setMessage(data);
      });
  }, []);
  console.log(message);
  return (
    <div className="App">
      {message.map((item, idx) => (
        <h1 key={idx}>{item}</h1>
      ))}
    </div>
  );
}

export default App;