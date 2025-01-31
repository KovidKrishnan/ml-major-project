import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const UploadApk = () => {
  const [algorithm, setAlgorithm] = useState('');
  const [includePCA, setIncludePCA] = useState(false);
  const [apkFile, setApkFile] = useState(null);

  const handleAlgorithmChange = (event) => {
    setAlgorithm(event.target.value);
  };

  const handleIncludePCAChange = () => {
    setIncludePCA(!includePCA);
  };

  const handleFileChange = (event) => {
    setApkFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Algorithm:', algorithm);
    console.log('Include PCA:', includePCA);
    console.log('APK File:', apkFile);
  };

  return (
    <div>
        <Container>
      <Form>
        <Form.Group controlId="algorithmSelect">
          <Form.Label>Select Algorithm</Form.Label>
          <Form.Control as="select" onChange={handleAlgorithmChange} value={algorithm}>
            <option value="">Choose...</option>
            <option value="svm">SVM</option>
            <option value="rf">Random Forest</option>
            <option value="mvc">Maximum Voting Classifier</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="includePCACheck">
          <Form.Check
            type="checkbox"
            label="Include PCA"
            checked={includePCA}
            onChange={handleIncludePCAChange}
          />
        </Form.Group>

        <Form.Group controlId="apkFileInput">
          <Form.Label>Upload APK File</Form.Label>
          <Form.File
            id="custom-file"
            label="Choose file"
            custom
            onChange={handleFileChange}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
    </div>
  );
};

export default UploadApk;