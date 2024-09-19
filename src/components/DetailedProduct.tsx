import { motion } from "framer-motion";
import { Star, X } from "lucide-react";
import { useState, useRef } from "react";
import { ProductsCarousel } from "./Carousel";
import toast from "react-hot-toast"; // Import toast

const DetailedView = ({ product, onClose }: any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFlying, setIsFlying] = useState(false); // State to manage flying animation
  const productImageRef = useRef(null); // Ref for the product image

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");

    // Check if product already exists in the cart
    const isProductInCart = cartItems.some(
      (item: any) => item.id === product.id
    );

    if (isProductInCart) {
      toast.error(`${product.name} is already in the cart!`);
    } else {
      const updatedCart = [...cartItems, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      toast.success(`${product.name} has been added to the cart!`);

      // Trigger the fly-to-cart animation
      flyToCartAnimation();
    }
  };

  const flyToCartAnimation = () => {
    const productImage = productImageRef.current;
    const cartIcon = document.getElementById("cart-icon"); // Assuming your cart icon has this ID
  
    if (productImage && cartIcon) {
      const productRect = productImage.getBoundingClientRect();
  
      // Calculate top-right corner of the viewport
      const viewportWidth = window.innerWidth;
      const topRightCornerX = viewportWidth - 100; // Adjust this value to account for padding/margin
      const topRightCornerY = -100; // Fixed distance from the top (adjust as needed)
  
      const flyImage = document.createElement("img");
      flyImage.src = product.images[currentImageIndex];
      flyImage.classList.add("flying-product");
  
      flyImage.style.position = "fixed";
      flyImage.style.left = `${productRect.left}px`;
      flyImage.style.top = `${productRect.top}px`;
      flyImage.style.width = `${productRect.width}px`;
      flyImage.style.height = `${productRect.height}px`;
      flyImage.style.zIndex = "1000";
      document.body.appendChild(flyImage);
  
      const deltaX = topRightCornerX;
      const deltaY = topRightCornerY - productRect.top;
  
      // Calculate the intermediate step to give the image a 75-degree upward arc
      const topOffset = -150; // Adjust this value to control how high the image goes (this simulates the arc)
  
      flyImage.animate(
        [
          // Initial position
          { transform: `translate(0, 0)` },
          // Intermediate step for the 75-degree upward arc
          {
            transform: `translate(${deltaX * 0.5}px, ${
              deltaY * 0.5 + topOffset
            }px) scale(0.7)`,
          },
          // Final position at the top-right corner
          {
            transform: `translate(${deltaX}px, ${deltaY}px) scale(0)`,
          },
        ],
        {
          duration: 1000, // Adjust the duration as needed
          easing: "ease-in-out",
        }
      ).onfinish = () => {
        setIsFlying(false);
        flyImage.remove(); // Remove the image after animation
      };
    }
  };
  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.2, opacity: 0 }}
        className="bg-[#30303080] backdrop-blur-[15px] fill-[rgba(48,48,48,0.50)] p-6 rounded-lg max-w-3xl w-full mx-4 relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-300 hover:text-white">
          <X size={24} />
        </button>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative w-full md:w-1/2">
            <img
              ref={productImageRef} // Ref for the product image
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-80 h-64 md:h-88 object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-white">
            <h2 className="text-2xl font-bold mb-4 ">{product.name}</h2>
            <div className="flex items-center justify-between">
              <p className="text-xl mb-4">${product.price.toFixed(2)}</p>
              <div className="flex items-center space-x-1 pr-5">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="text-sm">{product.rating}</span>
              </div>
            </div>
            <p className="text-gray-200 mb-6">{product.description}</p>
            <div className="flex gap-4">
              <a href="/cart">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                  Shop now
                </button>
              </a>
              <button
                onClick={handleAddToCart}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <ProductsCarousel
          product={product.images}
          setCurrentImageIndex={setCurrentImageIndex}
        />
      </motion.div>
    </motion.div>
  );
};

export default DetailedView;
