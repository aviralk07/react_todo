import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

// props are the javascript object which we pass from parent to child
export default function Header(props) {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
          </Nav>
          {props.searchBar ? (
            <Form.Control
              className="Form1"
              type="text"
              placeholder="Enter Text"
            />
          ) : (
            <span
              style={{ color: "white", marginRight: "10px", fontSize: "30px" }}
            >
              no search bar
            </span>
          )}

          <Button variant="success " size="lg">
            Submit
          </Button>
        </Container>
      </Navbar>
    </div>
  );
}
Header.defaultProps = {
  title: "Your title here.....",
  searchBar: false,
};

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired, // is required means you have to pass that thing other wise it shown a error
};
