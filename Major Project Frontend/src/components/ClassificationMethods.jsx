import React from "react";
import { Row, Col } from "react-bootstrap";
export default function ClassificationMethods() {
  return (
    <div className="mt-5 mb-5">
      <div className="mt-5 d-flex flex-wrap justify-content-around">
        <Col xs={10} md={5}>
          <div className="mt-2 d-flex justify-content-center">
            <img
              className="d-block rounded-pill shadow-lg mb-4"
              style={{ width: "250px" }}
              src="https://external-preview.redd.it/Q5Sh_SnG7N4Nn3ZfFyAOJik_3TfqHHloHdTEOxBarjI.jpg?auto=webp&s=159c81437eed7b6d64e1e69aa479ff91c5ea654a"
              alt="AndroGuard"
            />
          </div>
        </Col>
        <Col xs={10} md={7}>
          <div className="mt-3">
            <h2>Classification Process</h2>
            <ol>
              <li>Analyze the dataset, understanding its features.</li>
              <li>
                Build a Machine Learning classification model based on the
                selected features.
              </li>
              <li>
                Decompile Android APK files (using tools like AndroGuard) to
                extract features like Permissions, Intents, and API calls.
              </li>
              <li>
                Create an application's feature vector based on the extracted
                features and the trained model.
              </li>
              <li>
                Predict the maliciousness of the application by predicting the
                class of the feature vector of the decompiled application.
              </li>
            </ol>
          </div>
        </Col>
      </div>
      <hr />
    </div>
  );
}
