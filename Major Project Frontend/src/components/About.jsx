import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "./ScrollToTop";
import MLAlgosCarousel from "./MLAlgosCarousel";
import Algorithms from "./Algorithms";
import Abstract from "./Abstract";
import ClassificationMethods from "./ClassificationMethods";
const About = () => {
  return (
    <Container>
      <ScrollToTop></ScrollToTop>
      {/* Data with Image on the Left */}
      <Abstract></Abstract>
      <div className="mt-5 mb-5"></div>
      <hr />
      <div className="mt-5">
        <h1>Algorithms Used</h1>
      </div>
      <MLAlgosCarousel />
      <div className="mt-5 mb-4">
        <h1>Dataset Analysis</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              className="img-fluid"
              style={{ maxWidth: "100%" }}
              src="https://firebasestorage.googleapis.com/v0/b/android-malware-detectio-dc71b.appspot.com/o/Dataset.jpg?alt=media&token=33b14534-b408-423e-9f71-1d35db0f3274"
              alt=""
            />
          </div>
          <div className="col-lg-6">
            <p className="mt-4">
              The Drebin Dataset is a huge dataset, that comprises{" "}
              <strong>5560</strong> malign samples and <strong>9476</strong>{" "}
              benign samples, collected from 179 different Android applications
              from <code>2010 - 2018.</code> <br />
              This dataset consists of <strong>215</strong> attributes/features/
              parameters out of which: <br />
              <ul style={{ listStyleType: "circle" }}>
                <li>
                  <b>113</b> are Permissions
                </li>
                <li>
                  <b>72</b> are API calls
                </li>
                <li>
                  <b>29</b> are Intents
                </li>
                <li>
                  <b>7</b> are Command Signatures
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <hr />
      <Algorithms></Algorithms>
      <ClassificationMethods></ClassificationMethods>
    </Container>
  );
};

export default About;
