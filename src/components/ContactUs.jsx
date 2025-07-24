"use client"

import { TfiLocationPin, TfiEmail, TfiMobile } from "react-icons/tfi"
import InPut from "./InPut"
import Button from "./Button"
import { useState } from "react"

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formErrors = {}

    if (!formData.name.trim()) {
      formErrors.name = "Name is required"
    }
    if (!formData.email.includes("@")) {
      formErrors.email = "Invalid email address"
    }
    if (!formData.subject.trim()) {
      formErrors.subject = "Subject is required"
    }
    if (!formData.message.trim()) {
      formErrors.message = "Message is required"
    }
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
    } else {
      console.log("Form submitted:", formData)
      alert("Message sent successfully!")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setErrors({})
    }
  }

  const contactInfo = [
    {
      icon: TfiLocationPin,
      title: "Our Address",
      info: "123 Main St, Kigali, Rwanda",
    },
    {
      icon: TfiEmail,
      title: "Email Us",
      info: "businesscafe@info.com",
    },
    {
      icon: TfiMobile,
      title: "Call Us",
      info: "+250783787817",
    },
  ]

  return (
    <div className="py-8 md:py-12">
      <div className="flex flex-col lg:flex-row justify-center items-start px-4 md:px-10 gap-8 lg:gap-12 max-w-7xl mx-auto">
        {/* Contact Info */}
        <div className="w-full lg:w-1/2">
          <div className="mb-8">
            <h1 className="text-xl md:text-2xl font-bold mb-2 text-primary-50">Contact Us</h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-100">Say Hello</h1>
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-full bg-primary-50 p-4">
                  <item.icon className="text-white text-lg" />
                </div>
                <div>
                  <h1 className="text-lg font-bold mb-1 text-primary-100">{item.title}</h1>
                  <p className="text-base text-primary-100">{item.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2">
          <div className="mb-6">
            <h1 className="text-lg font-bold mb-2 text-primary-50">Have Question?</h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-primary-100 font-bold mb-6">Send a Message</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name Input */}
            <InPut
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

            {/* Email Input */}
            <InPut
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

            {/* Subject Input */}
            <InPut
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={errors.subject ? "border-red-500" : ""}
            />
            {errors.subject && <span className="text-red-500 text-sm">{errors.subject}</span>}

            {/* Message Textarea */}
            <textarea
              placeholder="Your Message"
              className={`border rounded-md p-3 h-32 resize-none ${
                errors.message ? "border-red-500" : "border-primary-50"
              }`}
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}

            <Button label="Send Message" variant="primary" className="w-full md:w-auto" type="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}