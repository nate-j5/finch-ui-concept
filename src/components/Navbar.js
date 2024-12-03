"use strict";
import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="bg-F0EEF2 shadow-md p-4 flex justify-between items-center w-screen">
      <div className="flex items-center space-x-1">
        <div>
          <Image src="/assets/finch-logo.jpg" alt="Finch Logo" width={50} height={50} />
        </div>
        <h1 className="text-black text-sm font-light">Finch UI Concept</h1>
      </div>
      <div className="hidden md:flex space-x-6">
        <a
          className="text-black font-light text-sm hover:text-white transition"
          href="https://github.com/nate-j5/finch-ui-concept"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Code"
        >
          View Code ↗
        </a>
      </div>
    </nav>
  );
}

export default React.memo(Navbar);
