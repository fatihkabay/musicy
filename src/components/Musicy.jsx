import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from "react-bootstrap";
import { useState, useEffect } from "react";

function Musicy() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <Container>
      <InputGroup className="mb-3" size="lg">
        <FormControl
          placeholder="Search For Artists"
          type="input"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              console.log("Pressed Enter");
            }
          }}
          onChange={event => setSearchInput(event.target.value)}
        />
        <Button onClick={() => {console.log("clicked button")}}>
          Search
        </Button>
      </InputGroup>
    </Container>
  );
}

export default Musicy;
