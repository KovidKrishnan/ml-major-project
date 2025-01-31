import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Algorithms = () => {
  return (
    <Container>
        <div className='d-flex justify-content-around flex-wrap'>
            <h1 className='mb-5 mt-5'>Algorithms on Dataset</h1>
        </div>
      <Row>
        {/* Algorithm 1 */}
        <Col md={6} xs={12}>
          {/* Your Algorithm 1 component goes here */}
          <div style={{ border: '1px solid #ddd', padding: '20px', marginBottom: '10px', borderRadius: '8px' }}>
            <h4>Algorithm 1</h4> <br />
            <p>
                Here we have selected all the features i.e. <code>113 Permissions, 72 API calls, 29 Intents and 7 Command Signatures</code> to build the Machine Learning models. <br />
                Because of the usage of all the features, this algorithm works well and works as a diversified use of features and creates higher accuracy. <br />
                We create a Feature Vector of an application based on all the 215 features in the <strong>Drebin Dataset</strong>. <br />
                And the classification of the applications is based upon the extracted feature vector.
            </p>
          </div>
        </Col>

        {/* Algorithm 2 */}
        <Col md={6} xs={12}>
          {/* Your Algorithm 2 component goes here */}
          <div style={{ border: '1px solid #ddd', padding: '20px', marginBottom: '10px', borderRadius: '8px'  }}>
          <h4>Algorithm 2</h4> <br />
            <p>
                Here we have considered only the <code>113 Permissions</code> and made <code><sup>113</sup>C<sub>2</sub></code> Twomer Permission combinations. Then the Machine Learning models are built on the dataset of those Twomer combination dataset. <br />
                This showcases that the potential attribute of an application's maliciousness is it's Permissions list. <br />
                This makes note of permissions that an application uses and classifies an application based on their usage. <br />
                This Algorithm gives better results becuase permissions are crucial in <strong>Android&trade;</strong> security.
            </p>
          </div>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default Algorithms;
