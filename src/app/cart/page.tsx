"use client";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast"; 

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCartItems);
  }, []);

  const handleRemoveItem = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.error(`Product removed from the cart!`); 
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mx-auto py-8 max-w-screen-xl px-12">
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[400px] px-4 py-8 bg-background text-center">
          <div className="mb-4">
            <ShoppingCart className="h-24 w-24 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-4 max-w-md">
            Looks like you haven't added anything to your cart yet. Start
            shopping to fill it up!
          </p>
          <a href="/">
          <Button>Start Shopping</Button>
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 dark:bg-[#30303080] backdrop-blur-[15px] fill-[rgba(48,48,48,0.50)] p-6 rounded-lg shadow-md overflow-y-auto max-h-[80vh]">
            <h2 className="text-lg font-semibold mb-4">All Courses</h2>
            <ul className="space-y-4">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800 shadow-sm rounded-xl p-4 flex justify-between items-center"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-28 h-20 object-cover rounded-md"
                    />
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p>${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(index)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-lg shadow-md sticky top-0 self-start dark:bg-[#30303080] backdrop-blur-[15px] fill-[rgba(48,48,48,0.50)]">
            <h2 className="text-lg font-semibold mb-4">Price Details</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Total Courses</span>
                <span>{cartItems.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Price</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={() =>
                  toast.error("There is an issue with purchasing courses")
                }
                className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-md"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
