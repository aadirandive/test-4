import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import './Projects.css';

interface ProjectProps {
  image: string;
  title: string;
  description: string;
}

const Project: React.FC<ProjectProps> = ({ image, title, description }) => {
  const [modalShow, setModalShow] = useState(false);

  const handleModalOpen = () => {
    setModalShow(true);
  };

  const handleModalClose = () => {
    setModalShow(false);
  };

  return (
    <Col md={4}>
      <div className="project">
        <div className="image-container" onClick={handleModalOpen}>
          <img className="project-image" src={image} alt={title} />
          <h2>{title}</h2>
        </div>
        <Modal show={modalShow} onHide={handleModalClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img className="modal-image" src={image} alt={title} />
            <p>{description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Col>
  );
};

interface ProjectsProps {
  active: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ active }) => {
  return (
    <div id="projects" className={`projects-page ${active ? 'active' : ''}`}>
      <Container>
        <div className="page">
          <h1>Projects</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iusto fugiat modi fuga minus? Sit autem consequuntur impedit, nobis, ut commodi illum nihil nam, nulla officiis possimus ratione odit provident. Dolor excepturi sit facere possimus tempora!</p>
        </div>
        <Row className="project-section">
          <Project
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwNQW9lFV-j09Z28HWyMpZyf_vpB7197qrMg&usqp=CAU"
            title="Project 1"
            description="Description for Project 1"
          />
          <Project
            image="https://artincontext.org/wp-content/uploads/2022/07/Types-of-Painting-848x530.jpg"
            title="Project 2"
            description="Description for Project 2"
          />
          <Project
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEF0SvwJAhpjjXsruCJm1YN-yIDXZXk7fr8w&usqp=CAU"
            title="Project 3"
            description="Description for Project 3"
          />
          <Project
            image="https://nilayashokshah.files.wordpress.com/2018/03/radha-madhav-arbinda-samanta.jpg?w=760"
            title="Project 4"
            description="Radha Madhav"
          />
          <Project
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD0HrF-gORJAetxD0cd89s0--t3yKv8pZn9A&usqp=CAU"
            title="Project 5"
            description="Description for Project 5"
          />
          <Project
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3PrhwuohYwYZfr5pof16hUtIp3k8gt3WDA&usqp=CAU"
            title="Project 6"
            description="Description for Project 6"
          />
        </Row>
      </Container>
      <div className="background-image1" />
    </div>
  );
};

export default Projects;
