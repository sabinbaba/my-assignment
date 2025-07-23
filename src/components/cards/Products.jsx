// import React from 'react'

// export default function Products({
//     name,
//     image,
//     description,
//     className,
//     children
// }) {
//   return (
//       <div className="bg-slate-100/80 flex flex-col  border border-neutral-400  rounded-md  w-100 h-110 items-center">
//       <img src={image} alt="" className="w-full h-60 object-cover rounded-sm" />

//       <div className="flex flex-col gap-3 px-7 py-3">
//         <span className="items-center text-center justify-between">
//           <h1 className="text-primary-50 font-bold text-center flex flex-col ">
//             {name} 
//              <hr className='border-t-3 border-primary-50 mx-auto w-15 rounded-md'/>
//           </h1>
//         </span>
//         {/* Description text */}
//         <span>
//           <p className="text-sm text-center text-black">{description}</p>
//         </span>
//         <h1 className='text-primary-70 font-bold text-[16px] text-center flex flex-col '>Learn More
// </h1>
//       </div>
//       <div className={className}>{children}</div>
//     </div>
//   );
// }


export default function Products({ name, image, description, className, children }) {
  return (
    <div className="bg-slate-100/80 flex flex-col border border-neutral-400 rounded-md w-full h-auto items-center overflow-hidden hover:shadow-lg transition-shadow">
      <img src={image || "/placeholder.svg"} alt={name} className="w-full h-48 md:h-60 object-cover" />

      <div className="flex flex-col gap-3 px-4 md:px-7 py-4 md:py-6 flex-grow">
        <div className="text-center">
          <h1 className="text-primary-50 font-bold text-lg md:text-xl text-center mb-2">{name}</h1>
          <hr className="border-t-2 border-primary-50 mx-auto w-12 md:w-15 rounded-md mb-3" />
        </div>

        <p className="text-sm md:text-base text-center text-black flex-grow leading-relaxed">{description}</p>

        <div className="mt-4">
          <h1 className="text-primary-50 font-bold text-sm md:text-base text-center hover:underline cursor-pointer">
            Learn More
          </h1>
        </div>
      </div>
      <div className={className}>{children}</div>
    </div>
  )
}