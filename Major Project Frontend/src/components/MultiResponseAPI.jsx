import React, { useState, useEffect } from "react";

export default function MultiResponseAPI() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://192.168.29.83:8000/models/multi_response_api/"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const reader = response.body.getReader();
        let chunks = [];

        while (true) {
          const { done, value } = await reader.read();

          if (done) break;

          chunks.push(value);

          // Update the state with each chunk received
          const result = new TextDecoder("utf-8").decode(
            new Uint8Array(chunks.reduce((acc, chunk) => acc.concat(Array.from(chunk)), []))
          );

          setData(result);
        }
      } catch (error) {
        setError("Error fetching data: " + error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          {data && <pre>{data}</pre>}
        </div>
      )}
    </div>
  );
}
