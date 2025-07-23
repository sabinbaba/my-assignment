import React from "react";

export default function Mission() {
  return (
    <div className="h-[300px] relative">
      <img
        src="https://img.freepik.com/premium-photo/midnight-office-elegance-dark-office-interior-photo_960396-69814.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="flex justify-center">
            <h1 className="text-5xl font-bold mb-2 text-primary-50">Our </h1>
            <h1 className="text-5xl font-bold mb-2 text-primary-200">
              Mission
            </h1>
          </div>
          <p className="text-lg text-primary-200 text-center max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, mattis
            blandit odio felis aliquet montes turpis consequat, est sociosqu
            vitae id nec rutrum. Ornare dictumst et eget fames cursus vel
            penatibus quis posuere, ultrices fermentum libero pretium convallis
            pharetra
          </p>
          <div className="flex gap-9 justify-center mt-4 mx-auto">
            <hr className="border-t-8 border-primary-50  w-20 rounded-md" />
            <hr className="border-t-8 border-primary-200  w-20 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
