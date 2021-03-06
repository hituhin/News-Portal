import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <Jumbotron>
      <h1>Top News!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  );
};

export default Header;
