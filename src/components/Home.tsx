import React from 'react'
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
const Home = () => {
  return (
   <div id='home' className='flex flex-col'>
    <Navbar />

{/* Hero Section with Carousel */}
<section  className="pt-16">
  <Carousel />
</section>
   </div>
  )
}

export default Home