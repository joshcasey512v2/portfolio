import { Button, Col } from "react-bootstrap";

export const ExpCard = ({ title, duration, img, description}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <br/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{duration}</span>
          <br/>
          <span>{description}</span>
          <img src={img} ></img>
          <br/>
          <br/>
        </div>
      </div>
    </Col>
  )
}