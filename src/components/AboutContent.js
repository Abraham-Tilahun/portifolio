import React from 'react'
import { Link } from 'react-router-dom'
import './AboutContentStyles.css'
import reac from '../assets/react.avif';
import reac1 from "../assets/react2.avif";
const AboutContent = () => {
  return (
		<div className="about">
			<div className="left">
				<h1>Who am I?</h1>
				<p>
					I'm a react front-end develper. I create responsive secure websites
					for my clients.
				</p>
				<Link to="/contact">
					<button className="btn">contact</button>
				</Link>
			</div>
			<div className="right">
				<div className="img-container">
					<div className="img-stack-top">
						<img src={reac} className="img" alt="true" />
					</div>
					<div className="img-stack-bottom">
						<img src={reac1} className="img" alt="true" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutContent
