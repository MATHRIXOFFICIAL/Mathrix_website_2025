import { useState } from 'react'
import emailjs from 'emailjs-com'
import '@/app/globals.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const validate = () => {
    let newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters long'
    } else if (!/^[A-Za-z ]+$/.test(formData.name)) {
      newErrors.name = 'Name can only contain letters and spaces'
    }

    // Mobile validation (exactly 10 digits, starts with 6-9)
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required'
    } else if (!/^[6-9][0-9]{9}$/.test(formData.mobile)) {
      newErrors.mobile = 'Enter a valid 10-digit mobile number'
    }

    // Email validation (standard format check)
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address'
    }

    // Message validation (minimum 10 characters)
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validate()) return

    setIsSubmitting(true)

    // EmailJS credentials (Replace with your actual credentials)
    const serviceID = 'your_service_id' // Replace with your EmailJS service ID
    const templateID = 'your_template_id' // Replace with your EmailJS template ID
    const publicKey = 'your_public_key' // Replace with your EmailJS public key

    const templateParams = {
      name: formData.name,
      mobile: formData.mobile,
      email: formData.email,
      message: formData.message,
    }

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        alert('Email sent successfully!')
        setFormData({ name: '', mobile: '', email: '', message: '' })
        setErrors({})
      })
      .catch((error) => {
        alert('Failed to send email. Please try again later.')
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <div className='form-container dmsans'>
      <div className='form'>
        <span className='heading hammersmith'>Contact Us</span>
        <form onSubmit={handleSubmit}>
          {errors.name && <p className='error'>{errors.name}</p>}
          <input
            placeholder='Name'
            type='text'
            name='name'
            className='input'
            value={formData.name}
            onChange={handleChange}
          />
          {errors.mobile && <p className='error'>{errors.mobile}</p>}
          <input
            placeholder='Mobile'
            type='tel'
            name='mobile'
            className='input'
            value={formData.mobile}
            onChange={handleChange}
          />

          {errors.email && <p className='error'>{errors.email}</p>}
          <input
            placeholder='Email'
            type='email'
            name='email'
            className='input'
            value={formData.email}
            onChange={handleChange}
          />
          {errors.message && <p className='error'>{errors.message}</p>}

          <textarea
            placeholder='Say Hello'
            rows='5'
            name='message'
            className='textarea'
            value={formData.message}
            onChange={handleChange}
          />

          <div className='button-container'>
            <button
              type='submit'
              className='send-button'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
            <button
              type='button'
              className='reset-button'
              onClick={() =>
                setFormData({ name: '', mobile: '', email: '', message: '' })
              }
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
