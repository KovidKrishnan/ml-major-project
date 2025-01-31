import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";

export default function MLAlgosCarousel() {
  return (
    <Container className="mt-lg-4 mb-5">
      <Carousel>
        <Carousel.Item>
          <div className="mt-4 mb-4 d-flex flex-wrap justify-content-around">
            <Col xs={10} md={5}>
              <div className="mt-3">
              <img
                className="d-block w-100 rounded-4 shadow mb-4"
                src="https://www.researchgate.net/publication/354203684/figure/fig3/AS:1062541421707264@1630341024586/Ensemble-method-implemented-by-the-Random-Forest-Algorithm-The-ensemble-consists-of.jpg" // Placeholder image URL
                alt="Left Image"
              />
              </div>
            </Col>
            <Col xs={10} md={6}>
              <div >
                <h2>Random Forest</h2>
                <p>
                Random Forest, a robust machine learning algorithm, proves invaluable in addressing the escalating challenges posed by the surge in malicious intrusions on the Android Operating System. As Android's exponential user adoption heightens its vulnerability, the algorithm's ensemble learning technique, leveraging multiple decision trees, becomes crucial. Focused on features like API Calls, Intents, Permissions, and Command signatures, Random Forest excels in static analysis of Android Application Package (APK) files, offering a sophisticated and adaptive solution in fortifying Android security.
                </p>
              </div>
            </Col>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="mt-4 mb-4 d-flex flex-wrap justify-content-around">
            
            <Col xs={10} md={5}>
              <img
                className="d-block w-100 rounded-4 shadow-"
                src="https://serokell.io/files/ez/ezoj21mb.Support_Vector_Machine_pic5_2.png" // Placeholder image URL
                alt="Left Image"
              />
            </Col>
            <Col xs={10} md={6}>
              <div className="mt-3">
                <h2>Support Vector Machine</h2>
                <p>
                Support Vector Machine (SVM), a powerful machine learning algorithm, proves instrumental in combating security threats on the Android Operating System. As Android's user base expands, SVM's efficacy becomes apparent. Leveraging a robust classification approach, SVM excels in analyzing features like API Calls, Intents, Permissions, and Command signatures within Android Application Package (APK) files. Its adaptability and precision make SVM a key player in bolstering Android security against evolving cyber threats.
                </p>
              </div>
            </Col>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="mt-4 mb-4 d-flex flex-wrap justify-content-around">
            <Col xs={10} md={6}>
              <div className="mt-3">
              <img
                className="d-block w-100 rounded-4 shadow mt-2 mb-4"
                src="https://miro.medium.com/v2/resize:fit:733/0*2Ocl2S5oxHI5ELz7.png" // Placeholder image URL
                alt="Left Image"
              />
              </div>
            </Col>
            <Col xs={10} md={5}>
              <div >
                <h2>Maximum Voting Classifier</h2>
                <p>
                The Maximum Voting Classifier (MVC) is an ensemble machine learning technique that combines the predictions of multiple classifiers to make decisions. It aggregates the outputs through a voting mechanism, where each classifier contributes its prediction, and the final decision is made based on majority voting. This approach enhances model robustness, reduces overfitting, and often results in improved overall performance by leveraging diverse models with different strengths and weaknesses.
                </p>
              </div>
            </Col>
          </div>
        </Carousel.Item>
      </Carousel>
      <hr />
    </Container>
  );
}
