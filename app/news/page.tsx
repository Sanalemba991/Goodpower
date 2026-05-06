import React from 'react'
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import News from "./News"

function page() {
  return (
    <div>
      <Navbar />
      <News />
      <Footer />
    </div>
  )
}

export default page
