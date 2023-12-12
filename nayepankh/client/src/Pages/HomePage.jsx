import React from 'react'
import NavBar from "../components/NavBar"
import Background from "../components/Background"
import About from "../components/About"

import Crausel from "../components/Crausel"
import JoinTeam from "../components/JoinTeam"
import Footer from "../components/Footer"
import ChatBot from "../components/ChatBot"
const HomePage = () => {
  return (
    <div>
<NavBar />
<Background/>
<About />
<ChatBot/>
<Crausel />
<JoinTeam/>
<Footer/>
    </div>
  )
}

export default HomePage;