// import React, { useState } from 'react';
// import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
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
//       <div className="project">
//         <div className="image-container" onClick={handleModalOpen}>
//           <img className="project-image" src={image} alt={title} />
//           <h2>{title}</h2>
//         </div>
//         <Modal show={modalShow} onHide={handleModalClose} centered>
//           <Modal.Header closeButton>
//             <Modal.Title>{title}</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <img className="modal-image" src={image} alt={title} />
//             <p>{description}</p>
//           </Modal.Body>
//           <Modal.Footer>           
//           </Modal.Footer>
//         </Modal>
//       </div>
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
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iusto fugiat modi fuga minus? Sit autem consequuntur impedit, nobis, ut commodi illum nihil nam, nulla officiis possimus ratione odit provident. Dolor excepturi sit facere possimus tempora!</p>
//         </div>
//         <Row className="project-section">
//           <Project
//             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwNQW9lFV-j09Z28HWyMpZyf_vpB7197qrMg&usqp=CAU"
//             title=""
//             description="Art"
//           />
//           <Project
//             image="https://artincontext.org/wp-content/uploads/2022/07/Types-of-Painting-848x530.jpg"
//             title=""
//             description="Art"
//           />
//           <Project
//             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEF0SvwJAhpjjXsruCJm1YN-yIDXZXk7fr8w&usqp=CAU"
//             title=""
//             description="Art"
//           />
//           <Project
//             image="https://nilayashokshah.files.wordpress.com/2018/03/radha-madhav-arbinda-samanta.jpg?w=760"
//             title=""
//             description="Art"
//           />
//           <Project
//             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD0HrF-gORJAetxD0cd89s0--t3yKv8pZn9A&usqp=CAU"
//             title=""
//             description="Art"
//           />
//           <Project
//             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3PrhwuohYwYZfr5pof16hUtIp3k8gt3WDA&usqp=CAU"
//             title=""
//             description="Art"
//           />
//         </Row>
//       </Container>
//       <div className="background-image1" />
//     </div>
//   );
// };

// export default Projects;

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
  const [activeIndex, setActiveIndex] = useState(0);

  const handleModalOpen = () => {
    setModalShow(true);
  };

  const handleModalClose = () => {
    setModalShow(false);
  };

  const handleCarouselNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 6);
  };

  const handleCarouselPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + 6) % 6);
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
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {Array.from(Array(6), (_, index) => (
                  <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                    <img src={image} className="d-block w-100" alt={title} />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>{title}</h5>
                      <p>{description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
                onClick={handleCarouselPrev}
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
                onClick={handleCarouselNext}
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            {/* Add any footer content */}
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iusto fugiat modi fuga
            minus? Sit autem consequuntur impedit, nobis, ut commodi illum nihil nam, nulla
            officiis possimus ratione odit provident. Dolor excepturi sit facere possimus tempora!
          </p>
        </div>
        <Row className="project-section">
          <Project
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwNQW9lFV-j09Z28HWyMpZyf_vpB7197qrMg&usqp=CAU"
            title="Art 1"
            description="Art description 1"
          />
          <Project
            image="https://artincontext.org/wp-content/uploads/2022/07/Types-of-Painting-848x530.jpg"
            title="Art 2"
            description="Art description 2"
          />
          <Project
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEF0SvwJAhpjjXsruCJm1YN-yIDXZXk7fr8w&usqp=CAU"
            title="Art 3"
            description="Art description 3"
          />
          <Project
            image="https://nilayashokshah.files.wordpress.com/2018/03/radha-madhav-arbinda-samanta.jpg?w=760"
            title="Art 4"
            description="Art description 4"
          />
          <Project
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD0HrF-gORJAetxD0cd89s0--t3yKv8pZn9A&usqp=CAU"
            title="Art 5"
            description="Art description 5"
          />
          <Project
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3PrhwuohYwYZfr5pof16hUtIp3k8gt3WDA&usqp=CAU"
            title="Art 6"
            description="Art description 6"
          />
        </Row>
      </Container>
      <div className="background-image1" />
    </div>
  );
};

export default Projects;
