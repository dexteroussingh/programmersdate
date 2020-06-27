import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

const AboutUs = () => (
  <div className="content">
    <Row>
      <Col md="12">
        <Card>
          <CardHeader className="mb-5">
            <CardTitle tag="h2">
              About Us
            </CardTitle>
          </CardHeader>
          <CardBody>

            <h4>Coder-Biceps</h4>

            <h5 className="text-success" style={{ marginLeft: "5em" }}>1.1 Pushkar Tandon</h5>
            <p className="text-primary" style={{ marginLeft: "5em", marginBottom: "2em" }}>
              Github : <a href="https://github.com/tandonpushkar" target="_blank" rel="noopener noreferrer">Profile Link</a>
            </p>
            <p className="text-primary" style={{ marginLeft: "5em", marginBottom: "2em" }}>
              LinkedIn : <a href="https://www.linkedin.com/in/tandonpushkar/" target="_blank" rel="noopener noreferrer">Profile Link</a>
            </p>

            <h5 className="text-success" style={{ marginLeft: "5em" }}>1.2 Akash Shah</h5>
            <p className="text-primary" style={{ marginLeft: "5em", marginBottom: "2em" }}>
              Github: <a href="https://github.com/akashshah03" target="_blank" rel="noopener noreferrer">Profile Link</a>
            </p>
            <p className="text-primary" style={{ marginLeft: "5em", marginBottom: "2em" }}>
              LinkedIn : <a href="https://www.linkedin.com/in/akash-shah-b92977193/" target="_blank" rel="noopener noreferrer">Profile Link</a>
            </p>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

export default AboutUs;
