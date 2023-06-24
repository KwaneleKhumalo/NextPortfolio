import { Row } from "react-bootstrap"
const ReviewList = props => {
  const { reviewName, reviewText, reviewProject } = props
  return (
    <Row className="border">
      <h3 className="mb-4">{reviewProject}</h3>
      <h6 className="col-10 col-md-10 mx-auto mb-4">{reviewText}</h6>
      <p className="fw-bold">- {reviewName}</p>
    </Row>
  )
}

export default ReviewList
