import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import ScrollToTop from "./ScrollToTop";
import axios from "axios";
import ResultCard from "./ResultCard";

const Home = () => {
  const [data, setData] = useState("");
  const [apkFile, setApkFile] = useState(null);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");
  const [selectedDataset, setSelectedDataset] = useState("");
  const [pcaSelection, setPcaSelection] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.xsrfHeaderName = "X-CSRFToken";

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!apkFile || !selectedAlgorithm || !selectedDataset) {
      alert("Please fill out all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("apk_file", apkFile);
    formData.append("selected_algorithm", selectedAlgorithm);
    formData.append("selected_dataset", selectedDataset);
    formData.append("pca_selection", pcaSelection);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      setLoading(true);

      const response = await axios.post(
        "http://192.168.29.83:8000/models/process/",
        formData,
        config
      );

      setResult(response.data["message"]);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const sampleData =
        "Verify your android app's safety and be safe from Android&trade; malware";

      for (let i = 0; i <= sampleData.length; i++) {
        setData(sampleData.substring(0, i));
        await new Promise((resolve) => setTimeout(resolve, 30));
      }
    };

    fetchData();
  }, []);

  const handleApkUpload = (event) => {
    const file = event.target.files && event.target.files[0];
    setApkFile(file);
  };

  const handleAlgorithmChange = (event) => {
    const algorithm = event.target.value;
    setSelectedAlgorithm(algorithm);
  };

  const handleDatasetChange = (event) => {
    const dataset = event.target.value;
    setSelectedDataset(dataset);
  };

  const handlePcaChange = (event) => {
    const isChecked = event.target.checked;
    setPcaSelection(isChecked);
  };

  return (
    <div
      className="container-fluid d-flex flex-wrap justify-content-around"
      style={{
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url('https://wallpapercave.com/wp/wp3101726.jpg')`,
        backgroundSize: "contain",
        width: "100%"
      }}
    >
      <ScrollToTop />
      <div className="container justify-content-around">
        <Row className="d-flex">
          {/* Left side: Image or Result Card */}
          <Col
            md={6}
            className="d-flex align-items-center p-5 position-relative mt-5 mb-5"
          >
            {loading ? (
              // Loading animation or spinner
              <div
               className="p-5 m-5 rounded-2 d-flex"
               style={{
                background: "rgba(255, 255, 255, 0.3)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                color: "#0000ff",
                backdropFilter: "blur(10px)",
              }}>
                <div className="spinner-border text-danger" role="status"></div>
                <span className="text-dark" style={{ fontWeight: "bold" }}>&nbsp;&nbsp;&nbsp;Loading...</span>
              </div>
            ) : result ? (
              // Display result in a card
              <div
                  className="d-flex "
                  style={{
                    borderRadius: "8px",
                    width: "100%",
                    height: "100%",
                  }}
                ><div className="d-flex justify-content- w-100">
                  <ResultCard  result={result}></ResultCard>
                </div></div>
                
            ) : (
              // Display image with Typewriter effect
              <>
                <div
                  style={{
                    position: "absolute",
                    bottom: 23.6,
                    borderRadius: "8px",
                    width: "83.3%",
                    height: "50%",
                    display: "flex",
                    justifySelf: "center",
                    alignSelf: "center",
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))",
                  }}
                ></div>
                <img
                  src="https://cdn.arstechnica.net/wp-content/uploads/2018/01/android-malware.jpg"
                  alt="Left side image"
                  className="rounded-2 mt-5 shadow-lg"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 45,
                    left: 240,
                    transform: "translate(-50%, -50%)",
                    color: "#fff",
                    zIndex: 1,
                  }}
                >
                  <Typewriter
                    options={{
                      strings: [data],
                      autoStart: true,
                      loop: false,
                    }}
                  />
                </div>
              </>
            )}
          </Col>

          {/* Right side: Form */}
          <Col
            md={6}
            className="d-flex justify-content-center border rounded p-5 mt-5 mb-5 shadow-lg text-light"
            style={{
              background: "rgba(255, 255, 255, 0.25)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "#0000ff",
              backdropFilter: "blur(10px)",
              zIndex: 2,
            }}
          >
            <Form
              onSubmit={handleSubmit}
              className="w-100"
              style={{ zIndex: 1 }}
            >
              <Form.Group controlId="apkFile" className="mb-4">
                <Form.Label>
                  <strong>Upload APK File</strong>
                </Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleApkUpload}
                  accept=".apk"
                  required
                />
              </Form.Group>

              <Form.Group controlId="algorithm" className="mb-4">
                <Form.Label>
                  <strong>Select ML Algorithm</strong>
                </Form.Label>
                <Form.Control
                  as="select"
                  onChange={handleAlgorithmChange}
                  value={selectedAlgorithm}
                  required
                >
                  <option value="">Select ML Algorithm</option>
                  <option value="rf">Random Forest</option>
                  <option value="svm">Support Vector Machine</option>
                  <option value="mvc">Maximum Voting Classifier</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="dataset" className="mb-4">
                <Form.Label className="">
                  <strong>Select Dataset</strong>
                </Form.Label>
                <Form.Control
                  as="select"
                  onChange={handleDatasetChange}
                  value={selectedDataset}
                  required
                >
                  <option value="">Select Dataset</option>
                  <option value="drebin">Drebin Dataset</option>
                  <option value="twomer">Twomer Dataset</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="pca">
                <Form.Check
                  type="checkbox"
                  label="Apply PCA"
                  onChange={handlePcaChange}
                  checked={pcaSelection}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
