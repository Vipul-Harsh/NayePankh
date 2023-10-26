import React from 'react'
import About from '../components/About'
import Background from '../components/Background'
import Crausel from '../components/Crausel'
import Footer from '../components/Footer'
import JoinTeam from '../components/JoinTeam'
import NavBar from '../components/NavBar'

const HomePage = () => {
  return (
	<div>
<NavBar />
<Background/>
<About />
<Crausel />
<JoinTeam/>
<Footer/>

</div>
  )
}

export default HomePage