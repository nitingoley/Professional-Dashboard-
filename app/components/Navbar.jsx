import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">My Dashboard</h1>
      <ul className="flex gap-4">
        <li>
          <a href="#profile">Profile</a>
        </li>
        <li>
          <a href="#academics">Academics</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#extras">Extras</a>
        </li>
      </ul>
    </nav>
  );
}
