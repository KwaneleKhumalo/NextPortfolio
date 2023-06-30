import { baseUrl } from '@/utils/baseUrl'
import { useState } from 'react'
import axios from 'axios'
import { Form, Button, Row } from "react-bootstrap"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [validated, setValidated] = useState(false)

  const { name, email, message } = formData
  const handleChange = e => {
    const nameValue = e.target.name
    const emailValue = e.target.email
    const messageValue = e.target.message
    setFormData({
      ...formData,
      [nameValue]: e.target.value,
      [emailValue]: e.target.value,
      [messageValue]: e.target.value
    })
  }

  const handleFormSubmit = async e => {
    e.preventDefault()

    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }

    setValidated(true)

    const url = `${baseUrl}`

    // Email Data
    const emailData = {
      from: `${name}`,
      subject: `${name} from Website`,
      body: `${message}\n\n${email}`
    }

    try {
      if (name === "" || email === "" || message === "") {
        return
      }
      const mail = await axios.post(url, emailData)

      if (mail.status === 200) {
        setFormData({
          name: "",
          email: "",
          message: ""
        })
        setValidated(false)
      } else {
        console.log("error sending email")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Row className="text-light mt-5 mb-5">
      <Form className="mx-auto p-4 col col-md-5" onSubmit={handleFormSubmit} noValidate validated={validated}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control required autoComplete="off" name="name" type="text" placeholder="Name" value={name} onChange={handleChange} />
          <Form.Control.Feedback type="invalid">Please Provide your Name</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address:</Form.Label>
          <Form.Control required autoComplete="off" name="email" type="email" placeholder="name@example.com" value={email} onChange={handleChange} />
          <Form.Control.Feedback type="invalid">Please Provide your valid Email</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message: </Form.Label>
          <Form.Control required autoCapitalize="on" name="message" as="textarea" rows={3} value={message} onChange={handleChange} />
          <Form.Control.Feedback type="invalid">Cannot send a blank message</Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" variant="info" className="px-5">
          Send
        </Button>
      </Form>
    </Row>
  )
}

export default ContactForm

