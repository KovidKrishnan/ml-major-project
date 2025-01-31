import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import ScrollToTop from "./ScrollToTop";
import axios from "axios";
import ResultCard from "./ResultCard";

const Home = () => {
  const [data, setData] = useState("");
  const [apkFile, setApkFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.xsrfHeaderName = "X-CSRFToken";

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!apkFile) {
      alert("Please fill out all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("apk_file", apkFile);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/models/process/",
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
        "Verify your android app's safety and be safe from Android™ malware";

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

  const gradientStyle = {
    background: `-webkit-linear-gradient(45deg, #FF0000, #0000ff)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold",
  };

  const gradientStyleReverse = {
    background: `-webkit-linear-gradient(45deg, #0000ff, #FF0000)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold",
  }

  return (
    <div
      className="container-fluid d-flex flex-wrap justify-content-around"
      style={{
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url('https://wallpapercave.com/wp/wp3101726.jpg')`,
        backgroundSize: "contain",
        width: "100%",
        height: "88vh"
      }}
    >
      <ScrollToTop />
      <div className="container justify-content-around">
        <div className="d-flex justify-content-ceter align-items-center pt-1 mt-4" >
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
                    bottom: 48,
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
                  className="rounded-2 shadow-lg"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 60,
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
                      loop: true,
                    }}
                  />
                </div>
              </>
            )}
          </Col>

          {/* Right side: Form */}
          <Col
            md={6}
            className="d-flex justify-content-center border rounded p-5 my-auto shadow-lg text-dark"
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

              <Form.Group controlId="dataset" className="mb-4">
                <Form.Label className="">
                  <strong>Selected Algorithm is <span style={gradientStyle}>Random Forest</span></strong>
                </Form.Label>
              </Form.Group>

              <Form.Group controlId="dataset" className="mb-4">
                <Form.Label className="">
                  <strong>Selected dataset is <span style={gradientStyleReverse}>Twomer Dataset</span></strong>
                </Form.Label>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </div>
      </div>
    </div>
  );
};

export default Home;
