import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import './cardRow.scss';
import img1 from '../../assets/images/card1.png';
import img2 from '../../assets/images/card2.png';
import img3 from '../../assets/images/card3.png';

const cardData = [
  {
    img: img1,
    heading: 'Find fulfilling work',
    desc: 'Discover what you love to do and find a job that fits your skills and needs today while you look toward the future.',
  },
  {
    img: img2,
    heading: 'Connect with resources',
    desc: 'Access the resources, support, and opportunities you need to grow and succeed in your career and life.',
  },
  {
    img: img3,
    heading: 'Join our community',
    desc: 'Be part of a network that helps you thrive, share experiences, and achieve meaningful goals together.',
  },
];

const CardsRow = () => {
  return (
    <section className='cards-row'>
      <Container>
        <Row className='justify-content-center text-center'>
          {cardData.map((card, index) => (
            <Col
              key={index}
              lg={4}
              md={6}
              sm={12}
              className='mb-4 d-flex justify-content-center'>
              <Card className='theme-card'>
                <Card.Img
                  variant='top'
                  src={card.img}
                />
                <Card.Body>
                  <Card.Title>{card.heading}</Card.Title>
                  <Card.Text>{card.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CardsRow;
