import { useState } from 'react'
import Header from './components/header'
import './App.css'
import { motion } from "framer-motion"

function App() {

  return (
    <body>
      <Header />
      <div className='section' >
        <h1>1. Framer Motion</h1>
        <section>
          <motion.div>
            <div className="quadrado"></div>
          </motion.div>
          <motion.div>
            <div className="circulo"></div>
          </motion.div>
        </section>
      </div>
    </body>
  )
}

export default App
