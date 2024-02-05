import React from "react";
import { useSpring, animated } from "react-spring";
import TestimonialCard from "./TestimonialCard";
import "../assets/Kovid.jpg";
import Mentor from "./Mentor";
import { Badge, Col, Row } from "react-bootstrap";

export default function Team() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 600 }, // Adjust the duration as needed
  });

  const kovid = {
    name: "Kovid Krishnan",
    title: "Team Leader",
    rollNumber: "20361A0587",
    photoSrc:
      "https://firebasestorage.googleapis.com/v0/b/android-malware-detectio-dc71b.appspot.com/o/1706802637045.jpg?alt=media&token=a6aa3105-2235-43e7-984d-d85b8052c8a1",
    linkedin: "https://www.linkedin.com/in/kovidkrishnan",
    instagram: "https://www.instagram.com/winter_phile",
    whatsapp: "https://wa.me/918639762655",
    email: "mailto:krishnankovid750@gmail.com",
  };
  const Omkar = {
    name: "Omkar",
    title: "Team Member",
    rollNumber: "20361A0563",
    photoSrc:
      "https://firebasestorage.googleapis.com/v0/b/android-malware-detectio-dc71b.appspot.com/o/omkar.jpg?alt=media&token=fee744fe-683a-4bcc-95a4-a62b5e29a80e",
    linkedin: "https://www.linkedin.com/in/kanemoni-omkar-a32ba5238/",
    instagram: "https://www.instagram.com/mr_omk_ar/",
    whatsapp: "https://wa.me/919398879450",
    email: "mailto:omkarkanemoni1029@gmail.com",
  };
  const saikiran = {
    name: "Sai Kiran",
    title: "Team Member",
    rollNumber: "20361A0574",
    photoSrc:
      "https://firebasestorage.googleapis.com/v0/b/android-malware-detectio-dc71b.appspot.com/o/sai.jpg?alt=media&token=fad23e7b-b854-4824-8d25-9a4f6832a2c2",
    instagram: "https://www.instagram.com/sunny_hitman_",
    whatsapp: "https://wa.me/917893700839",
    email: "mailto:chsunnysai143@gmail.com",
  };
  const Supriya = {
    name: "Supriya",
    title: "Team Member",
    rollNumber: "20361A0596",
    photoSrc:
      "https://firebasestorage.googleapis.com/v0/b/android-malware-detectio-dc71b.appspot.com/o/supriya.jpg?alt=media&token=42488539-83d4-4ee8-9203-108050b73e15",
    instagram: "https://www.instagram.com/i_supriyachinnu/",
    linkedin: "https://www.linkedin.com/in/supriya-g-b84878266/",
    email: "mailto:@gmail.com",
    whatsapp: "https://wa.me/919182906463",
  };

  return (
    <animated.div style={fadeIn} className={"bg-light "}>
      <Mentor />
        <div
          className=" d-flex justify-content-around flex-wrap"
        >
          <TestimonialCard teamMember={kovid} />

          <TestimonialCard teamMember={Omkar} />

          <TestimonialCard teamMember={Supriya} />

          <TestimonialCard teamMember={saikiran} />
        </div>
    </animated.div>
  );
}
