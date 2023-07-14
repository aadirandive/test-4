// import React from 'react';
// import './Artform.css';
// import { Container, Row, Col } from 'react-bootstrap';

// interface ArtformProps {
//   active: boolean;
// }

// const Artform: React.FC<ArtformProps> = ({ active }) => {
//   return (
//     <div id="art-form" className={`art-form-page ${active ? 'active' : ''}`}>
//       <Container>
//         <Row>
//           <Col>
//             <h1 className="text-center" style={{ marginBottom: '1rem' }}>Artform</h1>
//             <p className="text-center" style={{ marginBottom: '5rem' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eius debitis voluptatibus optio doloribus minima!</p>
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <div className="d-flex flex-column align-items-center" style={{ marginTop: '7rem' }}>
//               <h2>Artform 1</h2>
//               <p className="text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa ad perspiciatis non modi nisi mollitia, sapiente vitae?</p>
//             </div>
//           </Col>
//           <Col className="d-flex justify-content-center align-items-center">
//             <div className="d-flex justify-content-center align-items-center" style={{ height: '25rem', width: '15rem', marginLeft: '12rem', backgroundColor: '#e6e6e6' }}>
//               <img
//                 src="https://news.artnet.com/app/news-upload/2020/12/476a_history_of_fantasy_art_xl_01182_2008201529_id_1317196.jpg"
//                 alt="Imag 1"
//                 style={{ marginTop: '0.1rem', marginRight: '23rem' }}
//                 height={300}
//                 width={500}
//               />
//             </div>
//           </Col>
//         </Row>
//         <Row>
//           <Col className="d-flex justify-content-center align-items-center">
//             <div className="d-flex justify-content-center align-items-center" style={{ height: '25rem', width: '15rem', marginRight: '12rem', backgroundColor: '#e6e6e6' }}>
//               <img
//                 src="https://news.artnet.com/app/news-upload/2020/12/476a_history_of_fantasy_art_xl_01182_2008201529_id_1317196.jpg"
//                 alt="Imag 2"
//                 style={{ marginTop: '0.1rem', marginLeft: '23rem' }}
//                 height={300}
//                 width={500}
//               />
//             </div>
//           </Col>
//           <Col>
//             <div className="d-flex flex-column align-items-center" style={{ marginTop: '7rem' }}>
//               <h2>Artform 2</h2>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vel corporis ea sed perferendis deserunt inventore quibusdam! Quaerat.</p>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Artform;

import React from 'react';
import './Artform.css';
import { Container, Row, Col } from 'react-bootstrap';

interface ArtformProps {
  active: boolean;
}

const Artform: React.FC<ArtformProps> = ({ active }) => {
  return (
    <div id="art-form" className={`art-form-page ${active ? 'active' : ''}`}>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center" style={{ marginBottom: '1rem' }}>Artform</h1>
            <p className="text-center" style={{ marginBottom: '5rem' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eius debitis voluptatibus optio doloribus minima!</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-flex flex-column align-items-center" style={{ marginTop: '7rem' }}>
              <h2>Artform 1</h2>
              <p className="text-right" style={{ maxWidth: '300px', margin: '0 auto' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa ad perspiciatis non modi nisi mollitia, sapiente vitae?</p>
            </div>
          </Col>
          {/* <Col className="d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center" style={{ height: '25rem', width: '100%', maxWidth: '500px', backgroundColor: '#e6e6e6' }}>
              <img
                src="https://news.artnet.com/app/news-upload/2020/12/476a_history_of_fantasy_art_xl_01182_2008201529_id_1317196.jpg"
                alt="Image 1"
                style={{ marginTop: '0.1rem', maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </Col> */}
            <Col className="d-flex justify-content-center align-items-center">
             <div className="d-flex justify-content-center align-items-center" style={{ height: '25rem', width: '15rem', marginLeft: '12rem', backgroundColor: '#e6e6e6' }}>
               <img
                 src="https://news.artnet.com/app/news-upload/2020/12/476a_history_of_fantasy_art_xl_01182_2008201529_id_1317196.jpg"
                 alt="Imag 1"
                 style={{ marginTop: '0.1rem', marginRight: '23rem' }}
                 height={300}
                 width={500}
               />
             </div>
           </Col>
        </Row>
        <Row>
          {/* <Col className="d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center" style={{ height: '25rem', width: '100%', maxWidth: '500px', backgroundColor: '#e6e6e6' }}>
              <img
                src="https://news.artnet.com/app/news-upload/2020/12/476a_history_of_fantasy_art_xl_01182_2008201529_id_1317196.jpg"
                alt="Image 2"
                style={{ marginTop: '0.1rem', maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </Col> */}
           <Col className="d-flex justify-content-center align-items-center">
             <div className="d-flex justify-content-center align-items-center" style={{ height: '25rem', width: '15rem', marginRight: '12rem', backgroundColor: '#e6e6e6' }}>
               <img
                 src="https://news.artnet.com/app/news-upload/2020/12/476a_history_of_fantasy_art_xl_01182_2008201529_id_1317196.jpg"
                 alt="Imag 2"
                 style={{ marginTop: '0.1rem', marginLeft: '23rem' }}
                 height={300}
                 width={500}
               />
             </div>
           </Col>
          <Col>
            <div className="d-flex flex-column align-items-center" style={{ marginTop: '7rem' }}>
              <h2>Artform 2</h2>
              <p className="text-right" style={{ maxWidth: '300px', margin: '0 auto' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vel corporis ea sed perferendis deserunt inventore quibusdam! Quaerat.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Artform;
