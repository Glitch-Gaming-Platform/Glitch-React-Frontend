import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faGamepad, faBalanceScale, faMoneyBillWave, faRocket } from '@fortawesome/free-solid-svg-icons';

const CreatorsOverviewPage = () => {
  return (
    <Container fluid className="px-4 py-5">
      <Row className="mb-5 text-center">
        <Col>
          <h1>Welcome to Glitch</h1>
          <p>Unlock Your Potential with Performance-Based Influencer Marketing</p>
          <Button variant="primary" href="#signup">Sign Up Now</Button>
        </Col>
      </Row>

      <Row className="g-4">
        <Col md={6} className="d-flex align-items-stretch">
          <Card className="flex-fill">
            <Card.Img variant="top" src="path/to/your/image/audience_growth.jpg" />
            <Card.Body>
              <Card.Title>Grow Your Audience</Card.Title>
              <Card.Text>Enhance your reach and impact with strategic collaborations and content that resonates.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="d-flex align-items-stretch">
          <Card className="flex-fill">
            <Card.Img variant="top" src="path/to/your/image/reward_effort.jpg" />
            <Card.Body>
              <Card.Title>Reward Your Effort</Card.Title>
              <Card.Text>Earn more with a performance-based model that values your content's impact.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="my-5 text-center">
        <Col>
          <h2>Why Choose Glitch?</h2>
        </Col>
      </Row>

      <Row className="text-center mb-5">
        <Col md={4}>
          <FontAwesomeIcon icon={faUsers} size="3x" />
          <h3>Engaged Communities</h3>
          <p>Build genuine connections with audiences across gaming communities.</p>
        </Col>
        <Col md={4}>
          <FontAwesomeIcon icon={faGamepad} size="3x" />
          <h3>Exciting Opportunities</h3>
          <p>Partner with top game developers for early access to games and exclusive content.</p>
        </Col>
        <Col md={4}>
          <FontAwesomeIcon icon={faBalanceScale} size="3x" />
          <h3>Fair Compensation</h3>
          <p>Benefit from a hybrid model that offers upfront payments plus performance bonuses.</p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6} className="text-center">
          <FontAwesomeIcon icon={faMoneyBillWave} size="3x" />
          <h3>Maximize Earnings</h3>
          <p>Unlock your earning potential with our innovative performance incentives.</p>
        </Col>
        <Col md={6} className="text-center">
          <FontAwesomeIcon icon={faRocket} size="3x" />
          <h3>Accelerate Growth</h3>
          <p>Fast-track your influencer journey with resources and support from Glitch.</p>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <Button variant="success" href="#signup" size="lg">Join Glitch Today</Button>
          <p className="mt-3">Learn more about our approach by reading our <a href="https://blog.glitch.fun/the-rise-of-hybrid-influencer-marketing-in-gaming/">detailed article</a>.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CreatorsOverviewPage;
