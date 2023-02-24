import { useEffect, useState } from "react";
function Test() {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    fetch("/test")
      .then((respons) => {
        return respons.json();
      })
      .then(function (data) {
        setMessage(data);
      });
  }, []);
  console.log(message);
  return (
    <div className="Test">
      {message.map((item, idx) => (
        <h1 key={idx}>{item}</h1>
      ))}
    </div>
  );
}

export default Test;
