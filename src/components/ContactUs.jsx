import React from 'react'
import { TfiLocationPin } from "react-icons/tfi";
import InPut from './InPut';
import Button from './Button';
import { useState } from "react";


export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = {};

    if (!formData.name.trim()){
      formErrors.name = 'Name is required';
    }
    if (!formData.email.includes('@')){
      formErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()){
      formErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim()){
      formErrors.message = 'Message is required';
    }
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log(formData);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
    }
  }
  return (
    <div className='flex justify-center items-center px-10 mt-6'>
      <div className="max-w-2xl mx-auto text-left px-10 gap-4">
        <h1 className="text-2xl font-bold mb-2 text-primary-50">Contact Us</h1>
        <h1 className="text-5xl font-bold mb-6 text-primary-100">Say Hello</h1>
        <div className='gap-8 flex flex-col'>
            <div className='flex justify-center'>
            <div className='mx-auto text-center rounded-full bg-primary-50 p-6'>
          <TfiLocationPin className='text-primary-100 mx-auto mb-2' size={18} />
        </div>
        <div className=''>
        <h1 className="text-lg font-bold mb-2 text-primary-100">Our Address</h1>
        <p className="text-lg text-primary-100">
          123 Main St, Anytown, USA
        </p>
        </div>
        </div>
        <div className='flex justify-center'>
            <div className='mx-auto text-center rounded-full bg-primary-50 p-6'>
          <TfiLocationPin className='text-primary-100 mx-auto mb-2' size={18} />
        </div>
        <div className=''>
        <h1 className="text-lg font-bold mb-2 text-primary-100">Our Address</h1>
        <p className="text-lg text-primary-100">
          123 Main St, Anytown, USA
        </p>
        </div>
        </div>
        <div className='flex justify-center'>
            <div className='mx-auto text-center rounded-full bg-primary-50 p-6'>
          <TfiLocationPin className='text-primary-100 mx-auto mb-2' size={18} />
        </div>
        <div className=''>
        <h1 className="text-lg font-bold mb-2 text-primary-100">Our Address</h1>
        <p className="text-lg text-primary-100">
          123 Main St, Anytown, USA
        </p>
        </div>
        </div>
        </div>
      </div>
      {/* <div className="border-l-2 h-40 border-primary-100 pb-5 mx-auto"></div> */}
      <div className="max-w-2xl mx-auto text-left mt-4 px-8 gap-4">
        <h1 className="text-lg font-bold mb-2 text-primary-50">Have Question ?</h1>
        <p className="text-4xl text-primary-100 font-bold mb-6">
          Send a Message
        </p>
        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <InPut
            variant={errors.name ? 'primary' : 'default'}
            placeholder={'Name'}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {
            errors.name && <span className="text-red-500">{errors.name}</span>
          }
          <InPut
            variant={errors.email ? 'primary' : 'default'}
            placeholder={'Email'}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {
            errors.email && <span className="text-red-500">{errors.email}</span>
          }
          <InPut
            variant={errors.subject ? 'primary' : 'default'}
            placeholder={'subject'}
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          /> 
          {
            errors.subject && <span className="text-red-500">{errors.subject}</span>
          }
          <InPut
            type={'textarea'}
            placeholder={'Your Message'}
            className={'h-30'}
            name="message"
            value={formData.message}
            onChange={handleChange}
            variant= {errors.message? 'primary' : 'default'}
          />
          {
            errors.message && <span className="text-red-500">{errors.message}</span>
          }
          <Button
            label="Send Message"
            variant="primary"
            className="w-50"
            type="submit"
          />

        </form>
      </div>
    </div>
  )
}
