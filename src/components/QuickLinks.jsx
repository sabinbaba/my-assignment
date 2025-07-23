import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";


export default function QuickLinks() {
  return (
    <div>
      <div className="flex justify-center items-center px-10 mt-6">
        <hr className="border-t-2 border-primary-50  w-300 rounded-md" />
      </div>

      <div className="flex justify-center items-center px-10 mt-6">
        <div>
          <div className="flex items-center gap-4 px-12">
            <LuLayoutDashboard className="text-3xl text-primary-50" />
            <h1 className="font-bold text-3xl text-primary-100">Business</h1>
            <h1 className="font-bold text-3xl text-primary-50">Cafe</h1>
          </div>
          <div className="flex gap-4 flex-col max-w-2xl mx-auto text-left px-10">
            <p className="text-lg text-primary-100 mb-4 text-left">
              Discover your ideal workspace with us. Work <br />
              smart, not hard in our fully-equipped office <br />
              spaces.
            </p>
            <div className="flex gap-4 mt-4">
                              <a 
                href="#" 
                className="w-12 h-12 rounded-full border-2 border-primary-50 flex items-center justify-center hover:bg-primary-50 hover:text-white transition-colors"
              >
                <FaFacebookF className="text-primary-50 hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full border-2 border-primary-50 flex items-center justify-center hover:bg-primary-50 hover:text-white transition-colors"
              >
                <FaTwitter className="text-primary-50 hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full border-2 border-primary-50 flex items-center justify-center hover:bg-primary-50 hover:text-white transition-colors"
              >
                <FaLinkedinIn className="text-primary-50 hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full border-2 border-primary-50 flex items-center justify-center hover:bg-primary-50 hover:text-white transition-colors"
              >
                <FaInstagram className="text-primary-50 hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        <div>
            <div className="flex gap-4 flex-col max-w-2xl mx-auto text-left px-10">
                <h1 className="font-bold text-2xl text-primary-100">Quick Links</h1>
                <hr className="border-t-2 border-primary-50 w-40 rounded-md" />

            </div>
            <div className="flex gap-4 flex-col max-w-2xl mx-auto text-left px-10">
          <a href="#" className="text-primary-100 hover:underline">
            Home
          </a>
          <a href="#" className="text-primary-100 hover:underline">
            Space
          </a>
          <a href="#" className="text-primary-100 hover:underline">
            About
          </a>
            <a href="#" className="text-primary-100 hover:underline">
                Contact
            </a>
        </div>
        </div>
        <div className="flex gap-4 flex-col max-w-2xl mx-auto text-left px-10">
            <h1 className="font-bold text-2xl text-primary-100">Contact Us</h1>
            <hr className="border-t-2 border-primary-50 w-40 rounded-md" />
          <p>
            Location: Kigali, Rwanda
          </p>
            <p>
                Email: businesscafe@info.com
            </p>
            <p>
                Phone: +250783787817
            </p>
            <p>
                <a href="https://www.google.com/maps?q=123+Business+St,+Kigali,+Rwanda" className="text-primary-50 hover:underline">Address: 123 Business St, Kigali, Rwanda</a>
            </p>
        </div>
      </div>
    </div>
  );
}
