import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Mentor() {
  return (
    <div className="m-auto m-lg-4 ">
      <div className="d-flex justify-content-around flex-wrap mt-4">
          <img
            className="d-flex align-self-center rounded-4 shadow-lg m-4 mt-1"
            src="https://jpnce.ac.in/new/images/department/cse/DJamuna.jpg"
            alt="Left Image"
          />
        <Col xs={10} md={7}>
          <div>
            <h2>Mentor: </h2>
            <h1 className="text-primary">Dasari Jamuna</h1>
            <p>
              <strong>JNTUH REG ID:</strong> 61150405-220905
            </p>

            <p>
              <strong>Qualification:</strong> B.E (CSE), M.Tech
            </p>

            <p>
              <strong>Experience:</strong> 21 Years
            </p>

            <p>
              <strong>Contact:</strong> dasari.jamuna@gmail.com
            </p>

            <p>
              <strong>Subjects Taught:</strong> Software Testing Methodologies,
              Computer Graphics, Computer Organization, Operating Systems,
              Digital Logic Design, Image Processing, Embedded Systems, Software
              Engineering, Computer Numerical Methods, IRS, Distributed Systems,
              C
            </p>

            <p>
              <strong>Area of Interest:</strong> Software Testing, Graphics
            </p>
            <hr />
          </div>
        </Col>
      </div>
    </div>
  );
}
