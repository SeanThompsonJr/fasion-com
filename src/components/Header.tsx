import React from "react";
import Logo from "../assets/Logo.png";
import hamIcon from "../assets/hamburger-icon.png";
export default function Header() {
  return (
    <header>
      <section className=" bg-black text-white text-center text-[12px]  font-thin font-satoshi p-1">
        Sign up and get 20% off to your first order.
        <a href="#" className="underline text-white px-1 font-normal">
          Sign Up Now
        </a>
      </section>
      <section className="header-content flex justify-between bg-green-200">
        <div className="flex gap-4 px-3 py-4">
          <img className="" src={hamIcon} alt="" />
          <img className="" src={Logo} alt="" />
        </div>
        <div className="flex gap-4 px-3 py-4">
          <span>🔎</span>
          <span>🛒</span>
          <span>🧑</span>
        </div>
      </section>
    </header>
  );
}
