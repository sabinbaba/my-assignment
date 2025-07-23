import React from "react";
import Button from "./Button";

const variantClasses = {
  primary: "text-primary-50 hover:bg-primary-300 bg-primary-200",
  secondary: "bg-gray-500 hover:bg-gray-600",
};

export default function () {
  return (
   <div>
     <div className="h-[400px] relative">
      <img
        src="https://i.pinimg.com/736x/23/0e/0f/230e0f342d9b4e8d31d8cae95e3e2288.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl  mb-2">The Best WorkSpace in Kigali</h1>
          <div className="flex justify-center">
            <h1 className="text-5xl font-bold mb-2 text-primary-50">
              Professional
            </h1>
            <h1 className="text-5xl font-bold mb-2 text-primary-200">
              , Creative,
            </h1>
          </div>
          <div className="flex justify-center">
            <h1 className="text-5xl font-bold mb-4 text-shadow-primary-200">
              Flexible, Scalable
            </h1>
            <h1 className="text-5xl font-bold mb-4 text-primary-50">
              Workspace
            </h1>
          </div>
          <div className="flex justify-center text-align-center max-w-2xl mx-auto">
            <p>
              <p>
                Discover your ideal workspace with us. Work smart, not hard in
                our fully-equipped office spaces. Elevate your business with
                flexible solutions tailored to your needs. Find your perfect
                office today!
              </p>
            </p>
          </div>
          <Button label="Explore" variant="primary" />
        </div>
      </div>{" "}
    </div>
    <div className="flex flex-col justify-center items-center px-10 mt-6">
      <h1 className="text-5xl font-bold text-primary-100 text-center justify-center mb-6">We Offer creative working <br />
environments</h1>
      <p className="text-lg text-primary-100 text-center justify-center mb-6">
        Find your perfect workspace. Choose from versatile options <br />
tailored to your needs.
      </p>
    </div>
   </div>
  );
}
