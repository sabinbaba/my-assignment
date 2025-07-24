import { LuLayoutDashboard } from "react-icons/lu"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"

export default function QuickLinks() {
  return (
    <div className="py-8 md:py-12">
      <div className="flex justify-center items-center px-4 md:px-10 mb-8">
        <hr className="border-t-2 border-primary-50 w-full max-w-6xl rounded-md" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 md:gap-4 mb-4">
              <LuLayoutDashboard className="text-2xl md:text-3xl text-primary-50" />
              <h1 className="font-bold text-2xl md:text-3xl text-primary-100">Business</h1>
              <h1 className="font-bold text-2xl md:text-3xl text-primary-50">Cafe</h1>
            </div>

            <p className="text-base md:text-lg text-primary-100 mb-6 max-w-sm mx-auto md:mx-0">
              Discover your ideal workspace with us. Work smart, not hard in our fully-equipped office spaces.
            </p>

            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary-50 flex items-center justify-center hover:bg-primary-50 hover:text-white transition-colors"
              >
                <FaFacebookF className="text-primary-50 hover:text-white text-sm md:text-base" />
              </a>
              <a
                href="#"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary-50 flex items-center justify-center hover:bg-primary-50 hover:text-white transition-colors"
              >
                <FaTwitter className="text-primary-50 hover:text-white text-sm md:text-base" />
              </a>
              <a
                href="#"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary-50 flex items-center justify-center hover:bg-primary-50 hover:text-white transition-colors"
              >
                <FaLinkedinIn className="text-primary-50 hover:text-white text-sm md:text-base" />
              </a>
              <a
                href="#"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary-50 flex items-center justify-center hover:bg-primary-50 hover:text-white transition-colors"
              >
                <FaInstagram className="text-primary-50 hover:text-white text-sm md:text-base" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h1 className="font-bold text-xl md:text-2xl text-primary-100 mb-4">Quick Links</h1>
            <hr className="border-t-2 border-primary-50 w-32 md:w-40 rounded-md mb-4 mx-auto md:mx-0" />

            <div className="flex flex-col gap-3">
              <a href="#" className="text-primary-100 hover:text-primary-50 transition-colors">
                Home
              </a>
              <a href="#" className="text-primary-100 hover:text-primary-50 transition-colors">
                Space
              </a>
              <a href="#" className="text-primary-100 hover:text-primary-50 transition-colors">
                About
              </a>
              <a href="#" className="text-primary-100 hover:text-primary-50 transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h1 className="font-bold text-xl md:text-2xl text-primary-100 mb-4">Contact Us</h1>
            <hr className="border-t-2 border-primary-50 w-32 md:w-40 rounded-md mb-4 mx-auto md:mx-0" />

            <div className="flex flex-col gap-3 text-primary-100">
              <p>Location: Kigali, Rwanda</p>
              <p>Email: businesscafe@info.com</p>
              <p>Phone: +250783787817</p>
              <p>
                <a
                  href="https://www.google.com/maps?q=123+Business+St,+Kigali,+Rwanda"
                  className="text-primary-50 hover:underline break-words"
                >
                  Address: 123 Business St, Kigali, Rwanda
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}