import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const PythonCodeViewer = ({ fileUrl , name}) => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const response = await fetch(fileUrl);
        const content = await response.text();
        setCode(content);
      } catch (error) {
        console.error('Error fetching code:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCode();
  }, [fileUrl]);

  if (loading) {
    return <div>Loading code...</div>;
  }

  return (
    <div>
        <p className='m-0'>{name}</p>
    <SyntaxHighlighter language="python" style={darcula} className='w-75 shadow-lg m-0'>
      {code}
    </SyntaxHighlighter>
    </div>
  );
};

export default PythonCodeViewer;
