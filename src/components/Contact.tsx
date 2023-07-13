import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./Contact.module.css";

interface ContactProps {
  active: boolean;
}

const Contact: React.FC<ContactProps> = ({ active }) => {
  const [flipCard, setFlipCard] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contact1, setContact1] = useState("");

  const handleToggle = () => {
    setFlipCard(!flipCard);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/contact", {
        name,
        email,
        contact1,
        message,
      });

      console.log("Message sent successfully!");

      setName("");
      setEmail("");
      setContact1("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const mapContainerStyle = {
    width: "100%",
    height: "450px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginLeft: "130px",
    padding: "10px 10px 10px 10px",
  };

  const contactContainerStyle = {
    width: "100%",
    height: "450px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginLeft: "130px",
    padding: "10px 10px 10px 10px",
  };

  const center = {
    lat: 40.7128, 
    lng: -74.006, 
  };

  return (
    <div id="contact" className={`contacts-page ${active ? "active" : ""}`}>
      <Row>
        <Col md={5}>
          <h1 className="d-flex justify-content-center">Google Map</h1>
          <div style={mapContainerStyle}>
            <LoadScript googleMapsApiKey="YOUR_API_KEY">
              <GoogleMap
                mapContainerStyle={{ height: "100%" }}
                center={center}
                zoom={10}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </Col>
        <Col md={5}>
          <h1 className="d-flex justify-content-center">Contact Us</h1>
          <Form
            onSubmit={handleSubmit}
            className="form-border"
            style={contactContainerStyle}
          >
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formContact">
              <Form.Label>Contact No.</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your contact number"
                value={contact1}
                onChange={(e) => setContact1(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
