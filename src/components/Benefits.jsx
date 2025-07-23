import { RxLayers } from "react-icons/rx"

export default function Benefits() {
  return (
    <div className="py-8 md:py-12">
      <div className="flex flex-col justify-center items-center px-4 md:px-10 mt-6">
        <h1 className="text-lg md:text-xl mb-2 text-primary-50">Your Benefits</h1>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-primary-100 text-center">Why Choose Us</h1>
        <p className="text-sm md:text-base text-primary-100 text-center max-w-3xl mb-8 md:mb-12">
          Unleash your productivity with our premium workspace solutions. Elevate your work game and join the winning
          team today.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Original Layout: Left Column - Center Image - Right Column */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center justify-center">
          {/* Left Column - 3 Benefits */}
          <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-auto">
            <div className="flex flex-col justify-center items-center bg-secondary-50 h-48 md:h-60 w-full lg:w-70 p-4 md:p-6">
              <div className="mx-auto text-center rounded-full bg-primary-50 p-4 md:p-6 mb-3">
                <RxLayers className="text-2xl md:text-4xl text-white" />
              </div>
              <h1 className="text-lg md:text-xl lg:text-2xl text-primary-100 font-bold mb-2 text-center">
                Creative Space
              </h1>
              <p className="text-xs md:text-sm text-primary-100 text-center px-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>

            <div className="flex flex-col justify-center items-center bg-secondary-50 h-48 md:h-60 w-full lg:w-70 p-4 md:p-6">
              <div className="mx-auto text-center rounded-full bg-primary-50 p-4 md:p-6 mb-3">
                <RxLayers className="text-2xl md:text-4xl text-white" />
              </div>
              <h1 className="text-lg md:text-xl lg:text-2xl text-primary-100 font-bold mb-2 text-center">
                Flexible Hours
              </h1>
              <p className="text-xs md:text-sm text-primary-100 text-center px-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>

            <div className="flex flex-col justify-center items-center bg-secondary-50 h-48 md:h-60 w-full lg:w-70 p-4 md:p-6">
              <div className="mx-auto text-center rounded-full bg-primary-50 p-4 md:p-6 mb-3">
                <RxLayers className="text-2xl md:text-4xl text-white" />
              </div>
              <h1 className="text-lg md:text-xl lg:text-2xl text-primary-100 font-bold mb-2 text-center">
                Modern Equipment
              </h1>
              <p className="text-xs md:text-sm text-primary-100 text-center px-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center my-6 lg:my-0">
            <div className="w-full max-w-md lg:w-80 xl:w-96">
              <img
                src="https://i.pinimg.com/736x/d6/fb/2a/d6fb2aab84857e583e2d807363b6cfe1.jpg"
                alt="Workspace"
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Column - 3 Benefits */}
          <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-auto">
            <div className="flex flex-col justify-center items-center bg-secondary-50 h-48 md:h-60 w-full lg:w-70 p-4 md:p-6">
              <div className="mx-auto text-center rounded-full bg-primary-50 p-4 md:p-6 mb-3">
                <RxLayers className="text-2xl md:text-4xl text-white" />
              </div>
              <h1 className="text-lg md:text-xl lg:text-2xl text-primary-100 font-bold mb-2 text-center">Networking</h1>
              <p className="text-xs md:text-sm text-primary-100 text-center px-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>

            <div className="flex flex-col justify-center items-center bg-secondary-50 h-48 md:h-60 w-full lg:w-70 p-4 md:p-6">
              <div className="mx-auto text-center rounded-full bg-primary-50 p-4 md:p-6 mb-3">
                <RxLayers className="text-2xl md:text-4xl text-white" />
              </div>
              <h1 className="text-lg md:text-xl lg:text-2xl text-primary-100 font-bold mb-2 text-center">
                Professional Support
              </h1>
              <p className="text-xs md:text-sm text-primary-100 text-center px-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>

            <div className="flex flex-col justify-center items-center bg-secondary-50 h-48 md:h-60 w-full lg:w-70 p-4 md:p-6">
              <div className="mx-auto text-center rounded-full bg-primary-50 p-4 md:p-6 mb-3">
                <RxLayers className="text-2xl md:text-4xl text-white" />
              </div>
              <h1 className="text-lg md:text-xl lg:text-2xl text-primary-100 font-bold mb-2 text-center">
                Prime Location
              </h1>
              <p className="text-xs md:text-sm text-primary-100 text-center px-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}