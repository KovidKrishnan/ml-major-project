import React, { useEffect, useState } from 'react';

const BackendTest = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.29.83:8000/models/dataset/');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError('Error fetching data: ' + error.message);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        data && (
          <div>
            <h1>{data.name}</h1>
            <p>Project: {data.project}</p>
            <p>Mentor: {data.Mentor}</p>
            <p>Team mates:</p>
            <ul>
              {data["Team mates"].map((mate, index) => (
                <li key={index}>{mate}</li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
};

export default BackendTest;
