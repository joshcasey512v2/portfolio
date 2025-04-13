import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <section id="footer">
        <footer className="footer">
          <Container>
            <Row className="align-items-center">
              <Col size={12} sm={6}>
                <div className="social-icon">
                <h3>Contact me</h3>
                <h4>Email: joshcaseykc@gmail.com</h4>
                <h4>Phone: 0851181119</h4>
                </div>
              </Col>
              <Col size={12} sm={6} className="text-center text-sm-end">
                <div className="social-icon">
                </div>
                <p>Made: 28/03/2024</p>
              </Col>
            </Row>
          </Container>
        </footer>
    </section>    
  )
}