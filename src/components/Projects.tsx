/* eslint-disable jsx-a11y/img-redundant-alt */
// // Projects.tsx
// import React, { useState } from 'react';
// import { Container, Row, Col, Modal } from 'react-bootstrap';
// import './Projects.css';

// interface ProjectProps {
//   image: string;
//   title: string;
//   description: string;
// }

// const Project: React.FC<ProjectProps> = ({ image, title, description }) => {
//   const [modalShow, setModalShow] = useState(false);

//   const handleModalOpen = () => {
//     setModalShow(true);
//   };

//   const handleModalClose = () => {
//     setModalShow(false);
//   };

//   return (
//     <Col md={4}>
//       <div className="project" onClick={handleModalOpen}>
//         <div className="image-container">
//           <img className="project-image" src={image} alt={title} />
//           <h2>{title}</h2>
//         </div>
//       </div>
//       <Modal show={modalShow} onHide={handleModalClose} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>{title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <img className="modal-image" src={image} alt={title} />
//           <p>{description}</p>
//         </Modal.Body>
//       </Modal>
//     </Col>
//   );
// };

// interface ProjectsProps {
//   active: boolean;
// }

// const Projects: React.FC<ProjectsProps> = ({ active }) => {
//   return (
//     <div id="projects" className={`projects-page ${active ? 'active' : ''}`}>
//       <Container>
//         <div className="page">
//           <h1>Projects</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iusto fugiat modi fuga minus? Sit autem
//             consequuntur impedit, nobis, ut commodi illum nihil nam, nulla officiis possimus ratione odit provident.
//             Dolor excepturi sit facere possimus tempora!
//           </p>
//         </div>
//         <Row className="project-section">
//           <Project
//             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwNQW9lFV-j09Z28HWyMpZyf_vpB7197qrMg&usqp=CAU"
//             title="Art 1"
//             description="Art description 1"
//           />
//           <Project
//             image="https://artincontext.org/wp-content/uploads/2022/07/Types-of-Painting-848x530.jpg"
//             title="Art 2"
//             description="Art description 2"
//           />
//           <Project
//             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEF0SvwJAhpjjXsruCJm1YN-yIDXZXk7fr8w&usqp=CAU"
//             title="Art 3"
//             description="Art description 3"
//           />
//           <Project
//             image="https://nilayashokshah.files.wordpress.com/2018/03/radha-madhav-arbinda-samanta.jpg?w=760"
//             title="Art 4"
//             description="Art description 4"
//           />
//           <Project
//             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD0HrF-gORJAetxD0cd89s0--t3yKv8pZn9A&usqp=CAU"
//             title="Art 5"
//             description="Art description 5"
//           />
//           <Project
//             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3PrhwuohYwYZfr5pof16hUtIp3k8gt3WDA&usqp=CAU"
//             title="Art 6"
//             description="Art description 6"
//           />
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Projects;

// Projects.tsx

import React, { useState } from "react";
import { Container, Row, Col, Modal, Carousel } from "react-bootstrap";
import "./Projects.css";

interface ProjectProps {
  images: string[];
  titles: string[];
  description: string;
}

const Project: React.FC<ProjectProps> = ({ images, titles, description }) => {
  const [modalShow, setModalShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleModalOpen = () => {
    setModalShow(true);
  };

  const handleModalClose = () => {
    setModalShow(false);
  };

  const handleCarouselSelect = (selectedIndex: number) => {
    setActiveIndex(selectedIndex);
  };

  const getTitle = () => {
    return titles[activeIndex];
  };

  const getImage = () => {
    return images[activeIndex];
  };

  return (
    <Col md={4}>
      <div className="project" onClick={handleModalOpen}>
        <div className="image-container">
          <img className="project-image" src={getImage()} alt={getTitle()} />
        </div>
      </div>
      <Modal show={modalShow} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel
            activeIndex={activeIndex}
            onSelect={handleCarouselSelect}
            interval={null}
            fade
          >
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="modal-image"
                  src={image}
                  alt={`${getTitle()} Image ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <p>{getTitle()}</p>
        </Modal.Body>
      </Modal>
    </Col>
  );
};

interface ProjectsProps {
  active: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ active }) => {
  return (
    <div id="projects" className={`projects-page ${active ? "active" : ""}`}>
      <Container>
        <div className="page">
          <h1>Projects</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            iusto fugiat modi fuga minus? Sit autem consequuntur impedit, nobis,
            ut commodi illum nihil nam, nulla officiis possimus ratione odit
            provident. Dolor excepturi sit facere possimus tempora!
          </p>
        </div>
        <Row className="project-section">
          <Col md={3} lg={3} xl={3}>
          <Project
            images={[
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwNQW9lFV-j09Z28HWyMpZyf_vpB7197qrMg&usqp=CAU",
              "https://artincontext.org/wp-content/uploads/2022/07/Types-of-Painting-848x530.jpg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEF0SvwJAhpjjXsruCJm1YN-yIDXZXk7fr8w&usqp=CAU",
            ]}
            titles={["Art 1", "Art 2", "Art 3"]}
            description=""
          />
          </Col>
          <Col md={2} />
          <Col md={3} lg={3} xl={3}>
          <Project
            images={[
              "https://nilayashokshah.files.wordpress.com/2018/03/radha-madhav-arbinda-samanta.jpg?w=760",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD0HrF-gORJAetxD0cd89s0--t3yKv8pZn9A&usqp=CAU",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3PrhwuohYwYZfr5pof16hUtIp3k8gt3WDA&usqp=CAU",
            ]}
            titles={["Art 4", "Art 5", "Art 6"]}
            description=""
          />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
