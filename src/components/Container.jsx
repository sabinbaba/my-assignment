import Button from "./Button"

export default function Container() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px] md:h-[800px]">
        <img
          src="https://i.pinimg.com/1200x/8a/f3/0b/8af30b073ba2d3686b53c494577194f3.jpg"
          alt="Workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-6xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 md:mb-4">
              The Best WorkSpace in Kigali
            </h1>

            <div className="flex flex-wrap justify-center gap-1 md:gap-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
              <span className="text-primary-50">Professional</span>
              <span className="text-primary-200">, Creative,</span>
            </div>

            <div className="flex flex-wrap justify-center gap-1 md:gap-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              <span className="text-primary-200">Flexible, Scalable</span>
              <span className="text-primary-50">Workspace</span>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-gray-100 max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-4 md:mb-6 px-2">
              Discover your ideal workspace with us. Work smart, not hard, in our fully-equipped office spaces. Elevate
              your business with flexible solutions tailored to your needs. Find your perfect office today!
            </p>

            <Button label="Explore" variant="primary" className="text-sm md:text-base px-6 py-3" />
          </div>
        </div>
      </div>

      {/* Offer Section */}
      <div className="flex flex-col justify-center items-center px-4 md:px-6 mt-8 md:mt-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-100 mb-4 max-w-4xl">
          We Offer Creative Working Environments
        </h2>
        <p className="text-base md:text-lg text-primary-100 max-w-xl px-4">
          Find your perfect workspace. Choose from versatile options tailored to your needs.
        </p>
      </div>
    </div>
  )
}