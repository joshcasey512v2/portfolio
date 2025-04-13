import { Button, Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, link, img }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <br/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <img src={img} ></img>
          <br/>
          <Button href={link}>View on GitHub</Button>
        </div>
      </div>
    </Col>
  )
}