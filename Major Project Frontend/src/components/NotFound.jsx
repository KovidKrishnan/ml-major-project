import React from 'react';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>

      {/* Display the GIF using the <img> tag */}
      <img
        src="https://firebasestorage.googleapis.com/v0/b/android-malware-detectio-dc71b.appspot.com/o/original-704e8be138daa6083531120a0bb87eef-ezgif.com-crop.gif?alt=media&token=80075551-f330-4924-af60-55f8b8e8aec9"
        alt="404 GIF"
        className=''
        style={{ width: '90%', maxWidth: '400px' }}
        />
        <h1>404 - Not Found</h1>
        <p>The page you are looking for might be in another castle...</p>
    </div>
  );
};

export default NotFound;
