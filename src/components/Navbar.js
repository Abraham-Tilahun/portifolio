import React from 'react'
import "./NavbarStyles.css"
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from 'react';
const Navbar = () => {
	const [click, setClick] = useState(false);
	const [color, setColor] = useState(false);
	const changeColor = () => {
		if (window.scrollY >= 100) {
			setColor(true);
		} else {
			setColor(false);
		}
	};
		window.addEventListener("scroll", changeColor);
	
	const handleClick = () => setClick(!click);
  return (
		<div className={color? "header header-gb" : "header"}>
			<Link to="/">
				<h1>Portfolio</h1>
			</Link>
			<ul className={click? "nav-menu active" : " nav-menu "}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/project">Project</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
			<div className="humburger" onClick={handleClick}>
				{click ? (
					<FaTimes size={20} style={{ color: "#fff" }} />
				) : (
					<FaBars size={20} style={{ color: "#fff" }} />
				)}
			</div>
		</div>
	);
}

export default Navbar
