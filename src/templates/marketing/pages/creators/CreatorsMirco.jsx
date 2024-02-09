import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faDollarSign, faBullhorn, faChartLine } from '@fortawesome/free-solid-svg-icons';

const CreatorsMicroPage = () => {
  return (
    <Container fluid className="px-4 py-5">
      <Row className="mb-5 text-center">
        <Col>
          <h1>Empower Your Influence with Glitch</h1>
          <p>Maximize Your Earnings Regardless of Your Follower Count</p>
          <Button variant="primary" href="https://www.glitch.fun/signup">Join Glitch</Button>
        </Col>
      </Row>

      <Row className="g-4 mb-5">
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="/path/to/nano_micro_influencers.jpg" />
            <Card.Body>
              <Card.Title>Nano & Micro Influencer Challenges</Card.Title>
              <Card.Text>Discover the unique challenges faced by influencers with smaller followings and how Glitch offers tailored solutions to boost your earnings and engagement.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="/path/to/performance_based.jpg" />
            <Card.Body>
              <Card.Title>Performance-Based Marketing</Card.Title>
              <Card.Text>Learn how Glitch's performance-based marketing approach opens up new revenue streams, rewarding you for the quality and impact of your content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="text-center mb-5">
        <Col md={4}>
          <FontAwesomeIcon icon={faUserFriends} size="3x" />
          <h3>High Engagement Rates</h3>
          <p>Nano and micro influencers often see higher engagement rates, making your partnership with brands more valuable.</p>
        </Col>
        <Col md={4}>
          <FontAwesomeIcon icon={faDollarSign} size="3x" />
          <h3>Monetize Your Influence</h3>
          <p>Performance-based rewards mean your efforts translate directly into earnings, regardless of your follower count.</p>
        </Col>
        <Col md={4}>
          <FontAwesomeIcon icon={faBullhorn} size="3x" />
          <h3>Expand Your Reach</h3>
          <p>Glitch helps you grow your audience by leveraging your content across multiple platforms, maximizing exposure.</p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={12} className="text-center">
          <FontAwesomeIcon icon={faChartLine} size="3x" />
          <h3>Strategize for Success</h3>
          <p>Utilize Glitch's tools to strategize your content creation and distribution, ensuring you reach and engage your target audience effectively.</p>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <Button variant="success" href="https://www.glitch.fun/signup" size="lg">Start Growing with Glitch</Button>
          <p className="mt-3">Read more about how we support nano, micro, and mid-level influencers in our <a href="https://blog.glitch.fun/how-performance-based-marketing-benefits-nano-and-micro-influencers/">detailed guide</a>.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CreatorsMicroPage;
