import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./NavBar.css"
const Crausel = () => {
  return (
	<div className='top'>
 <Carousel>
      <Carousel.Item className='fi'>
        <img  className='image'    src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YKbL494Mv8Ip3qgy/nyomtatott-184780375-AVLW214Gz2IpXNn4.jpg'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='fi'>
        <img  className='image' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YKbL494Mv8Ip3qgy/nyomtatott-184780375-dWxpDB9gXRuoxvrv.jpg'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='fi'>
       <img  className='image' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YKbL494Mv8Ip3qgy/nyomtatott-184780375-mP4wg2o0j3Uv1ggM.jpg'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>
  )
}

export default Crausel