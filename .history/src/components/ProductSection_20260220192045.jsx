import React from 'react'
import { Zap } from 'lucide-react';
import ProductCard from '../assets/product-one.jpg'
import ProductCard2 from '../assets/product-two.jpg'
import ProductCard3 from '../assets/product-three.jpg'
import ProductCard4 from '../assets/product-four.jpg'
import ProductCard5 from '../assets/product-five.jpg'
import ProductCard6 from '../assets/product-six.jpg'






function ProductSection() {
  return (
 
  <div class="product-section">

    <div class="product-container">
      <div class="product-intro-section">
        <div class="product-body-heading">
          discover products
        </div>
        <div class="product-heading">
          Innovative solutions for your tech needs
        </div>
      </div>


      <div class="products-section">

        <div class="top-section">
          <div class="product-one">
            <div class="product-placeholder">
              <img src={ProductCard} alt=""></img>

            </div>
            <div class="product-info">
              <div class="product-content">
                <div class="product-name">
                  Smart Device
                </div>
                <div class="product-price">
                  $99
                </div>
              </div>
            </div>
          </div>
          <div class="product-one">
            <div class="product-placeholder">
              <img src={ProductCard2} alt=""></img>

            </div>
            <div class="product-info">
              <div class="product-content">
                <div class="product-name">
                  tech gadget
                </div>
                <div class="product-price">
                  $75
                </div>
              </div>
            </div>
          </div>
          <div class="product-one">
            <div class="best-seller">
              best sale
            </div>
            <div class="product-placeholder">
              <img src={ProductCard3} alt=""></img>

            </div>
            <div class="product-info">
              <div class="product-content">
                <div class="product-name">
                  innovative tool
                </div>
                <div class="product-price">
                  $120
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lower-section">
          <div class="product-one">
            <div class="best-seller">
              best sale
            </div>
            <div class="product-placeholder">
              <img src={ProductCard4} alt=""></img>

            </div>
            <div class="product-info">
              <div class="product-content">
                <div class="product-name">
                  gadget pro
                </div>
                <div class="product-price">
                  $150
                </div>
              </div>
            </div>
          </div>

          <div class="product-one">
            <div class="product-placeholder">
              <img src={ProductCard5} alt=""></img>

            </div>
            <div class="product-info">
              <div class="product-content">
                <div class="product-name">
                  Smart Accessory
                </div>
                <div class="product-price">
                  $85
                </div>
              </div>
            </div>
          </div>
          <div class="product-one">
            <div class="best-seller">
              best sale
            </div>
            <div class="product-placeholder">
              <img src={ProductCard6} alt=""></img>

            </div>
            <div class="product-info">
              <div class="product-content">
                <div class="product-name">
                  Advanced Device
                </div>
                <div class="product-price">
                  $110
                </div>
              </div>
            </div>

          </div>





        </div>

        <div class="product-primary-btn-container">
          view all <span className="dashicons dashicons-arrow-up-right-icon ">
            <Zap />
          </span>
        </div>





      </div>

    </div>


  </div>




  )
}

export default ProductSection
