import { Carousel } from "react-bootstrap"
import ReviewList from "./ReviewList"
import { Reviews } from "@/assets/shared/Reviews"


const Slide = () => {
  return (
    <>
      <Carousel variant="dark" className="text-center mb-5 bg-light p-5 shadow shadow-lg">
        {Reviews.map(review => (
          <Carousel.Item interval={5000} className="mb-5" key={review.id}>
            <ReviewList reviewName={review.reviewer} reviewText={review.reviewText} reviewProject={review.reviewerProject} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  )
}

export default Slide
