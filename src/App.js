import { Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <Fragment>
      <div className="App bg-light min-vh-100">
        {/* React Bootstrap navigation bar */}
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
          <Container>
            <Navbar.Brand href="#home">Marvin's Learning Space</Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navigation" />
            <Navbar.Collapse id="main-navigation">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#skills">My Skills</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <main>
          {/* A heading styled with Bootstrap utilities */}
          <Container id="home" className="py-5">
            <Badge bg="success" className="mb-3">
              MY FIRST REACT CHECKPOINT
            </Badge>
            <h1 className="display-4 fw-bold">Small steps. Real progress.</h1>
            <p className="lead text-secondary mb-4">
              Welcome! I am Marvin, a software development student learning
              to build websites with React.
            </p>
            <Button variant="dark" href="#skills">Explore my skills</Button>
          </Container>

          {/* Three React Bootstrap cards in a responsive grid */}
          <Container id="skills" className="pb-5">
            <h2 className="mb-4">What I am learning</h2>
            <Row xs={1} md={3} className="g-4">
              <Col>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Header className="bg-primary-subtle border-0 p-4">
                    <span className="fs-1" role="img" aria-label="Building blocks">🧱</span>
                  </Card.Header>
                  <Card.Body className="p-4">
                    <Badge bg="primary" className="mb-3">01 / STRUCTURE</Badge>
                    <Card.Title as="h3">HTML</Card.Title>
                    <Card.Text className="text-secondary">
                      I use HTML to organise headings, paragraphs, links,
                      images, and forms on a web page.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Header className="bg-success-subtle border-0 p-4">
                    <span className="fs-1" role="img" aria-label="Artist palette">🎨</span>
                  </Card.Header>
                  <Card.Body className="p-4">
                    <Badge bg="success" className="mb-3">02 / STYLE</Badge>
                    <Card.Title as="h3">CSS</Card.Title>
                    <Card.Text className="text-secondary">
                      I use CSS to add colours, spacing, and layouts that
                      fit different screen sizes.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Header className="bg-warning-subtle border-0 p-4">
                    <span className="fs-1" role="img" aria-label="Lightning bolt">⚡</span>
                  </Card.Header>
                  <Card.Body className="p-4">
                    <Badge bg="dark" className="mb-3">03 / INTERACTION</Badge>
                    <Card.Title as="h3">JavaScript &amp; React</Card.Title>
                    <Card.Text className="text-secondary">
                      I use JavaScript for interactions and React components
                      to organise reusable parts of the interface.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>

          <Container id="about" className="pb-5">
            <section className="bg-white rounded-3 border p-4" aria-labelledby="about-heading">
              <h2 id="about-heading" className="h4">About this project</h2>
              <p className="text-secondary mb-0">
                This is my introduction to React at GoMyCode. It uses a
                React Fragment, JSX, and React Bootstrap components.
              </p>
            </section>
          </Container>
        </main>

        <footer className="border-top py-4 text-center text-secondary">
          <small>&copy; 2026 Marvin. Built with React and React Bootstrap.</small>
        </footer>
      </div>
    </Fragment>
  );
}

export default App;
