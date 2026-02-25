import { ArrowUpRight } from 'lucide-react';
import ProductOne from '../assets/product-one.jpg';
import ProductTwo from '../assets/product-two.jpg';
import ProductThree from '../assets/product-three.jpg';
import ProductFour from '../assets/product-four.jpg';
import ProductFive from '../assets/product-five.jpg';
import ProductSix from '../assets/product-six.jpg';

// Product data array
const topProducts = [
  { id: 1, image: ProductOne, name: 'Smart Device', price: '$99', bestSeller: false },
  { id: 2, image: ProductTwo, name: 'Tech Gadget', price: '$75', bestSeller: false },
  { id: 3, image: ProductThree, name: 'Innovative Tool', price: '$120', bestSeller: true },
];

const bottomProducts = [
  { id: 4, image: ProductFour, name: 'Gadget Pro', price: '$150', bestSeller: true },
  { id: 5, image: ProductFive, name: 'Smart Accessory', price: '$85', bestSeller: false },
  { id: 6, image: ProductSix, name: 'Advanced Device', price: '$110', bestSeller: true },
];

// ProductCard — reusable for every product
function ProductCard({ image, name, price, bestSeller }) {
  return (
    <div className="product-one">

      {/* Only show best-seller badge if bestSeller is true */}
      {bestSeller && (
        <div className="best-seller">best sale</div>
      )}

      <div className="product-placeholder">
        <img src={image} alt={name} />
      </div>

      <div className="product-info">
        <div className="product-content">
          <div className="product-name">{name}</div>
          <div className="product-price">{price}</div>
        </div>
      </div>

    </div>
  );
}

function ProductSection() {
  return (
    <div className="product-section">
      <div className="product-container">

        {/* Intro */}
        <div className="product-intro-section">
          <div className="product-body-heading">discover products</div>
          <div className="product-heading">
            Innovative solutions for your tech needs
          </div>
        </div>

        <div className="products-section">

          {/* Top Row */}
          <div className="top-section">
            {topProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                bestSeller={product.bestSeller}
              />
            ))}
          </div>

          {/* Bottom Row */}
          <div className="lower-section">
            {bottomProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                bestSeller={product.bestSeller}
              />
            ))}
          </div>

          {/* Button */}
          <div className="product-primary-btn-container">
            view all products
            <ArrowUpRight size={20} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductSection;