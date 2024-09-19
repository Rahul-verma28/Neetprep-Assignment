"use client";

import { ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./dark-light";
// import { SideBar } from "./SideBar";
import neetPrepLogo from "@/public/neetpreplogo.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { SideBar } from "./SideBar";
import { Input } from "./ui/input";

export default function Header() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCartItems);
  }, [cartItems]);
  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-black shadow-xl backdrop-blur-3xl dark:shadow-gray-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 max-w-screen-xl">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center hover:underline">
            <Image
              src={neetPrepLogo}
              width={100}
              height={100}
              alt="Neet Prep Logo"
            />
            <span className="font-bold text-lg md:text-xl dark:text-white">
              E-Shop
            </span>
          </a>

          {/* Main navigation - hidden on small screens */}
          <nav className="hidden lg:flex space-x-6">
            <Link 
              href="/cart"
              className="text-sm font-bold text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Products
            </Link>
            <Link
              href="/"
              className="text-sm font-bold text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/"
              className="text-sm font-bold text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Deals
            </Link>
          </nav>
        </div>

        <div className="flex items-center md:space-x-2">
          <div className="hidden sm:block w-full max-w-xs mr-1">
            <Input type="search" placeholder="Search..." className="w-full" />
          </div>
          <Button variant="ghost" size="icon" className="p-2">
            <User className="h-5 w-5 dark:text-white" />
            <span className="sr-only">Account</span>
          </Button>
          <a href="/cart">
            <Button  variant="ghost" size="icon" className="p-2 relative">
              <ShoppingCart id="cart-icon" className="h-5 w-5 dark:text-white" />
              {cartItems.length > 0 && (
                <span className=" absolute top-0 right-0">
                  {cartItems.length}
                </span>
              )}
            </Button>
          </a>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
