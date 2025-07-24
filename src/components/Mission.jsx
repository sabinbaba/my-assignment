export default function Mission() {
  return (
    <div className="relative h-[400px] md:h-[600px]">
      <img
        src="https://i.pinimg.com/736x/78/ea/f8/78eaf87ae3945760a46f1a857a82db90.jpg"
        alt="Mission Background"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 md:px-6 max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-4 md:mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-50">Our</h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-200">Mission</h1>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-primary-100 max-w-2xl mx-auto mb-6 md:mb-8 px-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, mattis blandit odio felis aliquet montes turpis
            consequat, est sociosqu vitae id nec rutrum. Ornare dictumst et eget fames cursus vel penatibus quis
            posuere, ultrices fermentum libero pretium convallis pharetra.
          </p>

          <div className="flex gap-4 md:gap-6 justify-center">
            <hr className="border-t-4 md:border-t-8 border-primary-50 w-16 md:w-20 rounded-md" />
            <hr className="border-t-4 md:border-t-8 border-primary-200 w-16 md:w-20 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}