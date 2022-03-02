import React from "react";
import './WelcomeScreen.css';
import { Container, Col, Row } from 'react-bootstrap';

function WelcomeScreen(props) {
  return props.showWelcomeScreen ?
  (
  <div className="WelcomeScreen">
    <Container fluid>
    <Row>
      <Col>
        <h1>Welcome to the Meet app</h1>
        <h4>
          Log in to see upcoming events around the world for
          full-stack
          developers
        </h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <div className="button_cont" align="center">
          <div class="google-btn">
            <div class="google-icon-wrapper">
              <img
                class="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google sign-in"
              />
            </div>
            <button onClick={() => { props.getAccessToken() }}
            rel="nofollow noopener"
            class="btn-text"
            >
            <b>Sign in with google</b>
            </button>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <a 
        href="https://smak1n.github.io/meet/privacy.html"
        rel="nofollow noopener"
      >
      Privacy policy
      </a>
    </Row>
    </Container>
  </div>
  ) : null
}

export default WelcomeScreen;
