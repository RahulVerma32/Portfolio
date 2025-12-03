import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate <b className="purple">Backend-focused MERN Developer</b>{" "}
              currently pursuing <b className="purple">B.Tech in Electronics and Communication</b>{" "}
              at <b className="purple">IIIT Bhopal</b>. I specialize in building{" "}
              <b className="purple">scalable full-stack applications</b> with a
              strong emphasis on <b className="purple">backend performance</b>,{" "}
              <b className="purple">security</b>, and{" "}
              <b className="purple">clean API architecture</b>.
              <br />
              <br />
              I love solving <b className="purple">complex problems</b> and
              creating <b className="purple">impactful applications</b> that make
              a real difference. With <b className="purple">400+ DSA problems</b>{" "}
              solved and strong fundamentals in <b className="purple">OS, DBMS, CN</b>,
              and <b className="purple">Backend Engineering</b>, I bring both
              theoretical knowledge and practical expertise to every project.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, C++, Python, Node.js, and React{" "}
                </b>
              </i>
              — and I have strong experience in both backend and frontend
              development.
              <br />
              <br />
              My areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, RESTful APIs,{" "}
                </b>
              </i>
              and building scalable microservices architectures.
              <br />
              <br />
              I enjoy working with modern technologies like
              <b className="purple"> Node.js, Express.js </b> for backend and{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Redux</b>
              </i>
              {" "}for creating dynamic user interfaces.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
