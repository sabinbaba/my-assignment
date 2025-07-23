// import React from "react";
// import Button from "./Button";

// export default function Aboutus() {
//   return (
//     <div>
//       <div className="flex justify-center items-center px-12 mb-6 rounded-full text-primary-50 gap-2">
//         <div className="h-6 w-6 text-primary-50 rounded-full border-1 text-center">
//           <button type="radio" className="h-4.5 w-4.5 text-primary-50 rounded-full border-1 bg-primary-50 text-center ">
//         </button>
//         </div>
//         <div className="h-6 w-6 text-primary-50 rounded-full border-1 text-center">

//         </div>
//       </div>
//       <div className="flex justify-center items-center px-12 mb-6 ">
//       <div className="max-w-2xl mx-auto text-left px-10">
//         <h1 className="text-lg font-bold mb-4 text-primary-50">About Us</h1>
//         <p className="text-4xl text-primary-100 font-bold">
//           We offer creative working environments that suit your business
//         </p>
//       </div>
//       <div className="border-l-2 h-40 border-primary-100 pb-5 mx-auto"></div>
//       <div className="max-w-2xl mx-auto text-left mt-4 px-10">
//         <p className="text-lg text-primary-100">
//           Lorem ipsum dolor sit amet consectetur adipiscing elit torquent,
//           conubia leo rutrum praesent dui turpis lobortis, vulputate
//           pellentesque tristique primis cum tincidunt placerat maecenas, velit
//           metus fermentum eget
//         </p>
//       </div>
//     </div>
//     </div>
//   );
// }


export default function Aboutus() {
  return (
    <div className="py-8 md:py-12">
      <div className="flex justify-center items-center px-4 md:px-12 mb-6">
        <div className="flex gap-2 text-primary-50">
          <div className="h-6 w-6 text-primary-50 rounded-full border border-primary-50 flex items-center justify-center">
            <div className="h-3 w-3 bg-primary-50 rounded-full"></div>
          </div>
          <div className="h-6 w-6 text-primary-50 rounded-full border border-primary-50"></div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center px-4 md:px-12 mb-6 gap-8">
        <div className="max-w-2xl text-center lg:text-left px-4 md:px-10">
          <h1 className="text-lg font-bold mb-4 text-primary-50">About Us</h1>
          <p className="text-2xl sm:text-3xl md:text-4xl text-primary-100 font-bold">
            We offer creative working environments that suit your business
          </p>
        </div>

        <div className="hidden lg:block border-l-2 h-40 border-primary-100 mx-8"></div>
        <div className="lg:hidden border-t-2 w-40 border-primary-100 my-4"></div>

        <div className="max-w-2xl text-center lg:text-left px-4 md:px-10">
          <p className="text-base md:text-lg text-primary-100">
            Lorem ipsum dolor sit amet consectetur adipiscing elit torquent, conubia leo rutrum praesent dui turpis
            lobortis, vulputate pellentesque tristique primis cum tincidunt placerat maecenas, velit metus fermentum
            eget
          </p>
        </div>
      </div>
    </div>
  )
}