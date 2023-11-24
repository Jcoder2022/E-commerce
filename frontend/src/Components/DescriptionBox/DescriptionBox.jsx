import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
          <div className="descriptionbox-nav-box">
            Description
          </div>
          <div className="descriptionbox-nav-box fade">
            Reviews (122)
          </div>
         
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitate users buying and selling of products or services over the internet.</p>
            <p>E-commerce websites display products, Each product has its own images, prices, colors and sizes.</p>
        </div>
    </div>
  )
}

export default DescriptionBox