import React, { useState } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Documents = () => {
  const pdfList = [
    { name: 'Base Paper', url: 'https://firebasestorage.googleapis.com/v0/b/android-malware-detectio-dc71b.appspot.com/o/Base%20Paper.pdf?alt=media&token=17734aaa-2f37-498d-9da0-149230f51735' },
    { name: 'Stage 1 Report', url: 'https://firebasestorage.googleapis.com/v0/b/android-malware-detectio-dc71b.appspot.com/o/MAJOR%20PROJECT%20edited.pdf?alt=media&token=54cea651-2f24-4313-a7ae-f45482efd14c' },
    { name: 'Abstract Seminar', url: 'https://firebasestorage.googleapis.com/v0/b/android-malware-detectio-dc71b.appspot.com/o/Major%20Project%20Abstract%20Seminar%20-%20Presentation%20as%20PDF.pdf?alt=media&token=222043a8-0906-4866-972b-82fc8ffa7d27' },
    
    // Add more documents as needed
  ];

  const [selectedPdf, setSelectedPdf] = useState(pdfList[0]);

  const handlePdfClick = (pdf) => {
    setSelectedPdf(pdf);
  };

  const handleIframeBlur = () => {
    // Reset selectedPdf when iframe loses focus
    setSelectedPdf(pdfList[0]);
  };

  return (
    <div className="d-flex flex-column flex-md-row" style={{ height: '88vh' }}>
      {/* List View for Smaller Screens */}
      <div className="w-100 d-md-none d-lg-none" >
        <ListGroup className="list-group-horizontal">
          {pdfList.map((pdf, index) => (
            <ListGroupItem
              key={index}
              className={`text-primary`}
              onClick={() => handlePdfClick(pdfList[index])}
              action
            >
              {pdf.name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>

      {/* Split View for Larger Screens */}
      <div className="w-25 d-none d-md-block" style={{ height: '100%', overflowY: 'auto' }}>
        <ListGroup className="list-group-flush">
          {pdfList.map((pdf, index) => (
            <ListGroupItem
              key={index}
              className={`text-primary`}
              onClick={() => handlePdfClick(pdfList[index])}
              action
            >
              {pdf.name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>

      {/* Document Viewer */}
      <div className="flex-grow-1" style={{height: '100%', minHeight: '500px'}}>
        <iframe
          title="Documents Viewer"
          className="w-100"
          src={`https://docs.google.com/viewer?url=${encodeURIComponent(
            selectedPdf?.url || ''
          )}&embedded=true`}
          style={{ border: '5px solid #e4e4e4', height: '100%' }}
          onBlur={handleIframeBlur}
        ></iframe>
      </div>
    </div>
  );
};

export default Documents;
