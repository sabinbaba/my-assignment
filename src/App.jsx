import NavBar from "./components/NavBar"
import Container from "./components/Container"
import Products from "./components/cards/Products"
import Aboutus from "./components/AboutUs"
import Benefits from "./components/Benefits"
import Mission from "./components/Mission"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import QuickLinks from "./components/QuickLinks"

function App() {
  const productData = [
    {
      id: 1,
      name: "Renting Offices",
      image: "https://i.pinimg.com/736x/d1/36/7f/d1367f64f6a72d0dbf6ced83dd5fe712.jpg",
      description:
        "Office tools are software applications designed to enhance productivity and streamline tasks in a professional setting. They typically include word processors, spreadsheets, presentation software, email clients, and database management systems",
    },
    {
      id: 2,
      name: "Coffee Shop",
      image: "https://i.pinimg.com/1200x/8a/c6/aa/8ac6aa1e7e55c6d234524bcad831d4f5.jpg",
      description:
        "A coffee shop is a place where people can relax, socialize, work, or simply enjoy a cup of coffee and other refreshments. They offer a variety of coffee drinks, pastries, and sometimes light meals. ",
    },
    {
      id: 3,
      name: "Private event Space",
      image: "https://i.pinimg.com/736x/5c/cc/ae/5cccaeb47b136e49aaa90b37d87832cf.jpg",
      description:
        "A private event space is a dedicated area designed for hosting events such as parties, meetings, and conferences. These spaces often come with amenities like catering services, audio-visual equipment, and customizable layouts to suit various event needs.",
    },
  ]

  return (
    <div>
      <NavBar />
      <Container />
      <div className="px-4 md:px-8 lg:px-12 py-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {productData.map((product) => (
            <Products key={product.id} name={product.name} image={product.image} description={product.description} />
          ))}
        </div>
      </div>
      <Aboutus />
      <Benefits />
      <Mission />
      <ContactUs />
      <QuickLinks />
      <Footer />
    </div>
  )
}

export default App