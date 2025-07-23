// import React from 'react'
// import { TfiLocationPin } from "react-icons/tfi";
// import InPut from './InPut';
// import Button from './Button';
// import { useState } from "react";


// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formErrors = {};

//     if (!formData.name.trim()){
//       formErrors.name = 'Name is required';
//     }
//     if (!formData.email.includes('@')){
//       formErrors.email = 'Invalid email address';
//     }
//     if (!formData.subject.trim()){
//       formErrors.subject = 'Subject is required';
//     }
//     if (!formData.message.trim()){
//       formErrors.message = 'Message is required';
//     }
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//     } else {
//       console.log(formData);
//       setFormData({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//       });
//       setErrors({});
//     }
//   }
//   return (
//     <div className='flex justify-center items-center px-10 mt-6'>
//       <div className="max-w-2xl mx-auto text-left px-10 gap-4">
//         <h1 className="text-2xl font-bold mb-2 text-primary-50">Contact Us</h1>
//         <h1 className="text-5xl font-bold mb-6 text-primary-100">Say Hello</h1>
//         <div className='gap-8 flex flex-col'>
//             <div className='flex justify-center'>
//             <div className='mx-auto text-center rounded-full bg-primary-50 p-6'>
//           <TfiLocationPin className='text-primary-100 mx-auto mb-2' size={18} />
//         </div>
//         <div className=''>
//         <h1 className="text-lg font-bold mb-2 text-primary-100">Our Address</h1>
//         <p className="text-lg text-primary-100">
//           123 Main St, Anytown, USA
//         </p>
//         </div>
//         </div>
//         <div className='flex justify-center'>
//             <div className='mx-auto text-center rounded-full bg-primary-50 p-6'>
//           <TfiLocationPin className='text-primary-100 mx-auto mb-2' size={18} />
//         </div>
//         <div className=''>
//         <h1 className="text-lg font-bold mb-2 text-primary-100">Our Address</h1>
//         <p className="text-lg text-primary-100">
//           123 Main St, Anytown, USA
//         </p>
//         </div>
//         </div>
//         <div className='flex justify-center'>
//             <div className='mx-auto text-center rounded-full bg-primary-50 p-6'>
//           <TfiLocationPin className='text-primary-100 mx-auto mb-2' size={18} />
//         </div>
//         <div className=''>
//         <h1 className="text-lg font-bold mb-2 text-primary-100">Our Address</h1>
//         <p className="text-lg text-primary-100">
//           123 Main St, Anytown, USA
//         </p>
//         </div>
//         </div>
//         </div>
//       </div>
//       {/* <div className="border-l-2 h-40 border-primary-100 pb-5 mx-auto"></div> */}
//       <div className="max-w-2xl mx-auto text-left mt-4 px-8 gap-4">
//         <h1 className="text-lg font-bold mb-2 text-primary-50">Have Question ?</h1>
//         <p className="text-4xl text-primary-100 font-bold mb-6">
//           Send a Message
//         </p>
//         <form action="" onSubmit={handleSubmit} className='flex flex-col gap-4'>
//           <InPut
//             variant={errors.name ? 'primary' : 'default'}
//             placeholder={'Name'}
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           {
//             errors.name && <span className="text-red-500">{errors.name}</span>
//           }
//           <InPut
//             variant={errors.email ? 'primary' : 'default'}
//             placeholder={'Email'}
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {
//             errors.email && <span className="text-red-500">{errors.email}</span>
//           }
//           <InPut
//             variant={errors.subject ? 'primary' : 'default'}
//             placeholder={'subject'}
//             name="subject"
//             value={formData.subject}
//             onChange={handleChange}
//           /> 
//           {
//             errors.subject && <span className="text-red-500">{errors.subject}</span>
//           }
//           <InPut
//             type={'textarea'}
//             placeholder={'Your Message'}
//             className={'h-30'}
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             variant= {errors.message? 'primary' : 'default'}
//           />
//           {
//             errors.message && <span className="text-red-500">{errors.message}</span>
//           }
//           <Button
//             label="Send Message"
//             variant="primary"
//             className="w-50"
//             type="submit"
//           />

//         </form>
//       </div>
//     </div>
//   )
// }


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
      console.log(formData)
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
            <InPut
              variant={errors.name ? "primary" : "default"}
              placeholder={"Name"}
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

            <InPut
              variant={errors.email ? "primary" : "default"}
              placeholder={"Email"}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

            <input
              className="border border-primary-50 rounded-md p-3"
              placeholder={"Subject"}
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <span className="text-red-500 text-sm">{errors.subject}</span>}

            <textarea
              placeholder={"Your Message"}
              className="border border-primary-50 rounded-md p-3 h-32 resize-none"
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