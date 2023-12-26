import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Form, Button } from "react-bootstrap";
import "./Gitbhub.css";
function Github() {
  const [name, setName] = useState("");
  const [githubUsername, setGithubUsername] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name && githubUsername) {
      setShowCalendar(true);
    } else {
      alert("Please enter both your name and GitHub username.");
    }
  };

  const handleReset = () => {
    setName("");
    setGithubUsername("");
    setShowCalendar(false);
  };

  return (
    <div className="container">
      <h1 className="website-name">GitHub Contributions Viewer</h1>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <div className="content">
          <h2 className="project-heading">
            Track your <strong className="purple">GitHub</strong> Contributions
          </h2>
          {!showCalendar ? (
            <Form onSubmit={handleFormSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Your Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
              </Form.Group>

              <Form.Group controlId="formGithubUsername">
                <Form.Label>Your GitHub Username:</Form.Label>
                <Form.Control type="text" placeholder="Enter your GitHub username" value={githubUsername} onChange={(e) => setGithubUsername(e.target.value)} required />
              </Form.Group>

              <Button variant="primary" type="submit">
                Show Contributions
              </Button>
            </Form>
          ) : (
            <div>
              <h2 className="project-heading">
                Contributions for <strong className="purple">{name}</strong>
              </h2>
              <GitHubCalendar username={githubUsername} blockSize={15} blockMargin={5} color="#c084f5" fontSize={16} />
              <Button variant="secondary" onClick={handleReset} style={{ marginTop: "10px" }}>
                Enter Another Name
              </Button>
            </div>
          )}
        </div>
      </Row>
    </div>
  );
}

export default Github;
