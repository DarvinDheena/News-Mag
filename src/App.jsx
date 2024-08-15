import React, { useEffect, useState } from 'react' ;
import Navbar from './components/Navbar';
import NewsMag from './components/NewsMag';
import newsImage from '../src/assets/news.jpg'
import business from '../src/assets/business.jpeg'
import science from '../src/assets/science.jpeg'
import entertainment from '../src/assets/entertainment.jpeg'
import sports from '../src/assets/sports.jpg'
import health from '../src/assets/health.jpg'
import technology from '../src/assets/technology.jpeg'



function App() {
  const [ category , setCategory ] = useState("general"); 
  const [ image , setImage ] = useState(newsImage)

  return (
    <div>
      <Navbar setCategory = { setCategory } setImage={ setImage }/>
      <NewsMag category = { category } image = { image }/>
    </div>
  )
}

export default App ;