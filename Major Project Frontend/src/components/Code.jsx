import React from 'react';
import PythonCodeViewer from './PythonCodeViewer';
import { ListItem } from '@mui/material';
import { ListGroup } from 'react-bootstrap';

const Code = () => {
  const pythonCodeUrl = 'https://github.com/KovidKrishnan/MajorProject/blob/main/drebin-random-forest.py';

  return (
    <div>
      <h1 className='m-5 mb-0'>Python Code Viewer</h1>
      <ListGroup className='list-group-flush'>
        <ListItem>
          <PythonCodeViewer codeUrl={pythonCodeUrl} name={'drebin-random-forest.py'} />
        </ListItem>
      </ListGroup>
      
    </div>
  );
};

export default Code;
