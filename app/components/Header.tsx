import React from "react";
import Link from "next/link";
import { bonheurRoyale, playfairDisplay } from "../utils/fonts";

const Header = () => {
  return (
    <header className="bg-base-100">
      <div className="flex justify-center py-1 bg-yellow-200">
        <span className="animate-pulse">🚧 UNDER CONSTRUCTION 🚧</span>
      </div>
      <h1
        className={`text-5xl md:text-7xl text-center m-4 mb-0 ${bonheurRoyale.className}`}
      >
        <Link href="/">Tricia Weds Amit</Link>
      </h1>
      <div className={`navbar justify-center ${playfairDisplay.className}`}>
        <ul className="primary-content menu menu-horizontal px-1 text-md">
          <li>
            <Link href="/our-story">Our story</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/RSVP">RSVP</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
