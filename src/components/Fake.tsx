// App.js
import React from "react";

export const Fake = () => {
  return (
    <div className="font-poppins bg-gray-100 text-gray-800">
      {/* Top Banner */}
      <div className="bg-black text-white text-sm py-2 text-center">
        Sign up and get 20% off your first order!{" "}
        <a href="#" className="underline">
          Sign Up Now
        </a>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between py-4">
          <div className="text-2xl font-bold">SHOP.CO</div>
          <nav className="space-x-6 hidden md:flex">
            <a href="#" className="hover:text-gray-600">
              Shop
            </a>
            <a href="#" className="hover:text-gray-600">
              On Sale
            </a>
            <a href="#" className="hover:text-gray-600">
              New Arrivals
            </a>
            <a href="#" className="hover:text-gray-600">
              Brands
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search for products..."
              className="border rounded px-2 py-1 hidden md:block"
            />
            <div className="space-x-4">
              <a href="#" className="text-gray-600">
                🛒
              </a>
              <a href="#" className="text-gray-600">
                👤
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 items-center gap-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Find Clothes That Matches Your Style
            </h1>
            <p className="text-gray-600 mb-6">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <a
              href="#"
              className="bg-black text-white px-6 py-2 rounded shadow"
            >
              Shop Now
            </a>
            <div className="mt-6 flex space-x-6">
              <div>
                <h2 className="text-2xl font-bold">200+</h2>
                <p className="text-sm text-gray-500">International Brands</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">2,000+</h2>
                <p className="text-sm text-gray-500">High-Quality Products</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">30,000+</h2>
                <p className="text-sm text-gray-500">Happy Customers</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/500x400"
              alt="Hero Image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="bg-gray-100 py-6">
        <div className="container mx-auto flex justify-around items-center space-x-4">
          <img
            src="https://via.placeholder.com/100x50"
            alt="Versace"
            className="h-12"
          />
          <img
            src="https://via.placeholder.com/100x50"
            alt="Zara"
            className="h-12"
          />
          <img
            src="https://via.placeholder.com/100x50"
            alt="Gucci"
            className="h-12"
          />
          <img
            src="https://via.placeholder.com/100x50"
            alt="Prada"
            className="h-12"
          />
          <img
            src="https://via.placeholder.com/100x50"
            alt="Calvin Klein"
            className="h-12"
          />
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">New Arrivals</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Product 1"
                className="w-full mb-4"
              />
              <h3 className="text-lg font-semibold">
                T-shirt with Tape Details
              </h3>
              <p className="text-gray-500 text-sm mb-2">⭐⭐⭐⭐⭐ 4.5/5</p>
              <p className="text-lg font-bold">$120</p>
            </div>
            {/* Repeat for more products */}
          </div>
          <div className="text-center mt-8">
            <a href="#" className="text-black underline">
              View All
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-4">SHOP.CO</h3>
            <p>
              We have clothes that suit your style and needs whether you shop
              for men, women, or teens.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Help</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Customer Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white p-2 w-full rounded mb-2"
              />
              <button className="bg-white text-black px-4 py-2 w-full rounded">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};
