import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const About = () => {
  return (
    <>
    <Navbar />
    <div className=" bg-custom-bg  bg-cover bg-center flex ">
        <h1 className='text-5xl text-white font-bold p-[7%]'>About Plate Smart</h1>
      </div>
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Hero Section */}
      <section className="bg-white shadow-md p-8 rounded-lg mb-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          About Plate Smart
        </h1>
        <p className="text-gray-600 text-center text-lg max-w-3xl mx-auto">
          At Plate Smart, we are dedicated to conserve the food wasted by putting it to a better use by offering it to the people who will need it or organizations who can use it. This is an initiative taken to conserve food and try maximum to use it rather than wasting the gift given from our mother Earth to us.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="bg-white shadow-md p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
          Our Mission
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto text-center">
        At Plate Smart, our mission is to combat food waste by redirecting surplus food to those in need. We believe that every meal is a gift from nature and should be cherished. Through collaboration with individuals, businesses, and organizations, we strive to ensure that no food goes to waste, turning excess into sustenance for those who need it most. Together, we can foster a sustainable future where food is valued and shared responsibly.
                </p>
      </section>

      {/* Meet the Team Section */}
      <section className="bg-white shadow-md p-8 rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Meet the Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-gray-200 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-700">Srujana Deshpande</h3>
            <p className="text-gray-500">CEO and UI Designer</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-gray-200 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-700">Yogeshwari R</h3>
            <p className="text-gray-500">UI/UX Designer</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-gray-200 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-700">Simon Leo Alexander</h3>
            <p className="text-gray-500">Chief Developer</p>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-700">Shivarama R</h3>
            <p className="text-gray-500">Chief Developer</p>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-700">Bhaskar</h3>
            <p className="text-gray-500">UI/UX Designer</p>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-700">Nirvan M</h3>
            <p className="text-gray-500">Chief Developer</p>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  )
}
