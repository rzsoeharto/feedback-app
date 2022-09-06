import { Link } from "react-router-dom";
import React from "react";
import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="container">
        <h1>About This Project</h1>
        <p>A react app to leave feedback</p>
        <p>Version 1.0.0</p>

        <p>
          <Link to="/">Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
