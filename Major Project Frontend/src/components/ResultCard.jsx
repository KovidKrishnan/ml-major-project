import React from "react";
import { Card, Accordion } from "react-bootstrap";

const ResultCard = ({ result }) => {
  return (
    <Card
      className={`text-dark w-100 p-3`}
      style={{
        width: '100%',
        alignSelf: "center",
        backgroundColor: result === 'Benign' ? 'lightgreen' : 'lightcoral',
        border: `2px solid ${result === 'Benign' ? 'darkgreen' : 'darkred'}`,
      }}
    >
      <Card.Title>Result</Card.Title>
      <Card.Text>{result}</Card.Text>

      <Accordion >
        <Accordion.Item eventKey="0" >
          <Accordion.Header >Explanation</Accordion.Header>
          <Accordion.Body>
            {result === 'Benign' ? (
              <p>
                Benign refers to non-malicious or harmless. In the context of Android apps, a
                benign app is mostly safe and does not pose a threat to the device or user data.
              </p>
            ) : (
              <p>
                Malign refers to malicious or harmful. In the context of Android apps, a
                malign app is considered dangerous and may pose a threat to the device or user data.
              </p>
            )}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Card>
  );
};

export default ResultCard;
