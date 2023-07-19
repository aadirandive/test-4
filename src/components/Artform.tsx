import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface ArtformProps {
  active: boolean;
}

const Artform: React.FC<ArtformProps> = ({ active }) => {
  return (
    <div id="art-form" className={`art-form-page ${active ? "active" : ""}`}>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center" style={{ marginBottom: "1rem" }}>
              Artform
            </h1>
            <p className="text-center" style={{ marginBottom: "5rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              eius debitis voluptatibus optio doloribus minima!
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={5} lg={5} xl={5}>
            <div
              className="d-flex flex-column align-items-center"
              style={{ marginTop: "7rem" }}
            >
              <h2>Interiors</h2>
              <p
                className="text-right"
                style={{ maxWidth: "300px", margin: "0 auto" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti ipsa ad perspiciatis non modi nisi mollitia, sapiente
                vitae?
              </p>
            </div>
          </Col>
          <Col md={1} />
          <Col className="d-flex justify-content-center align-items-center">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "25rem",
                width: "15rem",
                marginLeft: "12rem",
                backgroundColor: "#e6e6e6",
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWc4MXBBWdW9iKds4p5wN4drhtiVfWw-Segg&usqp=CAU"
                alt="Imag 1"
                style={{ marginTop: "0.1rem", marginRight: "23rem" }}
                height={300}
                width={500}
              />
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "25rem",
                width: "15rem",
                marginRight: "12rem",
                backgroundColor: "#e6e6e6",
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf21Xi5nyP8X_zfZbpVXDKYIxyeU89p2qwQQ&usqp=CAU"
                alt="Imag 2"
                style={{ marginTop: "0.1rem", marginLeft: "23rem" }}
                height={300}
                width={500}
              />
            </div>
          </Col>
          <Col md={1} />
          <Col md={5} lg={5} xl={5}>
            <div
              className="d-flex flex-column align-items-center"
              style={{ marginTop: "7rem" }}
            >
              <h2>Wall Arts and Paintings</h2>
              <p
                className="text-right"
                style={{ maxWidth: "300px", margin: "0 auto" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium vel corporis ea sed perferendis deserunt inventore
                quibusdam! Quaerat.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={5} lg={5} xl={5}>
            <div
              className="d-flex flex-column align-items-center"
              style={{ marginTop: "7rem" }}
            >
              <h2>Sculptures</h2>
              <p
                className="text-right"
                style={{ maxWidth: "300px", margin: "0 auto" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti ipsa ad perspiciatis non modi nisi mollitia, sapiente
                vitae?
              </p>
            </div>
          </Col>
          <Col md={1} />
          <Col className="d-flex justify-content-center align-items-center">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "25rem",
                width: "15rem",
                marginLeft: "12rem",
                backgroundColor: "#e6e6e6",
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW65EywDOeWfO4to2WZMRPa7Jf-fjuE_iXGLCssq36cHKnzQdh6dLP5xIhoUbmLPtgYww&usqp=CAU"
                alt="Imag 3"
                style={{ marginTop: "0.1rem", marginRight: "23rem" }}
                height={300}
                width={500}
              />
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "25rem",
                width: "15rem",
                marginRight: "12rem",
                backgroundColor: "#e6e6e6",
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT97IZcLwFzMPHXS2eND1CWM7PLzHsTGH7DqQ&usqp=CAU"
                alt="Imag 4"
                style={{ marginTop: "0.1rem", marginLeft: "23rem" }}
                height={300}
                width={500}
              />
            </div>
          </Col>
          <Col md={1} />
          <Col md={5} lg={5} xl={5}>
            <div
              className="d-flex flex-column align-items-center"
              style={{ marginTop: "7rem" }}
            >
              <h2>Murals</h2>
              <p
                className="text-right"
                style={{ maxWidth: "300px", margin: "0 auto" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium vel corporis ea sed perferendis deserunt inventore
                quibusdam! Quaerat.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={5} lg={5} xl={5}>
            <div
              className="d-flex flex-column align-items-center"
              style={{ marginTop: "7rem" }}
            >
              <h2>Set Creations</h2>
              <p
                className="text-right"
                style={{ maxWidth: "300px", margin: "0 auto" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti ipsa ad perspiciatis non modi nisi mollitia, sapiente
                vitae?
              </p>
            </div>
          </Col>
          <Col md={1} />
          <Col className="d-flex justify-content-center align-items-center">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "25rem",
                width: "15rem",
                marginLeft: "12rem",
                backgroundColor: "#e6e6e6",
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiDARmbTtrhN8frU6DOnHYHUXBrAGoM5IlRg&usqp=CAU"
                alt="Imag 5"
                style={{ marginTop: "0.1rem", marginRight: "23rem" }}
                height={300}
                width={500}
              />
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default Artform;
