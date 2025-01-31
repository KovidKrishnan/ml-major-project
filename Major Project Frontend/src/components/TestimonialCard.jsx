import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const TestimonialCard = ({ teamMember }) => {
  return (
    <Card 
      className="m-4 m-lg-5 border-0 shadow rounded-4 text-center p-3 d-flex justify-content-between align-self-center"
      style={{ minWidth: "300px", maxWidth: '360px' }}
    >
      <Card.Img
        variant="top"
        src={teamMember["photoSrc"]}
        alt={`${teamMember["name"]}'s photo`}
        style={{ width: "248px", height: "248px" }}
        className="rounded-3 mt-2 align-self-center"
      />
      <Card.Body className="py-4">
        <Card.Title className="mb-2 text-primary">
          {teamMember["name"]}
        </Card.Title>
          <Card.Subtitle className="mb-2 text-warning">
            {teamMember["title"]}
          </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-secondary">
          {teamMember["rollNumber"]}
        </Card.Subtitle>

        {/* Social Media Icons */}
        <div className="mt-3 d-flex justify-content-between container">
          {teamMember["linkedin"] && (
            <a
              href={teamMember["linkedin"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="mr-4 ml-4"
              />
            </a>
          )}
          {teamMember["instagram"] && (
            <a
              href={teamMember["instagram"]}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-3 ml-3"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          )}
          {teamMember["whatsapp"] && (
            <a
              href={teamMember["whatsapp"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
          )}
          {teamMember["email"] && (
            <a
              href={teamMember["email"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default TestimonialCard;
