const ReviewList = props => {
  const { reviewName, reviewText, reviewProject } = props
  return (
    <>
      <h3 className="mb-4">{reviewProject}</h3>
      <h6 className="col-10 col-md-8 mx-auto mb-4">{reviewText}</h6>
      <p className="fw-bold">- {reviewName}</p>
    </>
  )
}

export default ReviewList
