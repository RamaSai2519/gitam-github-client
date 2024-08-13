import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li><Link className="text-white" to="/">Home</Link></li>
        <li><Link className="text-white" to="/resources">Resources</Link></li>
        <li><Link className="text-white" to="/team">Team</Link></li>
        <li><Link className="text-white" to="/gallery">Gallery</Link></li>
        <li><Link className="text-white" to="/projects">Projects</Link></li>
        <li><Link className="text-white" to="/testimonials">Testimonials</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
